import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Heart, 
  Car, 
  Home, 
  Briefcase, 
  Shield, 
  Clock,
  FileText,
  CheckCircle,
  ArrowRight
} from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Health Insurance Claims',
    description: 'Medical expenses, hospitalization, surgery, and treatment claims processed quickly.',
    features: ['Cashless claims', 'Reimbursement', 'Pre-authorization', 'Emergency coverage'],
    color: 'text-red-500'
  },
  {
    icon: Car,
    title: 'Motor Insurance Claims',
    description: 'Vehicle damage, accidents, theft, and comprehensive motor insurance claims.',
    features: ['Accident claims', 'Theft coverage', 'Third-party liability', 'Own damage'],
    color: 'text-blue-500'
  },
  {
    icon: Home,
    title: 'Property Insurance Claims',
    description: 'Home, office, and property damage claims due to natural disasters or accidents.',
    features: ['Fire damage', 'Flood coverage', 'Earthquake', 'Burglary'],
    color: 'text-green-500'
  },
  {
    icon: Briefcase,
    title: 'Business Insurance Claims',
    description: 'Commercial property, liability, and business interruption insurance claims.',
    features: ['Commercial property', 'Liability coverage', 'Business interruption', 'Equipment'],
    color: 'text-purple-500'
  }
];

const process = [
  {
    icon: FileText,
    title: 'Document Collection',
    description: 'We help you gather and organize all required documents for your claim.'
  },
  {
    icon: Shield,
    title: 'Claim Verification',
    description: 'Our experts verify and validate your claim details with insurance providers.'
  },
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Claims are processed within 24-48 hours with regular status updates.'
  },
  {
    icon: CheckCircle,
    title: 'Settlement',
    description: 'Direct settlement to your bank account upon claim approval.'
  }
];

export default function Services() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Our Services
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Comprehensive Claim Assistance
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We handle all types of insurance claims with expertise and efficiency, 
            ensuring you get the settlement you deserve.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-primary/10 ${service.color}`}>
                    <service.icon className="w-8 h-8" />
                  </div>
                  <div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">{service.description}</p>
                <div className="space-y-2">
                  <h4 className="font-semibold text-sm text-foreground">Coverage includes:</h4>
                  <ul className="grid grid-cols-2 gap-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <CheckCircle className="w-4 h-4 text-success" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Start Claim Process
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Process Section */}
        <div className="bg-muted/30 rounded-3xl p-12 mb-16">
          <div className="text-center mb-12">
            <Badge variant="secondary" className="mb-4">
              How We Help
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Our Claim Process
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A streamlined, transparent process that gets your claim settled quickly.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <Card className="bg-gradient-to-r from-primary to-success text-white text-center p-12">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-bold">Ready to Start Your Claim?</h2>
            <p className="text-lg opacity-90 max-w-2xl mx-auto">
              Don't let complicated paperwork delay your insurance settlement. 
              Let our experts handle everything for you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button variant="secondary" size="lg">
                Start Free Consultation
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
                Call +91 1800-123-4567
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}