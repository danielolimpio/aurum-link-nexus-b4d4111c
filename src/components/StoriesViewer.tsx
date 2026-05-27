import { useState, useEffect, useCallback } from "react";
import { ArrowLeft, ChevronLeft, ChevronRight } from "lucide-react";

import story1 from "@/assets/stories/story-1.jpg";
import story2 from "@/assets/stories/story-2.jpg";
import story3 from "@/assets/stories/story-3.jpg";
import story4 from "@/assets/stories/story-4.jpg";
import story5 from "@/assets/stories/story-5.jpg";
import story6 from "@/assets/stories/story-6.jpg";
import story7 from "@/assets/stories/story-7.jpg";

const stories = [
  { src: story1, alt: "AURUM Foundation - Apresentação da plataforma de investimentos" },
  { src: story2, alt: "AURUM - Como funciona a multiplicação de capital em USDT" },
  { src: story3, alt: "AURUM Foundation - Depoimentos de investidores satisfeitos" },
  { src: story4, alt: "AURUM - Benefícios do Partner Program para afiliados" },
  { src: story5, alt: "AURUM Foundation - Segurança e confiabilidade da plataforma" },
  { src: story6, alt: "AURUM - Resultados e rendimentos de investidores" },
  { src: story7, alt: "AURUM Foundation - Como começar a investir na plataforma" },
];

interface StoriesViewerProps {
  isOpen: boolean;
  onClose: () => void;
}

const StoriesViewer = ({ isOpen, onClose }: StoriesViewerProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const goToNext = useCallback(() => {
    if (currentIndex < stories.length - 1) {
      setCurrentIndex((prev) => prev + 1);
      setProgress(0);
    } else {
      onClose();
    }
  }, [currentIndex, onClose]);

  const goToPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
      setProgress(0);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (!isOpen) {
      setCurrentIndex(0);
      setProgress(0);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          goToNext();
          return 0;
        }
        return prev + 2;
      });
    }, 100);

    return () => clearInterval(interval);
  }, [isOpen, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "ArrowLeft") goToPrev();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, goToNext, goToPrev]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black flex items-center justify-center">
      {/* Progress bars */}
      <div className="absolute top-4 left-4 right-4 flex gap-1 z-10">
        {stories.map((_, index) => (
          <div
            key={index}
            className="flex-1 h-0.5 bg-white/30 rounded-full overflow-hidden"
          >
            <div
              className="h-full bg-white rounded-full transition-all duration-100 ease-linear"
              style={{
                width:
                  index < currentIndex
                    ? "100%"
                    : index === currentIndex
                    ? `${progress}%`
                    : "0%",
              }}
            />
          </div>
        ))}
      </div>

      {/* Back button */}
      <button
        onClick={onClose}
        className="absolute top-10 left-4 z-10 p-2 text-white/80 hover:text-white transition-colors flex items-center gap-2"
        aria-label="Voltar"
      >
        <ArrowLeft size={28} />
        <span className="text-sm font-medium">Voltar</span>
      </button>

      {/* Story image */}
      <div className="relative w-full h-full flex items-center justify-center">
        <img
          src={stories[currentIndex].src}
          alt={stories[currentIndex].alt}
          className="max-h-full max-w-full object-contain"
          loading="lazy"
          decoding="async"
        />


        {/* Navigation areas */}
        <button
          onClick={goToPrev}
          className="absolute left-0 top-0 w-1/3 h-full cursor-pointer flex items-center justify-start pl-4"
          disabled={currentIndex === 0}
        >
          {currentIndex > 0 && (
            <ChevronLeft className="text-white/50 hover:text-white transition-colors" size={40} />
          )}
        </button>

        <button
          onClick={goToNext}
          className="absolute right-0 top-0 w-1/3 h-full cursor-pointer flex items-center justify-end pr-4"
        >
          {currentIndex < stories.length - 1 && (
            <ChevronRight className="text-white/50 hover:text-white transition-colors" size={40} />
          )}
        </button>
      </div>
    </div>
  );
};

export default StoriesViewer;
