import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, User, Phone, CreditCard, ExternalLink } from 'lucide-react';
import { useDebounce } from '@/hooks/useDebounce';
import { useAuth } from '@/contexts/AuthContext';
import { SearchBy } from '@/types';
import { api } from '@/lib/api';
import { useToast } from '@/hooks/use-toast';

export default function AgentSearch() {
  const [searchBy, setSearchBy] = useState<SearchBy>('id');
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasSearched, setHasSearched] = useState(false);

  const { user } = useAuth();
  const { toast } = useToast();
  const debouncedQuery = useDebounce(query, 300);

  // Perform search when debounced query changes
  React.useEffect(() => {
    if (debouncedQuery && debouncedQuery.length > 2) {
      performSearch();
    } else {
      setResults([]);
      setHasSearched(false);
    }
  }, [debouncedQuery, searchBy]);

  const performSearch = async () => {
    if (!user?.token) return;
    
    setIsLoading(true);
    try {
      const response = await api.searchCustomers(searchBy, debouncedQuery, user.token);
      
      if (searchBy === 'id') {
        setResults(response.plans || []);
      } else {
        setResults(response.customers || []);
      }
      setHasSearched(true);
    } catch (error) {
      console.error('Search error:', error);
      toast({
        title: "Search failed",
        description: "Unable to perform search. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copied",
      description: "Text copied to clipboard",
    });
  };

  return (
    <div className="min-h-screen bg-muted/30 py-8">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground">Customer Search</h1>
          <p className="text-muted-foreground">Search for customers by ID, phone number, or name</p>
        </div>

        {/* Search Interface */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Search className="w-5 h-5" />
              Search Customers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs value={searchBy} onValueChange={(value) => setSearchBy(value as SearchBy)}>
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="id" className="flex items-center gap-2">
                  <CreditCard className="w-4 h-4" />
                  By ID
                </TabsTrigger>
                <TabsTrigger value="phone" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  By Phone
                </TabsTrigger>
                <TabsTrigger value="name" className="flex items-center gap-2">
                  <User className="w-4 h-4" />
                  By Name
                </TabsTrigger>
              </TabsList>

              <div className="mt-6">
                <Input
                  type="text"
                  placeholder={
                    searchBy === 'id' 
                      ? 'Enter Policy/Loan ID (e.g., POL001)' 
                      : searchBy === 'phone'
                      ? 'Enter 10-digit phone number'
                      : 'Enter customer name'
                  }
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="text-lg"
                />
              </div>

              {/* Search Tips */}
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <h4 className="font-medium text-sm mb-2">Search Tips:</h4>
                <ul className="text-xs text-muted-foreground space-y-1">
                  {searchBy === 'id' && (
                    <>
                      <li>• Enter complete Policy ID or Loan ID</li>
                      <li>• IDs are case-sensitive (e.g., POL001, not pol001)</li>
                    </>
                  )}
                  {searchBy === 'phone' && (
                    <>
                      <li>• Enter full 10-digit number without country code</li>
                      <li>• Numbers should be in format: 9876543210</li>
                    </>
                  )}
                  {searchBy === 'name' && (
                    <>
                      <li>• Enter at least 3 characters to search</li>
                      <li>• Partial names are supported</li>
                    </>
                  )}
                </ul>
              </div>
            </Tabs>
          </CardContent>
        </Card>

        {/* Loading State */}
        {isLoading && (
          <Card>
            <CardContent className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Searching...</p>
            </CardContent>
          </Card>
        )}

        {/* Results */}
        {hasSearched && !isLoading && (
          <Card>
            <CardHeader>
              <CardTitle>
                Search Results ({results.length})
              </CardTitle>
            </CardHeader>
            <CardContent>
              {results.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-muted-foreground mb-4">No results found</p>
                  <div className="text-sm text-muted-foreground">
                    {searchBy === 'id' && 'Try checking the Policy ID spelling or format'}
                    {searchBy === 'phone' && 'Ensure the phone number is complete and correct'}
                    {searchBy === 'name' && 'Try searching with different name variations'}
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {searchBy === 'id' ? (
                    // Plan Results
                    results.map((plan, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-6 gap-4 items-center">
                          <div>
                            <p className="font-semibold">Policy ID</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm">{plan.external_plan_id}</span>
                              <Button 
                                variant="ghost" 
                                size="sm"
                                onClick={() => copyToClipboard(plan.external_plan_id)}
                              >
                                Copy
                              </Button>
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">Plan Name</p>
                            <p className="text-sm text-muted-foreground">{plan.plan_name || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Insurer</p>
                            <p className="text-sm text-muted-foreground">{plan.insurer_name || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Start Date</p>
                            <p className="text-sm text-muted-foreground">{plan.start_date || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Status</p>
                            <Badge variant={plan.status === 'Active' ? 'default' : 'secondary'}>
                              {plan.status || 'Unknown'}
                            </Badge>
                          </div>
                          <div>
                            <Button variant="outline" size="sm">
                              <ExternalLink className="w-4 h-4 mr-2" />
                              Open
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    // Customer Results
                    results.map((customer, index) => (
                      <div key={index} className="p-4 border rounded-lg hover:bg-muted/30 transition-colors">
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-center">
                          <div>
                            <p className="font-semibold">Customer Name</p>
                            <p className="text-sm text-muted-foreground">{customer.full_name}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Email</p>
                            <p className="text-sm text-muted-foreground">{customer.email || 'N/A'}</p>
                          </div>
                          <div>
                            <p className="font-semibold">Phone</p>
                            <div className="flex items-center gap-2">
                              <span className="text-sm text-muted-foreground">{customer.phone_e164 || 'N/A'}</span>
                              {customer.phone_e164 && (
                                <Button 
                                  variant="ghost" 
                                  size="sm"
                                  onClick={() => copyToClipboard(customer.phone_e164!)}
                                >
                                  Copy
                                </Button>
                              )}
                            </div>
                          </div>
                          <div>
                            <p className="font-semibold">City</p>
                            <p className="text-sm text-muted-foreground">{customer.city || 'N/A'}</p>
                          </div>
                          <div>
                            <Link to={`/agent/customer/${customer.id}`}>
                              <Button variant="outline" size="sm">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                View Plans
                              </Button>
                            </Link>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}