import { motion } from "framer-motion";
import LeadForm from "./LeadForm";
import heroImage from "@/assets/hero-background.jpg";
import salbaLogo from "@/assets/salba-logo-gold.png";

const Hero = () => {
  return (
    <section id="valuation" className="relative min-h-screen pt-24 md:pt-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Luxury Chester property interior" 
          className="w-full h-full object-cover" 
        />
        <div className="absolute inset-0 bg-accent/85" />
      </div>

      {/* Centered Background Logo */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.05, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none"
      >
        <img 
          src={salbaLogo} 
          alt="" 
          className="w-[50%] max-w-xl h-auto" 
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left Column - Text */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <span className="inline-block px-4 py-2 border border-accent-foreground/30 text-accent-foreground/80 font-heading text-xs tracking-widest uppercase mb-8">
              Premium Property Management
            </span>

            <h1 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-accent-foreground leading-tight mb-8">
              Generate{" "}
              <span className="text-primary-foreground">2–3x more</span> monthly
              profit from your AST properties.
            </h1>

            <p className="text-lg md:text-xl text-accent-foreground/70 mb-10 max-w-xl mx-auto lg:mx-0 font-light">
              Fully managed, regulation-compliant Airbnb conversion in 30 days.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 lg:gap-8 justify-center lg:justify-start">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-foreground/50" />
                <span className="text-accent-foreground/60 text-sm uppercase tracking-wide">
                  Fully managed
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-accent-foreground/50" />
                <span className="text-accent-foreground/60 text-sm uppercase tracking-wide">
                  Risk-free guarantee
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <LeadForm />
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary" />
    </section>
  );
};

export default Hero;
