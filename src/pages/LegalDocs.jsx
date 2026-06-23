import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ShieldAlert, FileText } from 'lucide-react';

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
                <li>Your full name</li>
                <li>Your mobile phone number</li>
                <li>Your service address / Chennai locality</li>
                <li>Appliance defect details and preferred service date</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">2. How We Use Your Information</h2>
              <p>
                We use the collected information solely to:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Confirm your service request and schedule technician visits</li>
                <li>Contact you regarding quotes, timing, or technician details</li>
                <li>Verify your service satisfaction or request customer feedback</li>
              </ul>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-textPrimary uppercase tracking-wider">3. Data Sharing & Security</h2>
              <p>
                We do not sell, rent, or trade your personal information with third-party advertisers. Your contact details are only shared with the specific certified technician dispatched to resolve your appliance issue. We implement appropriate physical and electronic measures to secure your personal data.
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
                Phone: +91 99999 99999
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
