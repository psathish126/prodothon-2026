import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

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
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Header */}
      <section className="relative py-16 md:py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-4">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
                Stay at PSG Campus • Safe & Comfortable
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Accommodation
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
                Well‑organized hostel facilities for PRODOTHON&apos;26
                participants with separate arrangements for boys and girls.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-10 md:space-y-12">
          {/* Guidelines */}
          <AnimatedSection animation="fade-in-up">
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-md rounded-3xl">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="font-heading text-xl md:text-2xl text-secondary">
                  General Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2.5 md:space-y-3 text-sm md:text-base">
                  {guidelines.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1 text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Accommodation Fees */}
          <AnimatedSection animation="fade-in-up" delay={0.1}>
            <Card className="shadow-card border-0 bg-white/85 backdrop-blur-md rounded-3xl overflow-hidden">
              <CardHeader className="bg-secondary text-white rounded-t-3xl px-6 md:px-8 py-4 md:py-5">
                <CardTitle className="font-heading text-xl md:text-2xl">
                  Accommodation Fees (Per Day)
                </CardTitle>
              </CardHeader>
              <CardContent className="p-5 md:p-6 lg:p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                  {/* Boys Hostel */}
                  <div className="bg-peach/35 rounded-2xl p-5 md:p-6">
                    <h4 className="font-heading text-lg md:text-xl font-semibold text-secondary mb-3 md:mb-4 pb-2 border-b border-secondary/20">
                      Boys Hostel
                    </h4>
                    <div className="space-y-3">
                      {boysHostel.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-secondary/10 last:border-0"
                        >
                          <span className="text-foreground text-sm md:text-base">
                            {item.type}
                          </span>
                          <span className="text-accent font-bold text-sm md:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Girls Hostel */}
                  <div className="bg-peach/35 rounded-2xl p-5 md:p-6">
                    <h4 className="font-heading text-lg md:text-xl font-semibold text-secondary mb-3 md:mb-4 pb-2 border-b border-secondary/20">
                      Girls Hostel
                    </h4>
                    <div className="space-y-3">
                      {girlsHostel.map((item, index) => (
                        <div
                          key={index}
                          className="flex justify-between items-center py-2 border-b border-secondary/10 last:border-0"
                        >
                          <span className="text-foreground text-sm md:text-base">
                            {item.type}
                          </span>
                          <span className="text-accent font-bold text-sm md:text-base">
                            {item.price}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-xs md:text-sm text-muted-foreground mt-4">
                  Note: Food‑included options cover breakfast, lunch, and dinner
                  at the respective hostel mess.
                </p>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Hostel Rules */}
          <AnimatedSection animation="fade-in-up" delay={0.2}>
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-md rounded-3xl">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="font-heading text-xl md:text-2xl text-secondary">
                  Hostel Rules &amp; Regulations
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 text-sm md:text-base">
                  {hostelRules.map((rule, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-3 text-muted-foreground"
                    >
                      <span className="bg-secondary text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
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
          <AnimatedSection animation="fade-in-up" delay={0.3}>
            <Card className="shadow-card border-0 bg-white/80 backdrop-blur-md rounded-3xl">
              <CardHeader className="pb-3 md:pb-4">
                <CardTitle className="font-heading text-xl md:text-2xl text-secondary">
                  Payment Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2.5 md:space-y-3 text-sm md:text-base">
                  {paymentGuidelines.map((item, index) => (
                    <li
                      key={index}
                      className="flex items-start gap-2 text-muted-foreground"
                    >
                      <span className="mt-1 text-accent font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Bank Details */}
          <AnimatedSection animation="scale-in" delay={0.4}>
            <Card className="shadow-card border-0 bg-primary text-white rounded-3xl overflow-hidden">
              <CardHeader className="px-6 md:px-8 pt-5 md:pt-6 pb-3">
                <CardTitle className="font-heading text-xl md:text-2xl text-accent">
                  Bank Details for Payment
                </CardTitle>
              </CardHeader>
              <CardContent className="px-6 md:px-8 pb-6 md:pb-7">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <p className="text-white/70 text-xs md:text-sm">
                      Name of Account Holder
                    </p>
                    <p className="font-semibold text-sm md:text-base">
                      PSG Center for Nonformal and Continuing Education
                    </p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs md:text-sm">
                      Account Number
                    </p>
                    <p className="font-semibold text-accent text-lg md:text-xl">
                      1481267367
                    </p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs md:text-sm">
                      IFSC Code
                    </p>
                    <p className="font-semibold text-accent text-lg md:text-xl">
                      CBIN0280913
                    </p>
                  </div>
                  <div>
                    <p className="text-white/70 text-xs md:text-sm">
                      Bank Name
                    </p>
                    <p className="font-semibold text-sm md:text-base">
                      Central Bank of India
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedSection className="text-center">
            <p className="text-muted-foreground text-sm md:text-base mb-3">
              Once your accommodation and registration fees are paid, complete
              the registration form to confirm your stay.
            </p>
            <Link to="/register">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-base md:text-lg px-10 md:px-12 h-12 md:h-14 font-semibold"
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
