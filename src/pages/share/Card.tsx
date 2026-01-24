import SharePagePremium from "@/components/SharePagePremium";
import { Gift, TrendingUp, Sparkles, ShieldCheck } from "lucide-react";

const Card = () => {
  return (
    <SharePagePremium
      title="Aurum Card: Seu Cartão Cripto com Recompensas Exclusivas"
      subtitle="Cartão Premium"
      description="O Aurum Card é mais do que um cartão de débito — é uma chave para o ecossistema Aurum com recompensas baseadas no seu nível Legacy."
      imageUrl="https://aurumfoundation.top/images/og-card.jpg"
      canonicalUrl="https://aurumfoundation.top/share/card"
      introText="O Aurum Card é mais do que um cartão de débito — é uma chave para o ecossistema Aurum. Use-o para compras diárias, saques e recargas, e ganhe recompensas baseadas no seu nível Legacy. Quanto mais alto seu nível, maiores as recompensas."
      sectionTitle="Benefícios do Aurum Card"
      features={[
        {
          icon: <Gift className="w-6 h-6" />,
          title: "Recompensas por Transação",
          description: "Ganhe até 100% do Legacy Volume gerado por suas compras, dependendo do seu nível no programa."
        },
        {
          icon: <TrendingUp className="w-6 h-6" />,
          title: "Integração com Profitshare",
          description: "As taxas de transação são compartilhadas com base no seu Legacy Level, aumentando sua renda passiva."
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Design Premium",
          description: "Cartão físico e virtual com design moderno, disponível em várias cores e estilos exclusivos."
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Segurança Avançada",
          description: "Tecnologia de chip e autenticação biométrica para proteger todas as suas transações."
        }
      ]}
      howItWorksTitle="Como o Cartão Impulsiona Seu Crescimento?"
      howItWorksText="Cada vez que você usa o Aurum Card, você não só paga por seus produtos — você gera valor para sua equipe. As transações contribuem para o Legacy Volume, acelerando seu progresso nos níveis Legacy e aumentando sua participação nos bônus diários de Profitshare."
      ctaTitle="Peça Seu Cartão Hoje"
      ctaText="Conecte seu cartão ao NeoBank App e comece a ganhar recompensas imediatamente. Maximize seus benefícios com o Aurum Card."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/neo-bank", label: "Conhecer o NeoBank" }
      ]}
    />
  );
};

export default Card;
