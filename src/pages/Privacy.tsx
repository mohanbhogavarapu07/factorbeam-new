import SEO from "@/components/SEO";

const Privacy = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="Privacy Policy"
        description="FactorBeam's privacy policy. Learn how we collect, use, and protect your personal data when you use our platform."
        canonicalUrl="https://factorbeam.com/privacy"
      />
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto prose prose-slate max-w-none">
          <h1 className="text-4xl font-bold text-slate-800">Privacy Policy for FactorBeam</h1>
          <p className="text-sm text-slate-500">Last updated: October 25, 2025</p>
          
          <p className="text-slate-600">FactorBeam ("us", "we", or "our") operates the FactorBeam website (the "Service"). This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Information Collection and Use</h2>
          <p className="text-slate-600">We collect several different types of information for various purposes to provide and improve our Service to you.</p>
          
          <h3 className="text-xl font-semibold text-slate-800 mt-6">Types of Data Collected</h3>
          <ul className="text-slate-600">
            <li><strong>Personal Data:</strong> While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you ("Personal Data"). This may include, but is not limited to, your email address and name.</li>
            <li><strong>Usage Data:</strong> We may also collect information on how the Service is accessed and used ("Usage Data"). This Usage Data may include information such as your computer's Internet Protocol address (e.g., IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.</li>
            <li><strong>Tracking & Cookies Data:</strong> We use cookies and similar tracking technologies to track the activity on our Service and hold certain information.</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Use of Data</h2>
          <p className="text-slate-600">FactorBeam uses the collected data for various purposes:</p>
          <ul className="text-slate-600">
            <li>To provide and maintain the Service</li>
            <li>To notify you about changes to our Service</li>
            <li>To allow you to participate in interactive features of our Service</li>
            <li>To provide customer care and support</li>
            <li>To provide analysis or valuable information so that we can improve the Service</li>
            <li>To monitor the usage of the Service</li>
            <li>To detect, prevent and address technical issues</li>
          </ul>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Advertising</h2>
          <p className="text-slate-600">We may use third-party Service Providers to show advertisements to you to help support and maintain our Service.</p>
          <p className="text-slate-600"><strong>Google AdSense & DoubleClick Cookie:</strong> Google, as a third-party vendor, uses cookies to serve ads on our Service. Google's use of the DoubleClick cookie enables it and its partners to serve ads to our users based on their visit to our Service or other websites on the Internet. You may opt out of the use of the DoubleClick Cookie for interest-based advertising by visiting the Google Ads Settings web page.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Links To Other Sites</h2>
          <p className="text-slate-600">Our Service may contain links to other sites that are not operated by us. If you click on a third-party link, you will be directed to that third-party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Changes To This Privacy Policy</h2>
          <p className="text-slate-600">We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page. You are advised to review this Privacy Policy periodically for any changes.</p>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
