import { useState } from "react";
import { ChevronDown, ChevronUp, Zap, Users, Bot, CreditCard, Rocket, TrendingUp } from "lucide-react";

const ExpandableContent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const features = [
    {
      icon: TrendingUp,
      title: "Renda Passiva Diária",
      description: "Ganhe até 30% de Profitshare diário sobre os lucros da sua equipe, com compounding ilimitado."
    },
    {
      icon: Users,
      title: "Programa Legado",
      description: "15 níveis de crescimento com bônus progressivos, viagens exclusivas e recompensas trimestrais."
    },
    {
      icon: Bot,
      title: "Tecnologia AI",
      description: "Acesse bots de IA como EX-AIBot, Zeus AI Bot e NeoBank App para maximizar seus resultados."
    },
    {
      icon: CreditCard,
      title: "Ecossistema Completo",
      description: "Cartão cripto, exchange pública, flash loans — tudo integrado para sua conveniência."
    }
  ];

  const news = [
    { text: "Aurum Exchange entrou em beta público", highlight: "Aurum Exchange" },
    { text: "Zeus AI Bot: 10% do volume mensal distribuído a partir de Jan/2026", highlight: "Zeus AI Bot" },
    { text: "NeoBank App disponível em beta para iOS e Android", highlight: "NeoBank App" }
  ];

  return (
    <div className="w-full opacity-0 animate-fade-in-up animation-delay-250">
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex flex-col items-center gap-1 py-3 group transition-all duration-300"
        aria-expanded={isOpen}
        aria-label={isOpen ? "Fechar detalhes" : "Ver mais detalhes"}
      >
        <span className="text-xs text-muted-foreground group-hover:text-primary/80 transition-colors">
          {isOpen ? "Fechar" : "Saiba mais"}
        </span>
        <div className={`p-1.5 rounded-full border border-primary/20 bg-primary/5 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300 ${isOpen ? 'rotate-180' : 'animate-bounce'}`}>
          <ChevronDown className="w-4 h-4 text-primary/70" />
        </div>
      </button>

      {/* Expandable Content */}
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="py-6 space-y-6">
          {/* Header Section */}
          <div className="text-center space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <Zap className="w-3 h-3 text-primary" />
              <span className="text-xs font-medium text-primary">O Futuro da Finança Digital</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-md mx-auto">
              Tecnologia de ponta e modelo de parceria inovador para renda passiva, crescimento de equipe e recompensas globais.
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-2 gap-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group p-3 rounded-xl bg-gradient-to-br from-card/80 to-card/40 border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                <div className="flex items-start gap-2.5">
                  <div className="p-1.5 rounded-lg bg-primary/10 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xs font-semibold text-foreground mb-0.5 truncate">
                      {feature.title}
                    </h3>
                    <p className="text-[10px] text-muted-foreground leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* News Section */}
          <div className="space-y-2">
            <div className="flex items-center gap-2 px-1">
              <Rocket className="w-3.5 h-3.5 text-primary/70" />
              <span className="text-xs font-medium text-foreground/80">Últimas Novidades</span>
            </div>
            <div className="space-y-2">
              {news.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2.5 p-2.5 rounded-lg bg-muted/30 border border-border/50 hover:border-primary/20 transition-all duration-200"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                  <p className="text-[11px] text-muted-foreground leading-relaxed">
                    <strong className="text-foreground/90">{item.highlight}</strong>:{" "}
                    {item.text.replace(item.highlight, "").replace(":", "").trim()}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center pt-2">
            <p className="text-xs text-muted-foreground mb-3">
              Pronto para transformar sua renda?
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <a
                href="/share/ex-ai-bot"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-full bg-primary/10 text-primary border border-primary/20 hover:bg-primary/20 hover:border-primary/40 transition-all duration-200"
              >
                <Bot className="w-3 h-3" />
                Conheça nossos produtos
              </a>
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-muted-foreground hover:text-primary/80 transition-colors"
          >
            <ChevronUp className="w-3.5 h-3.5" />
            <span>Fechar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExpandableContent;
