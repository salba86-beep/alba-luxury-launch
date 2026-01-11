import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import TheOffer from "@/components/TheOffer";
import IncomeComparison from "@/components/IncomeComparison";
import RiskReversal from "@/components/RiskReversal";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <AboutUs />
        <TheOffer />
        <IncomeComparison />
        <RiskReversal />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
