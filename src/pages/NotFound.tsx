import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, Search } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-primary/5 via-background to-muted/30">
      <div className="text-center space-y-6 max-w-md px-4">
        <div className="space-y-2">
          <h1 className="text-8xl font-bold text-primary">404</h1>
          <h2 className="text-2xl font-bold text-foreground">Page Not Found</h2>
          <p className="text-muted-foreground">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <a href="/">
              <Home className="w-4 h-4 mr-2" />
              Go Home
            </a>
          </Button>
          <Button variant="outline" asChild size="lg">
            <a href="/agent/search">
              <Search className="w-4 h-4 mr-2" />
              Agent Portal
            </a>
          </Button>
        </div>
        
        <div className="text-sm text-muted-foreground">
          <p>Need help? <a href="/contact" className="text-primary hover:underline">Contact Support</a></p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
