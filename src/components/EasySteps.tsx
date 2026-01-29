import { motion } from "framer-motion";
import { Phone, ClipboardCheck, Camera, Globe, Banknote } from "lucide-react";
const steps = [{
  icon: Phone,
  number: 1,
  title: "Schedule a Call",
  description: "Book a free consultation to discuss your property and goals. We'll assess your potential earnings."
}, {
  icon: ClipboardCheck,
  number: 2,
  title: "Property Assessment",
  description: "We visit your property to evaluate its short-let potential and create a tailored strategy."
}, {
  icon: Camera,
  number: 3,
  title: "Professional Setup",
  description: "Our team handles professional photography, staging advice, and creates compelling listings."
}, {
  icon: Globe,
  number: 4,
  title: "Go Live",
  description: "Your property goes live on Airbnb, Booking.com, and other platforms for maximum exposure."
}, {
  icon: Banknote,
  number: 5,
  title: "Start Earning",
  description: "Sit back and watch the bookings roll in. We handle everything—you just collect the income."
}];
const EasySteps = () => {
  return <section className="section-padding bg-cream opacity-85">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
      }} className="text-center mb-12 md:mb-16">
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-6">
            HOW IT WORKS
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            5 Easy <span className="text-primary">Steps</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Getting started is simple. Here's how we transform your property into a profitable short-let in just 30 days.
          </p>
        </motion.div>

        {/* Steps Timeline */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-primary to-primary/20" />

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
              {steps.map((step, index) => <motion.div key={step.number} initial={{
              opacity: 0,
              y: 30
            }} whileInView={{
              opacity: 1,
              y: 0
            }} viewport={{
              once: true
            }} transition={{
              duration: 0.5,
              delay: 0.1 * index
            }} className="relative text-center">
                  {/* Step Circle */}
                  <div className="relative z-10 mx-auto mb-6">
                    <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-gold mx-auto">
                      <step.icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-heading font-bold text-sm shadow-md">
                      {step.number}
                    </div>
                  </div>

                  {/* Step Content */}
                  <div className="bg-card rounded-xl p-6 shadow-luxury border border-border/50 flex flex-col min-h-[180px]">
                    <h3 className="font-heading text-lg font-bold text-foreground mb-3">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed flex-grow">
                      {step.description}
                    </p>
                  </div>

                  {/* Arrow for mobile/tablet */}
                  {index < steps.length - 1 && <div className="flex justify-center lg:hidden my-4">
                      <svg className="w-6 h-6 text-primary rotate-90 md:rotate-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>}
                </motion.div>)}
            </div>
          </div>
        </div>

        {/* CTA */}
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
        delay: 0.6
      }} className="text-center mt-12">
          <a href="#valuation" className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-heading font-semibold text-lg rounded-lg transition-all duration-300 shadow-gold hover:shadow-lg">
            Start Your Journey Today
          </a>
        </motion.div>
      </div>
    </section>;
};
export default EasySteps;