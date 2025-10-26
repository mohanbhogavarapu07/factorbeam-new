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
          <h1 className="text-4xl font-bold text-slate-800">Terms of Service</h1>
          <p className="text-sm text-slate-500">Last updated: October 20, 2025</p>
          <p className="text-slate-600">Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the FactorBeam website (the "Service") operated by FactorBeam ("us", "we", or "our"). Your access to and use of the Service is conditioned on your acceptance of and compliance with these Terms.</p>
          
          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Accounts</h2>
          <p className="text-slate-600">When you create an account with us, you must provide us with information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.</p>

          <h2 className="text-2xl font-semibold text-slate-800 mt-8">Intellectual Property</h2>
          <p className="text-slate-600">The Service and its original content, features, and functionality are and will remain the exclusive property of FactorBeam and its licensors. The Service is protected by copyright, trademark, and other laws of both India and foreign countries.</p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
