import { motion } from "framer-motion";
import { Award, Users, TrendingUp, Shield } from "lucide-react";

const stats = [
  {
    icon: Award,
    value: "100%",
    label: "Commitment, Attention and Love as if it's our own property"
  },
  {
    icon: Users,
    value: "1",
    label: "We are your only point contact. We deal with everything!"
  },
  {
    icon: TrendingUp,
    value: "2.5x",
    label: "Average Income Increase"
  },
  {
    icon: Shield,
    value: "100%",
    label: "Compliance Rate"
  }
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
            className="text-center mb-16 md:mb-20"
          >
            <span className="inline-block px-4 py-2 border border-primary text-primary text-xs font-heading tracking-widest uppercase mb-8">
              About Us
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Young, Driven &
              <br />
              Determined
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
                className="bg-card border border-border p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 border border-primary mb-6">
                  <stat.icon className="w-7 h-7 text-primary" />
                </div>
                <div className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">
                  {stat.value}
                </div>
                <div className="text-xs text-muted-foreground uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Content Block */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 md:mt-20 bg-secondary border border-border p-10 md:p-12"
          >
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="font-heading text-lg md:text-xl font-bold text-foreground mb-6 uppercase tracking-wide">
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
