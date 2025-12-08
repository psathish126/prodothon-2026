import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Accommodation = () => {
  const boysHostel = [
    { type: "Food + 3 sharing room (common bath)", price: "₹400 / day" },
    { type: "3 sharing room (common bath)", price: "₹250 / day" },
    { type: "Dormitory room (8 sharing)", price: "₹50 / day" },
  ];

  const girlsHostel = [
    { type: "Food + 2 sharing room (common bath)", price: "₹400 / day" },
    { type: "Food + 3 sharing room (attached bath)", price: "₹750 / day" },
  ];

  const guidelines = [
    "Participants who need hostel accommodation should inform us in advance.",
    "Participants can pay their accommodation fees while lodging (only cash is accepted).",
    "Participants should follow the hostel rules and regulations strictly.",
    "All students must carry a valid government ID card.",
  ];

  const hostelRules = [
    "Participants should not enter into other blocks apart from the allotted place.",
    "Participants are asked to take food in their respective mess only.",
    "Participants are asked to contact the volunteers for any sort of help. They should not take their own actions.",
    "Participants are asked to cooperate with block/mess supervisors in any kind of ID check.",
    "Participants should not make any noise during the sleeping hours.",
    "Participants should not enter into the hostel without registration in the hostel office. They should contact the allotted volunteers at the time of arrival at the hostel.",
    "Participants should not damage any property given to them.",
  ];

  const paymentGuidelines = [
    "Prior registration to any event is required; on-spot registrations will be considered.",
    "Registration fee must be paid to the mentioned bank account.",
    "Once the registration fee is paid, it is non-refundable.",
    "The transaction ID and the screenshot of the payment must be entered and uploaded in Google Forms.",
    "In case of a team event, all members must register individually.",
    "A participant can participate in a maximum of 4 events.",
    "A confirmation mail will be sent upon successful payment and registration.",
  ];

  return (
    <div className="min-h-screen pt-32">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Accommodation Details
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Your comfort is our priority
          </p>
        </div>
      </section>

      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          {/* Guidelines */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary">
                Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {guidelines.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Accommodation Fees */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary">
                Accommodation Fees
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Boys Hostel */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-4 pb-2 border-b border-accent/30">
                    Boys Hostel
                  </h4>
                  <div className="space-y-3">
                    {boysHostel.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-secondary last:border-0">
                        <span className="text-foreground text-sm">{item.type}</span>
                        <span className="text-accent font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Girls Hostel */}
                <div>
                  <h4 className="font-heading text-lg font-semibold text-primary mb-4 pb-2 border-b border-accent/30">
                    Girls Hostel
                  </h4>
                  <div className="space-y-3">
                    {girlsHostel.map((item, index) => (
                      <div key={index} className="flex justify-between items-center py-2 border-b border-secondary last:border-0">
                        <span className="text-foreground text-sm">{item.type}</span>
                        <span className="text-accent font-semibold">{item.price}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Hostel Rules */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary">
                Hostel Rules and Regulations
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {hostelRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <span className="bg-accent/10 text-accent text-xs font-bold px-2 py-1 rounded flex-shrink-0">
                      {index + 1}
                    </span>
                    {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Payment Guidelines */}
          <Card className="shadow-card border-0">
            <CardHeader>
              <CardTitle className="font-heading text-2xl text-primary">
                Payment Guidelines
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {paymentGuidelines.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-muted-foreground">
                    <span className="text-accent font-bold">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Bank Details */}
          <Card className="shadow-card border-0 bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle className="font-heading text-2xl">
                Bank Details
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-primary-foreground/70 text-sm">Name of Account Holder</p>
                  <p className="font-semibold">PSG Center for Nonformal and Continuing Education</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-sm">Account Number</p>
                  <p className="font-semibold text-accent">1481267367</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-sm">IFSC Code</p>
                  <p className="font-semibold text-accent">CBIN0280913</p>
                </div>
                <div>
                  <p className="text-primary-foreground/70 text-sm">Bank Name</p>
                  <p className="font-semibold">Central Bank of India</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <div className="text-center">
            <Link to="/register">
              <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-glow text-lg px-12 h-14">
                Register Now
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Accommodation;
