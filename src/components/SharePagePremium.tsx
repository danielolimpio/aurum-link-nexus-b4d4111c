import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink, ChevronRight } from "lucide-react";
import { ReactNode } from "react";

interface FeatureItem {
  icon: ReactNode;
  title: string;
  description: string;
}

interface SharePagePremiumProps {
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  canonicalUrl: string;
  keywords?: string;
  introText: string;
  sectionTitle: string;
  features: FeatureItem[];
  howItWorksTitle: string;
  howItWorksText: string;
  ctaTitle: string;
  ctaText: string;
  ctaLinks: { href: string; label: string; external?: boolean }[];
}

const SharePagePremium = ({
  title,
  subtitle,
  description,
  imageUrl,
  canonicalUrl,
  keywords,
  introText,
  sectionTitle,
  features,
  howItWorksTitle,
  howItWorksText,
  ctaTitle,
  ctaText,
  ctaLinks,
}: SharePagePremiumProps) => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{title} | Aurum Foundation</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pt_BR" />
        <meta property="og:site_name" content="Aurum Foundation" />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:alt" content={title} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Helmet>
      
      <main className="min-h-screen bg-background text-foreground">
        {/* Hero Section */}
        <section className="relative py-16 md:py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 via-transparent to-transparent" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full opacity-50" />
          
          <div className="container max-w-5xl mx-auto px-4 relative z-10">
            {/* Back Navigation */}
            <Link 
              to="/"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors duration-300 mb-8 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="text-sm">Voltar para Home</span>
            </Link>
            
            <article itemScope itemType="https://schema.org/Product">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-medium text-primary uppercase tracking-wider">{subtitle}</span>
              </div>
              
              {/* Title */}
              <h1 
                className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent leading-tight"
                itemProp="name"
              >
                {title}
              </h1>
              
              {/* Description */}
              <p 
                className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-10"
                itemProp="description"
              >
                {introText}
              </p>
              
              {/* Hero Image */}
              <div className="relative rounded-2xl overflow-hidden border border-primary/10 shadow-2xl shadow-primary/5 mb-16">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent z-10" />
                <img 
                  src={imageUrl} 
                  alt={title}
                  className="w-full aspect-video object-cover"
                  itemProp="image"
                />
              </div>
            </article>
          </div>
        </section>
        
        {/* Features Section */}
        <section className="py-16 md:py-20 border-t border-primary/10">
          <div className="container max-w-5xl mx-auto px-4">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">{sectionTitle}</h2>
            <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-12" />
            
            <div className="grid md:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className="group relative p-6 rounded-xl border border-primary/10 bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:bg-card/80 transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                        {feature.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
                          {feature.title}
                        </h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-primary/20 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* How It Works Section */}
        <section className="py-16 md:py-20 bg-gradient-to-b from-primary/5 to-transparent">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">{howItWorksTitle}</h2>
              <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mb-8" />
              <p className="text-muted-foreground text-lg leading-relaxed">
                {howItWorksText}
              </p>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-primary/10">
          <div className="container max-w-5xl mx-auto px-4">
            <div className="relative rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-card to-card p-8 md:p-12 overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 blur-[80px] rounded-full" />
              
              <div className="relative z-10 text-center">
                <h2 className="text-2xl md:text-3xl font-bold mb-4">{ctaTitle}</h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  {ctaText}
                </p>
                
                <div className="flex flex-wrap items-center justify-center gap-4">
                  {ctaLinks.map((link, index) => (
                    link.external ? (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 hover:-translate-y-0.5"
                      >
                        {link.label}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        key={index}
                        to={link.href}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 font-medium hover:-translate-y-0.5"
                      >
                        {link.label}
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    )
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="py-8 border-t border-primary/10">
          <div className="container max-w-5xl mx-auto px-4 text-center">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Aurum Foundation - Todos os direitos reservados
            </p>
          </div>
        </footer>
      </main>
    </>
  );
};

export default SharePagePremium;
