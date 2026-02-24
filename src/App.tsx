import GSAPToaster from "@/components/ui/GSAPToaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WebLayout from "@/layout/WebLayout";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <GSAPToaster />
      <BrowserRouter
        future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
      >
        <Routes>
          {/* All pages share the WebLayout (Navbar, Footer, Particles, ScrollToTop) */}
          <Route element={<WebLayout />}>
            <Route path="/" element={<Index />} />
            <Route path="/projects" element={<ProjectsPage />} />
          </Route>

          {/* 404 — standalone page, no shared layout */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
