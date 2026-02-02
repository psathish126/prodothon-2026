import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
     

      {/* Contact Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl h-full">
                <CardContent className="p-6 sm:p-7 md:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-slate-900 mb-5 sm:mb-6 md:mb-7 flex items-center gap-2">
                    <span>Get in touch</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                    </span>
                  </h3>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-[15px] md:text-base">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 border border-emerald-200">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-slate-900 font-semibold text-sm sm:text-base md:text-lg">
                          Department of Production Engineering
                        </p>
                        <p className="text-slate-700 text-sm sm:text-[15px]">
                          PSG College of Technology, Coimbatore
                        </p>
                        <p className="text-slate-700 text-sm sm:text-[15px]">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 border border-emerald-200">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <a
                        href="mailto:prodothon@psgtech.ac.in"
                        className="text-emerald-700 hover:text-emerald-800 font-semibold text-sm sm:text-base md:text-lg transition-colors break-all underline-offset-4 hover:underline"
                      >
                        prodothon@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-50 text-emerald-600 flex-shrink-0 border border-emerald-200">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="tel:+918838892817"
                          className="block text-slate-900 font-semibold text-sm sm:text-base md:text-lg hover:text-emerald-700 transition-colors"
                        >
                          BALAJI C: +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="block text-slate-900 font-semibold text-sm sm:text-base md:text-lg hover:text-emerald-700 transition-colors"
                        >
                          Lakshman Raghav V G: +91 98433 06391
                        </a>
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs md:text-sm text-slate-600 pt-1">
                      For faster resolution, call or email with your name, college, department, and
                      the events you are interested in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-slate-900 px-6 sm:px-7 md:px-8 pt-6 pb-3 sm:pb-4 flex items-center justify-between">
                    <span>Our Location</span>
                    <span className="hidden sm:inline text-[11px] sm:text-xs text-slate-500">
                      Tap to explore on Maps
                    </span>
                  </h3>
                  <div className="relative h-[240px] xs:h-[260px] sm:h-[320px] lg:h-[calc(100%-72px)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.18),transparent_55%)] opacity-70" />
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
