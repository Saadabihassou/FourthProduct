
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/navbar";
import { HeroSection } from "@/components/hero-section";
import { HowItWorks } from "@/components/how-it-works";
import { Testimonials } from "@/components/testimonials";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

const Index = () => {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main>
          <HeroSection />
          <HowItWorks />
          <Testimonials />
          <Pricing />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Index;
