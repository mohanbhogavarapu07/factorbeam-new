import SEO from "@/components/SEO";

const About = () => {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "mainEntity": {
      "@type": "Organization",
      "name": "FactorBeam",
      "description": "FactorBeam democratizes access to career guidance and skill mastery through psychometric testing, exam preparation, and interactive learning.",
      "foundingDate": "2025",
      "areaServed": "Global"
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="About FactorBeam - Our Mission"
        description="Learn about FactorBeam's mission to democratize career guidance and skill mastery for everyone through psychometric testing, exam preparation, and interactive learning."
        canonicalUrl="https://factorbeam.com/about"
        schema={aboutSchema}
      />
      <div className="bg-card p-8 rounded-lg shadow-sm border border-border">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground">About FactorBeam</h1>
          <p className="mt-4 text-lg text-muted-foreground">
            FactorBeam is more than just a test prep platform. We're on a mission to democratize
            access to career guidance and skill mastery for everyone, everywhere.
          </p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Our Mission</h2>
            <p className="mt-4 text-muted-foreground">
              Every individual has unique strengths and potential. We believe that with the right
              guidance and tools, anyone can discover their path and achieve their career goals.
              FactorBeam combines cutting-edge psychometric assessments, comprehensive exam
              preparation, and engaging skill-building games to help you succeed.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground">Our Story</h2>
            <p className="mt-4 text-muted-foreground">
              Founded by educators and technologists who saw the need for accessible, personalized
              career guidance, FactorBeam was built on the principle that everyone deserves the
              opportunity to understand their strengths and build the skills they need to thrive in
              their chosen field.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground mb-4">Our Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <article className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Accessibility</h3>
                <p className="text-sm text-muted-foreground">
                  Quality career guidance should be available to everyone, regardless of their
                  background or resources.
                </p>
              </article>
              <article className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Integrity</h3>
                <p className="text-sm text-muted-foreground">
                  We provide honest, science-backed assessments and recommendations you can trust.
                </p>
              </article>
              <article className="bg-background p-6 rounded-lg border border-border">
                <h3 className="font-semibold text-foreground mb-2">Innovation</h3>
                <p className="text-sm text-muted-foreground">
                  We continuously evolve our platform with the latest research in learning science
                  and career development.
                </p>
              </article>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
