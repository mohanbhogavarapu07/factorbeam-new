import { Link } from "react-router-dom";

const Careers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-slate-800">Build the Future of Learning With Us</h1>
            <p className="mt-4 text-lg text-slate-600">We are a team of passionate creators, thinkers, and builders dedicated to making a difference. If you are driven by mission and thrive on challenge, you've found your home.</p>
          </section>
          
          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-800 border-b pb-4">Open Positions</h2>
            <div className="mt-6 space-y-8">
              <div className="p-6 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">Senior Frontend Developer</h3>
                    <p className="text-sm text-slate-500 mt-1">Engineering | Remote (India)</p>
                  </div>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700">Apply Now</button>
                </div>
              </div>
              <div className="p-6 border border-slate-200 rounded-lg">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-green-700">Content Strategist - UPSC</h3>
                    <p className="text-sm text-slate-500 mt-1">Content | Nagpur, Maharashtra</p>
                  </div>
                  <button className="bg-green-600 text-white py-2 px-4 rounded-md text-sm font-medium hover:bg-green-700">Apply Now</button>
                </div>
              </div>
              <div className="p-6 border border-dashed border-slate-300 rounded-lg text-center">
                <p className="text-slate-500">Don't see a role that fits? We're always looking for talented people. <Link to="/contact" className="text-green-600 font-medium">Get in touch.</Link></p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Careers;
