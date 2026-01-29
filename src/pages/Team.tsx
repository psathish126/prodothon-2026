import { Card, CardContent } from "@/components/ui/card";
import { User, Sparkles } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

type Club = "PEA" | "SME";

type Member = {
  sno: number;
  position: string; // Secretary, Treasurer, etc.
  name: string;
  image: string; // file under public/team
  club: Club;
};

const members: Member[] = [
  // PEA
  { sno: 1, position: "Secretary", name: "BALAJI C", image: "/team/balaji.jpg", club: "PEA" },
  { sno: 2, position: "Treasurer", name: "DEVISRI J", image: "/team/devi.jpg", club: "PEA" },
  { sno: 3, position: "Joint Secretary", name: "SUKANTH N R", image: "", club: "PEA" },
  { sno: 4, position: "Joint Secretary", name: "NHARGUNA NANGAI M B", image: "/team/nangai.jpg", club: "PEA" },
  { sno: 5, position: "Graduate Executive", name: "NALVETHA B", image: "", club: "PEA" },
  { sno: 6, position: "Senior Lead Executive", name: "ARUNRAJA C", image: "", club: "PEA" },
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
  { sno: 21, position: "Senior Lead Executive", name: "K KARTHIKRAJA", image: "", club: "SME" },
  { sno: 22, position: "Senior Lead Executive", name: "MANJUSWETHA S V", image: "/team/manju.jpg", club: "SME" },
  { sno: 23, position: "Senior Lead Executive", name: "KRISITHA J S", image: "/team/krish.jpg", club: "SME" },
  { sno: 24, position: "Senior Lead Executive", name: "MUGILAN N", image: "/team/mug.jpg", club: "SME" },
  { sno: 25, position: "Junior Executive", name: "ARI PRASANNA V", image: "/team/ari.jpg", club: "SME" },
  { sno: 26, position: "Junior Executive", name: "S ABIRAMI", image: "/team/abi.jpg", club: "SME" },
  { sno: 27, position: "Junior Executive", name: "DINESH KARTHICK N C", image: "", club: "SME" },
  { sno: 28, position: "Junior Executive", name: "SUNANTHIKA S", image: "/team/suna.jpg", club: "SME" },
  { sno: 29, position: "Junior Executive", name: "NUTHANASRI V R", image: "/team/nuthana.jpg", club: "SME" },
  { sno: 30, position: "Junior Executive", name: "M LOGESHWARAN", image: "/team/logeshwaran.jpg", club: "SME" },
];

// group members by position
const positions = [
  "Secretary",
  "Treasurer",
  "Joint Secretary",
  "Graduate Executive",
  "Senior Lead Executive",
  "Junior Executive",
] as const;

const positionColors: Record<(typeof positions)[number], string> = {
  Secretary: "from-emerald-500 via-emerald-400 to-teal-400",
  Treasurer: "from-sky-500 via-cyan-400 to-emerald-300",
  "Joint Secretary": "from-fuchsia-500 via-pink-500 to-rose-400",
  "Graduate Executive": "from-amber-500 via-orange-400 to-yellow-300",
  "Senior Lead Executive": "from-purple-500 via-violet-500 to-indigo-400",
  "Junior Executive": "from-emerald-400 via-teal-400 to-emerald-300",
};

