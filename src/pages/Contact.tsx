import { Card, CardContent } from "@/components/ui/card";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Get in touch with us for any queries
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Contact Us */}
            <Card className="shadow-card border-0">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold text-primary mb-6">
                  Contact Us
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-foreground font-semibold">Department of Production Engineering,</p>
                      <p className="text-muted-foreground">PSG College of Technology, Coimbatore,</p>
                      <p className="text-muted-foreground">Tamil Nadu, India</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                      <Mail className="h-6 w-6" />
                    </div>
                    <a href="mailto:pea.prod@psgtech.ac.in" className="text-accent hover:underline font-medium">
                      pea.prod@psgtech.ac.in
                    </a>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-accent/10 text-accent flex-shrink-0">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <p className="text-foreground font-medium">BALAJI : +91 987654321</p>
                      <p className="text-foreground font-medium">LAKSH : +91 987654321</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Our Location */}
            <Card className="shadow-card border-0 overflow-hidden">
              <CardContent className="p-0">
                <h3 className="font-heading text-2xl font-bold text-primary p-8 pb-4">
                  Our Location
                </h3>
                <div className="aspect-video w-full">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1521.8367616013686!2d77.00286481472448!3d11.02453589516701!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba8582f1435fa59%3A0x137d95bfd8909293!2sPSG%20College%20Of%20Technology!5e0!3m2!1sen!2sin!4v1765214451220!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="PSG College of Technology Location"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
