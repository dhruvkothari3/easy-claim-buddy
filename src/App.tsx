import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { Header } from "@/components/Layout/Header";
import { Footer } from "@/components/Layout/Footer";

// Public Pages
import Landing from "./pages/Landing";
import About from "./pages/About";
import Services from "./pages/Services";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Admin Portal
import AdminLogin from "./pages/admin/Login";
import AdminSearch from "./pages/admin/Search";
import CustomerDetail from "./pages/admin/CustomerDetail";
import AdminImport from "./pages/admin/Import";
import ProtectedRoute from "./components/ProtectedRoute";

import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <div className="min-h-screen flex flex-col">
            <Header />
            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/faq" element={<FAQ />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* Admin Portal */}
                <Route path="/admin/login" element={<AdminLogin />} />
                <Route path="/admin/search" element={
                  <ProtectedRoute>
                    <AdminSearch />
                  </ProtectedRoute>
                } />
                <Route path="/admin/customer/:id" element={
                  <ProtectedRoute>
                    <CustomerDetail />
                  </ProtectedRoute>
                } />
                <Route path="/admin/import" element={
                  <ProtectedRoute adminOnly>
                    <AdminImport />
                  </ProtectedRoute>
                } />
                
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
