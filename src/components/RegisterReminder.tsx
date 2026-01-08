import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  CalendarDays,
  Sparkles,
  Trophy,
  ArrowRight,
  X,
} from "lucide-react";

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
          hours: Math.floor(
            (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
          ),
          minutes: Math.floor(
            (difference % (1000 * 60 * 60)) / (1000 * 60)
          ),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, []);
// Show popup every 3 minutes
useEffect(() => {
  const interval = setInterval(() => {
    setIsOpen(true);
  }, 180000); // 3 * 60 * 1000 ms

  return () => clearInterval(interval);
}, []);


  const handleRegister = () => {
    setIsOpen(false);
    navigate("/register");
  };

  const CountdownUnit = ({
    value,
    label,
  }: {
    value: number;
    label: string;
  }) => (
    <div className="flex flex-col items-center">
      <div className="bg-black/25 backdrop-blur-sm rounded-lg px-3 py-2 min-w-[56px] border border-white/25">
        <span className="text-xl md:text-2xl font-bold text-white font-mono">
          {value.toString().padStart(2, "0")}
        </span>
      </div>
      <span className="text-[10px] md:text-xs text-white/70 mt-1 uppercase tracking-[0.18em]">
        {label}
      </span>
    </div>
  );

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-md md:max-w-lg p-0 border-0 bg-transparent shadow-none">
        {/* Backdrop card */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-secondary via-primary to-secondary">
          {/* Glass overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Soft glows */}
          <div className="pointer-events-none absolute -top-10 -right-10 w-32 h-32 bg-accent/30 rounded-full blur-3xl" />
          <div className="pointer-events-none absolute -bottom-12 -left-6 w-40 h-40 bg-peach/30 rounded-full blur-3xl" />

          {/* Small sparkles – hidden on very small screens */}
          <Sparkles className="hidden sm:block absolute top-6 right-10 w-6 h-6 text-accent/70 animate-pulse" />
          <Sparkles
            className="hidden sm:block absolute bottom-16 left-8 w-4 h-4 text-peach/70 animate-pulse"
            style={{ animationDelay: "0.5s" }}
          />

          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute right-4 top-4 z-20 p-1.5 rounded-full bg-black/30 hover:bg-black/50 transition-all"
          >
            <X className="w-4 h-4 text-white" />
          </button>

          {/* Content */}
          <div className="relative z-10 px-5 py-6 md:px-8 md:py-8 text-center">
            {/* Event badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/10 backdrop-blur-md rounded-full border border-white/25 mb-4">
              <CalendarDays className="w-4 h-4 text-accent" />
              <span className="text-xs md:text-sm text-white font-semibold">
                Feb 27 &amp; 28, 2026 • PSG Tech
              </span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-white mb-1">
              PRODOTHON&apos;26
            </h2>
            <p className="text-peach-100 text-xs md:text-sm font-medium tracking-[0.25em] mb-4">
              LEARN • IMPACT • INNOVATE
            </p>

            {/* Short line */}
            <p className="text-white/80 text-xs md:text-sm mb-4 md:mb-5 max-w-md mx-auto">
              Secure your spot for competitions, workshops, and industry
              sessions before seats fill up.
            </p>

            {/* Countdown */}
            <div className="mb-5 md:mb-6">
              <p className="text-white/75 text-[11px] md:text-xs mb-2 uppercase tracking-[0.18em]">
                Event starts in
              </p>
              <div className="flex justify-center items-start gap-2 md:gap-3">
                <CountdownUnit value={timeLeft.days} label="Days" />
                <span className="text-lg md:text-xl text-white/50 mt-2">
                  :
                </span>
                <CountdownUnit value={timeLeft.hours} label="Hours" />
                <span className="text-lg md:text-xl text-white/50 mt-2">
                  :
                </span>
                <CountdownUnit value={timeLeft.minutes} label="Mins" />
                <span className="text-lg md:text-xl text-white/50 mt-2">
                  :
                </span>
                <CountdownUnit value={timeLeft.seconds} label="Secs" />
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-wrap justify-center gap-2.5 mb-4 md:mb-5">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5">
                <Trophy className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  8+ Events
                </span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-white/90 text-xs md:text-sm font-medium">
                  Hands‑on Workshops
                </span>
              </div>
            </div>

            {/* Urgency */}
            <div className="bg-accent/25 backdrop-blur-md rounded-xl px-3 py-2 mb-5 border border-accent/40">
              <p className="text-white text-xs md:text-sm font-semibold">
                🔥 Limited seats per event — register early to choose your
                favourite competitions.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-2.5 md:gap-3">
              <Button
                onClick={handleRegister}
                className="flex-1 bg-accent hover:bg-accent/90 text-primary font-bold py-3 md:py-4 text-sm md:text-base rounded-xl group transition-all hover:scale-[1.02] shadow-lg shadow-black/30"
              >
                Register Now
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="ghost"
                onClick={() => setIsOpen(false)}
                className="flex-1 border border-white/30 text-white hover:bg-white/10 font-semibold py-3 md:py-4 text-sm md:text-base rounded-xl"
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
