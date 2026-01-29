import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import albaLogo from "@/assets/alba-logo.png";
const Footer = () => {
  return <footer className="bg-accent text-accent-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid md:grid-cols-3 gap-10 md:gap-8">
          {/* Brand */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="mb-4">
              <img src={albaLogo} alt="Salba Property Management" className="h-16 w-auto" />
            </div>
            <p className="text-accent-foreground/70 leading-relaxed">
              Salba Property Management company, specialising in premium Airbnb conversions for landlords across Cheshire, North West, North Wales and beyond.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.1
        }}>
            <h4 className="font-heading font-semibold text-accent-foreground mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[{
              label: "About Us",
              href: "#about"
            }, {
              label: "Our Services",
              href: "#services"
            }, {
              label: "Our Guarantee",
              href: "#guarantee"
            }, {
              label: "Free Valuation",
              href: "#valuation"
            }].map(link => <li key={link.label}>
                  <a href={link.href} className="text-accent-foreground/70 hover:text-primary transition-colors">
                    {link.label}
                  </a>
                </li>)}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <h4 className="font-heading font-semibold text-accent-foreground mb-4">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <a href="mailto:info@salbaproperty.com" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  info@salbaproperty.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <a href="tel:+447702049334" className="text-accent-foreground/70 hover:text-primary transition-colors">
                  +44 7702 049334
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-primary mt-1" />
                <span className="text-accent-foreground/70">
                  Chester, Cheshire, United Kingdom
                </span>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-accent-foreground/10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-accent-foreground/50">
              © {new Date().getFullYear()} Salba Property Management. All rights
              reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-sm text-accent-foreground/50 hover:text-primary transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;
