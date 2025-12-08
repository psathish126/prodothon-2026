import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Upload, CheckCircle2 } from "lucide-react";
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
  const [paymentScreenshot, setPaymentScreenshot] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string>("");

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
    <div className="min-h-screen pt-32 bg-secondary/30">
      {/* Header */}
      <section className="py-12 gradient-hero text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4">
            Register Now
          </h1>
          <p className="text-xl text-primary-foreground/90">
            PRODOTHON 2026 - FEB 27 & 28
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
                      <Input id="fullName" name="fullName" required placeholder="Enter your full name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" name="email" type="email" required placeholder="your.email@example.com" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input id="phone" name="phone" type="tel" required placeholder="+91 XXXXX XXXXX" />
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
                      <Input id="collegeName" name="collegeName" required placeholder="Your college name" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="department">Department *</Label>
                      <Input id="department" name="department" required placeholder="Your department" />
                    </div>
                  </div>
                </div>

                {/* Event Selection */}
                <div className="space-y-4">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Event Selection
                  </h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="eventName">Select Event *</Label>
                    <Select name="eventName" required>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose an event" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="paper-presentation">Paper Presentation</SelectItem>
                        <SelectItem value="cad-modelling">CAD Modelling</SelectItem>
                        <SelectItem value="technical-quiz">Technical Quiz</SelectItem>
                        <SelectItem value="project-expo">Project Expo</SelectItem>
                        <SelectItem value="debugging">Debugging Challenge</SelectItem>
                        <SelectItem value="product-design">Product Design</SelectItem>
                        <SelectItem value="manufacturing-simulation">Manufacturing Simulation</SelectItem>
                        <SelectItem value="reverse-engineering">Reverse Engineering</SelectItem>
                        <SelectItem value="business-plan">Business Plan</SelectItem>
                        <SelectItem value="technical-photography">Technical Photography</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="teamMembers">Team Member Details (if applicable)</Label>
                    <Textarea
                      id="teamMembers"
                      name="teamMembers"
                      placeholder="List team member names and contact numbers"
                      rows={3}
                    />
                  </div>
                </div>

                {/* Payment Section */}
                <div className="space-y-4 pt-4 border-t-2 border-accent/20">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Payment Details
                  </h3>
                  
                  <Card className="bg-secondary/50 border-accent/20">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <p className="text-lg font-semibold text-primary">
                          Scan QR Code to Pay
                        </p>
                        
                        {/* QR Code Placeholder */}
                        <div className="flex justify-center">
                          <div className="bg-white p-4 rounded-lg shadow-card inline-block">
                            <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent/30 rounded-lg flex items-center justify-center">
                              <div className="text-center text-white">
                                <p className="text-xs font-semibold mb-2">UPI QR CODE</p>
                                <p className="text-xl font-bold">PSG Tech</p>
                                <p className="text-xs mt-2">Prodothon 2026</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-primary text-primary-foreground p-4 rounded-lg text-left space-y-2">
                          <p className="text-sm"><span className="font-semibold">Account Holder:</span> PSG Center for Nonformal and Continuing Education</p>
                          <p className="text-sm"><span className="font-semibold">Account Number:</span> 1481267367</p>
                          <p className="text-sm"><span className="font-semibold">IFSC Code:</span> CBIN0280913</p>
                          <p className="text-sm"><span className="font-semibold">Bank:</span> Central Bank of India</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Screenshot Upload */}
                  <div className="space-y-2">
                    <Label htmlFor="paymentScreenshot" className="text-base font-semibold">
                      Upload Payment Screenshot *
                    </Label>
                    <p className="text-sm text-muted-foreground mb-2">
                      After completing payment, upload a screenshot as proof
                    </p>
                    
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
                        className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-accent/30 rounded-lg cursor-pointer hover:bg-accent/5 transition-smooth"
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
                            <Upload className="h-10 w-10 text-accent" />
                            <p className="text-sm font-semibold text-primary">Click to upload screenshot</p>
                            <p className="text-xs text-muted-foreground">PNG, JPG up to 5MB</p>
                          </div>
                        )}
                      </Label>
                    </div>

                    {previewUrl && (
                      <div className="mt-4">
                        <p className="text-sm font-semibold text-primary mb-2">Preview:</p>
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
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-lg"
                >
                  {isSubmitting ? "Submitting..." : "Complete Registration"}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  * Payment screenshot is mandatory. Registration fee is non-refundable.
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;
