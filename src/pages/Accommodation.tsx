import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";
import { Sparkles } from "lucide-react";

const Accommodation = () => {
  const points = [
    "Participants are required to make their own accommodation arrangements as per their convenience and preference.",
    "Accommodation will NOT be provided by the organizing team.",
    "During registration, participants may indicate Yes/No if accommodation assistance is required.",
    "All accommodation-related expenses will be entirely borne by the participants.",
    "If requested, the organizing team may share suggestions of nearby hostels, lodges, or guest houses only for reference.",
    "Booking, payment, availability, and stay arrangements are the sole responsibility of the participants.",
    "Participants are advised to plan their accommodation well in advance to avoid last-minute inconvenience.",
  ];

  return (
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Header – align with light Home/Events */}
      

      {/* Main content */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-8 sm:space-y-10 md:space-y-12">
          <AnimatedSection animation="fade-in-up">
            <Card className="shadow-[0_18px_60px_rgba(15,23,42,0.12)] border border-slate-200 bg-white rounded-3xl">
              <CardHeader className="pb-3 sm:pb-4 border-b border-slate-200 px-5 sm:px-6 md:px-7 pt-5 sm:pt-6">
                <CardTitle className="font-heading text-xl sm:text-2xl text-slate-900 flex items-center gap-2">
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-emerald-50 border border-emerald-300">
                    <Sparkles className="h-3.5 w-3.5 text-emerald-500" />
                  </span>
                  <span>Accommodation</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4 sm:pt-5 pb-5 sm:pb-6 md:pb-7 px-5 sm:px-6 md:px-7">
                <ul className="space-y-2.5 sm:space-y-3 text-[13px] sm:text-sm md:text-base text-slate-700">
                  {points.map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5 sm:gap-3">
                      <span className="mt-0.5 text-emerald-500 font-bold">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 sm:mt-6 rounded-2xl bg-emerald-50 border border-emerald-200 px-4 sm:px-5 py-3.5 sm:py-4">
                  <p className="text-[13px] sm:text-sm md:text-base text-emerald-800">
                    For any general guidance regarding nearby accommodation options,&nbsp;
                    <span className="font-semibold">
                      Contact: Sukanth N R - 9385414316
                    </span>
                  </p>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

         
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
