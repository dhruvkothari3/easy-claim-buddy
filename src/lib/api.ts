import { Customer, Plan, SearchBy, SearchResult } from '@/types';

const API_BASE_URL = import.meta.env.VITE_PUBLIC_API_BASE_URL || 'https://api.easyclaims.in';
const USE_MOCKS = import.meta.env.VITE_PUBLIC_USE_MOCKS === 'true';

// Mock data for development
const mockCustomers: Customer[] = [
  {
    id: '1',
    full_name: 'John Doe',
    email: 'john.doe@email.com',
    phone_e164: '+919876543210',
    city: 'Mumbai'
  },
  {
    id: '2',
    full_name: 'Jane Smith',
    email: 'jane.smith@email.com',
    phone_e164: '+919876543211',
    city: 'Delhi'
  },
  {
    id: '3',
    full_name: 'Raj Patel',
    email: 'raj.patel@email.com',
    phone_e164: '+919876543212',
    city: 'Bangalore'
  }
];

const mockPlans: Plan[] = [
  {
    id: '1',
    external_plan_id: 'POL001',
    plan_name: 'Health Insurance Premium',
    insurer_name: 'HDFC ERGO',
    start_date: '2024-01-01',
    end_date: '2024-12-31',
    status: 'Active'
  },
  {
    id: '2',
    external_plan_id: 'POL002',
    plan_name: 'Life Insurance',
    insurer_name: 'LIC India',
    start_date: '2024-01-01',
    end_date: '2025-12-31',
    status: 'Active'
  }
];

export class ApiError extends Error {
  constructor(public status: number, message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

export async function apiFetch(
  path: string,
  options: {
    method?: string;
    body?: any;
    token?: string;
  } = {}
) {
  const { method = 'GET', body, token } = options;

  if (USE_MOCKS) {
    return handleMockRequest(path, method, body);
  }

  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
  };

  if (token) {
    headers.Authorization = `Bearer ${token}`;
  }

  const response = await fetch(`${API_BASE_URL}${path}`, {
    method,
    headers,
    body: body ? JSON.stringify(body) : undefined,
  });

  if (response.status === 401) {
    // Redirect to login
    sessionStorage.removeItem('auth_token');
    window.location.href = '/agent/login';
    throw new ApiError(401, 'Unauthorized');
  }

  if (!response.ok) {
    throw new ApiError(response.status, `HTTP ${response.status}`);
  }

  return response.json();
}

// Mock API handlers
function handleMockRequest(path: string, method: string, body?: any) {
  return new Promise((resolve) => {
    setTimeout(() => {
      if (path === '/auth/login' && method === 'POST') {
        resolve({ token: 'mock_jwt_token_123' });
      } else if (path.startsWith('/customers/search')) {
        const url = new URL(`http://localhost${path}`);
        const by = url.searchParams.get('by') as SearchBy;
        const q = url.searchParams.get('q') || '';
        
        let results: Customer[] = [];
        if (by === 'name' && q) {
          results = mockCustomers.filter(c => 
            c.full_name.toLowerCase().includes(q.toLowerCase())
          );
        } else if (by === 'phone' && q) {
          results = mockCustomers.filter(c => 
            c.phone_e164?.includes(q)
          );
        } else if (by === 'id' && q) {
          const customer = mockCustomers.find(c => c.id === q);
          if (customer) {
            // Return plans for this customer
            resolve({
              plans: mockPlans,
              total: mockPlans.length
            });
            return;
          }
        }
        
        resolve({
          customers: results,
          total: results.length
        });
      } else if (path.match(/\/customers\/\d+$/)) {
        const id = path.split('/').pop();
        const customer = mockCustomers.find(c => c.id === id);
        resolve(customer || null);
      } else if (path.match(/\/customers\/\d+\/policies$/)) {
        resolve({
          policies: mockPlans,
          total: mockPlans.length
        });
      } else {
        resolve({ error: 'Not found' });
      }
    }, 300); // Simulate network delay
  });
}

export const api = {
  login: (credentials: { email: string; password: string }) =>
    apiFetch('/auth/login', {
      method: 'POST',
      body: credentials,
    }),

  searchCustomers: (by: SearchBy, query: string, token: string) =>
    apiFetch(`/customers/search?by=${by}&q=${encodeURIComponent(query)}`, {
      token,
    }),

  getCustomer: (id: string, token: string) =>
    apiFetch(`/customers/${id}`, { token }),

  getCustomerPolicies: (id: string, token: string) =>
    apiFetch(`/customers/${id}/policies`, { token }),
};