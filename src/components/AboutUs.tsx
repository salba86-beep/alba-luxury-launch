import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  { icon: Award, value: "40+", label: "Years Combined Experience" },
  { icon: Users, value: "1", label: "We are the your Only point contact. We deal with everything!" },
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
              Young, Driven &
              <br />
              <span className="text-primary">Determined</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a young, driven, and determined company with several years of experience in project management across multiple industries. This background has equipped us with the skills needed to deliver excellent customer service and reliable support.
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
                Expertise Through Collaboration
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                We work closely with other industry experts to stay up to date with best practices, continually sharing knowledge and supporting one another. Through our strong professional network and mentorship from an established company that manages over 50 properties, we offer reassurance, stability, control, and trust.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
