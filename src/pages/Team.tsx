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
  { sno: 1, position: "Secretary", name: "BALAJI C", image: "/team/balaji.HEIC" },
  { sno: 2, position: "Treasurer", name: "DEVISRI J", image: "/team/devisri.HEIC" },
  { sno: 3, position: "Joint Secretary", name: "SUKANTH N R", image: "/team/sukanthnr.HEIC" },
  { sno: 4, position: "Joint Secretary", name: "NHARGUNA NANGAI M B", image: "/team/nharguna.HEIC" },
  { sno: 5, position: "Graduate Executive", name: "NALVETHA B", image: "/team/nalvetha.HEIC" },
  { sno: 6, position: "Senior Lead Executive", name: "ARUNRAJA C", image: "/team/arunraja.HEIC" },
  { sno: 7, position: "Senior Lead Executive", name: "S SHANMUGAM", image: "/team/shanmugam.HEIC" },
  { sno: 8, position: "Senior Lead Executive", name: "RAMAKRISHNAN K", image: "/team/ramakrishnan.HEIC" },
  { sno: 9, position: "Senior Lead Executive", name: "HARISH N", image: "/team/harish.HEIC" },
  { sno: 10, position: "Junior Executive", name: "KANCIA ROSLIN MARY S", image: "/team/kancia.HEIC" },
  { sno: 11, position: "Junior Executive", name: "AISHAA NIHAR Z", image: "/team/aishaa.HEIC" },
  { sno: 12, position: "Junior Executive", name: "NEKA S", image: "/team/neka.HEIC" },
  { sno: 13, position: "Junior Executive", name: "DHANALAKSHMI K", image: "/team/dhanalakshmi.HEIC" },
  { sno: 14, position: "Junior Executive", name: "MAKESHWARAN T", image: "/team/makeshwaran.HEIC" },
  { sno: 15, position: "Junior Executive", name: "KARUNYA V", image: "/team/karunya.HEIC" },
];

const smeMembers: Member[] = [
  { sno: 1, position: "Secretary", name: "LAKSHMAN RAGHAV V G", image: "/team/lakshman.HEIC" },
  { sno: 2, position: "Treasurer", name: "DIYA VISALI R S", image: "/team/diya.HEIC" },
  { sno: 3, position: "Joint Secretary", name: "RITHIKA G", image: "/team/rithika.HEIC" },
  { sno: 4, position: "Joint Secretary", name: "NIMESHA S", image: "/team/nimesha.HEIC" },
  { sno: 5, position: "Graduate Executive", name: "NARMADA B S", image: "/team/narmada.HEIC" },
  { sno: 6, position: "Senior Lead Executive", name: "K KARTHIKRAJA", image: "/team/karthikraja.HEIC" },
  { sno: 7, position: "Senior Lead Executive", name: "MANJUSWETHA S V", image: "/team/manjuswetha.HEIC" },
  { sno: 8, position: "Senior Lead Executive", name: "KRISITHA J S", image: "/team/krisitha.HEIC" },
  { sno: 9, position: "Senior Lead Executive", name: "MUGILAN N", image: "/team/mugilan.HEIC" },
  { sno: 10, position: "Junior Executive", name: "ARI PRASANNA V", image: "/team/ariprasanna.HEIC" },
  { sno: 11, position: "Junior Executive", name: "S ABIRAMI", image: "/team/abirami.HEIC" },
  { sno: 12, position: "Junior Executive", name: "DINESH KARTHICK N C", image: "/team/dineshkarthick.HEIC" },
  { sno: 13, position: "Junior Executive", name: "SUNANTHIKA S", image: "/team/sunanthika.HEIC" },
  { sno: 14, position: "Junior Executive", name: "NUTHANASRI V R", image: "/team/nuthanasri.HEIC" },
  { sno: 15, position: "Junior Executive", name: "M LOGESHWARAN", image: "/team/logeshwaran.HEIC" },
];

const MemberCard = ({
  member,
  accentColor,
}: {
  member: Member;
  accentColor: string;
}) => (
  <Card className="shadow-card hover:shadow-card-hover transition-all duration-300 border-0 overflow-hidden group hover:-translate-y-2 bg-card/95 backdrop-blur-md rounded-2xl">
    <CardContent className="p-0">
      {/* Photo Section */}
      <div
        className={`relative h-32 sm:h-36 ${accentColor} flex items-center justify-center overflow-hidden`}
      >
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/10 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-black/30 backdrop-blur-sm flex items-center justify-center border-2 border-white/40 group-hover:scale-110 transition-transform duration-300">
            <User className="w-8 h-8 sm:w-10 sm:h-10 text-white/85" />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="p-3 sm:p-4 text-center">
        <h3 className="font-heading text-sm sm:text-base font-bold text-foreground mb-1 line-clamp-2">
          {member.name}
        </h3>
        <span
          className={`inline-block px-3 py-1 rounded-full text-[10px] sm:text-xs font-semibold ${
            member.position === "Secretary"
              ? "bg-accent text-accent-foreground"
              : member.position === "Treasurer"
              ? "bg-secondary text-white"
              : "bg-peach text-primary"
          }`}
        >
          {member.position}
        </span>
      </div>
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
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-5">
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
              <p className="text-sm md:text-base text-white/85">
                Office bearers of Production Engineering Association (PEA) and
                Society of Manufacturing Engineers (SME) Students&apos; Chapter.
              </p>
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
