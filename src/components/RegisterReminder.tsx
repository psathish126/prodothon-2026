import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, Users } from "lucide-react";

const RegisterReminder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Show popup after 60 seconds and then every 60 seconds
    const interval = setInterval(() => {
      setIsOpen(true);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const handleRegister = () => {
    setIsOpen(false);
    navigate("/register");
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-primary to-primary-dark border-accent">
        <DialogHeader className="text-center">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center animate-pulse">
              <CalendarDays className="w-8 h-8 text-accent" />
            </div>
          </div>
          <DialogTitle className="text-2xl font-display text-white text-center">
            Don't Miss Out!
          </DialogTitle>
          <DialogDescription className="text-accent-peach text-center text-base mt-2">
            PRODOTHON'26 is happening on <span className="font-bold text-accent">FEB 27 & 28</span>
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-4 mt-4">
          <div className="flex items-center gap-3 text-white/90">
            <Users className="w-5 h-5 text-accent" />
            <span>Limited seats available - Register now!</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button
              onClick={handleRegister}
              className="flex-1 bg-accent hover:bg-accent/90 text-primary font-semibold py-3"
            >
              Register Now
            </Button>
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="flex-1 border-white/30 text-white hover:bg-white/10"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterReminder;
