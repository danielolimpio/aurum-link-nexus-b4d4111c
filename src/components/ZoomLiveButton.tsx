import { useState, useEffect } from "react";
import { Video, Clock } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const getNextLiveDate = (): Date => {
  // Horário de Brasília (UTC-3)
  const now = new Date();
  const brasiliaOffset = -3 * 60; // -3 horas em minutos
  const localOffset = now.getTimezoneOffset();
  const diffMinutes = localOffset + brasiliaOffset;
  
  // Ajusta para horário de Brasília
  const nowInBrasilia = new Date(now.getTime() + diffMinutes * 60 * 1000);
  
  // Próxima live às 22h
  const nextLive = new Date(nowInBrasilia);
  nextLive.setHours(22, 0, 0, 0);
  
  // Se já passou das 22h hoje ou é domingo, vai para o próximo dia válido
  if (nowInBrasilia.getHours() >= 22 || nowInBrasilia.getDay() === 0) {
    nextLive.setDate(nextLive.getDate() + 1);
  }
  
  // Se cair no domingo, pula para segunda
  while (nextLive.getDay() === 0) {
    nextLive.setDate(nextLive.getDate() + 1);
  }
  
  // Converte de volta para horário local
  return new Date(nextLive.getTime() - diffMinutes * 60 * 1000);
};

const calculateTimeLeft = (): TimeLeft => {
  const difference = getNextLiveDate().getTime() - new Date().getTime();
  
  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }
  
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

const ZoomLiveButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleOpenZoom = () => {
    window.open("https://us06web.zoom.us/j/3156208150", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

  const formatNumber = (num: number) => num.toString().padStart(2, "0");

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="social-icon group relative"
        aria-label="Zoom Live"
      >
        {/* Indicador de Live pulsante */}
        <span className="absolute -top-1 -right-1 flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600 border border-red-400"></span>
        </span>
        
        <Video className="w-5 h-5 text-primary transition-colors group-hover:text-foreground" />
      </button>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-md border-primary/20 bg-background/95 backdrop-blur-sm">
          <DialogHeader className="text-center">
            <DialogTitle className="flex items-center justify-center gap-2 text-xl">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
              </span>
              <span className="text-gradient">LIVE AURUM</span>
            </DialogTitle>
            <DialogDescription className="text-center pt-4 text-base">
              <span className="block text-foreground font-medium mb-2">
                📅 Segunda a Sábado
              </span>
              <span className="block text-primary text-lg font-bold mb-4">
                🕙 22h (Horário de Brasília)
              </span>
              
              {/* Countdown */}
              <div className="bg-muted/50 rounded-lg p-4 mt-2">
                <div className="flex items-center justify-center gap-1 text-muted-foreground text-sm mb-3">
                  <Clock className="w-4 h-4" />
                  <span>Próxima live em:</span>
                </div>
                <div className="flex justify-center gap-2">
                  {timeLeft.days > 0 && (
                    <div className="flex flex-col items-center">
                      <span className="text-2xl font-bold text-primary tabular-nums">
                        {formatNumber(timeLeft.days)}
                      </span>
                      <span className="text-xs text-muted-foreground">dias</span>
                    </div>
                  )}
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary tabular-nums">
                      {formatNumber(timeLeft.hours)}
                    </span>
                    <span className="text-xs text-muted-foreground">horas</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary tabular-nums">
                      {formatNumber(timeLeft.minutes)}
                    </span>
                    <span className="text-xs text-muted-foreground">min</span>
                  </div>
                  <span className="text-2xl font-bold text-primary">:</span>
                  <div className="flex flex-col items-center">
                    <span className="text-2xl font-bold text-primary tabular-nums">
                      {formatNumber(timeLeft.seconds)}
                    </span>
                    <span className="text-xs text-muted-foreground">seg</span>
                  </div>
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          
          <div className="flex justify-center pt-4">
            <Button
              onClick={handleOpenZoom}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-6 py-2 rounded-full font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
            >
              <Video className="w-4 h-4 mr-2" />
              Entrar na Live
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ZoomLiveButton;
