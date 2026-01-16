import { motion } from "framer-motion";
import { Home, ArrowRight, PoundSterling, Sparkles, Clock, Gift, Star } from "lucide-react";
import smartLockImage from "@/assets/smart-lock.jpg";

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
    <section id="services" className="section-padding bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            How It Works
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Your Path to <span className="text-primary">Higher Returns</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help landlords across Chester, Cheshire, North West and North Wales with underperforming properties earn more by
            converting them into premium Airbnbs—without tenant hassle.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 md:gap-4 relative">
            {/* Connecting Lines (Desktop) */}
            <div className="hidden md:block absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 * index }}
                className="relative"
              >
                <div className="bg-card rounded-xl p-8 text-center shadow-luxury border border-border/50 h-full hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-1">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-6 shadow-gold">
                    <step.icon className="w-8 h-8 text-primary-foreground" />
                  </div>

                  <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading font-bold text-sm">
                    {index + 1}
                  </div>

                  <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                {/* Arrow for mobile */}
                {index < steps.length - 1 && (
                  <div className="flex justify-center md:hidden my-4">
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
          className="mt-12 max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-primary via-primary to-primary/90 rounded-xl overflow-hidden shadow-luxury-lg">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left - Offer Details */}
              <div className="p-8 md:p-10 text-primary-foreground">
                <div className="flex items-center gap-2 mb-4">
                  <Gift className="w-6 h-6 text-accent" />
                  <span className="font-heading text-sm font-bold uppercase tracking-wider text-accent">
                    Exclusive Launch Offer
                  </span>
                </div>
                
                <h3 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                  Special Launch Offer
                </h3>
                
                <div className="flex items-baseline gap-4 mb-4">
                  <span className="text-4xl md:text-5xl font-bold line-through opacity-50">15%</span>
                  <span className="text-6xl md:text-7xl font-bold text-accent drop-shadow-lg">13.5%</span>
                </div>
                
                <p className="text-lg md:text-xl font-medium mb-6">
                  Management Fee{" "}
                  <span className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-3 py-1 rounded-full font-bold text-base">
                    <Star className="w-4 h-4" />
                    Locked for One Year
                    <Star className="w-4 h-4" />
                  </span>
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-2">
                    <Clock className="w-5 h-5 text-accent" />
                    <span className="font-medium">Limited to First 10 Customers Only</span>
                  </div>
                  <div className="flex items-center gap-3 bg-primary-foreground/10 rounded-lg px-4 py-2">
                    <span className="text-xl">✓</span>
                    <span className="font-medium">Cancel anytime</span>
                  </div>
                </div>

                <div className="bg-accent text-accent-foreground rounded-xl px-6 py-4 inline-flex items-center gap-3 shadow-lg">
                  <span className="text-3xl">🔐</span>
                  <div>
                    <span className="font-heading font-bold text-lg block">
                      FREE Welcome Pack
                    </span>
                    <span className="text-sm opacity-90">Premium Smart Lock Included (Worth £150)</span>
                  </div>
                </div>
              </div>

              {/* Right - Smart Lock Image */}
              <div className="relative hidden md:block">
                <img 
                  src={smartLockImage} 
                  alt="Person using smart lock" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-transparent" />
                <div className="absolute bottom-6 right-6 bg-accent text-accent-foreground rounded-full px-4 py-2 font-heading font-bold shadow-lg animate-bounce">
                  FREE!
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Image */}
          <div className="md:hidden mt-4">
            <div className="relative rounded-xl overflow-hidden">
              <img 
                src={smartLockImage} 
                alt="Person using smart lock" 
                className="w-full h-48 object-cover"
              />
              <div className="absolute bottom-4 right-4 bg-accent text-accent-foreground rounded-full px-4 py-2 font-heading font-bold shadow-lg">
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
          className="mt-12 max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-xl p-8 md:p-10 shadow-luxury border border-border/50">
            <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground text-center mb-8">
              What's Included
            </h3>
            <div className="grid sm:grid-cols-2 gap-4">
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
                <div key={index} className="flex items-start gap-3">
                  <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 bg-primary rounded-full" />
                  </div>
                  <span className="text-foreground">{benefit}</span>
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
