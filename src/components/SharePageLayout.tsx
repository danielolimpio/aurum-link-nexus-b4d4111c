import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ArrowLeft, ExternalLink } from "lucide-react";

interface SharePageLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  canonicalUrl: string;
}

const SharePageLayout = ({ title, description, imageUrl, canonicalUrl }: SharePageLayoutProps) => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>{title} | Aurum Foundation</title>
        <meta name="description" content={description} />
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
      
      <main className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4">
        <article className="text-center space-y-6 max-w-lg" itemScope itemType="https://schema.org/Product">
          <h1 className="text-2xl md:text-3xl font-bold text-primary" itemProp="name">{title}</h1>
          <p className="text-muted-foreground text-lg" itemProp="description">{description}</p>
          
          <img 
            src={imageUrl} 
            alt={title}
            className="w-full rounded-lg shadow-lg"
            itemProp="image"
          />
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link 
              to="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar para Home
            </Link>
            <a 
              href="https://backoffice.aurum.foundation/u/5CW428"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors font-medium"
            >
              Cadastre-se Agora
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
          
          <p className="text-xs text-muted-foreground/60 pt-8">
            © {new Date().getFullYear()} Aurum Foundation - Todos os direitos reservados
          </p>
        </article>
      </main>
    </>
  );
};

export default SharePageLayout;
