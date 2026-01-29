import { motion } from "framer-motion";
import { TrendingUp, Clock, Shield, Smile } from "lucide-react";
const reasons = [{
  icon: TrendingUp,
  title: "Higher Income",
  description: "Earn 2-3x more than traditional AST rentals with dynamic pricing and premium guests."
}, {
  icon: Clock,
  title: "Flexibility",
  description: "Use your property whenever you want. Block dates for personal use with ease."
}, {
  icon: Shield,
  title: "Less Risk",
  description: "No long-term tenant issues, property damage disputes, or eviction nightmares."
}, {
  icon: Smile,
  title: "Hassle-Free",
  description: "We handle everything from guest communication to cleaning and maintenance."
}];
const WhySwitch = () => {
  return <section className="section-padding bg-accent opacity-70">
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
          <span className="inline-block px-3 py-1 bg-primary/20 text-primary text-sm font-medium rounded-full mb-4">
            The Smart Choice
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-accent-foreground mb-6">
            Why Switch to <span className="text-primary">Short Lets?</span>
          </h2>
          <p className="text-lg text-accent-foreground/80 max-w-3xl mx-auto leading-relaxed">
            With the Renters' Rights Bill changing the landscape for landlords, 
            short-term lets offer a smarter, more profitable alternative.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {reasons.map((reason, index) => <motion.div key={reason.title} initial={{
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
        }} className="bg-card rounded-xl p-6 text-center shadow-luxury border border-border/50 hover:shadow-luxury-lg transition-all duration-300">
              <div className="inline-flex items-center justify-center w-14 h-14 bg-primary rounded-full mb-4 shadow-gold">
                <reason.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {reason.description}
              </p>
            </motion.div>)}
        </div>
      </div>
    </section>;
};
export default WhySwitch;