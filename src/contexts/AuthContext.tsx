import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthUser } from '@/types';

interface AuthContextType {
  user: AuthUser | null;
  login: (token: string, email: string, role: 'agent' | 'admin') => void;
  logout: () => void;
  isAuthenticated: boolean;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored token on mount
    const token = sessionStorage.getItem('auth_token');
    const email = sessionStorage.getItem('auth_email');
    const role = sessionStorage.getItem('auth_role') as 'agent' | 'admin';

    if (token && email && role) {
      setUser({
        id: email, // Using email as ID for simplicity
        email,
        role,
        token,
      });
    }
    setIsLoading(false);
  }, []);

  const login = (token: string, email: string, role: 'agent' | 'admin') => {
    sessionStorage.setItem('auth_token', token);
    sessionStorage.setItem('auth_email', email);
    sessionStorage.setItem('auth_role', role);

    const newUser: AuthUser = {
      id: email,
      email,
      role,
      token,
    };

    setUser(newUser);
  };

  const logout = () => {
    sessionStorage.removeItem('auth_token');
    sessionStorage.removeItem('auth_email');
    sessionStorage.removeItem('auth_role');
    setUser(null);
  };

  const value = {
    user,
    login,
    logout,
    isAuthenticated: !!user,
    isLoading,
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}