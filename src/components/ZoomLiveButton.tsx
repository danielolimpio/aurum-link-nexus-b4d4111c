import { useState } from "react";
import { Video } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const ZoomLiveButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenZoom = () => {
    window.open("https://us06web.zoom.us/j/3156208150", "_blank", "noopener,noreferrer");
    setIsOpen(false);
  };

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
              <span className="block text-primary text-lg font-bold">
                🕙 22h (Horário de Brasília)
              </span>
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
