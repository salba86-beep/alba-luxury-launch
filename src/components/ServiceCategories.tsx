import { motion } from "framer-motion";
import { Home, Building2, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Accidental Landlord",
    description: "Inherited a property or relocated unexpectedly? We'll help you turn your unplanned asset into a high-earning short-let without the hassle.",
  },
  {
    icon: Building2,
    title: "Buy-to-Let Investor",
    description: "Looking to maximise returns on your investment property? Let us convert it into a premium Airbnb that outperforms traditional rentals.",
  },
  {
    icon: Briefcase,
    title: "Developers",
    description: "New builds or renovation projects? We offer tailored solutions to launch and manage your properties as profitable short-lets from day one.",
  },
];

const ServiceCategories = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <span className="inline-block px-4 py-2 bg-primary text-primary-foreground text-sm font-bold rounded-full mb-6">
            WE DO IT ALL
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We <span className="text-primary">Help</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Whether you're a first-time landlord or managing a portfolio, we have the expertise to maximise your property income.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * index }}
              className="group"
            >
              <div className="bg-card rounded-xl p-8 h-full shadow-luxury border border-border/50 hover:shadow-luxury-lg transition-all duration-300 hover:-translate-y-2 text-center">
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                  <category.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                  {category.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories;
