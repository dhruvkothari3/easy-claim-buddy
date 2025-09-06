import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle
} from 'lucide-react';

export default function Contact() {

  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Contact Our Support Team
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Have questions about your insurance claim? Our expert team is here to help you 
            every step of the way.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Get Support</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Phone Support</h3>
                    <a href="tel:+911800123456" className="text-primary hover:underline">
                      +91 1800-123-4567
                    </a>
                    <p className="text-sm text-muted-foreground">Mon-Sat, 9:00 AM - 7:00 PM</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <MessageCircle className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">WhatsApp</h3>
                    <a href="https://wa.me/919876543210" className="text-success hover:underline" target="_blank" rel="noopener noreferrer">
                      +91 98765-43210
                    </a>
                    <p className="text-sm text-muted-foreground">24/7 Available</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Email</h3>
                    <a href="mailto:support@easyclaims.in" className="text-primary hover:underline">
                      support@easyclaims.in
                    </a>
                    <p className="text-sm text-muted-foreground">Response within 2-4 hours</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-success/10 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-success" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Office Address</h3>
                    <p className="text-muted-foreground">
                      EasyClaims Technologies Pvt Ltd<br />
                      BKC, Bandra East<br />
                      Mumbai, Maharashtra 400051
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">Business Hours</h3>
                    <div className="text-muted-foreground space-y-1 text-sm">
                      <p>Monday - Friday: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 10:00 AM - 4:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Button asChild size="lg" className="h-16">
                  <a href="tel:+911800123456" className="flex flex-col">
                    <Phone className="w-5 h-5 mb-1" />
                    <span>Call Now</span>
                    <span className="text-xs opacity-90">+91 1800-123-4567</span>
                  </a>
                </Button>
                
                <Button asChild variant="success" size="lg" className="h-16">
                  <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="flex flex-col">
                    <MessageCircle className="w-5 h-5 mb-1" />
                    <span>WhatsApp</span>
                    <span className="text-xs opacity-90">Chat instantly</span>
                  </a>
                </Button>
              </div>
              
              <Button asChild variant="outline" size="lg" className="w-full h-16">
                <a href="mailto:support@easyclaims.in" className="flex flex-col">
                  <Mail className="w-5 h-5 mb-1" />
                  <span>Email Support</span>
                  <span className="text-xs opacity-70">support@easyclaims.in</span>
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16">
          <Card className="bg-gradient-to-r from-red-50 to-orange-50 border-red-200">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold text-red-800 mb-2">Emergency Claim Support</h3>
              <p className="text-red-700 mb-4">
                For urgent claims that require immediate attention (medical emergencies, accidents)
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button asChild variant="destructive" size="lg">
                  <a href="tel:+919876543200" className="flex items-center">
                    <Phone className="w-4 h-4 mr-2" />
                    Emergency Helpline: +91 98765-43200
                  </a>
                </Button>
                <p className="text-sm text-red-600">Available 24/7</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}