const MemberCard = ({ member }: { member: Member }) => (
  <Card className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 shadow-[0_18px_60px_rgba(0,0,0,0.9)] hover:shadow-[0_22px_80px_rgba(34,197,94,0.6)] transition-all duration-400 border border-emerald-300/25 overflow-hidden group hover:-translate-y-2 rounded-3xl">
    {/* glow overlay */}
    <div className="pointer-events-none absolute inset-0 rounded-3xl bg-[radial-gradient(circle_at_top,rgba(45,212,191,0.4),transparent_55%)] opacity-0 group-hover:opacity-80 transition-opacity duration-500" />

    {/* Photo Section */}
    <div className="relative h-36 xs:h-40 sm:h-44 bg-slate-900 flex items-end justify-center overflow-hidden rounded-t-3xl">
      {member.image ? (
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = "none";
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-slate-700">
          <User className="w-10 h-10 sm:w-12 sm:h-12 text-white/85" />
        </div>
      )}

      {/* white wave bottom */}
      <svg
        className="absolute bottom-0 left-0 right-0 w-full"
        viewBox="0 0 500 80"
        preserveAspectRatio="none"
      >
        <path d="M0,40 C150,80 350,0 500,40 L500,80 L0,80 Z" fill="#ffffff" />
      </svg>
    </div>

    {/* Info Section */}
    <CardContent className="relative pt-3.5 pb-4 sm:pb-5 px-3.5 sm:px-4 text-center bg-white rounded-b-3xl">
      <h3 className="font-heading text-xs sm:text-sm md:text-base font-semibold text-slate-900 mb-1">
        {member.name}
      </h3>
      <p className="text-[10px] sm:text-xs md:text-sm text-slate-500">
        {member.position} – {member.club}
      </p>
    </CardContent>
  </Card>
);

const PositionSection = ({ position }: { position: (typeof positions)[number] }) => {
  const sectionMembers = members.filter((m) => m.position === position);
  if (sectionMembers.length === 0) return null;

  const gradient = positionColors[position];

  return (
    <div className="space-y-5 sm:space-y-6 md:space-y-8">
      <div className="relative rounded-2xl md:rounded-3xl p-[1px] bg-gradient-to-r from-emerald-400/80 via-teal-400/80 to-emerald-300/80 shadow-[0_16px_60px_rgba(34,197,94,0.6)]">
        <div
          className={`relative ${gradient} rounded-2xl md:rounded-3xl px-5 sm:px-6 md:px-7 py-4 sm:py-5 text-center text-slate-950 overflow-hidden`}
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.4),transparent_55%)] opacity-60" />
          <div className="relative z-10">
            <h2 className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-1">
              {position}
            </h2>
            <p className="text-slate-900/85 text-[11px] sm:text-xs md:text-sm font-medium">
              Office bearers
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4 md:gap-6">
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
    <div className="min-h-screen pt-24 sm:pt-28 md:pt-32 bg-[radial-gradient(circle_at_top,_#020617_0,_#020617_40%,_#000000_100%)] text-white">
      {/* Header – jazzy glass */}
      <section className="relative py-14 sm:py-16 md:py-20 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(45,212,191,0.3),transparent_55%),radial-gradient(circle_at_bottom,_rgba(251,191,36,0.25),transparent_55%)] opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/70 to-slate-950/90" />
        <div className="pointer-events-none absolute inset-0 opacity-[0.16] hidden sm:block">
          <div className="w-[200%] h-[200%] bg-[linear-gradient(to_right,rgba(148,163,184,0.18)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.18)_1px,transparent_1px)] bg-[size:40px_40px] animate-[slow-pan_35s_linear_infinite]" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto bg-white/5 border border-white/15 rounded-[28px] sm:rounded-[32px] shadow-[0_22px_110px_rgba(0,0,0,0.9)] backdrop-blur-2xl px-5 sm:px-7 md:px-10 py-7 sm:py-8 md:py-10 space-y-3">
              <p className="text-[10px] xs:text-[11px] md:text-xs uppercase tracking-[0.3em] sm:tracking-[0.35em] text-emerald-100/80">
                Student Leaders • 2025–26
              </p>
              <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-[3.3rem] font-black">
                <span className="bg-gradient-to-r from-emerald-300 via-teal-200 to-amber-200 bg-clip-text text-transparent inline-block drop-shadow-[0_0_35px_rgba(0,0,0,0.85)]">
                  Our Team
                </span>
              </h1>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Team by role (combined PEA + SME) */}
      <section className="py-14 sm:py-16 md:py-20 bg-gradient-to-b from-slate-950 via-slate-950 to-black relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(34,197,94,0.25),transparent_55%)] opacity-80" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 space-y-10 sm:space-y-12 md:space-y-16 relative z-10">
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
