import { motion } from "framer-motion";
import { Home, Building2, Briefcase } from "lucide-react";

const categories = [
  {
    icon: Home,
    title: "Accidental Landlord",
    description: "Inherited a property or relocated unexpectedly? We'll help you turn your unplanned asset into a high-earning short-let without the hassle."
  },
  {
    icon: Building2,
    title: "Buy-to-Let Investor",
    description: "Looking to maximise returns on your investment property? Let us convert it into a premium Airbnb that outperforms traditional rentals."
  },
  {
    icon: Briefcase,
    title: "Developers",
    description: "New builds or renovation projects? We offer tailored solutions to launch and manage your properties as profitable short-lets from day one."
  }
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
          className="text-center mb-16 md:mb-20"
        >
          <span className="inline-block px-4 py-2 border border-primary text-primary text-xs font-heading tracking-widest uppercase mb-8">
            We Do It All
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            Who We Help
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
              <div className="bg-card border border-border p-10 h-full text-center transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
                <div className="inline-flex items-center justify-center w-20 h-20 border-2 border-primary mb-8 group-hover:bg-primary transition-all duration-300">
                  <category.icon className="w-10 h-10 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
                </div>
                <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-4 uppercase tracking-wide">
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
