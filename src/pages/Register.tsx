import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // Here you would integrate with Google Sheets or your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for Prodothon 2026. We'll send you a confirmation email shortly.",
      });

      // Reset form
      e.currentTarget.reset();
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "There was an error submitting your registration. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-20 bg-secondary/30">
      {/* Header */}
      <section className="py-16 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Register Now
          </h1>
          <p className="text-xl text-primary-foreground/90">
            Join us at Prodothon 2026 - Limited Seats Available!
          </p>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <Card className="max-w-3xl mx-auto shadow-card-hover border-0">
            <CardHeader>
              <CardTitle className="font-heading text-3xl text-primary">
                Registration Form
              </CardTitle>
              <p className="text-muted-foreground">
                Fill in your details to register for Prodothon 2026
              </p>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Personal Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Full Name *</Label>
                      <Input
                        id="fullName"
                        name="fullName"
                        required
                        placeholder="Enter your full name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        required
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="year">Year of Study *</Label>
                      <Select name="year" required>
                        <SelectTrigger>
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">First Year</SelectItem>
                          <SelectItem value="2">Second Year</SelectItem>
                          <SelectItem value="3">Third Year</SelectItem>
                          <SelectItem value="4">Fourth Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* College Information */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    College Information
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="collegeName">College Name *</Label>
                      <Input
                        id="collegeName"
                        name="collegeName"
                        required
                        placeholder="Your college name"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <Input
                        id="department"
                        name="department"
                        required
                        placeholder="Your department"
                      />
                    </div>
                  </div>
                </div>

                {/* Event Selection */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Event/Workshop Selection
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventType">Select Category *</Label>
                    <Select name="eventType" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose event or workshop" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="technical">Technical Event</SelectItem>
                        <SelectItem value="non-technical">Non-Technical Event</SelectItem>
                        <SelectItem value="workshop">Workshop</SelectItem>
                        <SelectItem value="both">Event + Workshop</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="eventName">Specific Event/Workshop Name *</Label>
                    <Input
                      id="eventName"
                      name="eventName"
                      required
                      placeholder="e.g., RoboWars, AI Workshop"
                    />
                  </div>
                </div>

                {/* Team Details (Optional) */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Team Details (if applicable)
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="teamMembers">Team Member Names & Contact</Label>
                    <Textarea
                      id="teamMembers"
                      name="teamMembers"
                      placeholder="List team member names and contact numbers (one per line)"
                      rows={4}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </Button>

                <p className="text-sm text-muted-foreground text-center">
                  By registering, you agree to receive event updates via email and SMS
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Info Card */}
          <Card className="max-w-3xl mx-auto mt-6 shadow-card border-0">
            <CardContent className="p-6">
              <h4 className="font-heading text-lg font-semibold text-primary mb-3">
                Important Notes:
              </h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Registration confirmation will be sent to your email within 24 hours</li>
                <li>• Ensure all details are correct before submitting</li>
                <li>• For team events, all team members must register individually</li>
                <li>• Registration fees (if applicable) must be paid before the event</li>
                <li>• Contact us at prodothon@psgtech.edu for any queries</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;
