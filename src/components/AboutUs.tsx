import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { icon: Award, value: "40+", label: "Years Combined Experience" },
  { icon: Users, value: "500+", label: "Properties Managed" },
  { icon: TrendingUp, value: "2.5x", label: "Average Income Increase" },
  { icon: Shield, value: "100%", label: "Compliance Rate" },
];

const AboutUs = () => {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12 md:mb-16"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Chester's Premier Property
              <br />
              <span className="text-primary">Management Experts</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              With over 40 years of combined hospitality and property management
              experience, we transform underperforming rental properties into
              premium short-let investments.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 * index }}
                className="bg-card rounded-lg p-6 text-center shadow-luxury border border-border/50 hover:shadow-luxury-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Block */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 md:mt-16 bg-cream rounded-xl p-8 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground mb-4">
                Why Landlords Across Chester & North West Trust Alba
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We understand that your property is more than an investment—it's your
                financial future. That's why we've built Alba on a foundation of
                transparency, expertise, and an unwavering commitment to maximising your
                returns while protecting your asset. Our team combines decades of
                hospitality excellence with deep knowledge of the region's short-let
                regulations, ensuring your property thrives in the competitive Airbnb
                market.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
