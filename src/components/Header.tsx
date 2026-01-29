import { motion } from "framer-motion";
import SalbaLogo from "@/assets/Salba-logo-5.png";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#" className="flex items-center">
            <img 
              src={SalbaLogo} 
              alt="SALBA Property Management" 
              className="h-14 md:h-16 w-auto"
            />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#about"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              About
            </a>
            <a
              href="#services"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Services
            </a>
            <a
              href="#guarantee"
              className="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Guarantee
            </a>
          </nav>

          <a
            href="#valuation"
            className="inline-flex items-center justify-center px-5 py-2.5 bg-primary hover:bg-gold-dark text-primary-foreground font-heading font-semibold text-sm rounded transition-all duration-300 shadow-sm hover:shadow-gold"
          >
            Free Valuation
          </a>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
