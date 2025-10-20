const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto">
          <section className="text-center">
            <h1 className="text-4xl font-bold text-slate-800">Our Mission: To Democratize Success</h1>
            <p className="mt-4 text-lg text-slate-600">FactorBeam was founded on a simple principle: everyone deserves the tools and guidance to achieve their full potential, regardless of their background. We are building a platform to make high-quality preparation and self-discovery accessible to all.</p>
          </section>
          
          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-800 border-b pb-4">Our Story</h2>
            <p className="mt-6 text-slate-600 leading-relaxed">It started with a small group of educators and engineers who saw a gap in the learning landscape. While premium coaching was available to a few, millions of ambitious students lacked a clear path. We decided to build that path—a place where data-driven insights meet engaging practice, helping users not just to prepare for an exam, but to build a career.</p>
          </section>

          <section className="mt-16">
            <h2 className="text-3xl font-semibold text-slate-800 border-b pb-4">Our Values</h2>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Accessibility</h3>
                <p className="mt-2 text-slate-600">Knowledge should be free. Our core platform will always be free to ensure no one is left behind.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Integrity</h3>
                <p className="mt-2 text-slate-600">We are committed to providing accurate, high-quality content that users can trust.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-800">Innovation</h3>
                <p className="mt-2 text-slate-600">We believe in the power of technology to create new, more effective ways to learn and grow.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
