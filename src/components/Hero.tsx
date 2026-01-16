import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import heroImage from "@/assets/hero-background.jpg";
import sasaLogo from "@/assets/sasa-logo.png";
const Hero = () => {
  return <section id="valuation" className="relative min-h-screen pt-20 md:pt-24">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroImage} alt="Luxury Chester property interior" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-accent/95 via-accent/85 to-accent/70 opacity-50" />
      </div>

      {/* Centered Background Logo */}
      <motion.div initial={{
      opacity: 0,
      scale: 0.8
    }} animate={{
      opacity: 0.08,
      scale: 1
    }} transition={{
      duration: 1,
      ease: "easeOut"
    }} className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none">
        <img src={sasaLogo} alt="" className="w-[60%] max-w-2xl h-auto opacity-100" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Text */}
          <motion.div initial={{
          opacity: 0,
          x: -30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6
        }} className="text-center lg:text-left">
            <span className="inline-block px-4 py-1.5 bg-primary/20 text-primary font-medium text-sm rounded-full mb-6">
              Premium Property Management
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground leading-tight mb-6">
              Generate{" "}
              <span className="text-primary">2–3x more</span> monthly
              profit from your AST properties.
            </h1>

            <p className="text-lg md:text-xl text-accent-foreground/80 mb-8 max-w-xl mx-auto lg:mx-0">
              Fully managed, regulation-compliant Airbnb conversion in 30 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 lg:gap-6 justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-accent-foreground/70 text-sm">
                  Fully managed
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-primary rounded-full" />
                <span className="text-accent-foreground/70 text-sm">
                  Risk-free guarantee
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div initial={{
          opacity: 0,
          x: 30
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.6,
          delay: 0.2
        }}>
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Decorative Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/0 via-primary to-primary/0" />
    </section>;
};
export default Hero;