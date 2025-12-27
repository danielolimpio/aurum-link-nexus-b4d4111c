import { useEffect, useState, useCallback } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import carousel1 from "@/assets/carousel/carousel-1.webp";
import carousel2 from "@/assets/carousel/carousel-2.webp";
import carousel3 from "@/assets/carousel/carousel-3.webp";
import carousel4 from "@/assets/carousel/carousel-4.webp";
import carousel5 from "@/assets/carousel/carousel-5.webp";
import carousel6 from "@/assets/carousel/carousel-6.webp";
import carousel7 from "@/assets/carousel/carousel-7.webp";
import carousel8 from "@/assets/carousel/carousel-8.webp";
import carousel9 from "@/assets/carousel/carousel-9.webp";
import carousel10 from "@/assets/carousel/carousel-10.webp";
import carousel11 from "@/assets/carousel/carousel-11.webp";
import carousel12 from "@/assets/carousel/carousel-12.webp";
import carousel13 from "@/assets/carousel/carousel-13.webp";
import carousel14 from "@/assets/carousel/carousel-14.webp";
import carousel15 from "@/assets/carousel/carousel-15.webp";
import carousel16 from "@/assets/carousel/carousel-16.webp";
import carousel17 from "@/assets/carousel/carousel-17.webp";
import carousel18 from "@/assets/carousel/carousel-18.webp";
import carousel19 from "@/assets/carousel/carousel-19.webp";
import carousel20 from "@/assets/carousel/carousel-20.webp";

const images = [
  { src: carousel1, alt: "AURUM Foundation - Investimento seguro em criptomoedas e USDT" },
  { src: carousel2, alt: "AURUM - Multiplicação de capital com tecnologia blockchain" },
  { src: carousel3, alt: "AURUM Foundation - Resultados de investidores parceiros" },
  { src: carousel4, alt: "AURUM - Plataforma de investimentos com inteligência artificial" },
  { src: carousel5, alt: "AURUM Foundation - Sede em Dubai e Hong Kong" },
  { src: carousel6, alt: "AURUM - Ecossistema financeiro descentralizado" },
  { src: carousel7, alt: "AURUM Foundation - Rendimentos em USDT para investidores" },
  { src: carousel8, alt: "AURUM - Tecnologia financeira inovadora" },
  { src: carousel9, alt: "AURUM Foundation - Comunidade global de investidores" },
  { src: carousel10, alt: "AURUM - Segurança e transparência em investimentos" },
  { src: carousel11, alt: "AURUM Foundation - Oportunidade de crescimento financeiro" },
  { src: carousel12, alt: "AURUM - Partner Program para afiliados" },
  { src: carousel13, alt: "AURUM Foundation - Eventos exclusivos para parceiros" },
  { src: carousel14, alt: "AURUM - Resultados comprovados de investimentos" },
  { src: carousel15, alt: "AURUM Foundation - Liderança no mercado de criptomoedas" },
  { src: carousel16, alt: "AURUM - Rede global de investidores e parceiros" },
  { src: carousel17, alt: "AURUM Foundation - Inovação em ativos digitais" },
  { src: carousel18, alt: "AURUM - Crescimento sustentável de capital" },
  { src: carousel19, alt: "AURUM Foundation - Educação financeira e blockchain" },
  { src: carousel20, alt: "AURUM - Futuro dos investimentos digitais" },
];

const AUTOPLAY_INTERVAL = 4000;

const ImageCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext();
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  // Autoplay
  useEffect(() => {
    if (!api || isPaused) return;

    const interval = setInterval(() => {
      scrollNext();
    }, AUTOPLAY_INTERVAL);

    return () => clearInterval(interval);
  }, [api, isPaused, scrollNext]);

  return (
    <div 
      className="w-full opacity-0 animate-fade-in-up animation-delay-700"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setIsPaused(false)}
    >
      <Carousel
        setApi={setApi}
        opts={{
          align: "center",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="pl-2 md:pl-4 basis-[75%] md:basis-[45%]"
            >
              <div
                className={`relative overflow-hidden rounded-2xl transition-all duration-500 ease-out ${
                  current === index
                    ? "scale-100 opacity-100 shadow-2xl shadow-primary/20"
                    : "scale-90 opacity-50"
                }`}
              >
                {/* Glow effect */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br from-primary/30 via-transparent to-aurum-cyan/30 opacity-0 transition-opacity duration-500 ${
                    current === index ? "opacity-100" : ""
                  }`}
                />
                
                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-auto object-contain"
                />
                
                {/* Reflection effect */}
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        
        <CarouselPrevious className="left-2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/50 transition-all duration-300" />
        <CarouselNext className="right-2 bg-background/80 backdrop-blur-sm border-border/50 hover:bg-background hover:border-primary/50 transition-all duration-300" />
      </Carousel>

      {/* Dots indicator */}
      <div className="flex justify-center gap-1.5 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => api?.scrollTo(index)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              current === index
                ? "w-6 bg-primary"
                : "w-1.5 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;
