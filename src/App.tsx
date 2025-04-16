
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FeaturesPage from "./pages/FeaturesPage";
import SuccessStoriesPage from "./pages/SuccessStoriesPage";
import InvestmentGuidePage from "./pages/InvestmentGuidePage";
import BlogPage from "./pages/BlogPage";
import RiskAssessmentPage from "./pages/RiskAssessmentPage";
import MarketInsightsPage from "./pages/MarketInsightsPage";
import PortfolioAnalysisPage from "./pages/PortfolioAnalysisPage";
import GetStartedPage from "./pages/GetStartedPage";
import LearnMorePage from "./pages/LearnMorePage";

const App = () => {
  // Create a client
  const [queryClient] = React.useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/features" element={<FeaturesPage />} />
            <Route path="/resources/success-stories" element={<SuccessStoriesPage />} />
            <Route path="/resources/investment-guide" element={<InvestmentGuidePage />} />
            <Route path="/resources/blog" element={<BlogPage />} />
            <Route path="/features/risk-assessment" element={<RiskAssessmentPage />} />
            <Route path="/features/market-insights" element={<MarketInsightsPage />} />
            <Route path="/features/portfolio-analysis" element={<PortfolioAnalysisPage />} />
            <Route path="/get-started" element={<GetStartedPage />} />
            <Route path="/learn-more" element={<LearnMorePage />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
