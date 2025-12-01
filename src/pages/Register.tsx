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
      if (file.size > 5 * 1024 * 1024) { // 5MB limit
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

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);
    
    // Add the payment screenshot to form data
    formData.append('paymentScreenshot', paymentScreenshot);

    try {
      // Here you would integrate with Google Sheets or your backend
      // The FormData now includes the payment screenshot
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "Registration Successful!",
        description: "Thank you for registering for Prodothon 2026. We'll verify your payment and send confirmation shortly.",
      });

      // Reset form
      e.currentTarget.reset();
      setPaymentScreenshot(null);
      setPreviewUrl("");
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

                {/* Payment Section */}
                <div className="space-y-4 pt-4 border-t-2 border-accent/20">
                  <h3 className="font-heading text-xl font-semibold text-primary">
                    Payment Details
                  </h3>
                  
                  <Card className="bg-secondary/50 border-accent/20">
                    <CardContent className="p-6">
                      <div className="text-center space-y-4">
                        <p className="text-lg font-semibold text-primary">
                          Registration Fee: ₹500 per participant
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Scan the QR code below to make payment via UPI
                        </p>
                        
                        {/* QR Code Placeholder */}
                        <div className="flex justify-center">
                          <div className="bg-white p-6 rounded-lg shadow-card inline-block">
                            <div className="w-48 h-48 bg-gradient-to-br from-primary to-accent/30 rounded-lg flex items-center justify-center">
                              <div className="text-center text-white">
                                <p className="text-xs font-semibold mb-2">UPI QR CODE</p>
                                <p className="text-2xl font-bold">PSG Tech</p>
                                <p className="text-xs mt-2">Prodothon 2026</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-accent/10 p-4 rounded-lg">
                          <p className="text-sm font-semibold text-primary mb-2">UPI Payment Details:</p>
                          <p className="text-sm text-muted-foreground">UPI ID: prodothon@psgtech</p>
                          <p className="text-sm text-muted-foreground">Name: PSG Tech Prodothon</p>
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
                          className="max-w-full h-auto max-h-64 rounded-lg shadow-card mx-auto"
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

                <div className="space-y-2">
                  <p className="text-sm text-muted-foreground text-center">
                    By registering, you agree to receive event updates via email and SMS
                  </p>
                  <p className="text-xs text-center text-accent font-semibold">
                    * Payment screenshot is mandatory for registration confirmation
                  </p>
                </div>
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
                <li>• Payment verification will be completed within 24-48 hours</li>
                <li>• Registration confirmation will be sent to your email after payment verification</li>
                <li>• Ensure payment screenshot is clear and shows transaction details</li>
                <li>• Registration fee of ₹500 is non-refundable</li>
                <li>• For team events, each member must register and pay individually</li>
                <li>• Keep your transaction ID for future reference</li>
                <li>• Contact us at prodothon@psgtech.edu for payment-related queries</li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Register;
