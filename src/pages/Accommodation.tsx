import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, DollarSign, Clock, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const Accommodation = () => {
  const accommodationOptions = [
    {
      type: "Boys Hostel",
      price: "₹500/night",
      capacity: "100 rooms",
      amenities: ["Wi-Fi", "Mess Facility", "24/7 Security", "Common Room"]
    },
    {
      type: "Girls Hostel",
      price: "₹500/night",
      capacity: "80 rooms",
      amenities: ["Wi-Fi", "Mess Facility", "24/7 Security", "Recreation Room"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <section className="py-20 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">
            Accommodation
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto">
            Comfortable stay arrangements for outstation participants
          </p>
        </div>
      </section>

      {/* Accommodation Options */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {accommodationOptions.map((option, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-smooth border-0">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Home className="h-8 w-8 text-accent" />
                    <CardTitle className="font-heading text-2xl text-primary">
                      {option.type}
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5 text-accent" />
                    <span className="text-xl font-semibold text-primary">{option.price}</span>
                  </div>
                  
                  <div>
                    <p className="font-semibold text-foreground mb-2">Capacity: {option.capacity}</p>
                    <p className="text-sm font-semibold text-foreground mb-2">Amenities:</p>
                    <ul className="space-y-1">
                      {option.amenities.map((amenity, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-accent">✓</span>
                          {amenity}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Details & Rules */}
      <section className="py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Booking Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Check-in & Check-out</p>
                    <p className="text-muted-foreground">Check-in: Day before event (6:00 PM onwards)</p>
                    <p className="text-muted-foreground">Check-out: Last day (12:00 PM)</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Location</p>
                    <p className="text-muted-foreground">PSG College of Technology Campus</p>
                    <p className="text-muted-foreground">Walking distance to all event venues</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold text-foreground">Booking Contact</p>
                    <p className="text-muted-foreground">Accommodation Coordinator: +91 XXXXX XXXXX</p>
                    <p className="text-muted-foreground">Email: accommodation@prodothon.psgtech.edu</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  Important Guidelines
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Advance booking required - indicate accommodation need during registration</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Valid college ID card mandatory at check-in</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Rooms allocated on first-come, first-served basis</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Payment to be made at check-in (cash/UPI accepted)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Mess facility available at additional cost (breakfast, lunch, dinner)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Please maintain cleanliness and follow hostel rules</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-accent font-bold">•</span>
                    <span>Security deposit of ₹500 required (refundable at checkout)</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-card border-0">
              <CardHeader>
                <CardTitle className="font-heading text-2xl text-primary">
                  How to Reach PSG Tech
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3 text-muted-foreground">
                <p><span className="font-semibold text-foreground">From Coimbatore Railway Station:</span> 7 km (20 minutes by taxi/auto)</p>
                <p><span className="font-semibold text-foreground">From Coimbatore Airport:</span> 11 km (30 minutes by taxi)</p>
                <p><span className="font-semibold text-foreground">From Bus Stand (Gandhipuram):</span> 5 km (15 minutes)</p>
                <p className="pt-2 text-sm">Campus shuttle service available from railway station on event days. Contact us for schedule.</p>
              </CardContent>
            </Card>

            <div className="text-center pt-4">
              <Link to="/register">
                <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow">
                  Request Accommodation During Registration
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
