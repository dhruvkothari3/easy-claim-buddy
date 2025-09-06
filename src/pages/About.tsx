import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Users, Award, TrendingUp } from 'lucide-react';

const values = [
  {
    icon: Shield,
    title: 'Trust & Security',
    description: 'We maintain the highest standards of data security and customer privacy.'
  },
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make is centered around improving customer experience.'
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'We strive for excellence in every claim we process and service we provide.'
  },
  {
    icon: TrendingUp,
    title: 'Innovation',
    description: 'Continuously improving our platform with latest technology and best practices.'
  }
];

export default function About() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            About EasyClaims
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Simplifying Insurance Claims Since 2020
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            We're on a mission to make insurance claim processing fast, transparent, 
            and hassle-free for everyone.
          </p>
        </div>

        {/* Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                EasyClaims was founded with a simple vision: to eliminate the frustration 
                and complexity from insurance claim processing. Having experienced the 
                traditional lengthy claim processes ourselves, we knew there had to be a better way.
              </p>
              <p>
                Our team of insurance experts, technology professionals, and customer service 
                specialists came together to build a platform that puts customers first. 
                Today, we've processed over 50,000 claims and maintain a 98.5% customer 
                satisfaction rate.
              </p>
              <p>
                We partner with leading insurance companies across India to provide seamless, 
                digital-first claim experiences that save time and reduce stress for our customers.
              </p>
            </div>
          </div>
          <div className="bg-gradient-to-r from-primary/10 to-success/10 rounded-2xl p-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">50,000+</div>
                <div className="text-sm text-muted-foreground">Claims Processed</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">98.5%</div>
                <div className="text-sm text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">36</div>
                <div className="text-sm text-muted-foreground">Avg. Hours</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-success">25+</div>
                <div className="text-sm text-muted-foreground">Insurance Partners</div>
              </div>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="mb-24">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">
              Our Values
            </Badge>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              What Drives Us Forward
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              These core values shape every interaction and decision we make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center p-6">
                <CardContent className="space-y-4">
                  <div className="mx-auto w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-semibold text-foreground">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="text-center">
          <Badge variant="secondary" className="mb-4">
            Our Team
          </Badge>
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Expert Team, Customer Focus
          </h2>
          <div className="max-w-3xl mx-auto text-muted-foreground">
            <p>
              Our team consists of certified insurance professionals, experienced claims adjusters, 
              and technology experts who are passionate about improving the claims experience. 
              With decades of combined experience in the insurance industry, we understand the 
              challenges customers face and work tirelessly to solve them.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}