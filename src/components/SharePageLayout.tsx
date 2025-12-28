import { useEffect } from "react";
import { Helmet } from "react-helmet-async";

interface SharePageLayoutProps {
  title: string;
  description: string;
  imageUrl: string;
  canonicalUrl: string;
}

const SharePageLayout = ({ title, description, imageUrl, canonicalUrl }: SharePageLayoutProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = "https://aurumfoundation.top/";
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:type" content="website" />
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
      
      <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground">
        <div className="text-center space-y-4 p-8">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-muted-foreground">{description}</p>
          <p className="text-sm text-muted-foreground animate-pulse">
            Redirecionando para Aurum Foundation...
          </p>
        </div>
      </div>
    </>
  );
};

export default SharePageLayout;
