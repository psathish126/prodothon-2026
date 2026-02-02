import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Calendar, Users, Award, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Hero / Header – light glass like Home */}
  
      {/* Content */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl space-y-8 sm:space-y-10 md:space-y-12">
          {/* What is Prodothon */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0 hidden md:flex items-center justify-center border border-emerald-200">
                    <Lightbulb className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5">
                      What is Prodothon?
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-slate-700 leading-relaxed">
                      Prodothon is an inter‑college festival organized by the Department of Production
                      Engineering, PSG College of Technology. Spanning two days, it is tailored for
                      undergraduate students from the mechanical stream with events, competitions,
                      workshops, entrepreneurial initiatives, presentations, and exhibitions, providing
                      a dynamic platform to showcase technical expertise, problem‑solving skills, and
                      innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Vision */}
          <AnimatedSection animation="slide-right">
            <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-cyan-50 text-cyan-600 flex-shrink-0 hidden md:flex items-center justify-center border border-cyan-200">
                    <Eye className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5">
                      Our Vision
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-slate-700 leading-relaxed">
                      To become a flagship event that inspires the next generation of engineers to
                      pursue excellence in manufacturing and mechanical engineering, bridging the gap
                      between academic learning and industry practices while promoting sustainable,
                      innovative solutions rooted in strong values and social responsibility.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Mission */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl overflow-hidden">
              <CardContent className="p-5 sm:p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-4 md:gap-6">
                  <div className="p-4 rounded-2xl bg-emerald-50 text-emerald-600 flex-shrink-0 hidden md:flex items-center justify-center border border-emerald-200">
                    <Target className="h-8 w-8 md:h-10 md:w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-2xl sm:text-3xl font-bold text-slate-900 mb-3 sm:mb-4 md:mb-5">
                      Our Mission
                    </h2>
                    <p className="text-[13px] sm:text-sm md:text-base text-slate-700 leading-relaxed">
                      To foster innovation, technical proficiency, and collaborative learning by
                      providing a competitive platform that emphasizes cutting‑edge technologies,
                      practical knowledge, industry‑relevant skills, and teamwork, helping students
                      grow into future‑ready professionals.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Event Highlights / Stats */}
          <AnimatedSection animation="fade-in-up">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 pt-2 sm:pt-3">
              <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 text-center bg-white rounded-2xl hover:shadow-[0_22px_80px_rgba(16,185,129,0.28)] hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-200">
                    <Calendar className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-600 mb-1">
                    2
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">
                    Days of innovation
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 text-center bg-white rounded-2xl hover:shadow-[0_22px_80px_rgba(16,185,129,0.28)] hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-200">
                    <Award className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-600 mb-1">
                    8+
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">
                    Technical &amp; non‑tech events
                  </p>
                </CardContent>
              </Card>

              <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 text-center bg-white rounded-2xl hover:shadow-[0_22px_80px_rgba(16,185,129,0.28)] hover:-translate-y-1 transition-all duration-300">
                <CardContent className="p-5 sm:p-6 md:p-7">
                  <div className="mx-auto w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-emerald-50 flex items-center justify-center mb-3 sm:mb-4 border border-emerald-200">
                    <Users className="h-6 w-6 sm:h-7 sm:w-7 md:h-8 md:w-8 text-emerald-600" />
                  </div>
                  <div className="text-3xl sm:text-4xl md:text-5xl font-heading font-bold text-emerald-600 mb-1">
                    1000+
                  </div>
                  <p className="text-slate-700 text-xs sm:text-sm md:text-base font-medium">
                    Expected participants
                  </p>
                </CardContent>
              </Card>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default About;
