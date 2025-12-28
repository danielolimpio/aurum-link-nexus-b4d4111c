import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Share pages
import ExAiBot from "./pages/share/ExAiBot";
import ZeusAiBot from "./pages/share/ZeusAiBot";
import FlashLoans from "./pages/share/FlashLoans";
import NeoBank from "./pages/share/NeoBank";
import Card from "./pages/share/Card";
import Exchange from "./pages/share/Exchange";
import Token from "./pages/share/Token";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          
          {/* Share routes */}
          <Route path="/share/ex-ai-bot" element={<ExAiBot />} />
          <Route path="/share/zeus-ai-bot" element={<ZeusAiBot />} />
          <Route path="/share/flash-loans" element={<FlashLoans />} />
          <Route path="/share/neo-bank" element={<NeoBank />} />
          <Route path="/share/card" element={<Card />} />
          <Route path="/share/exchange" element={<Exchange />} />
          <Route path="/share/token" element={<Token />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
