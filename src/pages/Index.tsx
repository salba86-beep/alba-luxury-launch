import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import IncomeComparison from "@/components/IncomeComparison";
import WhySwitch from "@/components/WhySwitch";
import RentersBillInfo from "@/components/RentersBillInfo";
import TheOffer from "@/components/TheOffer";
import EasySteps from "@/components/EasySteps";
import RiskReversal from "@/components/RiskReversal";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <IncomeComparison />
        <WhySwitch />
        <RentersBillInfo />
        <TheOffer />
        <EasySteps />
        <RiskReversal />
        <AboutUs />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
