import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Shield, 
  Clock, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  FileCheck,
  Headphones,
  TrendingUp
} from 'lucide-react';
import heroImage from '@/assets/hero-claims.jpg';

const features = [
  {
    icon: Clock,
    title: 'Fast Processing',
    description: 'Get your claims processed in 24-48 hours with our streamlined workflow.'
  },
  {
    icon: Shield,
    title: 'Secure & Reliable',
    description: 'Bank-grade security with 99.9% uptime ensures your data is always safe.'
  },
  {
    icon: Users,
    title: 'Expert Support',
    description: 'Our certified claims specialists guide you through every step.'
  },
  {
    icon: FileCheck,
    title: 'Document Management',
    description: 'Easy upload and tracking of all required documents in one place.'
  }
];

const steps = [
  {
    step: '01',
    title: 'Submit Your Claim',
    description: 'Upload your documents through our secure portal or mobile app.'
  },
  {
    step: '02',
    title: 'Expert Review',
    description: 'Our specialists review and verify all documentation for accuracy.'
  },
  {
    step: '03',
    title: 'Fast Processing',
    description: 'Claims are processed and approved within 24-48 hours.'
  },
  {
    step: '04',
    title: 'Instant Settlement',
    description: 'Receive direct payment to your bank account upon approval.'
  }
];

const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Business Owner',
    content: 'EasyClaims made my health insurance claim so simple. What usually takes weeks was done in 2 days!',
    rating: 5
  },
  {
    name: 'Raj Patel',
    role: 'Software Engineer',
    content: 'The support team is incredible. They guided me through every step and answered all my questions.',
    rating: 5
  },
  {
    name: 'Anita Kumar',
    role: 'Teacher',
    content: 'I was worried about the paperwork, but EasyClaims handled everything. Highly recommended!',
    rating: 5
  }
];

const stats = [
  { label: 'Claims Processed', value: '50,000+' },
  { label: 'Customer Satisfaction', value: '98.5%' },
  { label: 'Average Processing Time', value: '36 Hours' },
  { label: 'Partner Insurers', value: '25+' }
];

export default function Landing() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-success/5">
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:px-8 lg:pt-16">
          <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
            <div className="w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                Insurance Claims Made{' '}
                <span className="bg-gradient-to-r from-primary to-success bg-clip-text text-transparent">
                  Easy
                </span>
              </h1>
              <p className="relative mt-6 text-lg leading-8 text-muted-foreground sm:max-w-md lg:max-w-none">
                Fast, reliable, and transparent claim processing. Get your insurance claims settled 
                in just 24-48 hours with expert guidance every step of the way.
              </p>
              <div className="mt-10 flex items-center gap-x-6">
                <Button variant="hero" size="xl">
                  Start Your Claim
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Link to="/services">
                  <Button variant="outline" size="lg">
                    Learn More
                  </Button>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="mt-16 flex items-center gap-x-6 lg:gap-x-10">
                {stats.slice(0, 2).map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <dt className="text-sm leading-6 text-muted-foreground">{stat.label}</dt>
                    <dd className="text-2xl font-bold leading-9 tracking-tight text-foreground">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
              <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                <div className="relative">
                  <img
                    src={heroImage}
                    alt="Insurance claims processing"
                    className="aspect-[2/3] w-full rounded-xl bg-muted object-cover shadow-lg"
                  />
                  <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-border" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Why Choose EasyClaims
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Everything you need for hassle-free claims
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Our comprehensive platform handles every aspect of your insurance claim, 
              from submission to settlement.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-4">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col">
                  <dt className="text-base font-semibold leading-7 text-foreground">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
                      <feature.icon className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
                    </div>
                    {feature.title}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-muted-foreground">
                    <p className="flex-auto">{feature.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="bg-muted/30 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <Badge variant="secondary" className="mb-4">
              Simple Process
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How it works
            </h2>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Four simple steps to get your insurance claim settled quickly and efficiently.
            </p>
          </div>
          
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-4 lg:gap-x-8">
              {steps.map((step, index) => (
                <div key={step.step} className="relative">
                  <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                      {step.step}
                    </div>
                    <h3 className="mt-6 text-lg font-semibold text-foreground">{step.title}</h3>
                    <p className="mt-2 text-muted-foreground">{step.description}</p>
                  </div>
                  {index < steps.length - 1 && (
                    <div className="absolute top-6 left-6 -ml-px mt-0.5 h-full w-0.5 bg-border lg:block hidden" 
                         aria-hidden="true" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="secondary" className="mb-4">
              Customer Stories
            </Badge>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Trusted by thousands
            </h2>
          </div>
          
          <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="pt-8">
                  <CardContent className="space-y-4">
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-muted-foreground italic">"{testimonial.content}"</p>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary">
        <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary-foreground sm:text-4xl">
              Ready to file your claim?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-primary-foreground/90">
              Join thousands of satisfied customers who chose EasyClaims for fast, 
              reliable insurance claim processing.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Button variant="secondary" size="xl">
                Get Started Now
              </Button>
              <Link to="/contact" className="text-sm font-semibold leading-6 text-primary-foreground">
                Contact Support <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}