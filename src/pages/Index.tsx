import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServiceCategories from "@/components/ServiceCategories";
import IncomeComparison from "@/components/IncomeComparison";
import WhySwitch from "@/components/WhySwitch";
import RentersBillInfo from "@/components/RentersBillInfo";
import IncomeCalculator from "@/components/IncomeCalculator";
import TheOffer from "@/components/TheOffer";
import EasySteps from "@/components/EasySteps";
import RiskReversal from "@/components/RiskReversal";
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import pageBackground from "@/assets/page-background.jpg";

const Index = () => {
  return (
    <div 
      className="min-h-screen bg-background"
      style={{
        backgroundImage: `url(${pageBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <Header />
      <main>
        <Hero />
        <ServiceCategories />
        <IncomeComparison />
        <WhySwitch />
        <RentersBillInfo />
        <IncomeCalculator />
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
