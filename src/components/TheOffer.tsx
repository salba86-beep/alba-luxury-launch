import { motion } from "framer-motion";
import { Home, ArrowRight, PoundSterling, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Home,
    title: "London Landlords",
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
            Our Service
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            The <span className="text-primary">3S Formula</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We help London landlords with underperforming properties earn more by
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

        {/* Benefits List */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 max-w-4xl mx-auto"
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
