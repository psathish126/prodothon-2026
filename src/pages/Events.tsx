// Events.tsx
import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Users, Phone, MessageCircle, X } from "lucide-react";
import { Link } from "react-router-dom";
import AnimatedSection from "@/components/AnimatedSection";

type EventCategory = "competition" | "workshop" | "discussion";

interface Coordinator {
  name: string;
  phone: string;
}

interface ProdothonEvent {
  id: number;
  name: string;
  category: EventCategory;
  image: string;
  description: string;
  date: string;
  // venue kept for later usage
  venue: string;
  coordinators: Coordinator[];
  rules: string;
  day: "Day 1" | "Day 2";
}

const Events = () => {
  const [activeFilter, setActiveFilter] = useState<
    "all" | EventCategory | "day1" | "day2"
  >("all");
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const [rulesOpen, setRulesOpen] = useState<number | null>(null);

  const events: ProdothonEvent[] = [
    {
      id: 1,
      name: "Production Meishu",
      category: "competition",
      image: "/eventlogo/The production meishu_.png",
      description:
        "Production Meishu is a platform where participants showcase their expertise in product design, manufacturing, cost estimation, and marketing through a comprehensive presentation before a panel of judges. During the event, a product or case study will be provided, and participants are required to prepare and present their analysis on the same day. The presentation may begin with a detailed product design phase, applying innovation-driven product development principles, followed by the selection of appropriate manufacturing processes and materials with an emphasis on efficiency and cost-effectiveness. Participants are expected to address process planning and cost estimation while integrating lean manufacturing principles to minimize waste and enhance overall production efficiency. Quality control measures must be highlighted to ensure compliance with product specifications, along with environmentally conscious manufacturing practices such as recycling, energy efficiency, and waste reduction. Additionally, the effective application of production and operations management principles, along with supply chain management concepts, will be crucial in optimizing manufacturing processes and improving overall logistics efficiency.",
      date: "Feb 27, 2026 (Friday) • 9:30 AM – 12:30 PM",
      venue: "Main Auditorium",
      day: "Day 1",
      coordinators: [
        { name: "Manjuswetha S V", phone: "6369777609" },
        { name: "Harish N", phone: "7418760901" },
        { name: "Logeshwaran M", phone: "7339506691" },
      ],
      rules: `EVENT RULES & GUIDELINES
The case study will be provided on the day of the event.
Participants must prepare and present their analysis on the same day before a panel of judges.
A maximum of 1.5 hours will be allotted for preparation of the presentation.
The presentation must not exceed 6 slides; an official template will be provided.
Presentation duration shall be 6 minutes, followed by a Question and Answer (Q&A) session.
All submitted work must be original and must not be copied from any source.
The use of AI tools for content generation is discouraged.
Presentations must be submitted within the stipulated time; once submitted, no further modifications will be permitted.
Participants are required to bring their own laptops.
Mobile phones are strictly prohibited during the event.
Writing sheets will be provided to participants for rough work.
Prizes will be awarded to the top three winners in each category (PSG and Non-PSG).`,
    },
    {
      id: 2,
      name: "Paper / Project Presentation",
      category: "competition",
      image: "/eventlogo/Paper presentation_.png",
      description:
        "Paper / Project Presentation is an academic platform created to encourage students to showcase their innovative thinking, technical research and engineering problem-solving skills. This event aims to promote knowledge sharing, critical thinking, and collaborative learning through discussions on emerging trends in the industry. Participants can present Technical Papers OR Project Models / Case Studies related to the suggested mechanical and allied engineering domains listed in the event brochure.",
      date: "Feb 27, 2026 (Friday) • 1:30 PM – 4:30 PM",
      venue: "Seminar Hall A",
      day: "Day 1",
      coordinators: [
        { name: "Rithika G", phone: "8220824986" },
        { name: "Neka S", phone: "9751085106" },
      ],
      rules: `EVENT RULES & SUBMISSION GUIDELINES
Participants may present either individually or in a team of a maximum of two members.
Participants can present Technical Papers OR Project Models / Case Studies.
The submitted paper must be original and free from plagiarism.
Topics should be technical or research-oriented and relevant to the event theme.
Abstract submission is mandatory prior to full paper submission.
Each presentation will be allotted 8–10 minutes, followed by a Question & Answer session.
Presentations must be prepared and delivered using Microsoft PowerPoint (PPT).
Participants are required to carry their presentation on a pen drive.
College ID card must be presented at the time of participation.
Evaluation will be based on content quality, innovation, clarity, and presentation skills.
The decision of the judges shall be final and binding.
Any form of misconduct or plagiarism will result in immediate disqualification.
Certificates will be issued to all participants.`,
    },
    {
      id: 3,
      name: "Workshop on AI-Driven Generative Design & FEA",
      category: "workshop",
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800",
      description:
        "Hands-on workshop that demonstrates how generative design and FEA can be combined to create lightweight, high-performance components. Participants will work through an optimisation case and validate the outcome using FEA tools, gaining exposure to AI-driven design workflows.",
      date: "Feb 27, 2026 (Friday) • 1:30 PM – 4:30 PM",
      venue: "Computer Lab 1",
      day: "Day 1",
      coordinators: [
        { name: "Krisitha J S", phone: "6382163572" },
        { name: "Makeshwaran T", phone: "9342205832" },
      ],
      rules: `WORKSHOP GUIDELINES
This workshop requires hands-on participation.
Seats may be limited and registration is mandatory.
Participants should bring their own laptop with necessary software installed.
Software requirements will be communicated by organizers in advance.
A sample optimisation case will be completed during the session.
Attendance and active participation are required to receive a certificate.`,
    },
    {
      id: 4,
      name: "The CAD Master Challenge",
      category: "competition",
      image: "/eventlogo/Cad combat.jpg",
      description:
        "The CAD/CAM event is a technical design competition aimed at assessing participants’ proficiency in computer-aided design, part modelling, and mechanism animation. The event challenges students to apply their engineering knowledge, creativity, and time-management skills in a simulated industrial design environment through two competitive rounds completed within a fixed duration.",
      date: "Feb 28, 2026 (Saturday) • 9:30 AM – 12:30 PM",
      venue: "CAD Lab",
      day: "Day 2",
      coordinators: [
        { name: "Nharguna Nangai M B", phone: "7904416005" },
        { name: "Sunanthika S", phone: "9488611002" },
      ],
      rules: `EVENT RULES & GUIDELINES
Number of rounds: 2.
Participation criteria: Individual.
Round 1 – Part Modeling within a time limit of 1 hour.
Round 2 – Mechanism Assembly & Animation.
Participants advancing to Round 2 will be selected based on accuracy and completeness.
Judges' decisions are final and binding.`,
    },
    {
      id: 5,
      name: "AutoQuest",
      category: "competition",
      image: "/eventlogo/Autoquest_.jpg",
      description:
        "The Autonomous Parking Challenge is a robotics competition designed to test participants’ skills in autonomous navigation, path planning, and precision parking. The arena simulates a real-world parking lot, and teams must develop intelligent robots that identify parking spaces, navigate safely around obstacles, and park accurately without human intervention across two rounds.",
      date: "Feb 28, 2026 (Saturday) • 9:30 AM – 12:30 PM",
      venue: "Robotics Arena",
      day: "Day 2",
      coordinators: [
        { name: "N Mugilan", phone: "7904083428" },
        { name: "Dhanalakshmi K", phone: "7339092514" },
      ],
      rules: `EVENT RULES & GUIDELINES
Number of rounds: 2.
Participation criteria: Team of 2 to 3 members.
Robots must operate fully autonomously; any human intervention results in penalties.
Dynamic and static obstacles will be present in the arena.
Scores depend on navigation accuracy, parking precision and collision avoidance.
The robot must comply with the specified dimension and weight limits.
The robot must operate safely and avoid collisions at all times.
Scores will be reduced for collisions and incomplete or partial parking.
Any form of human intervention after the start of the task will result in penalties and corresponding score reductions.`,
    },
    {
      id: 6,
      name: "Ladder Rush",
      category: "competition",
      image: "/eventlogo/LadderRush.jpg",
      description:
        "This event is a creative adaptation of Snakes and Ladders that integrates engineering knowledge, teamwork, and quick decision-making. Teams of two advance on the board only when they answer rapid-fire technical questions correctly within a fixed time limit, with winners decided based on the highest board position.",
      date: "Feb 28, 2026 (Saturday) • 1:30 PM – 4:00 PM",
      venue: "Recreation Hall",
      day: "Day 2",
      coordinators: [
        { name: "Sukanth N", phone: "9385414316" },
        { name: "Ari Prasanna V", phone: "9042461791" },
        { name: "Karunya V", phone: "9952200812" },
      ],
      rules: `EVENT RULES & GUIDELINES
Each team shall consist of two members.
The game shall commence only after a team rolls a one (1) on the dice.
Within each team, one member shall roll the dice, while the other shall move the token on the board.
A team shall be permitted to move on the board only upon answering a question correctly.
Team members must answer questions alternately throughout the game.
Each question must be answered within 5 seconds.
If a team fails to answer within the allotted time or answers incorrectly, the question shall not be repeated.
In such cases, the same question shall not be carried forward, and a new question shall be posed to the next team.
The event is time-bound, with each round lasting 20 minutes.
Five teams shall participate in the first round.
Winning teams from the first round shall advance to the second round.
The final winner shall be determined based on the board position achieved within the allotted time.
The game may be conducted in multiple rounds depending on the number of teams.`,
    },
    {
      id: 7,
      name: "Stick It! Structure It!",
      category: "competition",
      image: "/eventlogo/Stick it structure it_.jpg",
      description:
        "Inspired by sustainable engineering practices, this event challenges participants to design and fabricate a miniature truss-based simply supported structure using wooden sticks and basic tools. The model must carry maximum load at mid-span with minimal deflection, promoting efficient material usage and aligning with Sustainable Development Goal 12 on responsible consumption and production.",
      date: "Feb 28, 2026 (Saturday) • 1:30 PM – 4:00 PM",
      venue: "Workshop Hall",
      day: "Day 2",
      coordinators: [
        { name: "Ramakrishnan K", phone: "9344680090" },
        { name: "Nimesha S", phone: "6369672135" },
        { name: "Nuthanasri V", phone: "9360672939" },
      ],
      rules: `EVENT RULES & GUIDELINES
Team size: 2 to 4.
All required materials (sticks, glue, cutters) will be provided by the organizers.
Stick usage must not exceed the announced limit.
Participants must complete the truss within the allotted time.
The use of mobile phones and electronic gadgets is strictly prohibited.
Participants may bring basic tools such as rulers and markers; however, sticks and glue from outside are not permitted.
The truss must be self-supporting and must adhere to the specified dimensions.
Loads will be applied incrementally at mid-span until failure to rank designs.
The judges’ decisions shall be final and binding.`,
    },
    {
      id: 8,
      name: "Panel Discussion on Sustainability in Manufacturing",
      category: "discussion",
      image: "/eventlogo/Panel discussion_.png",
      description:
        "This panel discussion brings together renowned industry professionals, technical experts, and thought leaders to explore emerging approaches shaping the future of sustainable manufacturing. It offers students and budding engineers deep insights into real-world challenges, industry expectations, and practical strategies for embedding sustainability in modern manufacturing environments.",
      date: "Feb 27, 2026 (Friday) • 9:30 AM – 12:30 PM",
      venue: "Conference Hall",
      day: "Day 1",
      coordinators: [
        { name: "Aishaa Nihar Z", phone: "9363022355" },
        { name: "Kancia Roslin Mary S", phone: "8438303204" },
      ],
      rules: `EVENT DETAILS & GUIDELINES
Interactive panel with Q&A.
Participants are expected to maintain decorum and engage respectfully.
Focus on real-world case studies, challenges and solutions in sustainable manufacturing.`,
    },
  ];

  const filters = [
    { id: "all" as const, label: "All Events" },
    { id: "day1" as const, label: "Day 1 – Feb 27" },
    { id: "day2" as const, label: "Day 2 – Feb 28" },
    { id: "competition" as const, label: "Competitions" },
    { id: "workshop" as const, label: "Workshops" },
    { id: "discussion" as const, label: "Discussion" },
  ];

  const filteredEvents = events.filter((e) => {
    if (activeFilter === "all") return true;
    if (activeFilter === "day1") return e.day === "Day 1";
    if (activeFilter === "day2") return e.day === "Day 2";
    return e.category === activeFilter;
  });

  const handleWhatsApp = (phone: string, eventName: string) => {
    const message = encodeURIComponent(
      `Hi! I'm interested in the event "${eventName}" at PRODOTHON'26. Can you provide more details?`
    );
    window.open(`https://wa.me/91${phone}?text=${message}`, "_blank");
  };

  const handleCall = (phone: string) => {
    window.location.href = `tel:+91${phone}`;
  };

  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-background">
      {/* Hero Header with gradient background */}
      <section className="relative py-16 md:py-20 text-white overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
        {/* decorative radial gradients */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_55%),radial-gradient(circle_at_bottom,_rgba(16,185,129,0.18),_transparent_55%)] opacity-70" />
        {/* dark overlay */}
        <div className="absolute inset-0 bg-black/40" />

        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection animation="scale-in">
            <div className="max-w-3xl mx-auto text-center bg-white/5 border border-white/15 rounded-3xl shadow-2xl backdrop-blur-xl px-6 md:px-10 py-8 md:py-10 space-y-4">
              <p className="text-[11px] md:text-xs uppercase tracking-[0.35em] text-white/70">
                Compete • Learn • Innovate
              </p>
              <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold">
                PRODOTHON&apos;26 Events
              </h1>
              <p className="text-sm md:text-base text-white/85 max-w-2xl mx-auto">
                Explore competitions, workshops, and discussions happening on
                February 27 &amp; 28, 2026. Choose your events and get ready to
                showcase your skills.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Filters below hero */}
      <section className="py-6 md:py-8 bg-background border-b border-border/40">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="fade-in-up">
            <div className="flex flex-wrap justify-center gap-3">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 md:px-5 py-2 rounded-full font-semibold text-xs md:text-sm transition-all duration-300
                    ${
                      activeFilter === filter.id
                        ? "bg-accent text-accent-foreground shadow-lg shadow-accent/40 scale-105"
                        : "bg-secondary/10 text-secondary hover:bg-secondary/20"
                    }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Events list */}
      <section className="pb-16 md:pb-20 bg-gradient-to-b from-background to-peach/10">
        <div className="container mx-auto px-4">
          <div className="space-y-8">
            {filteredEvents.map((event, index) => {
              const isExpanded = expandedEvent === event.id;
              return (
                <AnimatedSection
                  key={event.id}
                  animation="fade-in-up"
                  delay={index * 0.07}
                >
                  <Card className="shadow-card hover:shadow-card-hover transition-all duration-500 border border-border/40 overflow-hidden group bg-card/95 rounded-3xl">
                    <div className="flex flex-col lg:flex-row">
                      {/* Image */}
                      <div className="w-full lg:w-1/3 relative overflow-hidden">
                        <div className="h-56 sm:h-64 lg:h-full">
                          <img
                            src={event.image}
                            alt={event.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-primary/70 to-transparent opacity-60" />
                        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-accent text-accent-foreground text-[11px] font-bold rounded-full shadow">
                            {event.day}
                          </span>
                          <span
                            className={`px-3 py-1 text-[11px] font-bold rounded-full shadow
                              ${
                                event.category === "workshop"
                                  ? "bg-primary text-white"
                                  : event.category === "discussion"
                                  ? "bg-secondary text-white"
                                  : "bg-peach text-primary"
                              }`}
                          >
                            {event.category.charAt(0).toUpperCase() +
                              event.category.slice(1)}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <CardContent className="w-full lg:w-2/3 p-5 md:p-7 flex flex-col">
                        <div className="flex-1">
                          <h3 className="font-heading text-xl md:text-2xl lg:text-3xl font-bold text-secondary mb-3 group-hover:text-primary transition-colors">
                            {event.name}
                          </h3>

                          {/* Date only (venue hidden for now) */}
                          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mb-4">
                            <div className="flex-1 flex items-center gap-3 bg-peach/30 rounded-xl p-3">
                              <Calendar className="h-5 w-5 text-accent flex-shrink-0" />
                              <div>
                                <span className="text-[11px] text-muted-foreground block">
                                  Date &amp; Time
                                </span>
                                <span className="font-semibold text-foreground text-sm md:text-base">
                                  {event.date}
                                </span>
                              </div>
                            </div>
                          </div>

                          {/* Description with line-clamp expand */}
                          <div className="mb-4 md:mb-5">
                            <div
                              className={`
                                text-sm md:text-base text-muted-foreground leading-relaxed
                                transition-all duration-300 ease-in-out
                                ${
                                  isExpanded
                                    ? "line-clamp-none"
                                    : "line-clamp-3"
                                }
                              `}
                            >
                              {event.description}
                            </div>
                            <button
                              onClick={() =>
                                setExpandedEvent(isExpanded ? null : event.id)
                              }
                              className="mt-2 text-accent font-semibold text-xs md:text-sm hover:underline"
                            >
                              {isExpanded ? "Show Less" : "Read More"}
                            </button>
                          </div>

                          {/* Coordinators */}
                          <div className="border-t border-border/50 pt-4">
                            <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground mb-3">
                              <Users className="h-4 w-4 text-accent" />
                              <span className="font-semibold uppercase tracking-wide">
                                Event Coordinators
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                              {event.coordinators.map((coord, idx) => (
                                <div
                                  key={idx}
                                  className="flex items-center justify-between bg-background/80 rounded-lg p-3 shadow-sm border border-border/30"
                                >
                                  <div>
                                    <p className="font-medium text-foreground text-xs md:text-sm">
                                      {coord.name}
                                    </p>
                                    <p className="text-[11px] md:text-xs text-muted-foreground">
                                      {coord.phone}
                                    </p>
                                  </div>
                                  <div className="flex gap-1.5">
                                    <button
                                      onClick={() =>
                                        handleWhatsApp(coord.phone, event.name)
                                      }
                                      className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition-colors"
                                      title="WhatsApp"
                                    >
                                      <MessageCircle className="h-4 w-4" />
                                    </button>
                                    <button
                                      onClick={() => handleCall(coord.phone)}
                                      className="p-2 bg-primary hover:bg-primary/90 text-white rounded-full transition-colors"
                                      title="Call"
                                    >
                                      <Phone className="h-4 w-4" />
                                    </button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* CTAs */}
                        <div className="mt-5 md:mt-6 grid grid-cols-1 gap-3">
                          <button
                            onClick={() => setRulesOpen(event.id)}
                            className="w-full bg-secondary/10 text-secondary hover:bg-secondary/20 font-semibold px-4 py-3 rounded-lg shadow-sm text-sm md:text-base"
                          >
                            Event Rules &amp; Guidelines
                          </button>

                          <Link to="/register" className="block">
                            <Button
                              className="
                                w-full bg-accent text-accent-foreground hover:bg-accent/90
                                font-semibold shadow-lg hover:shadow-xl transition-all duration-300
                                px-4 py-3.5 md:py-4 text-xs sm:text-sm md:text-base
                                whitespace-normal break-words text-center
                              "
                            >
                              <span className="block">
                                Register for {event.name}
                              </span>
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </div>
                  </Card>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rules Modal */}
      {rulesOpen !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setRulesOpen(null)}
          />
          <Card className="relative w-full max-w-2xl z-10 border-0 shadow-2xl max-h-[85vh] flex flex-col bg-card/95 rounded-2xl">
            <div className="sticky top-0 border-b border-border/50 bg-card/95 rounded-t-2xl px-5 md:px-6 py-4 md:py-5 flex justify-between items-center">
              <h2 className="font-heading text-xl md:text-2xl font-bold text-secondary">
                Rules &amp; Guidelines
              </h2>
              <button
                onClick={() => setRulesOpen(null)}
                className="p-1.5 text-muted-foreground hover:text-foreground hover:bg-secondary/10 rounded-lg transition-colors"
                title="Close"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <CardContent className="flex-1 overflow-y-auto p-5 md:p-6">
              <div className="text-xs md:text-sm text-muted-foreground space-y-3 leading-relaxed">
                {(events.find((e) => e.id === rulesOpen)?.rules ||
                  "No rules available for this event.")
                  .split("\n")
                  .filter((line) => line.trim())
                  .map((line, idx) => {
                    const trimmed = line.trim();
                    const isHeader =
                      trimmed.endsWith(":") ||
                      (trimmed === trimmed.toUpperCase() && trimmed.length > 2);
                    return (
                      <div key={idx}>
                        {isHeader ? (
                          <h3 className="font-bold text-secondary mt-4 mb-2">
                            {trimmed.replace(/:$/, "")}
                          </h3>
                        ) : (
                          <div className="flex gap-2 md:gap-3 items-start">
                            <span className="text-accent font-bold mt-0.5 md:mt-1 flex-shrink-0">
                              •
                            </span>
                            <span>{trimmed}</span>
                          </div>
                        )}
                      </div>
                    );
                  })}
              </div>
            </CardContent>
            <div className="sticky bottom-0 border-t border-border/50 bg-card/95 rounded-b-2xl px-5 md:px-6 py-3.5 md:py-4 flex justify-end">
              <button
                onClick={() => setRulesOpen(null)}
                className="px-6 py-2 bg-accent text-accent-foreground font-semibold rounded-lg hover:bg-accent/90 text-sm md:text-base transition-colors"
              >
                Close
              </button>
            </div>
          </Card>
        </div>
      )}

      {/* CTA footer */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="fade-in-up">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Compete?
            </h2>
            <p className="text-white/80 mb-8 max-w-xl mx-auto text-sm md:text-base">
              Register now and be part of PRODOTHON&apos;26. Each participant can
              register for up to four events across competitions and workshops.
            </p>
            <Link to="/register">
              <Button
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-bold px-8 py-3.5 md:py-4 text-base md:text-lg shadow-xl"
              >
                Register for Events
              </Button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Events;
