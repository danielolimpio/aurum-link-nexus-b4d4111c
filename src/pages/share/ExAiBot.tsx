import SharePagePremium from "@/components/SharePagePremium";
import { Bot, TrendingUp, Shield, Users } from "lucide-react";

const ExAiBot = () => {
  return (
    <SharePagePremium
      title="EX-AI Bot | Robô de Trading de Criptomoedas da Aurum Foundation"
      subtitle="Automação com IA"
      description="EX-AI Bot é o robô de IA da Aurum Foundation para Trading de Criptomoedas em USDT. Arbitragem automatizada, segurança e rendimentos diários no ecossistema DeFi."
      imageUrl="https://aurumfoundation.top/images/og-ex-ai-bot.jpg"
      canonicalUrl="https://aurumfoundation.top/share/ex-ai-bot"
      keywords="EX-AI Bot, Aurum Foundation, Trading de Criptomoedas, Plataforma DeFi, USDT, robô de trading, arbitragem cripto, IA"
      introText="O EX-AI Bot é o coração do ecossistema Aurum, projetado para otimizar suas estratégias de trading com inteligência artificial. Ideal para iniciantes e traders experientes, ele opera automaticamente, maximizando seus lucros com segurança e precisão."
      sectionTitle="Características Principais do EX-AI Bot"
      features={[
        {
          icon: <Bot className="w-6 h-6" />,
          title: "Automação Total",
          description: "Executa ordens de compra e venda com base em algoritmos avançados de IA, operando 24/7 sem intervenção manual."
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Integração com Profitshare",
          description: "Gere Legacy Volume e participe do Profitshare diário com base nos lucros gerados pela sua equipe."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Segurança e Escalabilidade",
          description: "Operações seguras com proteção contra perdas excessivas e ajuste dinâmico ao mercado em tempo real."
        },
        {
          icon: <Users className="w-6 h-6" />,
          title: "Suporte ao Parceiro",
          description: "Contribua para o crescimento da sua equipe e receba bônus por diferença conforme seu nível Legacy."
        }
      ]}
      howItWorksTitle="Como o EX-AI Bot Impulsiona Seu Crescimento?"
      howItWorksText="Além de gerar lucros diretamente para você, cada operação realizada pelo bot contribui para o Legacy Volume da sua equipe. Isso significa que, à medida que mais parceiros usam o bot, você recebe uma participação maior nos lucros diários — até 30% no nível Alpha."
      ctaTitle="Pronto para Automatizar Seus Lucros?"
      ctaText="Ative o EX-AI Bot hoje mesmo. Comece a ganhar com inteligência artificial e construa seu legado financeiro com a Aurum Foundation."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/zeus-ai-bot", label: "Conhecer Zeus AI Bot" }
      ]}
    />
  );
};

export default ExAiBot;
