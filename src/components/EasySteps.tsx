import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Camera, Globe, Banknote } from "lucide-react";

const steps = [
  {
    icon: Phone,
    number: 1,
    title: "Schedule a Call",
    description: "Book a free consultation to discuss your property and goals. We'll assess your potential earnings."
  },
  {
    icon: ClipboardCheck,
    number: 2,
    title: "Property Assessment",
    description: "We visit your property to evaluate its short-let potential and create a tailored strategy."
  },
  {
    icon: Camera,
    number: 3,
    title: "Professional Setup",
    description: "Our team handles professional photography, staging advice, and creates compelling listings."
  },
  {
    icon: Globe,
    number: 4,
    title: "Go Live",
    description: "Your property goes live on Airbnb, Booking.com, and other platforms for maximum exposure."
  },
  {
    icon: Banknote,
    number: 5,
    title: "Start Earning",
    description: "Sit back and watch the bookings roll in. We handle everything—you just collect the income."
  }
];

const EasySteps = () => {
  return (
    <section className="section-padding bg-card">
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
            5 Easy Steps
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started is simple. Here's how we transform your property into a profitable short-let in just 30 days.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-[4.5rem] left-0 right-0 h-px bg-border" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  className="relative text-center"
                >
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto mb-8">
                    <div className="w-20 h-20 border-2 border-primary flex items-center justify-center mx-auto bg-card">
                      <step.icon className="w-10 h-10 text-primary" />
                    </div>
                    <div className="absolute -top-3 -right-3 w-8 h-8 bg-accent text-accent-foreground flex items-center justify-center font-heading font-bold text-sm">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-background border border-border p-6 flex flex-col min-h-[180px]">
                    <h3 className="font-heading text-sm font-bold text-foreground mb-4 uppercase tracking-wide">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && (
                    <div className="flex justify-center lg:hidden my-6">
                      <svg 
                        className="w-6 h-6 text-primary rotate-90 md:rotate-0" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a 
            href="#valuation" 
            className="brutalist-btn inline-block"
          >
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default EasySteps;
