import { motion } from "framer-motion";
import { Shield, CheckCircle2 } from "lucide-react";

const RiskReversal = () => {
  return (
    <section id="guarantee" className="section-padding bg-accent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-card border border-border p-10 md:p-16 lg:p-20 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary/5 translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 text-center">
              {/* Shield Icon */}
              <div className="inline-flex items-center justify-center w-24 h-24 border-2 border-primary mb-10">
                <Shield className="w-12 h-12 text-primary" />
              </div>

              <span className="inline-block px-4 py-2 border border-primary text-primary text-xs font-heading tracking-widest uppercase mb-8">
                Our Iron-Clad Guarantee
              </span>

              <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-8 leading-tight">
                If We Don't Beat Your
                <br />
                AST Rent, We Waive Our Fee
              </h2>

              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                We're so confident in our ability to maximise your property's income
                that we put our money where our mouth is. If we can't generate more
                income than your current AST arrangement, you don't pay our management
                fee. It's that simple.
              </p>

              {/* Guarantee Points */}
              <div className="grid sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
                {["Zero risk to try", "Performance-based fees", "Hassle Free"].map((point, index) => (
                  <motion.div 
                    key={point}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                    className="flex items-center justify-center gap-3"
                  >
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="text-foreground font-medium text-sm uppercase tracking-wide">{point}</span>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a 
                href="#valuation"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="brutalist-btn inline-block mt-12"
              >
                Get Your Free Valuation Today
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RiskReversal;
