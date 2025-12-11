import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import AnimatedSection from "@/components/AnimatedSection";

const Register = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");
  const [selectedEvents, setSelectedEvents] = useState<string[]>([]);
  const [needAccommodation, setNeedAccommodation] = useState(false);
  const [isTeamEvent, setIsTeamEvent] = useState(false);

  const events = [
    { id: "production-meishu", name: "Production Meishu" },
    { id: "paper-project-presentation", name: "Paper / Project Presentation" },
    { id: "ai-workshop", name: "AI-Driven Generative Design & FEA Workshop" },
    { id: "cad-master-challenge", name: "The CAD Master Challenge" },
    { id: "autoquest", name: "AutoQuest" },
    { id: "ladder-rush", name: "Ladder Rush" },
    { id: "stick-structure", name: "Stick It! Structure It!" },
    { id: "panel-discussion", name: "Panel Discussion: Sustainability in Manufacturing" },
  ];

  const handleEventToggle = (eventId: string) => {
    setSelectedEvents(prev => {
      if (prev.includes(eventId)) {
        return prev.filter(id => id !== eventId);
      }
      if (prev.length >= 4) {
        toast({
          title: "Maximum Events Reached",
          description: "You can only participate in a maximum of 4 events.",
          variant: "destructive",
        });
        return prev;
      }
      return [...prev, eventId];
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        toast({
          title: "File too large",
          description: "Please upload an image smaller than 5MB",
          variant: "destructive",
        });
        return;
      }
      
      setPaymentScreenshot(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (selectedEvents.length === 0) {
      toast({
        title: "Event Selection Required",
        description: "Please select at least one event.",
        variant: "destructive",
      });
      return;
    }

    if (!paymentScreenshot) {
      toast({
        title: "Payment Screenshot Required",
        description: "Please upload your payment screenshot to complete registration.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Here you would integrate with Google Sheets
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration Successful!",
        description: "We'll verify your payment and send confirmation shortly.",
      });

      e.currentTarget.reset();
      setPaymentScreenshot(null);
      setPreviewUrl("");
      setSelectedEvents([]);
      setNeedAccommodation(false);
      setIsTeamEvent(false);
    } catch (error) {
      toast({
        title: "Registration Failed",
        description: "Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen pt-28 md:pt-32 bg-gradient-to-b from-peach/30 to-background">
      {/* Header */}
      <section className="py-12 gradient-hero text-white">
        <div className="container mx-auto px-4 text-center">
          <AnimatedSection animation="scale-in">
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
              Register Now
            </h1>
            <p className="text-xl text-white/90 font-medium">
              PRODOTHON 2026 • FEB 27 & 28
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Registration Form */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <Card className="max-w-4xl mx-auto shadow-card-hover border-0">
              <CardHeader className="bg-secondary text-white rounded-t-lg">
                <CardTitle className="font-heading text-2xl">
                  Registration Form
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 md:p-8">
                <form onSubmit={handleSubmit} className="space-y-8">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-secondary border-b border-accent/30 pb-2">
                      Personal Information
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="fullName">Full Name *</Label>
                        <Input id="fullName" name="fullName" required placeholder="Enter your full name" className="border-secondary/20 focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input id="email" name="email" type="email" required placeholder="your.email@example.com" className="border-secondary/20 focus:border-accent" />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" className="border-secondary/20 focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="year">Year of Study *</Label>
                        <Select name="year" required>
                          <SelectTrigger className="border-secondary/20 focus:border-accent">
                            <SelectValue placeholder="Select year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1">1st Year</SelectItem>
                            <SelectItem value="2">2nd Year</SelectItem>
                            <SelectItem value="3">3rd Year</SelectItem>
                            <SelectItem value="4">4th Year</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="collegeName">College Name *</Label>
                        <Input id="collegeName" name="collegeName" required placeholder="Your college name" className="border-secondary/20 focus:border-accent" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="department">Department *</Label>
                        <Input id="department" name="department" required placeholder="Your department" className="border-secondary/20 focus:border-accent" />
                      </div>
                    </div>
                  </div>

                  {/* Event Selection */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-secondary border-b border-accent/30 pb-2">
                      Event Selection (Max 4 Events) *
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Selected: {selectedEvents.length}/4 events
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {events.map((event) => (
                        <div
                          key={event.id}
                          className={`flex items-center space-x-3 p-3 rounded-lg border-2 cursor-pointer transition-smooth ${
                            selectedEvents.includes(event.id)
                              ? "border-accent bg-accent/10"
                              : "border-secondary/20 hover:border-accent/50"
                          }`}
                          onClick={() => handleEventToggle(event.id)}
                        >
                          <Checkbox
                            checked={selectedEvents.includes(event.id)}
                            onCheckedChange={() => handleEventToggle(event.id)}
                            className="border-secondary data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                          />
                          <span className="text-foreground font-medium">{event.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Accommodation */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-secondary border-b border-accent/30 pb-2">
                      Accommodation
                    </h3>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="needAccommodation"
                        checked={needAccommodation}
                        onCheckedChange={(checked) => setNeedAccommodation(checked as boolean)}
                        className="border-secondary data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <Label htmlFor="needAccommodation" className="cursor-pointer">
                        I need accommodation
                      </Label>
                    </div>

                    {needAccommodation && (
                      <div className="space-y-2 ml-6 animate-fade-in">
                        <Label htmlFor="accommodationType">Select Accommodation Type *</Label>
                        <Select name="accommodationType" required={needAccommodation}>
                          <SelectTrigger className="border-secondary/20 focus:border-accent">
                            <SelectValue placeholder="Select accommodation" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="boys-food-3share">Boys: Food + 3 sharing (common bath) - ₹400/day</SelectItem>
                            <SelectItem value="boys-3share">Boys: 3 sharing (common bath) - ₹250/day</SelectItem>
                            <SelectItem value="boys-dormitory">Boys: Dormitory (8 sharing) - ₹50/day</SelectItem>
                            <SelectItem value="girls-food-2share">Girls: Food + 2 sharing (common bath) - ₹400/day</SelectItem>
                            <SelectItem value="girls-food-3share-attached">Girls: Food + 3 sharing (attached bath) - ₹750/day</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    )}
                  </div>

                  {/* Team Event */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-secondary border-b border-accent/30 pb-2">
                      Team Details
                    </h3>
                    
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="isTeamEvent"
                        checked={isTeamEvent}
                        onCheckedChange={(checked) => setIsTeamEvent(checked as boolean)}
                        className="border-secondary data-[state=checked]:bg-accent data-[state=checked]:border-accent"
                      />
                      <Label htmlFor="isTeamEvent" className="cursor-pointer">
                        This is a team event
                      </Label>
                    </div>

                    {isTeamEvent && (
                      <div className="space-y-2 ml-6 animate-fade-in">
                        <Label htmlFor="teamMembers">Team Member Details *</Label>
                        <Textarea
                          id="teamMembers"
                          name="teamMembers"
                          required={isTeamEvent}
                          placeholder="Enter team member names and contact numbers (one per line)"
                          rows={4}
                          className="border-secondary/20 focus:border-accent"
                        />
                        <p className="text-xs text-muted-foreground">Note: All team members must register individually.</p>
                      </div>
                    )}
                  </div>

                  {/* Payment Section */}
                  <div className="space-y-4">
                    <h3 className="font-heading text-xl font-semibold text-secondary border-b border-accent/30 pb-2">
                      Payment Details
                    </h3>
                    
                    <Card className="bg-peach/30 border-peach">
                      <CardContent className="p-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          {/* QR Code */}
                          <div className="text-center">
                            <p className="text-lg font-semibold text-secondary mb-4">
                              Scan QR Code to Pay
                            </p>
                            <div className="bg-white p-4 rounded-lg shadow-card inline-block mx-auto">
                              <div className="w-48 h-48 bg-gradient-to-br from-secondary to-accent/50 rounded-lg flex items-center justify-center">
                                <div className="text-center text-white">
                                  <p className="text-xs font-semibold mb-2">UPI QR CODE</p>
                                  <p className="text-xl font-bold">PSG Tech</p>
                                  <p className="text-xs mt-2">Prodothon 2026</p>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Bank Details */}
                          <div className="bg-primary text-white p-4 rounded-lg space-y-3">
                            <p className="font-semibold text-accent text-lg">Bank Details</p>
                            <div className="text-sm space-y-2">
                              <p><span className="text-white/70">Account Holder:</span><br/><span className="font-medium">PSG Center for Nonformal and Continuing Education</span></p>
                              <p><span className="text-white/70">Account Number:</span><br/><span className="font-medium text-accent">1481267367</span></p>
                              <p><span className="text-white/70">IFSC Code:</span><br/><span className="font-medium text-accent">CBIN0280913</span></p>
                              <p><span className="text-white/70">Bank:</span><br/><span className="font-medium">Central Bank of India</span></p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Transaction ID */}
                    <div className="space-y-2">
                      <Label htmlFor="transactionId">Transaction ID *</Label>
                      <Input
                        id="transactionId"
                        name="transactionId"
                        required
                        placeholder="Enter your payment transaction ID"
                        className="border-secondary/20 focus:border-accent"
                      />
                    </div>

                    {/* Screenshot Upload */}
                    <div className="space-y-2">
                      <Label htmlFor="paymentScreenshot" className="text-base font-semibold">
                        Upload Payment Screenshot *
                      </Label>
                      
                      <div className="relative">
                        <Input
                          id="paymentScreenshot"
                          type="file"
                          accept="image/*"
                          onChange={handleFileChange}
                          className="hidden"
                        />
                        <Label
                          htmlFor="paymentScreenshot"
                          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-secondary/30 rounded-lg cursor-pointer hover:bg-accent/5 transition-smooth"
                        >
                          {previewUrl ? (
                            <div className="flex items-center gap-3">
                              <CheckCircle2 className="h-8 w-8 text-accent" />
                              <div className="text-left">
                                <p className="text-sm font-semibold text-primary">Screenshot uploaded!</p>
                                <p className="text-xs text-muted-foreground">Click to change</p>
                              </div>
                            </div>
                          ) : (
                            <div className="flex flex-col items-center gap-2">
                              <Upload className="h-10 w-10 text-secondary" />
                              <p className="text-sm font-semibold text-primary">Click to upload screenshot</p>
                              <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                            </div>
                          )}
                        </Label>
                      </div>

                      {previewUrl && (
                        <div className="mt-4">
                          <img 
                            src={previewUrl} 
                            alt="Payment screenshot preview" 
                            className="max-w-full h-auto max-h-48 rounded-lg shadow-card mx-auto"
                          />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg font-semibold shadow-glow"
                  >
                    {isSubmitting ? "Submitting..." : "Complete Registration"}
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    * Registration fee is non-refundable. A confirmation email will be sent after payment verification.
                  </p>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Register;
