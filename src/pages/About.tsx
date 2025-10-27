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
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Welcome to FactorBeam, your digital guide on the journey to self-discovery and professional mastery. We were founded on a simple, powerful idea: that every individual possesses a unique set of skills and potential, and with the right guidance, they can unlock a future they've only dreamed of.
          </p>
          
          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">Our Mission</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Our mission is to democratize career guidance. In a world full of noise and endless options, we provide a signal. We aim to replace confusion with clarity, and anxiety with confidence. We do this by building a platform that doesn't just test you, but <em>gets to know you</em>. We help you find the "why" behind your "what," connecting your innate talents to fulfilling careers and providing the tools to bridge the gap.
            </p>
          </section>

          <section className="mt-8">
            <h2 className="text-2xl font-semibold text-foreground border-b pb-2">What We Do</h2>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              FactorBeam is a three-part ecosystem:
            </p>
            <ul className="mt-4 list-disc list-inside text-muted-foreground space-y-2">
              <li><strong>The Discovery Engine:</strong> Our suite of psychometric tests helps you understand your interests, cognitive skills, and work style.</li>
              <li><strong>The Validation Hub:</strong> We provide high-quality exam preparation resources, like our GATE Hub, to validate your skills against established benchmarks.</li>
              <li><strong>The Skill-Builder & Arcade:</strong> Through micro-assessments and engaging games, we help you sharpen the specific skills you need to succeed, one day at a time.</li>
            </ul>
            <p className="mt-6 text-muted-foreground leading-relaxed">
              We are a team of educators, data scientists, and engineers committed to building a platform that is trustworthy, accessible, and genuinely helpful. Thank you for joining us on this journey.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default About;
