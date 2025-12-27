import { Globe, Youtube, Instagram, UserPlus, MessageCircle } from "lucide-react";
import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import SocialIcon from "@/components/SocialIcon";
import VideoEmbed from "@/components/VideoEmbed";
import ImageCarousel from "@/components/ImageCarousel";

const Index = () => {
  const links = [
    {
      href: "https://aurumfoundation.world/",
      icon: Globe,
      label: "Website Oficial",
      delay: "animation-delay-400",
    },
    {
      href: "https://backoffice.aurum.foundation/u/5CW428",
      icon: UserPlus,
      label: "Cadastre-se Agora",
      delay: "animation-delay-500",
    },
    {
      href: "https://wa.me/5512981408992",
      icon: MessageCircle,
      label: "Suporte WhatsApp",
      delay: "animation-delay-600",
    },
  ];

  const socialLinks = [
    {
      href: "https://www.youtube.com/@aurumfoundationoficial",
      icon: Youtube,
      label: "YouTube",
    },
    {
      href: "https://www.instagram.com/aurum.foundation/",
      icon: Instagram,
      label: "Instagram",
    },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <title>AURUM Foundation - A maneira mais segura de gerenciar seus ativos digitais</title>
      <meta
        name="description"
        content="A AURUM é um ecossistema líder em tecnologia financeira, impulsionado por Inteligência Artificial e Blockchain."
      />

      <main className="min-h-screen bg-background">
        <ProfileHeader />

        {/* Content Section */}
        <div className="relative px-4 pt-24 md:pt-28 pb-12 max-w-lg mx-auto">
          {/* Title */}
          <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-3 opacity-0 animate-fade-in-up animation-delay-100">
            <span className="text-gradient">A maneira mais segura</span>
            <br />
            <span className="text-foreground">de gerenciar seus ativos digitais</span>
          </h1>

          {/* Meta Description */}
          <p className="text-muted-foreground text-center text-sm md:text-base mb-8 opacity-0 animate-fade-in-up animation-delay-200">
            A AURUM é um ecossistema líder em tecnologia financeira, impulsionado por Inteligência Artificial e Blockchain.
          </p>

          {/* Video Section */}
          <div className="mb-8">
            <VideoEmbed videoUrl="https://www.youtube.com/watch?v=aPk6FUIHnSs" />
          </div>

          {/* Link Buttons */}
          <div className="flex flex-col gap-4 mb-10">
            {links.map((link) => (
              <LinkButton
                key={link.href}
                href={link.href}
                icon={link.icon}
                label={link.label}
                delay={link.delay}
              />
            ))}
          </div>

          {/* Image Carousel */}
          <div className="mb-10">
            <ImageCarousel />
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.href}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
          </div>

          {/* Footer */}
          <p className="text-center text-muted-foreground/50 text-xs mt-12">
            © {new Date().getFullYear()} AURUM Foundation. Todos os direitos reservados.
          </p>
        </div>
      </main>
    </>
  );
};

export default Index;
