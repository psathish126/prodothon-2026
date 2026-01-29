import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Contact = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      {/* Header */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        {/* glow + overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-4">
              <p className="text-[10px] xs:text-[11px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-emerald-100/80">
                We are here to help
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  Contact Us
                </span>
              </h1>
              <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 max-w-2xl mx-auto">
                Reach out for any queries regarding events, accommodation, or registration at
                PRODOTHON&apos;26.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7 lg:gap-10 max-w-6xl mx-auto">
            {/* Contact Info */}
            <AnimatedSection animation="slide-left">
              <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl h-full">
                <CardContent className="p-6 sm:p-7 md:p-8">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-emerald-50 mb-5 sm:mb-6 md:mb-7 flex items-center gap-2">
                    <span>Get in touch</span>
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-300/60">
                      <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                    </span>
                  </h3>
                  <div className="space-y-4 sm:space-y-5 md:space-y-6 text-sm sm:text-[15px] md:text-base">
                    <div className="flex items-start gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <MapPin className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div>
                        <p className="text-emerald-50 font-semibold text-sm sm:text-base md:text-lg">
                          Department of Production Engineering
                        </p>
                        <p className="text-emerald-100/85 text-sm sm:text-[15px]">
                          PSG College of Technology, Coimbatore
                        </p>
                        <p className="text-emerald-100/85 text-sm sm:text-[15px]">
                          Tamil Nadu, India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <Mail className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <a
                        href="mailto:prodothon@psgtech.ac.in"
                        className="text-emerald-200 hover:text-emerald-100 font-semibold text-sm sm:text-base md:text-lg transition-colors break-all underline-offset-4 hover:underline"
                      >
                        prodothon@psgtech.ac.in
                      </a>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="p-2.5 sm:p-3 rounded-full bg-emerald-500/10 text-emerald-300 flex-shrink-0 border border-emerald-300/40">
                        <Phone className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
                      </div>
                      <div className="space-y-1.5">
                        <a
                          href="tel:+918838892817"
                          className="block text-emerald-50 font-semibold text-sm sm:text-base md:text-lg hover:text-emerald-200 transition-colors"
                        >
                          BALAJI C: +91 8838892817
                        </a>
                        <a
                          href="tel:+919843306391"
                          className="block text-emerald-50 font-semibold text-sm sm:text-base md:text-lg hover:text-emerald-200 transition-colors"
                        >
                          Lakshman Raghav V G: +91 98433 06391
                        </a>
                      </div>
                    </div>

                    <p className="text-[11px] sm:text-xs md:text-sm text-emerald-200/85 pt-1">
                      For faster resolution, call or email with your name, college, department, and
                      the events you are interested in.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </AnimatedSection>

            {/* Our Location */}
            <AnimatedSection animation="slide-right">
              <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl overflow-hidden h-full">
                <CardContent className="p-0 h-full flex flex-col">
                  <h3 className="font-heading text-2xl sm:text-3xl md:text-[1.9rem] font-bold text-emerald-50 px-6 sm:px-7 md:px-8 pt-6 pb-3 sm:pb-4 flex items-center justify-between">
                    <span>Our Location</span>
                    <span className="hidden sm:inline text-[11px] sm:text-xs text-emerald-200/80">
                      Tap to explore on Maps
                    </span>
                  </h3>
                  <div className="relative h-[240px] xs:h-[260px] sm:h-[320px] lg:h-[calc(100%-72px)]">
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,197,94,0.2),transparent_55%)] opacity-60" />
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
