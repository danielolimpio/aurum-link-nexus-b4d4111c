import SharePagePremium from "@/components/SharePagePremium";
import { Wallet, ArrowUpDown, CreditCard, RefreshCcw } from "lucide-react";

const NeoBank = () => {
  return (
    <SharePagePremium
      title="Aurum Neobank | Conta Cripto e Banco Digital da Aurum Foundation"
      subtitle="Banco Digital"
      description="Aurum Neobank é o banco digital cripto da Aurum Foundation: conta multimoeda em USDT, integração com Aurum Card e Aurum Exchange na Plataforma DeFi."
      imageUrl="https://aurumfoundation.top/images/og-neo-bank.jpg"
      canonicalUrl="https://aurumfoundation.top/share/neo-bank"
      keywords="Aurum Neobank, Aurum Foundation, banco digital cripto, Aurum Card, Plataforma DeFi, USDT, conta cripto"
      introText="O Aurum NeoBank App é a conta bancária do futuro — projetada para o mundo digital. Com acesso a criptomoedas, cartões físicos e virtuais, e integração completa com o ecossistema Aurum, ele oferece conveniência e controle total sobre seu dinheiro."
      sectionTitle="Recursos do NeoBank App"
      features={[
        {
          icon: <Wallet className="w-6 h-6" />,
          title: "Saldo em Tempo Real",
          description: "Veja seu saldo total e o valor de suas criptomoedas atualizadas em tempo real, sempre que precisar."
        },
        {
          icon: <ArrowUpDown className="w-6 h-6" />,
          title: "Depósitos e Saques Fáceis",
          description: "Adicione fundos via Apple Pay, Google Pay ou transferência bancária com facilidade."
        },
        {
          icon: <CreditCard className="w-6 h-6" />,
          title: "Cartão Aurum Integrado",
          description: "Use seu cartão para compras online e offline, com cashback e recompensas baseadas no seu nível Legacy."
        },
        {
          icon: <RefreshCcw className="w-6 h-6" />,
          title: "Exchange Interna",
          description: "Troque criptomoedas diretamente no app, com taxas competitivas e execução rápida."
        }
      ]}
      howItWorksTitle="Como o NeoBank App Beneficia Parceiros?"
      howItWorksText="Cada transação feita com o cartão ou no app gera Legacy Volume para sua equipe. Além disso, você participa do Profitshare diário com base no seu nível Legacy — até 30% no nível Alpha. O NeoBank App é mais do que uma conta; é uma ferramenta de crescimento financeiro."
      ctaTitle="Baixe Agora e Comece a Usar"
      ctaText="O Aurum NeoBank App está em fase beta para iOS e Android. Obtenha acesso antecipado para testar transações reais antes do lançamento global."
      ctaLinks={[
        { href: "https://backoffice.aurum.foundation/u/5CW428", label: "Cadastre-se Agora", external: true },
        { href: "/share/card", label: "Conhecer o Aurum Card" }
      ]}
    />
  );
};

export default NeoBank;
