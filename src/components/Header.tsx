import { motion } from "framer-motion";
import salbaLogo from "@/assets/salba-logo-gold.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <a href="#" className="flex items-center">
            <img 
              src={salbaLogo} 
              alt="SALBA Property Management" 
              className="h-12 md:h-14 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-12">
            <a
              href="#about"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm tracking-wide uppercase"
            >
              About
            </a>
            <a
              href="#services"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Services
            </a>
            <a
              href="#guarantee"
              className="text-foreground/70 hover:text-foreground transition-colors font-medium text-sm tracking-wide uppercase"
            >
              Guarantee
            </a>
          </nav>

          <a
            href="#valuation"
            className="brutalist-btn text-xs md:text-sm"
          >
            Free Valuation
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
