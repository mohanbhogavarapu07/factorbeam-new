import SEO from "@/components/SEO";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FAQs = () => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is FactorBeam?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "FactorBeam is a comprehensive career guidance and skill mastery platform that helps individuals discover their potential through psychometric testing, exam preparation resources, and interactive learning games."
        }
      },
      {
        "@type": "Question",
        "name": "Are the assessments free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we offer a range of free assessments to help you get started. Premium assessments with detailed analytics and personalized recommendations are available through our subscription plans."
        }
      },
      {
        "@type": "Question",
        "name": "Which exams does FactorBeam cover?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We provide comprehensive preparation resources for major competitive exams including UPSC, CAT, GATE, SSC, Banking exams, and more. Each exam has dedicated practice tests, study materials, and performance analytics."
        }
      },
      {
        "@type": "Question",
        "name": "How are the psychometric tests designed?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Our psychometric tests are designed by experienced psychologists and educators, based on established frameworks like Holland's RIASEC model and the Big Five personality traits. They undergo regular validation to ensure accuracy and reliability."
        }
      }
    ]
  };

  const generalFAQs = [
    {
      question: "What is FactorBeam?",
      answer: "FactorBeam is a comprehensive career guidance and skill mastery platform that helps individuals discover their potential through psychometric testing, exam preparation resources, and interactive learning games. We combine scientific assessment methods with engaging learning experiences to guide you toward your ideal career path."
    },
    {
      question: "How do I get started?",
      answer: "Getting started is simple! Browse our Discovery section to take psychometric assessments that reveal your interests and aptitudes, explore our GATE Hub and other exam preparation resources, or dive into our Skill-Builder games. Create an account to save your progress and access personalized recommendations."
    },
    {
      question: "Is FactorBeam free to use?",
      answer: "Yes, we offer a generous free tier that includes basic assessments, practice questions, and select games. Premium features like detailed analytics, personalized study plans, unlimited practice tests, and advanced career recommendations are available through our subscription plans."
    },
    {
      question: "Who should use FactorBeam?",
      answer: "FactorBeam is ideal for students preparing for competitive exams, professionals considering career changes, recent graduates exploring career options, and anyone looking to develop new skills or validate existing ones through standardized assessments."
    }
  ];

  const assessmentFAQs = [
    {
      question: "Which exams does FactorBeam cover?",
      answer: "We provide comprehensive preparation resources for major competitive exams including UPSC (Civil Services), CAT (MBA entrance), GATE (Engineering), SSC (Staff Selection Commission), Banking exams (IBPS, SBI), and more. Each exam category has dedicated practice tests, previous year questions, and detailed solutions."
    },
    {
      question: "Are the assessments free?",
      answer: "Yes, we offer a range of free assessments to help you get started. This includes sample psychometric tests and limited practice questions for various exams. Premium assessments with detailed analytics, unlimited attempts, and personalized recommendations are available through our subscription plans."
    },
    {
      question: "How are the psychometric tests designed?",
      answer: "Our psychometric tests are designed by experienced psychologists and educators, based on established scientific frameworks like Holland's RIASEC model, Myers-Briggs Type Indicator principles, and the Big Five personality traits. They undergo regular validation studies to ensure accuracy and reliability in career guidance."
    },
    {
      question: "How accurate are the career recommendations?",
      answer: "Our career recommendations are based on validated psychometric instruments and extensive career database matching. While no test is 100% predictive, our assessments have shown strong correlation with career satisfaction when users follow the guidance. We recommend using results as one input among many in your career decision-making process."
    },
    {
      question: "Can I retake assessments?",
      answer: "Yes! You can retake most assessments after a cooldown period (typically 30 days for psychometric tests to ensure fresh perspectives, and immediately for practice exams). Premium users get unlimited retakes and can track their progress over time."
    }
  ];

  const technicalFAQs = [
    {
      question: "What devices can I use FactorBeam on?",
      answer: "FactorBeam works on all modern devices including desktop computers, laptops, tablets, and smartphones. Our responsive design ensures an optimal experience across all screen sizes. We recommend using the latest version of Chrome, Firefox, Safari, or Edge for the best performance."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We take data security seriously and employ industry-standard encryption for all data transmission and storage. Your assessment results and personal information are never shared with third parties without your explicit consent. Read our Privacy Policy for detailed information."
    },
    {
      question: "Can I download my test results?",
      answer: "Yes, premium users can download detailed PDF reports of their assessment results, including psychometric profiles, exam performance analytics, and personalized recommendations. Free users can view their results online."
    },
    {
      question: "Do I need an internet connection?",
      answer: "Yes, FactorBeam is a web-based platform that requires an internet connection to access assessments and save your progress. We're working on offline capabilities for certain features in future updates."
    }
  ];

  const accountFAQs = [
    {
      question: "How do I create an account?",
      answer: "Click the 'Login' or 'Sign Up' button in the top navigation bar. You can register using your email address or sign in with Google. Account creation is free and takes less than a minute."
    },
    {
      question: "What are the subscription plans?",
      answer: "We offer flexible subscription plans including Monthly, Quarterly, and Annual options. Each plan unlocks premium features like unlimited assessments, detailed analytics, personalized study plans, and priority support. Visit our Pricing page for current rates and feature comparisons."
    },
    {
      question: "Can I cancel my subscription anytime?",
      answer: "Yes, you can cancel your subscription at any time from your account settings. You'll continue to have access to premium features until the end of your billing period. No questions asked, no cancellation fees."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit and debit cards (Visa, MasterCard, American Express), UPI, net banking, and digital wallets. All payments are processed securely through our payment partners."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <SEO
        title="Frequently Asked Questions - FactorBeam"
        description="Find answers to common questions about FactorBeam's assessments, career guidance tools, exam preparation resources, and subscription plans."
        canonicalUrl="https://factorbeam.com/faqs"
        schema={faqSchema}
      />

      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about FactorBeam. Can't find the answer you're looking for? 
            Reach out to our <a href="/contact" className="text-primary hover:underline">support team</a>.
          </p>
        </header>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>General Questions</CardTitle>
              <CardDescription>Learn about FactorBeam and how to get started</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {generalFAQs.map((faq, index) => (
                  <AccordionItem key={`general-${index}`} value={`general-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Assessments & Testing</CardTitle>
              <CardDescription>Information about our psychometric tests and exam preparation</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {assessmentFAQs.map((faq, index) => (
                  <AccordionItem key={`assessment-${index}`} value={`assessment-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Technical Support</CardTitle>
              <CardDescription>Device compatibility and technical questions</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {technicalFAQs.map((faq, index) => (
                  <AccordionItem key={`technical-${index}`} value={`technical-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Account & Billing</CardTitle>
              <CardDescription>Manage your account and subscription</CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                {accountFAQs.map((faq, index) => (
                  <AccordionItem key={`account-${index}`} value={`account-${index}`}>
                    <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center bg-muted/50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-3">
            Still have questions?
          </h2>
          <p className="text-muted-foreground mb-6">
            Our support team is here to help you succeed. Get in touch and we'll respond within 24 hours.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-medium hover:bg-primary/90 transition-colors"
          >
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
