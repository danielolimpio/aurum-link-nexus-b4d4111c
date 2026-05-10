import SharePagePremium from "@/components/SharePagePremium";
import { LineChart, Shield, Bot, Zap } from "lucide-react";

const Exchange = () => {
  return (
    <SharePagePremium
      title="Aurum Exchange | Plataforma DeFi de Trading de Criptomoedas"
      subtitle="Exchange Pública"
      description="Aurum Exchange é a Plataforma DeFi de Trading de Criptomoedas da Aurum Foundation: taxas baixas, alta liquidez e segurança institucional para investidores."
      imageUrl="https://aurumfoundation.top/images/og-exchange.jpg"
      canonicalUrl="https://aurumfoundation.top/share/exchange"
      keywords="Aurum Exchange, Aurum Foundation, Plataforma DeFi, Trading de Criptomoedas, exchange cripto, USDT, liquidez"
      introText="A Aurum Exchange é a plataforma de negociação pública do ecossistema Aurum. Projetada para usuários de todos os níveis, ela oferece uma interface intuitiva, taxas baixas e execução rápida de ordens — tudo dentro de um ambiente seguro e regulado."
      sectionTitle="Recursos da Aurum Exchange"
      features={[
        {
          icon: <LineChart className="w-6 h-6" />,
          title: "Interface Intuitiva",
          description: "Gráficos em tempo real, ordens limitadas e de mercado, e histórico de transações completo."
        },
        {
          icon: <Shield className="w-6 h-6" />,
          title: "Segurança de Nível Institucional",
          description: "Armazenamento frio de ativos, autenticação de dois fatores e auditorias regulares."
        },
        {
          icon: <Bot className="w-6 h-6" />,
          title: "Integração com Bots",
          description: "Conecte-se ao EX-AI Bot e ao Zeus AI Bot para automação de trading e marketing."
        },
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Flash Loans Disponíveis",
          description: "Acesse capital instantâneo para aproveitar oportunidades de mercado rapidamente."
        }
      ]}
      howItWorksTitle="Como a Exchange Beneficia Parceiros Aurum?"
      howItWorksText="Cada transação na exchange gera Legacy Volume para sua equipe, acelerando seu progresso nos níveis Legacy. Além disso, você participa do Profitshare diário com base no seu nível Legacy — até 30% no nível Alpha. A exchange é mais do que um local de negociação; é uma ferramenta de crescimento financeiro."
      ctaTitle="Comece a Negociar Hoje"
      ctaText="A Aurum Exchange está em beta público — teste agora as negociações em tempo real. Comece a operar com confiança e segurança."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/flash-loans", label: "Conhecer Flash Loans" }
      ]}
    />
  );
};

export default Exchange;
