import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MessageCircle, Phone, Mail } from 'lucide-react';

const faqs = [
  {
    question: 'How long does it take to process my insurance claim?',
    answer: 'Most claims are processed within 24-48 hours. Complex claims may take up to 5-7 business days. We provide regular updates throughout the process and keep you informed of any delays.'
  },
  {
    question: 'What documents do I need to submit a claim?',
    answer: 'Required documents vary by claim type but typically include: policy documents, claim form, bills/invoices, medical reports (for health claims), FIR copy (for theft/accident), and identity proof. Our team will provide you with a complete checklist.'
  },
  {
    question: 'Is there a fee for using EasyClaims services?',
    answer: 'We offer a free initial consultation. Our service fees are transparent and competitive, typically ranging from 5-10% of the claim amount, only charged upon successful settlement. No upfront fees required.'
  },
  {
    question: 'Can you help with rejected claims?',
    answer: 'Yes, we specialize in appealing rejected claims. Our experts review the rejection reasons, gather additional evidence if needed, and represent you during the appeal process with the insurance company.'
  },
  {
    question: 'Which insurance companies do you work with?',
    answer: 'We work with 25+ major insurance providers including HDFC ERGO, ICICI Lombard, Bajaj Allianz, LIC, SBI General, and many more. If you don\'t see your insurer listed, contact us - we likely work with them too.'
  },
  {
    question: 'How do I track my claim status?',
    answer: 'You can track your claim 24/7 through our online portal or mobile app. You\'ll receive SMS and email updates at each stage of processing. Our support team is also available for real-time updates.'
  },
  {
    question: 'What if my claim is very old or complex?',
    answer: 'We handle claims of all types and ages. Our experienced team has successfully processed complex claims including those that were previously rejected or delayed. Contact us for a free assessment.'
  },
  {
    question: 'Can I submit a claim on behalf of someone else?',
    answer: 'Yes, you can submit claims for immediate family members or with proper authorization. You\'ll need to provide relationship proof and a signed authorization letter from the policyholder.'
  },
  {
    question: 'Do you provide support in regional languages?',
    answer: 'Yes, our support team can assist you in Hindi, English, and several regional languages including Tamil, Telugu, Bengali, Marathi, and Gujarati.'
  },
  {
    question: 'What happens if my claim is denied?',
    answer: 'If your claim is denied, we provide a detailed explanation of the reasons and explore appeal options. We can help you gather additional documentation or evidence needed to challenge the decision.'
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-16">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">
            Help Center
          </Badge>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Find answers to common questions about our claim processing services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="mb-16">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                <AccordionTrigger className="text-left hover:no-underline">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* Still Need Help Section */}
        <Card className="bg-gradient-to-r from-primary/5 to-success/5 border-0">
          <CardContent className="p-12 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">
              Still need help?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Can't find the answer you're looking for? Our support team is here to help you 
              with any questions about your insurance claims.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">Call Us</h3>
                  <p className="text-sm text-muted-foreground">+91 1800-123-4567</p>
                  <p className="text-xs text-muted-foreground">Mon-Sat, 9AM-7PM</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-success" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">WhatsApp</h3>
                  <p className="text-sm text-muted-foreground">+91 98765-43210</p>
                  <p className="text-xs text-muted-foreground">24/7 Available</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div className="text-center">
                  <h3 className="font-semibold text-foreground">Email</h3>
                  <p className="text-sm text-muted-foreground">support@easyclaims.in</p>
                  <p className="text-xs text-muted-foreground">Response in 2-4 hours</p>
                </div>
              </div>
            </div>
            
            <Button size="lg" className="mt-8">
              Contact Support Team
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}