import { Card } from "@/components/ui/card";
import { User } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Club = "PEA" | "SME";

type Member = {
  sno: number;
  position: string;
  name: string;
  image: string;
  club?: Club; // optional so Website Developer can be neutral
};

const members: Member[] = [
  // PEA
  { sno: 1, position: "Secretary", name: "BALAJI C", image: "/team/balaji.jpg", club: "PEA" },
  { sno: 2, position: "Treasurer", name: "DEVISRI J", image: "/team/devi.jpg", club: "PEA" },
  { sno: 3, position: "Joint Secretary", name: "SUKANTH N R", image: "", club: "PEA" },
  { sno: 4, position: "Joint Secretary", name: "NHARGUNA NANGAI M B", image: "/team/nangai.jpg", club: "PEA" },
  { sno: 5, position: "Graduate Executive", name: "NALVETHA B", image: "", club: "PEA" },
  { sno: 7, position: "Senior Lead Executive", name: "S SHANMUGAM", image: "/team/shan.jpg", club: "PEA" },
  { sno: 8, position: "Senior Lead Executive", name: "RAMAKRISHNAN K", image: "/team/rama.jpg", club: "PEA" },
  { sno: 9, position: "Senior Lead Executive", name: "HARISH N", image: "/team/hari.jpg", club: "PEA" },
  { sno: 10, position: "Junior Executive", name: "KANCIA ROSLIN MARY S", image: "/team/kan.jpg", club: "PEA" },
  { sno: 11, position: "Junior Executive", name: "AISHAA NIHAR Z", image: "/team/aisha.jpg", club: "PEA" },
  { sno: 12, position: "Junior Executive", name: "NEKA S", image: "/team/neka.jpg", club: "PEA" },
  { sno: 13, position: "Junior Executive", name: "DHANALAKSHMI K", image: "/team/dhana.jpg", club: "PEA" },
  { sno: 14, position: "Junior Executive", name: "MAKESHWARAN T", image: "/team/mahe.jpg", club: "PEA" },
  { sno: 15, position: "Junior Executive", name: "KARUNYA V", image: "/team/karu.jpg", club: "PEA" },

  // SME
  { sno: 16, position: "Secretary", name: "LAKSHMAN RAGHAV V G", image: "/team/laks.jpg", club: "SME" },
  { sno: 17, position: "Treasurer", name: "DIYA VISALI R S", image: "", club: "SME" },
  { sno: 18, position: "Joint Secretary", name: "RITHIKA G", image: "/team/rithi.jpg", club: "SME" },
  { sno: 19, position: "Joint Secretary", name: "NIMESHA S", image: "/team/nime.jpg", club: "SME" },
  { sno: 20, position: "Graduate Executive", name: "NARMADA B S", image: "/team/narmada.jpg", club: "SME" },
  { sno: 22, position: "Senior Lead Executive", name: "MANJUSWETHA S V", image: "/team/manju.jpg", club: "SME" },
  { sno: 23, position: "Senior Lead Executive", name: "KRISITHA J S", image: "/team/krish.jpg", club: "SME" },
  { sno: 24, position: "Senior Lead Executive", name: "MUGILAN N", image: "/team/mug.jpg", club: "SME" },
  { sno: 25, position: "Junior Executive", name: "ARI PRASANNA V", image: "/team/ari.jpg", club: "SME" },
  { sno: 26, position: "Junior Executive", name: "S ABIRAMI", image: "/team/abi.jpg", club: "SME" },
  { sno: 27, position: "Junior Executive", name: "DINESH KARTHICK N C", image: "", club: "SME" },
  { sno: 28, position: "Junior Executive", name: "SUNANTHIKA S", image: "/team/suna.jpg", club: "SME" },
  { sno: 29, position: "Junior Executive", name: "NUTHANASRI V R", image: "/team/nuthana.jpg", club: "SME" },
  { sno: 30, position: "Junior Executive", name: "M LOGESHWARAN", image: "/team/logeshwaran.jpg", club: "SME" },

  // Website Developer (neutral, not PEA/SME)
  {
    sno: 31,
    position: "Website Developer",
    name: "SATHISH C",
    image: "/team/sathish.jpeg",
  },
];

const positions = [
  "Secretary",
  "Treasurer",
  "Joint Secretary",
  "Graduate Executive",
  "Senior Lead Executive",
  "Junior Executive",
  "Website Developer",
] as const;

