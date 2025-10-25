import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useToast } from "@/hooks/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

// Comprehensive input validation schema with security rules
const contactSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 2 characters" })
    .max(100, { message: "Name must not exceed 100 characters" })
    .regex(/^[a-zA-Z\s'-]+$/, { message: "Name contains invalid characters" }),
  email: z
    .string()
    .trim()
    .email({ message: "Invalid email address" })
    .max(255, { message: "Email must not exceed 255 characters" })
    .toLowerCase(),
  message: z
    .string()
    .trim()
    .min(10, { message: "Message must be at least 10 characters" })
    .max(2000, { message: "Message must not exceed 2000 characters" })
    .refine((val) => {
      // Prevent common XSS patterns
      const dangerousPatterns = /<script|javascript:|onerror=|onclick=/i;
      return !dangerousPatterns.test(val);
    }, { message: "Message contains prohibited content" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

// Rate limiting implementation (client-side)
const RATE_LIMIT = {
  maxAttempts: 3,
  timeWindow: 60000, // 1 minute
};

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitAttempts, setSubmitAttempts] = useState<number[]>([]);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // Rate limiting check
  const checkRateLimit = (): boolean => {
    const now = Date.now();
    const recentAttempts = submitAttempts.filter(
      (timestamp) => now - timestamp < RATE_LIMIT.timeWindow
    );

    if (recentAttempts.length >= RATE_LIMIT.maxAttempts) {
      const oldestAttempt = Math.min(...recentAttempts);
      const waitTime = Math.ceil((RATE_LIMIT.timeWindow - (now - oldestAttempt)) / 1000);
      toast({
        title: "Too many requests",
        description: `Please wait ${waitTime} seconds before trying again.`,
        variant: "destructive",
      });
      return false;
    }

    setSubmitAttempts([...recentAttempts, now]);
    return true;
  };

  const onSubmit = async (data: ContactFormData) => {
    // Rate limiting check
    if (!checkRateLimit()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Sanitize data before processing (additional layer)
      const sanitizedData = {
        name: data.name.trim().replace(/[<>]/g, ""),
        email: data.email.trim().toLowerCase(),
        message: data.message.trim().replace(/[<>]/g, ""),
      };

      // Log security event (in production, send to monitoring service)
      console.info("[SECURITY] Contact form submission:", {
        timestamp: new Date().toISOString(),
        email: sanitizedData.email,
        nameLength: sanitizedData.name.length,
        messageLength: sanitizedData.message.length,
      });

      // Simulate secure submission (in production, this would be an API call)
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // In production, you would:
      // 1. Send to a secure backend endpoint with HTTPS
      // 2. Implement CSRF token validation
      // 3. Use server-side rate limiting
      // 4. Sanitize inputs server-side
      // 5. Log all submissions for security monitoring

      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you within 24 hours.",
      });

      form.reset();
    } catch (error) {
      console.error("[SECURITY] Contact form error:", error);
      toast({
        title: "Submission failed",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="bg-white p-8 rounded-lg shadow-sm border border-slate-200">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-slate-800">Get in Touch</h1>
          <p className="mt-4 text-lg text-slate-600">
            We'd love to hear from you. Whether you have a question, feedback, or a partnership
            inquiry, our team is ready to answer all your questions.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-800">Contact Information</h2>
              <p className="mt-4 text-slate-600">For general inquiries, please reach out to us at:</p>
              <a
                href="mailto:contact@factorbeam.com"
                className="mt-2 font-medium text-green-600 hover:text-green-700 block"
                rel="noopener noreferrer"
              >
                contact@factorbeam.com
              </a>
              <p className="mt-4 text-slate-600">Our mailing address:</p>
              <p className="mt-2 text-slate-600">123 Tech Park, Nagpur, Maharashtra, 440001, India</p>
            </div>
            <div>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your Name"
                            {...field}
                            maxLength={100}
                            autoComplete="name"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="your.email@example.com"
                            {...field}
                            maxLength={255}
                            autoComplete="email"
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your Message"
                            {...field}
                            rows={4}
                            maxLength={2000}
                            disabled={isSubmitting}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
