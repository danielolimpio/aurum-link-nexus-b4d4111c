import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

const siteUrls = [
  { path: "/", title: "Aurum Foundation - Página Principal", description: "Ecossistema financeiro digital completo" },
  { path: "/share/ex-ai-bot", title: "EX AI Bot", description: "Bot de trading com inteligência artificial" },
  { path: "/share/zeus-ai-bot", title: "Zeus AI Bot", description: "Bot avançado de automação" },
  { path: "/share/flash-loans", title: "Flash Loans", description: "Empréstimos instantâneos DeFi" },
  { path: "/share/neo-bank", title: "Neo Bank", description: "Banco digital da nova geração" },
  { path: "/share/card", title: "Aurum Card", description: "Cartão de crédito/débito crypto" },
  { path: "/share/exchange", title: "Exchange", description: "Plataforma de troca de criptomoedas" },
  { path: "/share/token", title: "Aurum Token", description: "Token nativo do ecossistema" },
];

const Sitemap = () => {
  return (
    <>
      <Helmet>
        <html lang="pt-BR" />
        <title>Sitemap - Aurum Foundation</title>
        <meta name="description" content="Mapa do site Aurum Foundation - Navegue por todas as páginas do ecossistema financeiro digital." />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://aurumfoundation.top/sitemap" />
      </Helmet>
      
      <main className="min-h-screen bg-background text-foreground">
        <div className="container mx-auto px-4 py-12 max-w-4xl">
          <header className="mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Sitemap - Aurum Foundation
            </h1>
            <p className="text-muted-foreground text-lg">
              Navegue por todas as páginas do ecossistema Aurum Foundation.
            </p>
          </header>

          <nav aria-label="Mapa do site">
            <ul className="space-y-6">
              {siteUrls.map((url) => (
                <li key={url.path} className="border-b border-border pb-4">
                  <Link 
                    to={url.path}
                    className="group block hover:bg-accent/10 rounded-lg p-4 -m-4 transition-colors"
                  >
                    <h2 className="text-xl font-semibold text-primary group-hover:underline mb-1">
                      {url.title}
                    </h2>
                    <p className="text-muted-foreground mb-2">
                      {url.description}
                    </p>
                    <span className="text-sm text-accent font-mono">
                      https://aurumfoundation.top{url.path}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <footer className="mt-12 pt-8 border-t border-border">
            <p className="text-muted-foreground text-sm">
              <a 
                href="/sitemap.xml" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ver sitemap.xml
              </a>
              {" "}• Última atualização: Janeiro 2026
            </p>
          </footer>
        </div>
      </main>
    </>
  );
};

export default Sitemap;
