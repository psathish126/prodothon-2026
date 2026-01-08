import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Header */}
      <section className="relative py-16 md:py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-4">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
                We are here to help
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Contact Us
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
                Reach out for any queries regarding events, accommodation, or
                registration at PRODOTHON&apos;26.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-card border-0 bg-white/85 backdrop-blur-md rounded-3xl h-full">
                <CardContent className="p-6 md:p-8">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary mb-6 md:mb-8">
                    Get in touch
                  </h3>
                  <div className="space-y-5 md:space-y-6 text-sm md:text-base">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <MapPin className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-foreground font-semibold text-base md:text-lg">
                          Department of Production Engineering
                        </p>
                        <p className="text-muted-foreground">
                          PSG College of Technology, Coimbatore
                        </p>
                        <p className="text-muted-foreground">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Mail className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <a
                        href="mailto:pea.prod@psgtech.ac.in"
                        className="text-secondary hover:text-accent font-semibold text-base md:text-lg transition-colors break-all"
                      >
                        pea.prod@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                        <Phone className="h-5 w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="tel:+918838892817"
                          className="block text-foreground font-semibold text-base md:text-lg hover:text-accent transition-colors"
                        >
                          BALAJI C: +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="block text-foreground font-semibold text-base md:text-lg hover:text-accent transition-colors"
                        >
                          LAKSHMAN: +91 98433 06391
                        </a>
                      </div>
                    </div>

                    <p className="text-xs md:text-sm text-muted-foreground pt-1">
                      For faster resolution, call or email with your name,
                      college, department, and the events you are interested in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-card border-0 bg-white/85 backdrop-blur-md rounded-3xl overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <h3 className="font-heading text-2xl md:text-3xl font-bold text-secondary px-6 md:px-8 pt-6 pb-4">
                    Our Location
                  </h3>
                  <div className="h-[260px] sm:h-[320px] lg:h-[calc(100%-80px)]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8367616013686!2d77.00286481472448!3d11.02453589516701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1765214451220!5m2!1sen!2sin"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="PSG College of Technology Location"
                    />
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
