import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, FileText } from 'lucide-react';
import { displayPhone } from '../config/contact';

export function PrivacyPolicy() {
  return (
    <>
      <Helmet>
        <title>Privacy Policy | DMD Service Chennai</title>
        <meta name="description" content="Read the privacy policy of DMD Service Chennai. We value your privacy and protect your personal information." />
      </Helmet>

      <section className="pt-32 pb-20 bg-background text-textSecondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="space-y-4 mb-8">
            <div className="inline-flex p-2 bg-primaryAccent/10 text-primaryAccent rounded-lg">
              <ShieldAlert className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-extrabold text-textPrimary tracking-tight">Privacy Policy</h1>
            <p className="text-xs text-textSecondary">Last Updated: June 2026</p>
          </div>

          <div className="bg-cardBg border border-borderColor p-6 md:p-8 rounded-3xl space-y-6 text-sm leading-relaxed">
            
            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">1. Information We Collect</h2>
              <p>
                When you request a doorstep appliance repair service using our website, WhatsApp CTA link, or direct call link, we may collect basic personal details that you provide to us, including:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Name</li>
                <li>Contact number</li>
                <li>Service/repair location (address)</li>
                <li>Preferred booking date & details of the appliance issue</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">2. How We Use Your Information</h2>
              <p>
                We use the collected details strictly to process and execute your doorstep appliance repair, schedule technician visits, address your support queries, and issue digital service invoices.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">3. Data Security & Storage</h2>
              <p>
                We prioritize user data safety. The information you submit via our booking forms or chat links is used solely for service fulfillment and is not sold, rented, or shared with third-party marketing companies.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">4. Third-Party Services (WhatsApp)</h2>
              <p>
                Our website utilizes the WhatsApp click-to-chat API to allow customers to message us directly. When you click the WhatsApp CTA, you are redirected to the WhatsApp platform, which is governed by WhatsApp's own privacy policy and terms.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">5. Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="font-semibold text-textPrimary">
                DMD Service Support<br />
                Email: info@dmdservice.in<br />
                Phone: {displayPhone}
              </p>
            </section>

          </div>

        </div>
      </section>
    </>
  );
}

export function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions | DMD Service Chennai</title>
        <meta name="description" content="Read the terms of service and repair warranties offered by DMD Service Chennai." />
      </Helmet>

      <section className="pt-32 pb-20 bg-background text-textSecondary">
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          
          <div className="space-y-4 mb-8">
            <div className="inline-flex p-2 bg-primaryAccent/10 text-primaryAccent rounded-lg">
              <FileText className="w-5 h-5" />
            </div>
            <h1 className="text-3xl font-extrabold text-textPrimary tracking-tight">Terms & Conditions</h1>
            <p className="text-xs text-textSecondary">Last Updated: June 2026</p>
          </div>

          <div className="bg-cardBg border border-borderColor p-6 md:p-8 rounded-3xl space-y-6 text-sm leading-relaxed">
            
            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">1. Scope of Service</h2>
              <p>
                DMD Service provides doorstep diagnostic, repair, and installation services for electronic home appliances (specifically Air Conditioners, Refrigerators, and Washing Machines) within the geographical limits of Chennai, Tamil Nadu.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">2. Booking & Diagnostic Fees</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>We commit to dispatching a technician within 3 hours from booking confirmation. However, arrival times may vary slightly due to extreme weather, traffic, or unforeseen technical challenges.</li>
                <li>A standard diagnostic fee of ₹199 is applicable for at-home visits. If you choose to proceed with our recommended repair, this diagnostic fee is fully waived/adjusted into the final invoice.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">3. Service & Parts Warranty</h2>
              <ul className="list-disc pl-5 space-y-1">
                <li>We offer a standard 30-day warranty on our repair workmanship. If the identical issue recurs within 30 days, we will re-service the appliance at no labor cost.</li>
                <li>Spare parts replaced by DMD Service carry individual manufacturer/supplier warranties where applicable. Any damage caused by power fluctuations, physical mishandling, or third-party tampering post-repair voids the DMD warranty.</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">4. Payments</h2>
              <p>
                Payments are due immediately upon completion of the service. We accept Cash, UPI transfer (GPay, PhonePe, Paytm), and major credit/debit cards. Digital invoices will be sent via SMS/WhatsApp.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">5. Liability Limitation</h2>
              <p>
                While our technicians are highly trained certified experts, DMD Service is not liable for indirect or consequential damages arising from appliance failure, delayed arrivals, or post-service issues beyond the refund of the specific service invoice amount.
              </p>
            </section>

          </div>

        </div>
      </section>
    </>
  );
}
