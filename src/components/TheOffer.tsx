import { motion } from "framer-motion";
import { Home, ArrowRight, PoundSterling, Sparkles, Clock, Gift, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import smartLockImage from "@/assets/smart-lock.jpg";

const scrollToForm = () => {
  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
};

const steps = [
  {
    icon: Home,
    title: "Regional Landlords",
    description: "With underperforming AST properties seeking better returns",
  },
  {
    icon: PoundSterling,
    title: "Earn More",
    description: "By converting to premium short-let Airbnb rentals",
  },
  {
    icon: Sparkles,
    title: "Without Hassle",
    description: "No tenant issues, full management, total peace of mind",
  },
];

const TheOffer = () => {
  return (
    <section id="services" className="section-padding bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs font-heading tracking-widest uppercase mb-8">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to Higher Returns
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help landlords across Chester, Cheshire, North West and North Wales with underperforming properties earn more by
            converting them into premium Airbnbs—without tenant hassle.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 md:gap-6 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-px bg-border" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative"
              >
                <div className="bg-card border border-border p-10 text-center h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 border-2 border-primary mb-8">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>

                  <div className="absolute -top-4 -right-4 w-10 h-10 bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="font-heading text-lg font-bold text-foreground mb-4 uppercase tracking-wide">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center md:hidden my-6">
                    <ArrowRight className="w-6 h-6 text-primary rotate-90" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Special Offer */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="bg-primary border border-primary overflow-hidden">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Offer Details */}
              <div className="p-10 md:p-12 text-primary-foreground">
                <div className="flex items-center gap-3 mb-6">
                  <Gift className="w-5 h-5" />
                  <span className="font-heading text-xs font-bold uppercase tracking-widest">
                    Exclusive Launch Offer
                  </span>
                </div>
                
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-8 uppercase">
                  Special Launch Offer
                </h3>
                
                <div className="flex items-baseline gap-6 mb-6">
                  <span className="text-4xl md:text-5xl font-bold line-through opacity-40">15%</span>
                  <span className="text-6xl md:text-7xl font-bold">13.5%</span>
                </div>
                
                <p className="text-lg font-medium mb-8">
                  Management Fee{" "}
                  <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-4 py-2 font-heading font-bold text-xs uppercase tracking-wide">
                    <Star className="w-3 h-3" />
                    Locked for One Year
                    <Star className="w-3 h-3" />
                  </span>
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-4 border border-primary-foreground/20 px-5 py-3">
                    <Clock className="w-5 h-5" />
                    <span className="font-medium text-sm uppercase tracking-wide">Limited to First 10 Customers Only</span>
                  </div>
                  <div className="flex items-center gap-4 border border-primary-foreground/20 px-5 py-3">
                    <span className="text-lg">✓</span>
                    <span className="font-medium text-sm uppercase tracking-wide">Cancel anytime</span>
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground px-6 py-5 inline-flex items-center gap-4 mb-8">
                  <span className="text-2xl">🔐</span>
                  <div>
                    <span className="font-heading font-bold text-sm block uppercase tracking-wide">
                      FREE Welcome Pack
                    </span>
                    <span className="text-xs opacity-80">Premium Smart Lock Included (Worth £150)</span>
                  </div>
                </div>

                <Button 
                  onClick={scrollToForm}
                  size="lg"
                  className="w-full sm:w-auto bg-accent hover:bg-accent/90 text-accent-foreground font-heading font-bold text-sm px-10 py-6 uppercase tracking-wide"
                >
                  Claim This Offer
                  <ArrowRight className="ml-3 w-5 h-5" />
                </Button>
              </div>

              {/* Right - Smart Lock Image */}
              <div className="relative hidden md:block">
                <img 
                  src={smartLockImage} 
                  alt="Person using smart lock" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-primary/20" />
                <div className="absolute bottom-6 right-6 bg-accent text-accent-foreground px-5 py-3 font-heading font-bold text-sm uppercase tracking-wide">
                  FREE!
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden mt-1">
            <div className="relative">
              <img 
                src={smartLockImage} 
                alt="Person using smart lock" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground px-4 py-2 font-heading font-bold text-sm uppercase">
                FREE Smart Lock!
              </div>
            </div>
          </div>
        </motion.div>

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border p-10 md:p-12">
            <h3 className="font-heading text-lg md:text-xl font-bold text-foreground text-center mb-10 uppercase tracking-wide">
              What's Included
            </h3>
            <div className="grid sm:grid-cols-2 gap-5">
              {[
                "Professional photography & listing creation",
                "Dynamic pricing optimization",
                "24/7 guest communication",
                "Professional cleaning & linen service",
                "Maintenance coordination",
                "Regulatory compliance management",
                "Monthly performance reports",
                "Revenue maximization strategies",
              ].map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="w-6 h-6 border border-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary" />
                  </div>
                  <span className="text-foreground text-sm">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TheOffer;
