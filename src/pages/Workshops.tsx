import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, MapPin, DollarSign, User } from "lucide-react";
import { Link } from "react-router-dom";

const Workshops = () => {
  const workshops = [
    {
      id: 1,
      title: "AI & Machine Learning Fundamentals",
      instructor: "Dr. Rajesh Kumar",
      bio: "AI Research Lead at Google, 15+ years in ML",
      description: "Dive deep into the fundamentals of AI and Machine Learning. Learn about neural networks, deep learning, and practical applications.",
      date: "Day 1",
      time: "10:00 AM - 5:00 PM",
      venue: "Main Auditorium",
      fee: "₹500",
      level: "Beginner to Intermediate"
    },
    {
      id: 2,
      title: "Advanced Robotics & Automation",
      instructor: "Prof. Anita Sharma",
      bio: "Robotics Engineer, Former NASA Researcher",
      description: "Hands-on workshop on robotics, automation systems, and control mechanisms. Build your own autonomous robot!",
      date: "Day 1",
      time: "2:00 PM - 7:00 PM",
      venue: "Robotics Lab",
      fee: "₹750",
      level: "Intermediate"
    },
    {
      id: 3,
      title: "Cloud Computing with AWS",
      instructor: "Mr. Vikram Patel",
      bio: "AWS Certified Solutions Architect, Cloud Consultant",
      description: "Master cloud infrastructure, deployment strategies, and scalable architecture design using Amazon Web Services.",
      date: "Day 2",
      time: "9:00 AM - 4:00 PM",
      venue: "Computer Lab 3",
      fee: "₹600",
      level: "Intermediate to Advanced"
    },
    {
      id: 4,
      title: "IoT & Smart Systems",
      instructor: "Dr. Priya Menon",
      bio: "IoT Specialist, Author of 'Smart Connected Devices'",
      description: "Explore the Internet of Things ecosystem. Create smart devices and understand connectivity protocols.",
      date: "Day 2",
      time: "11:00 AM - 6:00 PM",
      venue: "Electronics Lab",
      fee: "₹550",
      level: "Beginner"
    },
    {
      id: 5,
      title: "Blockchain & Web3 Development",
      instructor: "Mr. Arjun Reddy",
      bio: "Blockchain Developer, Cryptocurrency Expert",
      description: "Learn blockchain fundamentals, smart contracts, and decentralized application development.",
      date: "Day 3",
      time: "10:00 AM - 5:00 PM",
      venue: "Seminar Hall 2",
      fee: "₹700",
      level: "Intermediate"
    },
    {
      id: 6,
      title: "Product Design & 3D Printing",
      instructor: "Ms. Kavya Iyer",
      bio: "Industrial Designer, 3D Printing Innovator",
      description: "From concept to creation - learn product design principles and bring your ideas to life with 3D printing.",
      date: "Day 3",
      time: "1:00 PM - 6:00 PM",
      venue: "Design Studio",
      fee: "₹650",
      level: "All Levels"
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Workshops & Training
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Learn from industry experts and gain hands-on experience in cutting-edge technologies
          </p>
        </div>
      </section>

      {/* Workshops Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {workshops.map((workshop) => (
              <Card key={workshop.id} className="shadow-card hover:shadow-card-hover transition-smooth border-0">
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="font-heading text-2xl text-primary pr-4">
                      {workshop.title}
                    </CardTitle>
                    <Badge className="bg-accent text-accent-foreground flex-shrink-0">
                      {workshop.level}
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <User className="h-4 w-4" />
                    <div>
                      <p className="font-semibold text-foreground">{workshop.instructor}</p>
                      <p className="text-xs">{workshop.bio}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{workshop.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="h-4 w-4 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">{workshop.date}</p>
                        <p className="text-muted-foreground">{workshop.time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <div>
                        <p className="font-semibold text-foreground">Venue</p>
                        <p className="text-muted-foreground">{workshop.venue}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-4 border-t">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <span className="font-semibold text-lg text-primary">{workshop.fee}</span>
                    <span className="text-sm text-muted-foreground">per participant</span>
                  </div>

                  <Link to="/register">
                    <Button className="w-full bg-accent text-accent-foreground hover:bg-accent/90">
                      Register for Workshop
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto shadow-card border-0">
            <CardContent className="p-8">
              <h3 className="font-heading text-2xl font-bold text-primary mb-4">
                Workshop Information
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>All workshops include materials, certificates, and refreshments</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Limited seats available - first come, first served</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Participants must bring their own laptops for hands-on sessions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Certificate of participation will be provided to all attendees</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-accent font-bold">•</span>
                  <span>Group discounts available for teams of 5 or more</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Workshops;
