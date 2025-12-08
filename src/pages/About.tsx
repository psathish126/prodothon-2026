import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb, Calendar, Users, Award } from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";

const About = () => {
  return (
    <div className="min-h-screen pt-28 md:pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              About Prodothon
            </h1>
            <p className="text-xl text-accent font-semibold tracking-wider">
              LEARN • IMPACT • INNOVATE
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 bg-gradient-to-b from-peach/30 to-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* What is Prodothon */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-card border-0 border-l-4 border-l-accent overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-accent/10 text-accent flex-shrink-0 hidden md:block">
                    <Lightbulb className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                      What is Prodothon?
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      Prodothon is an Inter-College Festival at the Department of Production Engineering, PSG College of Technology. Spanning two days, this event is tailored for undergraduate students from the Mechanical Stream. The festival aims to embrace the students' spirit in the Mechanical Stream with events, competitions, workshops, entrepreneur initiatives, presentations, and exhibitions. It serves as a dynamic platform for students to showcase their technical expertise, problem-solving skills, and innovative thinking.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Vision */}
          <AnimatedSection animation="slide-right">
            <Card className="shadow-card border-0 border-l-4 border-l-secondary overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-secondary/10 text-secondary flex-shrink-0 hidden md:block">
                    <Eye className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                      Our Vision
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To become a flagship event that inspires the next generation of engineers to embrace excellence in manufacturing and mechanical engineering, bridging the gap between academic learning and industry practices while promoting sustainable and innovative solutions. We aim to engage in activities guided by values and ethics with a sense of responsibility to society and the environment.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Our Mission */}
          <AnimatedSection animation="slide-left">
            <Card className="shadow-card border-0 border-l-4 border-l-accent overflow-hidden">
              <CardContent className="p-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-full bg-accent/10 text-accent flex-shrink-0 hidden md:block">
                    <Target className="h-10 w-10" />
                  </div>
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-secondary mb-6">
                      Our Mission
                    </h2>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To foster innovation, technical proficiency, and collaborative learning among engineering students by providing a competitive platform that emphasizes cutting-edge technologies, practical knowledge, industry-relevant skills, and teamwork.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Event Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <AnimatedSection animation="scale-in" delay={0}>
              <Card className="shadow-card border-0 text-center bg-peach/30 hover:shadow-card-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Calendar className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-5xl font-heading font-bold text-accent mb-2">2</div>
                  <p className="text-muted-foreground font-medium">Days of Innovation</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={0.1}>
              <Card className="shadow-card border-0 text-center bg-peach/30 hover:shadow-card-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Award className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-5xl font-heading font-bold text-accent mb-2">10+</div>
                  <p className="text-muted-foreground font-medium">Technical Events</p>
                </CardContent>
              </Card>
            </AnimatedSection>
            <AnimatedSection animation="scale-in" delay={0.2}>
              <Card className="shadow-card border-0 text-center bg-peach/30 hover:shadow-card-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="mx-auto w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <Users className="h-8 w-8 text-secondary" />
                  </div>
                  <div className="text-5xl font-heading font-bold text-accent mb-2">500+</div>
                  <p className="text-muted-foreground font-medium">Expected Participants</p>
                </CardContent>
              </Card>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
