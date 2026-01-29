import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import salbaLogo from "@/assets/salba-logo-gold.png";

const Footer = () => {
  return (
    <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mb-6">
              <img 
                src={salbaLogo} 
                alt="SALBA Property Management" 
                className="h-12 w-auto" 
              />
            </div>
            <p className="text-accent-foreground/60 leading-relaxed text-sm">
              SALBA Property Management company, specialising in premium Airbnb conversions for landlords across Cheshire, North West, North Wales and beyond.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-bold text-accent-foreground mb-6 text-sm uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "#about" },
                { label: "Our Services", href: "#services" },
                { label: "Our Guarantee", href: "#guarantee" },
                { label: "Free Valuation", href: "#valuation" },
              ].map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-accent-foreground/60 hover:text-accent-foreground transition-colors text-sm uppercase tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-bold text-accent-foreground mb-6 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <Mail className="w-4 h-4 text-accent-foreground/50" />
                <a
                  href="mailto:hello@salbapropertymanagement.co.uk"
                  className="text-accent-foreground/60 hover:text-accent-foreground transition-colors text-sm"
                >
                  hello@salbapropertymanagement.co.uk
                </a>
              </li>
              <li className="flex items-center gap-4">
                <Phone className="w-4 h-4 text-accent-foreground/50" />
                <a
                  href="tel:+441234567890"
                  className="text-accent-foreground/60 hover:text-accent-foreground transition-colors text-sm"
                >
                  +44 1234 567890
                </a>
              </li>
              <li className="flex items-start gap-4">
                <MapPin className="w-4 h-4 text-accent-foreground/50 mt-0.5" />
                <span className="text-accent-foreground/60 text-sm">
                  Chester, Cheshire, United Kingdom
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-accent-foreground/40 uppercase tracking-wide">
              © {new Date().getFullYear()} SALBA Property Management. All rights reserved.
            </p>
            <div className="flex items-center gap-8">
              <a
                href="#"
                className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-wide"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-xs text-accent-foreground/40 hover:text-accent-foreground transition-colors uppercase tracking-wide"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
