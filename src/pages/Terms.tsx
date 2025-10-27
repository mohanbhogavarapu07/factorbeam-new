import SEO from "@/components/SEO";

const Terms = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="Terms of Service"
        description="FactorBeam's terms of service. Read our terms and conditions for using our career guidance and skill mastery platform."
        canonicalUrl="https://factorbeam.com/terms"
      />
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-800">Terms of Service for FactorBeam</h1>
          <p className="text-sm text-slate-500">Last updated: October 25, 2025</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">1. Acceptance of Terms</h2>
          <p className="text-slate-600">By accessing or using the FactorBeam website (the "Service"), you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of the terms, then you may not access the Service. These Terms apply to all visitors, users, and others who access or use the Service.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">2. Use of Service</h2>
          <p className="text-slate-600">You may use the Service only for lawful purposes and in accordance with these Terms. You agree not to use the Service:</p>
          <ul className="text-slate-600">
            <li>In any way that violates any applicable national or international law or regulation.</li>
            <li>To exploit, harm, or attempt to exploit or harm minors in any way.</li>
            <li>To transmit, or procure the sending of, any "junk mail," "chain letter," "spam," or any other similar solicitation.</li>
            <li>To impersonate or attempt to impersonate FactorBeam, a FactorBeam employee, another user, or any other person or entity.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">3. Intellectual Property</h2>
          <p className="text-slate-600">The Service and its original content (excluding content provided by users), features, and functionality are and will remain the exclusive property of FactorBeam and its licensors. Our content is protected by copyright and other laws. You agree not to copy, distribute, modify, or create derivative works of any of our content without our express prior written authorization.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">4. Disclaimers</h2>
          <p className="text-slate-600">Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement, or course of performance.</p>
          <p className="text-slate-600">FactorBeam does not warrant that a) the Service will function uninterrupted, secure or available at any particular time or location; b) any errors or defects will be corrected; or c) the results of using the Service will meet your requirements.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">5. Changes to Terms</h2>
          <p className="text-slate-600">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. We will provide at least 30 days' notice prior to any new terms taking effect. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
