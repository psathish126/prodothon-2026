import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, Sparkles, Clock, Trophy, ArrowRight, X } from "lucide-react";

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
      <DialogContent className="sm:max-w-lg p-0 border-0 overflow-hidden bg-transparent shadow-2xl">
        {/* Close button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-4 z-20 p-1 rounded-full bg-white/10 hover:bg-white/20 transition-all"
        >
          <X className="w-5 h-5 text-white" />
        </button>

        {/* Main Card */}
        <div className="relative">
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary animate-pulse opacity-90" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-peach/20 rounded-full blur-3xl" />
          
          {/* Sparkle decorations */}
          <Sparkles className="absolute top-6 right-12 w-6 h-6 text-accent/60 animate-pulse" />
          <Sparkles className="absolute bottom-20 left-8 w-4 h-4 text-accent-peach/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Content */}
          <div className="relative z-10 p-8 text-center">
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-6">
              <CalendarDays className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">FEB 27 & 28, 2026</span>
            </div>

            {/* Main heading */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-3">
              PRODOTHON'26
            </h2>
            <p className="text-accent-peach text-lg font-medium mb-6">
              LEARN • IMPACT • INNOVATE
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Trophy className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm font-medium">8+ Events</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <Clock className="w-5 h-5 text-accent" />
                <span className="text-white/90 text-sm font-medium">2 Days</span>
              </div>
            </div>

            {/* Urgency message */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-4 mb-6 border border-accent/30">
              <p className="text-white font-semibold text-lg">
                🔥 Limited Seats Available!
              </p>
              <p className="text-white/80 text-sm mt-1">
                Don't miss the biggest tech fest of the year
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleRegister}
                className="flex-1 bg-accent hover:bg-accent/90 text-primary font-bold py-6 text-lg rounded-xl group transition-all hover:scale-105"
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-6 text-lg rounded-xl"
              >
                Maybe Later
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterReminder;
