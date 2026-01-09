import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";

const GOOGLE_FORM_URL = "https://forms.gle/uunY4kqQ5gKGm9oWA";

const Register = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(GOOGLE_FORM_URL, "_blank");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-gradient-to-b from-peach/30 to-background">
      <section className="py-12 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-3">
              Register Now
            </h1>
            <p className="text-base md:text-xl text-white/90 font-medium">
              PRODOTHON 2026 • FEB 27 &amp; 28
            </p>
            <p className="mt-3 text-xs md:text-sm text-white/80">
              You’ll be redirected to the registration form in 5 seconds.
              If it doesn’t open, use the button below.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 md:py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 md:px-8 py-2.5 md:py-3 rounded-xl bg-accent text-accent-foreground text-sm md:text-base font-semibold shadow-lg hover:bg-accent/90 transition-smooth"
              >
                Open Registration Form
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Register;