const positionColors: Record<(typeof positions)[number], string> = {
  Secretary: "from-emerald-500 via-emerald-400 to-teal-400",
  Treasurer: "from-sky-500 via-cyan-400 to-emerald-300",
  "Joint Secretary": "from-teal-500 via-emerald-500 to-cyan-400",
  "Graduate Executive": "from-amber-500 via-orange-400 to-emerald-400",
  "Senior Lead Executive": "from-emerald-600 via-teal-600 to-slate-800",
  "Junior Executive": "from-emerald-400 via-teal-400 to-emerald-300",
  "Website Developer": "from-slate-900 via-slate-800 to-emerald-500",
};

const MemberCard = ({ member }: { member: Member }) => (
  <Card className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-[0_18px_50px_rgba(15,23,42,0.10)] hover:shadow-[0_22px_70px_rgba(16,185,129,0.35)] transition-all duration-300 hover:-translate-y-1">
    {/* Consistent card ratio */}
    <div className="relative w-full aspect-[3/4] overflow-hidden">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      ) : (
        <div className="h-full w-full flex items-center justify-center bg-slate-800">
          <User className="w-12 h-12 text-white/85" />
        </div>
      )}

      {/* Emerald gradient overlay at bottom */}
      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-emerald-700 via-emerald-500/95 to-transparent" />

      {/* Text on top of gradient */}
      <div className="absolute inset-x-0 bottom-0 px-4 pb-4 text-left">
        <h3 className="font-heading text-sm sm:text-base md:text-lg font-semibold text-white">
          {member.name}
        </h3>

        {member.club && (
          <p className="text-[11px] sm:text-xs md:text-sm text-emerald-50/90">
            {member.club === "PEA"
              ? "Production Engineering Association"
              : "SME Students' Chapter"}
          </p>
        )}

        {!member.club && (
          <p className="text-[11px] sm:text-xs md:text-sm text-emerald-50/90">
            PRODOTHON&apos;26 Website Team
          </p>
        )}
      </div>
    </div>
  </Card>
);

const PositionSection = ({ position }: { position: (typeof positions)[number] }) => {
  const sectionMembers = members.filter((m) => m.position === position);
  if (sectionMembers.length === 0) return null;

  const gradient = positionColors[position];

  return (
    <div className="space-y-5 sm:space-y-6 md:space-y-8">
      {/* Section header */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold text-slate-900">
            {position}
          </h2>
        </div>
        <div
          className={`hidden sm:block h-10 w-32 rounded-full bg-gradient-to-r ${gradient} opacity-80`}
        />
      </div>

      {/* Mobile: horizontal scroll */}
      <div className="sm:hidden -mx-4 px-4 overflow-x-auto pb-2">
        <div className="flex gap-4">
          {sectionMembers.map((member, index) => (
            <AnimatedSection
              key={member.sno}
              animation="scale-in"
              delay={index * 0.04}
            >
              <div className="w-56 flex-shrink-0">
                <MemberCard member={member} />
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>

      {/* Desktop / tablet: grid */}
      <div className="hidden sm:grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sectionMembers.map((member, index) => (
          <AnimatedSection
            key={member.sno}
            animation="scale-in"
            delay={index * 0.04}
          >
            <MemberCard member={member} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  );
};

const Team = () => {
  return (
    <div className="min-h-screen pt-20 sm:pt-20 md:pt-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 text-slate-900">
      {/* Simple hero heading */}
      <section className="pb-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="text-center space-y-2">
            <p className="text-[11px] sm:text-xs tracking-[0.28em] uppercase text-emerald-700/80">
              Student Leaders • 2025–26
            </p>
            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl font-black">
              <span className="bg-gradient-to-r from-emerald-600 via-teal-500 to-amber-500 bg-clip-text text-transparent inline-block">
                Our Team
              </span>
            </h1>
          </div>
        </div>
      </section>

      {/* Team by role */}
      <section className="py-8 sm:py-12 md:py-16 bg-gradient-to-b from-slate-50 via-white to-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-16 max-w-6xl">
          {positions.map((pos) => (
            <AnimatedSection key={pos} animation="fade-in-up">
              <PositionSection position={pos} />
            </AnimatedSection>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Team;
