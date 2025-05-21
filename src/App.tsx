import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./hooks/useAuth";
import MainLayout from "./components/layouts/MainLayout";
import DashboardLayout from "./components/layouts/DashboardLayout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import NotFound from "./pages/NotFound";
import DashboardHome from "./pages/dashboard/DashboardHome";
import UrlsPage from "./pages/dashboard/UrlsPage";
import HistoryPage from "./pages/dashboard/HistoryPage";
import AnalyticsPage from "./pages/dashboard/AnalyticsPage";
import ProfilePage from "./pages/dashboard/ProfilePage";
import SettingsPage from "./pages/dashboard/SettingsPage";
import FeaturesPage from "./pages/FeaturesPage";
import PricingPage from "./pages/PricingPage";
import AboutPage from "./pages/AboutPage";
import DocumentationPage from "./pages/DocumentationPage";
import GuidesPage from "./pages/GuidesPage";
import ContactPage from "./pages/ContactPage";
import ApiPage from "./pages/ApiPage";
import BlogPage from "./pages/BlogPage";
import CareersPage from "./pages/CareersPage";
import PrivacyPage from "./pages/PrivacyPage";
import TermsPage from "./pages/TermsPage";
import CookiesPage from "./pages/CookiesPage";
import QrCodePage from "./pages/QrCodePage";
import HelpCenterPage from "./pages/HelpCenterPage";
import RedirectPage from "./pages/RedirectPage";
import DomainPage from "./pages/DomainPage";
import RegisterDomainPage from "./pages/RegisterDomainPage";
import ContactSpecialistsPage from "./pages/ContactSpecialistsPage";
import HostingPage from "./pages/HostingPage";
import ResumeStoragePage from "./pages/ResumeStoragePage";
import ChoosePlanPage from "./pages/ChoosePlanPage";
import ContactSalesPage from "./pages/ContactSalesPage";
import { useEffect } from "react";
import SignUp from "./pages/SignUp";

 // =========== Initialize theme from localStorage ================ //
 const initTheme = () => {
  if (localStorage.getItem('theme') === 'dark' || 
  (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  document.documentElement.classList.add('dark');
  localStorage.setItem('theme', 'dark');
  } else {
  document.documentElement.classList.remove('dark');
  localStorage.setItem('theme', 'light');
  }
 };

 const queryClient = new QueryClient();

 const App = () => {
  useEffect(() => {
  initTheme();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route element={<MainLayout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/features" element={<FeaturesPage />} />
                <Route path="/pricing" element={<PricingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/documentation" element={<DocumentationPage />} />
                <Route path="/guides" element={<GuidesPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/api" element={<ApiPage />} />
                <Route path="/blog" element={<BlogPage />} />
                <Route path="/careers" element={<CareersPage />} />
                <Route path="/domain" element={<DomainPage />} />
                <Route path="/register-domain" element={<RegisterDomainPage />} />
                <Route path="/contact-specialists" element={<ContactSpecialistsPage />} />
                <Route path="/hosting" element={<HostingPage />} />
                <Route path="/choose-plan" element={<ChoosePlanPage />} />
                <Route path="/contact-sales" element={<ContactSalesPage />} />
                <Route path="/resume-storage" element={<ResumeStoragePage />} />
                <Route path="/privacy" element={<PrivacyPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/cookies" element={<CookiesPage />} />
                <Route path="/qr-code/:shortCode" element={<QrCodePage />} />
                <Route path="/help" element={<HelpCenterPage />} />

              </Route>            
              <Route path="/dashboard" element={<DashboardLayout />}>
                <Route index element={<DashboardHome />} />
                <Route path="urls" element={<UrlsPage />} />
                <Route path="history" element={<HistoryPage />} />
                <Route path="analytics" element={<AnalyticsPage />} />
                <Route path="profile" element={<ProfilePage />} />
                <Route path="settings" element={<SettingsPage />} />   
              </Route>   
              {/* Short URL redirect route */}
              <Route path="/s/:shortCode" element={<RedirectPage />} />        
              {/* Catch-all for 404s */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
 };

 export default App;
