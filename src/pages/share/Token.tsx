import SharePagePremium from "@/components/SharePagePremium";
import { Coins, CreditCard, Vote, PiggyBank } from "lucide-react";

const Token = () => {
  return (
    <SharePagePremium
      title="Aurum Token: O Coração do Ecossistema Aurum"
      subtitle="Token Nativo"
      description="O Aurum Token (AUR) é o ativo nativo do ecossistema Aurum, projetado para impulsionar todas as funcionalidades da plataforma."
      imageUrl="https://aurumfoundation.top/images/og-token.jpg"
      canonicalUrl="https://aurumfoundation.top/share/token"
      introText="O Aurum Token (AUR) é o ativo nativo do ecossistema Aurum, projetado para impulsionar todas as funcionalidades da plataforma. Desde pagamentos e recompensas até governança e crescimento da comunidade, o token é essencial para o funcionamento e expansão do ecossistema."
      sectionTitle="Usos do Aurum Token"
      features={[
        {
          icon: <Coins className="w-6 h-6" />,
          title: "Recompensas e Bônus",
          description: "Receba tokens como parte dos bônus diários de Profitshare e trimestrais de Shareholder Bonus."
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: "Pagamentos e Transações",
          description: "Use o token para comprar produtos, pagar taxas e realizar transações dentro do ecossistema."
        },
        {
          icon: <Vote className="w-6 h-6" />,
          title: "Governança Comunitária",
          description: "Participe das decisões futuras do ecossistema, votando em propostas e atualizações importantes."
        },
        {
          icon: <PiggyBank className="w-6 h-6" />,
          title: "Staking e Rendimento",
          description: "Stake seus tokens para receber rendimentos passivos e contribuir para a segurança da rede."
        }
      ]}
      howItWorksTitle="Como o Token Impulsiona Seu Crescimento?"
      howItWorksText="O Aurum Token é a moeda de troca do ecossistema. Quanto mais você participa — usando os bots, fazendo transações, expandindo sua equipe — mais tokens você ganha. Isso significa que seu crescimento financeiro está diretamente ligado ao valor e utilidade do token."
      ctaTitle="Adquira Seu Token Hoje"
      ctaText="Negocie o Aurum Token na Aurum Exchange e comece a acumular recompensas. Maximize seus ganhos com o token nativo do ecossistema Aurum."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/exchange", label: "Conhecer a Exchange" }
      ]}
    />
  );
};

export default Token;
