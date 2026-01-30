import { useEffect } from "react";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";

const GOOGLE_FORM_URL = "https://forms.gle/uunY4kqQ5gKGm9oWA";

const Register = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.open(GOOGLE_FORM_URL, "_blank");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        {/* glow + overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-3 sm:space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3.5 py-1 text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-[0.24em] text-emerald-100/95">
                <Sparkles className="h-3 w-3 text-emerald-300" />
                <span>Secure your slot</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black mb-1">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  Register Now
                </span>
              </h1>
              <p className="text-sm sm:text-base md:text-xl text-emerald-50/90 font-medium">
                PRODOTHON 2026 • FEB 27 &amp; 28
              </p>
              <p className="mt-2 text-[11px] sm:text-xs md:text-sm text-emerald-100/80">
                You’ll be redirected to the registration form in 5 seconds. If it doesn’t open, use
                the button below.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-10 sm:py-12 md:py-14">
        <div className="container mx-auto px-4 max-w-4xl">
          <AnimatedSection animation="fade-in-up">
            <div className="flex justify-center">
              <a
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 sm:px-8 py-2.5 sm:py-3 rounded-2xl bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 text-sm sm:text-base font-semibold shadow-[0_0_35px_rgba(34,197,94,0.9)] hover:from-emerald-300 hover:via-teal-300 hover:to-emerald-200 hover:shadow-[0_0_50px_rgba(34,197,94,1)] transition-all duration-300"
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
