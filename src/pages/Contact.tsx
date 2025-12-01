import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useState } from "react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });

    e.currentTarget.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Have questions? We'd love to hear from you. Send us a message!
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Send us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      required
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      required
                      placeholder="What is this regarding?"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      placeholder="Your message..."
                      rows={5}
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="shadow-card border-0">
                <CardContent className="p-6 space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Address
                      </h3>
                      <p className="text-muted-foreground">
                        PSG College of Technology<br />
                        Avinashi Road, Peelamedu<br />
                        Coimbatore, Tamil Nadu 641004<br />
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Phone
                      </h3>
                      <p className="text-muted-foreground">
                        General Enquiries: +91 XXXXX XXXXX<br />
                        Registration: +91 XXXXX XXXXX<br />
                        Accommodation: +91 XXXXX XXXXX
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-semibold text-primary mb-2">
                        Email
                      </h3>
                      <p className="text-muted-foreground">
                        General: prodothon@psgtech.edu<br />
                        Events: events@prodothon.psgtech.edu<br />
                        Sponsorship: sponsors@prodothon.psgtech.edu
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Social Media */}
              <Card className="shadow-card border-0">
                <CardContent className="p-6">
                  <h3 className="font-heading text-lg font-semibold text-primary mb-4">
                    Follow Us
                  </h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      <Facebook className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      <Instagram className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      <Twitter className="h-6 w-6" />
                    </a>
                    <a
                      href="#"
                      className="p-3 rounded-full bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-smooth"
                    >
                      <Linkedin className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>

              {/* Map placeholder */}
              <Card className="shadow-card border-0 overflow-hidden">
                <div className="aspect-video bg-muted flex items-center justify-center">
                  <p className="text-muted-foreground">Campus Map</p>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
