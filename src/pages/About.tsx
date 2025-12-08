import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            About Prodothon
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Learn • Impact • Innovate
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* What is Prodothon */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                    What is Prodothon?
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    Prodothon is an Inter-College Festival at the Department of Production Engineering, PSG College of Technology. Spanning two days, this event is tailored for undergraduate students from the Mechanical Stream. The festival aims to embrace the students' spirit in the Mechanical Stream with events, competitions, workshops, entrepreneur initiatives, presentations, and exhibitions. It serves as a dynamic platform for students to showcase their technical expertise, problem-solving skills, and innovative thinking.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Vision */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                  <Eye className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                    Our Vision
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To become a flagship event that inspires the next generation of engineers to embrace excellence in manufacturing and mechanical engineering, bridging the gap between academic learning and industry practices while promoting sustainable and innovative solutions. We aim to engage in activities guided by values and ethics with a sense of responsibility to society and the environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Our Mission */}
          <Card className="shadow-card border-0">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h2 className="font-heading text-3xl font-bold text-primary mb-6">
                    Our Mission
                  </h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    To foster innovation, technical proficiency, and collaborative learning among engineering students by providing a competitive platform that emphasizes cutting-edge technologies, practical knowledge, industry-relevant skills, and teamwork.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Event Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8">
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-heading font-bold text-accent mb-2">2</div>
                <p className="text-muted-foreground">Days of Innovation</p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-heading font-bold text-accent mb-2">10+</div>
                <p className="text-muted-foreground">Technical Events</p>
              </CardContent>
            </Card>
            <Card className="shadow-card border-0 text-center">
              <CardContent className="p-8">
                <div className="text-5xl font-heading font-bold text-accent mb-2">500+</div>
                <p className="text-muted-foreground">Expected Participants</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
