import SharePagePremium from "@/components/SharePagePremium";
import { Megaphone, BarChart3, Gift, RefreshCw } from "lucide-react";

const ZeusAiBot = () => {
  return (
    <SharePagePremium
      title="Aurum Zeus Bot | Robô de Marketing e IA da Aurum Foundation"
      subtitle="Marketing Inteligente"
      description="Aurum Zeus Bot é o robô de IA da Aurum Foundation para marketing e Trading de Criptomoedas. Reinvestimento automatizado e crescimento na Plataforma DeFi."
      imageUrl="https://aurumfoundation.top/images/og-zeus-ai-bot.jpg"
      canonicalUrl="https://aurumfoundation.top/share/zeus-ai-bot"
      keywords="Aurum Zeus Bot, Zeus AI Bot, Aurum Foundation, Plataforma DeFi, Trading de Criptomoedas, marketing cripto, IA, USDT"
      introText="O Zeus AI Bot não é apenas um assistente de trading — é uma ferramenta de marketing revolucionária. Desde 1º de janeiro de 2026, 10% do volume mensal de negociações da rede é reinvestido no plano de marketing, garantindo escalabilidade e distribuição justa entre os parceiros."
      sectionTitle="Benefícios do Zeus AI Bot"
      features={[
        {
          icon: <Megaphone className="w-6 h-6" />,
          title: "Marketing Automatizado",
          description: "Use a IA para atrair novos parceiros e expandir sua rede com eficiência e precisão algorítmica."
        },
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Legacy Volume Gerado",
          description: "Cada uso do bot contribui para o volume da sua equipe, acelerando seu progresso nos níveis Legacy."
        },
        {
          icon: <Gift className="w-6 h-6" />,
          title: "Recompensas Diárias",
          description: "Participe do Profitshare diário com base no desempenho da sua equipe e no seu nível Legacy."
        },
        {
          icon: <RefreshCw className="w-6 h-6" />,
          title: "Atualizações Contínuas",
          description: "O bot evolui constantemente com base no feedback dos parceiros e nas tendências do mercado."
        }
      ]}
      howItWorksTitle="Como o Zeus AI Bot Funciona?"
      howItWorksText="O bot analisa dados em tempo real para identificar oportunidades de marketing e trading. Ele ajuda você a manter sua equipe engajada, aumentando seu volume e, consequentemente, seus bônus. Quanto mais parceiros você tiver usando o bot, maiores serão suas recompensas."
      ctaTitle="Maximize Seu Potencial de Marketing"
      ctaText="Combine o Zeus AI Bot com o EX-AI Bot para um crescimento exponencial. Comece a usar a IA a seu favor hoje mesmo."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/ex-ai-bot", label: "Conhecer EX-AI Bot" }
      ]}
    />
  );
};

export default ZeusAiBot;
