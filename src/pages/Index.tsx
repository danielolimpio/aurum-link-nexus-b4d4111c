import { Globe, Youtube, Instagram, UserPlus, MessageCircle, FileText } from "lucide-react";
import { Helmet } from "react-helmet-async";
import ProfileHeader from "@/components/ProfileHeader";
import LinkButton from "@/components/LinkButton";
import SocialIcon from "@/components/SocialIcon";
import VideoEmbed from "@/components/VideoEmbed";
import ImageCarousel from "@/components/ImageCarousel";
import ZoomLiveButton from "@/components/ZoomLiveButton";
import ExpandableContent from "@/components/ExpandableContent";
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
      <Helmet>
        <html lang="pt-BR" />
        <title>Aurum Foundation | Plataforma de Investimento em USDT com IA e Blockchain</title>
        <meta name="description" content="Aurum Foundation é a plataforma líder em multiplicação de capital em USDT. Tecnologia com IA e Blockchain, sede em Dubai. Cadastre-se e multiplique seu capital com segurança." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aurumfoundation.top" />
      </Helmet>

      <main className="min-h-screen bg-background" itemScope itemType="https://schema.org/WebPage">
        <ProfileHeader />

        {/* Content Section */}
        <article className="relative px-4 pt-24 md:pt-28 pb-12 max-w-lg mx-auto" itemScope itemType="https://schema.org/Article">
          {/* Title - H1 with primary keyword */}
          <h1 className="text-2xl md:text-3xl font-display font-bold text-center mb-3 opacity-0 animate-fade-in-up animation-delay-100" itemProp="headline">
            <span className="text-gradient">Aurum Foundation</span>
            <br />
            <span className="text-foreground">Invista com Segurança em USDT</span>
          </h1>

          {/* Meta Description with keyword */}
          <p className="text-muted-foreground text-center text-sm md:text-base mb-4 opacity-0 animate-fade-in-up animation-delay-200" itemProp="description">
            A <strong>Aurum Foundation</strong> é um ecossistema líder em tecnologia financeira, impulsionado por Inteligência Artificial e Blockchain.
          </p>

          {/* Expandable SEO Content */}
          <ExpandableContent />

          {/* Video Section */}
          <div className="mb-8 mt-4">
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

          {/* PDF Button */}
          <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up animation-delay-700">
            <a
              href="/aurum-partner-program.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 text-sm rounded-full border border-primary/30 bg-primary/10 text-primary hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              <FileText className="w-4 h-4" />
              <span>Apresentação Partner Program</span>
            </a>
          </div>

          {/* Image Carousel - Aurum Foundation Products */}
          <section className="mb-10" aria-label="Produtos Aurum Foundation">
            <ImageCarousel />
          </section>

          {/* Social Icons */}
          <div className="flex justify-center gap-4 items-center">
            {socialLinks.map((social) => (
              <SocialIcon
                key={social.href}
                href={social.href}
                icon={social.icon}
                label={social.label}
              />
            ))}
            <ZoomLiveButton />
          </div>

          {/* Footer */}
          <footer className="text-center text-muted-foreground/50 text-xs mt-12 space-y-4">
            {/* Main Navigation */}
            <nav aria-label="Navegação principal" className="py-4 border-t border-primary/10">
              <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
                <a href="/" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 font-medium">Home</a>
                <span className="text-primary/20">•</span>
                <a href="/share/ex-ai-bot" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">EX-AI Bot</a>
                <span className="text-primary/20">•</span>
                <a href="/share/zeus-ai-bot" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Zeus Bot</a>
                <span className="text-primary/20">•</span>
                <a href="/share/flash-loans" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Flash Loans</a>
                <span className="text-primary/20">•</span>
                <a href="/share/neo-bank" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Neo Bank</a>
                <span className="text-primary/20">•</span>
                <a href="/share/card" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Card</a>
                <span className="text-primary/20">•</span>
                <a href="/share/exchange" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Exchange</a>
                <span className="text-primary/20">•</span>
                <a href="/share/token" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300">Token</a>
                <span className="text-primary/20">•</span>
                <a href="/contato" className="text-muted-foreground/60 hover:text-primary transition-colors duration-300 font-medium">Contato</a>
              </div>
            </nav>
            
            {/* Sitemap Link */}
            <nav aria-label="Links do rodapé">
              <a 
                href="/sitemap" 
                className="text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
              >
                Sitemap
              </a>
            </nav>
            
            {/* Copyright */}
            <p>© {new Date().getFullYear()} <strong>Aurum Foundation</strong> | Todos os direitos reservados | Desenvolvido por{" "}
              <a 
                href="https://danielolimpio.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary/70 hover:text-primary transition-colors underline underline-offset-2"
              >
                DanielOlimpio
              </a>
            </p>
          </footer>
        </article>
      </main>
    </>
  );
};

export default Index;
