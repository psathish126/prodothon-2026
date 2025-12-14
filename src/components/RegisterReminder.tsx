import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { CalendarDays, Sparkles, Trophy, ArrowRight, X } from "lucide-react";

const RegisterReminder = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const navigate = useNavigate();

  // Countdown to Feb 27, 2026
  useEffect(() => {
    const targetDate = new Date("2026-02-27T09:00:00").getTime();

    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);

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

  const CountdownUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center">
      <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 min-w-[60px] border border-white/20">
        <span className="text-2xl md:text-3xl font-bold text-white font-mono">
          {value.toString().padStart(2, '0')}
        </span>
      </div>
      <span className="text-xs text-white/70 mt-1 uppercase tracking-wider">{label}</span>
    </div>
  );

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
          <div className="absolute inset-0 bg-gradient-to-br from-secondary via-primary to-secondary" />
          
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-accent-peach/20 rounded-full blur-3xl" />
          
          {/* Sparkle decorations */}
          <Sparkles className="absolute top-6 right-12 w-6 h-6 text-accent/60 animate-pulse" />
          <Sparkles className="absolute bottom-20 left-8 w-4 h-4 text-accent-peach/60 animate-pulse" style={{ animationDelay: '0.5s' }} />
          
          {/* Content */}
          <div className="relative z-10 p-6 md:p-8 text-center">
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/20 backdrop-blur-sm rounded-full border border-accent/30 mb-4">
              <CalendarDays className="w-4 h-4 text-accent" />
              <span className="text-accent font-semibold text-sm">FEB 27 & 28, 2026</span>
            </div>

            {/* Main heading */}
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-2">
              PRODOTHON'26
            </h2>
            <p className="text-accent-peach text-base font-medium mb-5">
              LEARN • IMPACT • INNOVATE
            </p>

            {/* Countdown Timer */}
            <div className="mb-6">
              <p className="text-white/80 text-sm mb-3 uppercase tracking-wider">Event starts in</p>
              <div className="flex justify-center gap-2 md:gap-3">
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="text-2xl text-white/50 self-start mt-3">:</span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="text-2xl text-white/50 self-start mt-3">:</span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <span className="text-2xl text-white/50 self-start mt-3">:</span>
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
              </div>
            </div>

            {/* Features */}
            <div className="flex justify-center gap-4 mb-5">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">8+ Events</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-2">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-sm font-medium">Workshops</span>
              </div>
            </div>

            {/* Urgency message */}
            <div className="bg-accent/20 backdrop-blur-sm rounded-xl p-3 mb-5 border border-accent/30">
              <p className="text-white font-semibold">
                🔥 Limited Seats Available!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                onClick={handleRegister}
                className="flex-1 bg-accent hover:bg-accent/90 text-primary font-bold py-5 text-base rounded-xl group transition-all hover:scale-105"
              >
                Register Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="flex-1 border-2 border-white/30 text-white hover:bg-white/10 font-semibold py-5 text-base rounded-xl"
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
