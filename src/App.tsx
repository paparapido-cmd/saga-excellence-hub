import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PracticeAreas from "./pages/PracticeAreas";
import Academy from "./pages/practice-areas/Academy";
import BasicTrainings from "./pages/practice-areas/academy/BasicTrainings";
import AdvancedTrainings from "./pages/practice-areas/academy/AdvancedTrainings";
import Pathways from "./pages/practice-areas/Pathways";
import Lean from "./pages/practice-areas/pathways/Lean";
import ProcessExcellence from "./pages/practice-areas/pathways/ProcessExcellence";
import OperationalExcellence from "./pages/practice-areas/pathways/OperationalExcellence";
import StrategyHub from "./pages/practice-areas/StrategyHub";
import StrategyDeployment from "./pages/practice-areas/strategy-hub/StrategyDeployment";
import StrategyExecution from "./pages/practice-areas/strategy-hub/StrategyExecution";
import MeetUs from "./pages/MeetUs";
import SuccessfulCases from "./pages/SuccessfulCases";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import ScrollToTop from "./ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/practice-areas" element={<PracticeAreas />} />
          <Route path="/practice-areas/academy" element={<Academy />} />
          <Route path="/practice-areas/academy/basic-trainings" element={<BasicTrainings />} />
          <Route path="/practice-areas/academy/advanced-trainings" element={<AdvancedTrainings />} />
          <Route path="/practice-areas/pathways" element={<Pathways />} />
          <Route path="/practice-areas/pathways/lean" element={<Lean />} />
          <Route path="/practice-areas/pathways/process-excellence" element={<ProcessExcellence />} />
          <Route path="/practice-areas/pathways/operational-excellence" element={<OperationalExcellence />} />
          <Route path="/practice-areas/strategy-hub" element={<StrategyHub />} />
          <Route path="/practice-areas/strategy-hub/strategy-deployment" element={<StrategyDeployment />} />
          <Route path="/practice-areas/strategy-hub/strategy-execution" element={<StrategyExecution />} />
          <Route path="/meet-us" element={<MeetUs />} />
          <Route path="/successful-cases" element={<SuccessfulCases />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
