import { Card, CardContent } from "@/components/ui/card";
import { User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Member = {
  sno: number;
  position: string;
  name: string;
  image: string; // file under public/team
};

const peaMembers: Member[] = [
  { sno: 1, position: "Secretary", name: "BALAJI C", image: "/team/balaji.jpg" },
  { sno: 2, position: "Treasurer", name: "DEVISRI J", image: "/team/devi.jpg" },
  { sno: 3, position: "Joint Secretary", name: "SUKANTH N R", image: "" },
  { sno: 4, position: "Joint Secretary", name: "NHARGUNA NANGAI M B", image: "/team/nangai.jpg" },
  { sno: 5, position: "Graduate Executive", name: "NALVETHA B", image: "" },
  { sno: 6, position: "Senior Lead Executive", name: "ARUNRAJA C", image: "" },
  { sno: 7, position: "Senior Lead Executive", name: "S SHANMUGAM", image: "/team/shan.jpg" },
  { sno: 8, position: "Senior Lead Executive", name: "RAMAKRISHNAN K", image: "/team/rama.jpg" },
  { sno: 9, position: "Senior Lead Executive", name: "HARISH N", image: "/team/hari.jpg" },
  { sno: 10, position: "Junior Executive", name: "KANCIA ROSLIN MARY S", image: "/team/kan.jpg" },
  { sno: 11, position: "Junior Executive", name: "AISHAA NIHAR Z", image: "/team/aisha.jpg" },
  { sno: 12, position: "Junior Executive", name: "NEKA S", image: "/team/neka.jpg" },
  { sno: 13, position: "Junior Executive", name: "DHANALAKSHMI K", image: "/team/dhana.jpg" },
  { sno: 14, position: "Junior Executive", name: "MAKESHWARAN T", image: "/team/mahe.jpg" },
  { sno: 15, position: "Junior Executive", name: "KARUNYA V", image: "/team/karu.jpg" },
];

const smeMembers: Member[] = [
  { sno: 1, position: "Secretary", name: "LAKSHMAN RAGHAV V G", image: "/team/laks.jpg" },
  { sno: 2, position: "Treasurer", name: "DIYA VISALI R S", image: "" },
  { sno: 3, position: "Joint Secretary", name: "RITHIKA G", image: "/team/rithi.jpg" },
  { sno: 4, position: "Joint Secretary", name: "NIMESHA S", image: "/team/nime.jpg" },
  { sno: 5, position: "Graduate Executive", name: "NARMADA B S", image: "/team/narmada.jpg" },
  { sno: 6, position: "Senior Lead Executive", name: "K KARTHIKRAJA", image: "" },
  { sno: 7, position: "Senior Lead Executive", name: "MANJUSWETHA S V", image: "/team/manju.jpg" },
  { sno: 8, position: "Senior Lead Executive", name: "KRISITHA J S", image: "/team/krish.jpg" },
  { sno: 9, position: "Senior Lead Executive", name: "MUGILAN N", image: "/team/mug.jpg" },
  { sno: 10, position: "Junior Executive", name: "ARI PRASANNA V", image: "/team/ari.jpg" },
  { sno: 11, position: "Junior Executive", name: "S ABIRAMI", image: "/team/abi.jpg" },
  { sno: 12, position: "Junior Executive", name: "DINESH KARTHICK N C", image: "" },
  { sno: 13, position: "Junior Executive", name: "SUNANTHIKA S", image: "/team/suna.jpg" },
  { sno: 14, position: "Junior Executive", name: "NUTHANASRI V R", image: "/team/nuthana.jpg" },
  { sno: 15, position: "Junior Executive", name: "M LOGESHWARAN", image: "/team/logeshwaran.jpg" },
];

const MemberCard = ({
  member,
  accentColor,
}: {
  member: Member;
  accentColor: string;
}) => (
  <Card className="bg-white shadow-lg hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden group hover:-translate-y-2 rounded-3xl">
    {/* Photo Section */}
    <div className="relative h-40 sm:h-48 bg-gray-50 flex items-end justify-center overflow-hidden">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className={`w-full h-full flex items-center justify-center ${accentColor}`}>
          <User className="w-12 h-12 sm:w-14 sm:h-14 text-white/85" />
        </div>
      )}

      {/* white wave bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path
          d="M0,40 C150,80 350,0 500,40 L500,80 L0,80 Z"
          fill="#ffffff"
        />
      </svg>
    </div>

    {/* Info Section */}
    <CardContent className="pt-4 pb-5 px-4 text-center">
      <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-slate-900 mb-1">
        {member.name}
      </h3>
      <p className="text-[11px] sm:text-xs md:text-sm text-slate-500">
        {member.position}
      </p>
    </CardContent>
  </Card>
);

const TeamSection = ({
  title,
  subtitle,
  members,
  bgColor,
}: {
  title: string;
  subtitle: string;
  members: Member[];
  bgColor: string;
}) => (
  <div className="space-y-6 md:space-y-8">
    <div
      className={`${bgColor} text-white rounded-2xl md:rounded-3xl p-5 md:p-6 text-center shadow-card`}
    >
      <h2 className="font-heading text-2xl md:text-3xl font-bold mb-1">
        {title}
      </h2>
      <p className="text-white/85 text-xs md:text-sm">{subtitle}</p>
    </div>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6">
      {members.map((member, index) => (
        <AnimatedSection
          key={member.sno}
          animation="scale-in"
          delay={index * 0.04}
        >
          <MemberCard member={member} accentColor={bgColor} />
        </AnimatedSection>
      ))}
    </div>
  </div>
);

const Team = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Header */}
      <section className="relative py-16 md:py-20 gradient-hero text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-3">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
                Student Leaders • 2025–26
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                Our Team
              </h1>
              
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team Sections */}
      <section className="py-16 md:py-20 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 space-y-12 md:space-y-16">
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
