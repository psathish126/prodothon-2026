import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const Team = () => {
  const peaMembers = [
    { sno: 1, position: "Secretary", name: "BALAJI C" },
    { sno: 2, position: "Treasurer", name: "DEVISRI J" },
    { sno: 3, position: "Joint Secretary", name: "SUKANTH N R" },
    { sno: 4, position: "Joint Secretary", name: "NHARGUNA NANGAI M B" },
    { sno: 5, position: "Graduate Executive", name: "NALVETHA B" },
    { sno: 6, position: "Senior Lead Executive", name: "ARUNRAJA C" },
    { sno: 7, position: "Senior Lead Executive", name: "S SHANMUGAM" },
    { sno: 8, position: "Senior Lead Executive", name: "RAMAKRISHNAN K" },
    { sno: 9, position: "Senior Lead Executive", name: "HARISH N" },
    { sno: 10, position: "Junior Executive", name: "KANCIA ROSLIN MARY S" },
    { sno: 11, position: "Junior Executive", name: "AISHAA NIHAR Z" },
    { sno: 12, position: "Junior Executive", name: "NEKA S" },
    { sno: 13, position: "Junior Executive", name: "DHANALAKSHMI K" },
    { sno: 14, position: "Junior Executive", name: "MAKESHWARAN T" },
    { sno: 15, position: "Junior Executive", name: "KARUNYA V" },
  ];

  const smeMembers = [
    { sno: 1, position: "Secretary", name: "LAKSHMAN RAGHAV V G" },
    { sno: 2, position: "Treasurer", name: "DIYA VISALI R S" },
    { sno: 3, position: "Joint Secretary", name: "RITHIKA G" },
    { sno: 4, position: "Joint Secretary", name: "NIMESHA S" },
    { sno: 5, position: "Graduate Executive", name: "NARMADA B S" },
    { sno: 6, position: "Senior Lead Executive", name: "K KARTHIKRAJA" },
    { sno: 7, position: "Senior Lead Executive", name: "MANJUSWETHA S V" },
    { sno: 8, position: "Senior Lead Executive", name: "KRISITHA J S" },
    { sno: 9, position: "Senior Lead Executive", name: "MUGILAN N" },
    { sno: 10, position: "Junior Executive", name: "ARI PRASANNA V" },
    { sno: 11, position: "Junior Executive", name: "S ABIRAMI" },
    { sno: 12, position: "Junior Executive", name: "DINESH KARTHICK N C" },
    { sno: 13, position: "Junior Executive", name: "SUNANTHIKA S" },
    { sno: 14, position: "Junior Executive", name: "NUTHANASRI V R" },
    { sno: 15, position: "Junior Executive", name: "M LOGESHWARAN" },
  ];

  const MemberCard = ({ member, accentColor }: { member: typeof peaMembers[0]; accentColor: string }) => (
    <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 overflow-hidden group hover:-translate-y-2 bg-card">
      <CardContent className="p-0">
        {/* Photo Section */}
        <div className={`relative h-40 ${accentColor} flex items-center justify-center overflow-hidden`}>
          <div className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border-4 border-white/30 group-hover:scale-110 transition-transform duration-300">
            <User className="w-12 h-12 text-white/80" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
        {/* Info Section */}
        <div className="p-4 text-center">
          <h3 className="font-heading text-base font-bold text-foreground mb-1 line-clamp-1">
            {member.name}
          </h3>
          <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
            member.position === "Secretary" ? "bg-accent text-accent-foreground" :
            member.position === "Treasurer" ? "bg-secondary text-white" :
            "bg-peach text-primary"
          }`}>
            {member.position}
          </span>
        </div>
      </CardContent>
    </Card>
  );

  const TeamSection = ({ title, subtitle, members, bgColor }: { 
    title: string; 
    subtitle: string; 
    members: typeof peaMembers; 
    bgColor: string 
  }) => (
    <div className="space-y-8">
      <div className={`${bgColor} text-white rounded-2xl p-6 text-center shadow-card`}>
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        <p className="text-white/80 text-sm">{subtitle}</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {members.map((member, index) => (
          <AnimatedSection key={member.sno} animation="scale-in" delay={index * 0.05}>
            <MemberCard member={member} accentColor={bgColor} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Our Team
            </h1>
            <p className="text-xl text-white/90">
              Office Bearers for Academic Year 2025–26
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-16 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 space-y-16">
          <AnimatedSection animation="fade-in-up">
            <TeamSection
              title="Production Engineering Association (PEA)"
              subtitle="Office Bearers for Academic Year 2025–26"
              members={peaMembers}
              bgColor="bg-secondary"
            />
          </AnimatedSection>

          <AnimatedSection animation="fade-in-up">
            <TeamSection
              title="Society of Manufacturing Engineers (SME)"
              subtitle="Students' Chapter"
              members={smeMembers}
              bgColor="bg-primary"
            />
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Team;
