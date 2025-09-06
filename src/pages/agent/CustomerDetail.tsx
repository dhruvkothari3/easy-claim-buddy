import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  Copy,
  ArrowLeft,
  Filter,
  Search
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { Customer, Plan } from '@/types';
import { api } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export default function CustomerDetail() {
  const { id } = useParams<{ id: string }>();
  const [customer, setCustomer] = useState<Customer | null>(null);
  const [plans, setPlans] = useState<Plan[]>([]);
  const [filteredPlans, setFilteredPlans] = useState<Plan[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [insurerFilter, setInsurerFilter] = useState('all');

  const { user } = useAuth();
  const { toast } = useToast();

  useEffect(() => {
    if (id && user?.token) {
      loadCustomerData();
    }
  }, [id, user?.token]);

  useEffect(() => {
    filterPlans();
  }, [plans, searchQuery, statusFilter, insurerFilter]);

  const loadCustomerData = async () => {
    if (!user?.token || !id) return;

    try {
      setIsLoading(true);
      const [customerData, policiesData] = await Promise.all([
        api.getCustomer(id, user.token),
        api.getCustomerPolicies(id, user.token)
      ]);

      setCustomer(customerData);
      setPlans(policiesData.policies || []);
    } catch (error) {
      console.error('Failed to load customer data:', error);
      toast({
        title: "Error loading data",
        description: "Failed to load customer information. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const filterPlans = () => {
    let filtered = plans;

    // Search filter
    if (searchQuery) {
      filtered = filtered.filter(plan =>
        plan.external_plan_id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.plan_name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        plan.insurer_name?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    // Status filter
    if (statusFilter !== 'all') {
      filtered = filtered.filter(plan => plan.status === statusFilter);
    }

    // Insurer filter
    if (insurerFilter !== 'all') {
      filtered = filtered.filter(plan => plan.insurer_name === insurerFilter);
    }

    setFilteredPlans(filtered);
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: `${label} copied`,
      description: "Text copied to clipboard",
    });
  };

  const uniqueInsurers = Array.from(new Set(plans.map(p => p.insurer_name).filter(Boolean)));
  const uniqueStatuses = Array.from(new Set(plans.map(p => p.status).filter(Boolean)));

  if (isLoading) {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center justify-center h-64">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
          </div>
        </div>
      </div>
    );
  }

  if (!customer) {
    return (
      <div className="min-h-screen bg-muted/30 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center py-16">
            <h2 className="text-2xl font-bold text-foreground">Customer not found</h2>
            <p className="text-muted-foreground mt-2">The customer you're looking for doesn't exist.</p>
            <Link to="/agent/search">
              <Button className="mt-4">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Search
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 flex items-center gap-4">
          <Link to="/agent/search">
            <Button variant="outline" size="sm">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Search
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Customer Details</h1>
            <p className="text-muted-foreground">View customer information and policies</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Customer Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Customer Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Full Name</label>
                    <p className="text-lg font-semibold text-foreground">{customer.full_name}</p>
                  </div>

                  {customer.email && (
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Mail className="w-4 h-4" />
                          Email
                        </label>
                        <p className="text-foreground">{customer.email}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(customer.email!, 'Email')}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  )}

                  {customer.phone_e164 && (
                    <div className="flex items-center justify-between">
                      <div>
                        <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                          <Phone className="w-4 h-4" />
                          Phone
                        </label>
                        <p className="text-foreground">{customer.phone_e164}</p>
                      </div>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(customer.phone_e164!, 'Phone')}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  )}

                  {customer.city && (
                    <div>
                      <label className="text-sm font-medium text-muted-foreground flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        City
                      </label>
                      <p className="text-foreground">{customer.city}</p>
                    </div>
                  )}

                  <div>
                    <label className="text-sm font-medium text-muted-foreground">Customer ID</label>
                    <div className="flex items-center justify-between">
                      <p className="text-foreground font-mono">{customer.id}</p>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => copyToClipboard(customer.id, 'Customer ID')}
                      >
                        <Copy className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Policies */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Policies & Plans ({filteredPlans.length})</CardTitle>
                
                {/* Filters */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search policies..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                  
                  <Select value={insurerFilter} onValueChange={setInsurerFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Insurer" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Insurers</SelectItem>
                      {uniqueInsurers.map(insurer => (
                        <SelectItem key={insurer} value={insurer!}>{insurer}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  
                  <Select value={statusFilter} onValueChange={setStatusFilter}>
                    <SelectTrigger>
                      <SelectValue placeholder="Filter by Status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      {uniqueStatuses.map(status => (
                        <SelectItem key={status} value={status!}>{status}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </CardHeader>
              
              <CardContent>
                {filteredPlans.length === 0 ? (
                  <div className="text-center py-8">
                    <p className="text-muted-foreground">
                      {plans.length === 0 ? 'No policies found' : 'No policies match your filters'}
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {filteredPlans.map((plan, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Policy/Loan ID</label>
                            <div className="flex items-center gap-2">
                              <p className="font-mono text-sm">{plan.external_plan_id}</p>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(plan.external_plan_id, 'Policy ID')}
                              >
                                <Copy className="w-3 h-3" />
                              </Button>
                            </div>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Plan Name</label>
                            <p className="text-sm">{plan.plan_name || 'N/A'}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Insurer</label>
                            <p className="text-sm">{plan.insurer_name || 'N/A'}</p>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Period</label>
                            <p className="text-sm">
                              {plan.start_date ? new Date(plan.start_date).toLocaleDateString() : 'N/A'}
                              {plan.end_date && (
                                <> - {new Date(plan.end_date).toLocaleDateString()}</>
                              )}
                            </p>
                          </div>
                          
                          <div>
                            <label className="text-sm font-medium text-muted-foreground">Status</label>
                            <Badge 
                              variant={plan.status === 'Active' ? 'default' : 'secondary'}
                              className="mt-1"
                            >
                              {plan.status || 'Unknown'}
                            </Badge>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}