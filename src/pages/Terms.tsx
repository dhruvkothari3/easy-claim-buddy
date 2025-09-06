import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Terms() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Terms of Service
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Acceptance of Terms</h2>
              <p className="text-muted-foreground">
                By accessing and using EasyClaims services, you accept and agree to be bound by the terms and provision of this agreement. These Terms of Service govern your use of our platform and services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Services Description</h2>
              <p className="text-muted-foreground">
                EasyClaims provides insurance claim assistance services, including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Claim form preparation and submission</li>
                <li>Document collection and verification</li>
                <li>Liaison with insurance companies</li>
                <li>Claim status tracking and updates</li>
                <li>Settlement assistance and support</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">User Responsibilities</h2>
              <p className="text-muted-foreground">As a user of our services, you agree to:</p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2 mt-2">
                <li>Provide accurate and complete information</li>
                <li>Submit genuine and valid documents</li>
                <li>Respond promptly to requests for additional information</li>
                <li>Pay applicable service fees as agreed</li>
                <li>Not misuse or abuse our platform or services</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Service Fees</h2>
              <div className="space-y-4">
                <p className="text-muted-foreground">
                  Our service fees are transparent and competitive:
                </p>
                <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                  <li>Free initial consultation and claim assessment</li>
                  <li>Service fee of 5-10% of successful claim amount</li>
                  <li>No upfront payment required</li>
                  <li>Fees are only charged upon successful claim settlement</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Limitation of Liability</h2>
              <p className="text-muted-foreground">
                While we strive to provide excellent service, EasyClaims shall not be liable for:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Decisions made by insurance companies regarding claims</li>
                <li>Delays caused by third parties or external factors</li>
                <li>Losses resulting from incomplete or inaccurate information provided by users</li>
                <li>Technical issues or system downtime beyond our control</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
              <p className="text-muted-foreground">
                All content, features, and functionality of the EasyClaims platform are owned by EasyClaims Technologies Pvt Ltd and are protected by copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Termination</h2>
              <p className="text-muted-foreground">
                We reserve the right to terminate or suspend your access to our services at any time, without prior notice, for conduct that we believe violates these Terms of Service or is harmful to other users, us, or third parties.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Governing Law</h2>
              <p className="text-muted-foreground">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Mumbai, Maharashtra.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Changes to Terms</h2>
              <p className="text-muted-foreground">
                We reserve the right to modify these Terms of Service at any time. We will notify users of any material changes via email or through our platform. Continued use of our services after such modifications constitutes acceptance of the updated terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
              <p className="text-muted-foreground">
                For questions about these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <p className="text-foreground font-medium">EasyClaims Technologies Pvt Ltd</p>
                <p className="text-muted-foreground">Email: legal@easyclaims.in</p>
                <p className="text-muted-foreground">Phone: +91 1800-123-4567</p>
                <p className="text-muted-foreground">Address: BKC, Bandra East, Mumbai, Maharashtra 400051</p>
              </div>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}