import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

export default function Privacy() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Legal
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Last updated: {new Date().toLocaleDateString()}
          </p>
        </div>

        <Card>
          <CardContent className="p-8 space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
              <p className="text-muted-foreground">
                EasyClaims Technologies Pvt Ltd ("we," "our," or "us") respects your privacy and is committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Personal Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Name, email address, phone number</li>
                    <li>Policy details and claim information</li>
                    <li>Financial information for claim processing</li>
                    <li>Identity verification documents</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Usage Information</h3>
                  <ul className="list-disc pl-6 text-muted-foreground space-y-1">
                    <li>Device information and browser type</li>
                    <li>IP address and location data</li>
                    <li>Usage patterns and preferences</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-muted-foreground space-y-2">
                <li>Process and manage your insurance claims</li>
                <li>Communicate with you about your claims</li>
                <li>Verify your identity and prevent fraud</li>
                <li>Improve our services and customer experience</li>
                <li>Comply with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Data Security</h2>
              <p className="text-muted-foreground">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. Our security measures include encryption, secure data transmission, and regular security assessments.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Information Sharing</h2>
              <p className="text-muted-foreground">
                We may share your information with:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Insurance companies for claim processing</li>
                <li>Service providers who assist in our operations</li>
                <li>Legal authorities when required by law</li>
                <li>Third parties with your explicit consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
              <p className="text-muted-foreground">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-muted-foreground space-y-1 mt-2">
                <li>Access and update your personal information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
              <p className="text-muted-foreground">
                If you have any questions about this Privacy Policy or our data practices, please contact us at:
              </p>
              <div className="mt-4 p-4 bg-muted/30 rounded-lg">
                <p className="text-foreground font-medium">EasyClaims Technologies Pvt Ltd</p>
                <p className="text-muted-foreground">Email: privacy@easyclaims.in</p>
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