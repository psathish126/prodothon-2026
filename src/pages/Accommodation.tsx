import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";

const Accommodation = () => {
  const boysHostel = [
    { type: "Food + 3 sharing room (common bath)", price: "₹400 / day" },
    { type: "3 sharing room (common bath)", price: "₹250 / day" },
    { type: "Dormitory room (8 sharing)", price: "₹50 / day" },
  ];

  const girlsHostel = [
    { type: "Food + 2 sharing room (common bath)", price: "₹400 / day" },
    { type: "Food + 3 sharing room (attached bath)", price: "₹750 / day" },
  ];

  const guidelines = [
    "Participants who need hostel accommodation should inform us in advance.",
    "Participants can pay their accommodation fees while lodging (only cash is accepted).",
    "Participants should follow the hostel rules and regulations strictly.",
    "All students must carry a valid government ID card.",
  ];

  const hostelRules = [
    "Participants should not enter into other blocks apart from the allotted place.",
    "Participants are asked to take food in their respective mess only.",
    "Participants are asked to contact the volunteers for any sort of help. They should not take their own actions.",
    "Participants are asked to cooperate with block/mess supervisors in any kind of ID check.",
    "Participants should not make any noise during the sleeping hours.",
    "Participants should not enter into the hostel without registration in the hostel office. They should contact the allotted volunteers at the time of arrival at the hostel.",
    "Participants should not damage any property given to them.",
  ];

  const paymentGuidelines = [
    "Prior registration to any event is required; on-spot registrations will be considered.",
    "Registration fee must be paid to the mentioned bank account.",
    "Once the registration fee is paid, it is non-refundable.",
    "The transaction ID and the screenshot of the payment must be entered and uploaded in Google Forms.",
    "In case of a team event, all members must register individually.",
    "A participant can participate in a maximum of 4 events.",
    "A confirmation mail will be sent upon successful payment and registration.",
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      {/* Header – match jazzy Home */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        {/* glow layers */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-4xl mx-auto text-center bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-4 sm:space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-300/40 bg-emerald-500/10 px-3.5 py-1 text-[10px] xs:text-[11px] sm:text-xs uppercase tracking-[0.24em] text-emerald-100/95">
                <Sparkles className="h-3 w-3 text-emerald-300" />
                <span>Stay at PSG Campus • Safe & Comfortable</span>
              </div>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black tracking-tight">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  Accommodation
                </span>
              </h1>
              <p className="text-[13px] sm:text-sm md:text-base text-emerald-50/90 max-w-2xl mx-auto">
                Well‑organized hostel facilities for PRODOTHON&apos;26 participants with separate
                arrangements for boys and girls.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Content sections */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8 sm:space-y-10 md:space-y-12 relative z-10">
          {/* Guidelines */}
          <AnimatedSection animation="fade-in-up">
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950/95 via-slate-900/95 to-slate-950/95 backdrop-blur-xl rounded-3xl">
              <CardHeader className="pb-3 sm:pb-4 border-b border-emerald-900/60 px-5 sm:px-6 md:px-7 pt-5 sm:pt-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-emerald-100 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/20 border border-emerald-300/60">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-300" />
                  </span>
                  <span>General Guidelines</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5 pb-5 sm:pb-6 md:pb-7 px-5 sm:px-6 md:px-7">
                <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-sm md:text-base text-emerald-50/90">
                  {guidelines.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 sm:gap-3"
                    >
                      <span className="mt-0.5 text-emerald-300 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Accommodation Fees */}
          <AnimatedSection animation="fade-in-up" delay={0.06}>
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 text-slate-950 rounded-t-3xl px-5 sm:px-6 md:px-8 py-4 sm:py-4.5 md:py-5">
                <CardTitle className="font-heading text-xl sm:text-2xl">
                  Accommodation Fees (Per Day)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 sm:p-6 md:p-7 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
                  {/* Boys Hostel */}
                  <div className="bg-slate-950/80 border border-emerald-300/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.9)]">
                    <h4 className="font-heading text-lg sm:text-xl font-semibold text-emerald-200 mb-3 sm:mb-4 pb-2 border-b border-emerald-900/70">
                      Boys Hostel
                    </h4>
                    <div className="space-y-3">
                      {boysHostel.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2.5 border-b border-emerald-900/60 last:border-0"
                        >
                          <span className="text-emerald-50 text-sm sm:text-base">
                            {item.type}
                          </span>
                          <span className="text-emerald-300 font-bold text-sm sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Girls Hostel */}
                  <div className="bg-slate-950/80 border border-cyan-300/30 rounded-2xl p-4 sm:p-5 md:p-6 shadow-[0_16px_60px_rgba(0,0,0,0.9)]">
                    <h4 className="font-heading text-lg sm:text-xl font-semibold text-cyan-200 mb-3 sm:mb-4 pb-2 border-b border-cyan-900/70">
                      Girls Hostel
                    </h4>
                    <div className="space-y-3">
                      {girlsHostel.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2.5 border-b border-cyan-900/60 last:border-0"
                        >
                          <span className="text-emerald-50 text-sm sm:text-base">
                            {item.type}
                          </span>
                          <span className="text-emerald-300 font-bold text-sm sm:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[11px] sm:text-xs md:text-sm text-emerald-200/80 mt-4 sm:mt-5">
                  Note: Food‑included options cover breakfast, lunch, and dinner at the respective
                  hostel mess.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Hostel Rules */}
          <AnimatedSection animation="fade-in-up" delay={0.12}>
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl">
              <CardHeader className="pb-3 sm:pb-4 border-b border-emerald-900/60 px-5 sm:px-6 md:px-7 pt-5 sm:pt-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-emerald-100">
                  Hostel Rules &amp; Regulations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5 pb-5 sm:pb-6 md:pb-7 px-5 sm:px-6 md:px-7">
                <ul className="space-y-3 text-[13px] sm:text-sm md:text-base text-emerald-50/90">
                  {hostelRules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3"
                    >
                      <span className="bg-gradient-to-br from-emerald-400 to-teal-400 text-slate-950 text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                        {index + 1}
                      </span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Payment Guidelines */}
          <AnimatedSection animation="fade-in-up" delay={0.18}>
            <Card className="shadow-[0_22px_80px_rgba(0,0,0,0.95)] border border-emerald-300/25 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 backdrop-blur-xl rounded-3xl">
              <CardHeader className="pb-3 sm:pb-4 border-b border-emerald-900/60 px-5 sm:px-6 md:px-7 pt-5 sm:pt-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-emerald-100">
                  Payment Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5 pb-5 sm:pb-6 md:pb-7 px-5 sm:px-6 md:px-7">
                <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-sm md:text-base text-emerald-50/90">
                  {paymentGuidelines.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2.5 sm:gap-3"
                    >
                      <span className="mt-0.5 text-emerald-300 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Bank Details */}
          <AnimatedSection animation="scale-in" delay={0.24}>
            <Card className="shadow-[0_24px_90px_rgba(0,0,0,0.98)] border border-emerald-300/40 bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 text-white rounded-3xl overflow-hidden">
              <CardHeader className="px-5 sm:px-6 md:px-8 pt-5 sm:pt-6 pb-3 border-b border-emerald-900/60">
                <CardTitle className="font-heading text-xl sm:text-2xl text-emerald-50 flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-amber-200" />
                  <span>Bank Details for Payment</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="px-5 sm:px-6 md:px-8 pb-6 sm:pb-7 md:pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
                  <div>
                    <p className="text-emerald-100/80 text-[11px] sm:text-xs md:text-sm">
                      Name of Account Holder
                    </p>
                    <p className="font-semibold text-sm sm:text-base md:text-[1.05rem]">
                      PSG Center for Nonformal and Continuing Education
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-100/80 text-[11px] sm:text-xs md:text-sm">
                      Account Number
                    </p>
                    <p className="font-semibold text-amber-200 text-lg sm:text-xl md:text-2xl tracking-wide">
                      1481267367
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-100/80 text-[11px] sm:text-xs md:text-sm">
                      IFSC Code
                    </p>
                    <p className="font-semibold text-amber-200 text-lg sm:text-xl md:text-2xl tracking-wide">
                      CBIN0280913
                    </p>
                  </div>
                  <div>
                    <p className="text-emerald-100/80 text-[11px] sm:text-xs md:text-sm">
                      Bank Name
                    </p>
                    <p className="font-semibold text-sm sm:text-base md:text-[1.05rem]">
                      Central Bank of India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection
            animation="fade-in-up"
            className="text-center pt-2"
            delay={0.3}
          >
            <p className="text-emerald-100/85 text-[13px] sm:text-sm md:text-base mb-3 sm:mb-4">
              Once your accommodation and registration fees are paid, complete the registration form
              to confirm your stay.
            </p>
            <Link to="/register">
              <Button
                size="lg"
                className="bg-gradient-to-r from-emerald-400 via-teal-400 to-emerald-300 text-slate-950 hover:from-emerald-300 hover:via-teal-300 hover:to-emerald-200 shadow-[0_0_40px_rgba(34,197,94,0.8)] hover:shadow-[0_0_55px_rgba(34,197,94,1)] text-sm sm:text-base md:text-lg px-8 sm:px-10 md:px-12 h-11 sm:h-12 md:h-14 font-semibold rounded-2xl"
              >
                Proceed to Registration
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
