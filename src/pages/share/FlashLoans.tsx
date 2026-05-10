import SharePagePremium from "@/components/SharePagePremium";
import { Zap, ShieldCheck, Layers, Lock } from "lucide-react";

const FlashLoans = () => {
  return (
    <SharePagePremium
      title="Flash Loans Aurum Foundation | Empréstimos DeFi Instantâneos"
      subtitle="Liquidez Instantânea"
      description="Flash Loans da Aurum Foundation: empréstimos DeFi instantâneos sem colateral para Trading de Criptomoedas e arbitragem na Plataforma DeFi Aurum."
      imageUrl="https://aurumfoundation.top/images/og-flash-loans.jpg"
      canonicalUrl="https://aurumfoundation.top/share/flash-loans"
      keywords="Flash Loans, Aurum Foundation, Plataforma DeFi, Trading de Criptomoedas, empréstimo cripto, arbitragem, USDT"
      introText="Com as Aurum Flash Loans, você pode acessar capital imediatamente, sem necessidade de colateral. Perfeito para traders e empreendedores que precisam de liquidez rápida para aproveitar oportunidades no mercado."
      sectionTitle="Como Funcionam as Flash Loans?"
      features={[
        {
          icon: <Zap className="w-6 h-6" />,
          title: "Instantâneas",
          description: "Obtenha empréstimos em segundos, sem burocracia. Capital disponível quando você mais precisa."
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Sem Colateral",
          description: "Não é necessário deixar ativos como garantia — apenas devolva o empréstimo na mesma transação."
        },
        {
          icon: <Layers className="w-6 h-6" />,
          title: "Integração com o Ecossistema",
          description: "Use as Flash Loans para impulsionar suas operações no EX-AI Bot ou na Aurum Exchange."
        },
        {
          icon: <Lock className="w-6 h-6" />,
          title: "Segurança Garantida",
          description: "Transações executadas em blockchain, com contratos inteligentes verificados e auditados."
        }
      ]}
      howItWorksTitle="Vantagens para Parceiros Aurum"
      howItWorksText="As Flash Loans não apenas oferecem liquidez, mas também geram Legacy Volume para sua equipe. Ao usar esse recurso, você contribui para o crescimento coletivo e aumenta sua participação nos bônus diários de Profitshare."
      ctaTitle="Pronto para Aproveitar Liquidez Instantânea?"
      ctaText="Experimente a Aurum Exchange e use as Flash Loans para maximizar seus lucros. Comece a operar com liberdade financeira hoje mesmo."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/exchange", label: "Conhecer a Exchange" }
      ]}
    />
  );
};

export default FlashLoans;
