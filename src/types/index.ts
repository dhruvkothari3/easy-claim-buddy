export type SearchBy = 'id' | 'phone' | 'name';

export type Customer = {
  id: string;
  full_name: string;
  email?: string;
  phone_e164?: string;
  city?: string;
};

export type Plan = {
  id: string;
  external_plan_id: string;
  plan_name?: string;
  insurer_name?: string;
  start_date?: string;
  end_date?: string;
  status?: string;
};

export type SearchResult = {
  customers: Customer[];
  plans: Plan[];
  total: number;
};

export type AuthUser = {
  id: string;
  email: string;
  role: 'agent' | 'admin';
  token: string;
};