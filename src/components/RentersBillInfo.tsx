import { motion } from "framer-motion";

const challenges = [
  {
    number: 1,
    title: "End of \"No-Fault\" Evictions:",
    description: "Say goodbye to quick, hassle-free eviction processes.",
  },
  {
    number: 2,
    title: "Open-Ended Tenancies:",
    description: "Tenants can leave with minimal notice, leaving you vulnerable to unexpected void periods.",
  },
  {
    number: 3,
    title: "Rent Control Regulations:",
    description: "Stricter limits on rent increases may make it harder to keep up with rising costs.",
  },
  {
    number: 4,
    title: "Mandatory Landlord Register:",
    description: "Increased bureaucracy and oversight could add administrative burdens.",
  },
  {
    number: 5,
    title: "& much more making it harder for you as the Landlord!",
    description: "",
  },
];

const RentersBillInfo = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header with HM Government styling */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto bg-background rounded-xl shadow-luxury border border-border/50 overflow-hidden"
        >
          {/* Top bar accent */}
          <div className="h-2 bg-accent" />
          
          <div className="p-8 md:p-12">
            {/* HM Government header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="text-foreground">
                <svg className="w-16 h-16" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 5C25.1 5 5 25.1 5 50s20.1 45 45 45 45-20.1 45-45S74.9 5 50 5zm0 85c-22.1 0-40-17.9-40-40s17.9-40 40-40 40 17.9 40 40-17.9 40-40 40z"/>
                  <path d="M50 20c-16.5 0-30 13.5-30 30s13.5 30 30 30 30-13.5 30-30-13.5-30-30-30zm0 55c-13.8 0-25-11.2-25-25s11.2-25 25-25 25 11.2 25 25-11.2 25-25 25z"/>
                  <circle cx="50" cy="50" r="15"/>
                </svg>
              </div>
              <div>
                <span className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                  HM Government
                </span>
              </div>
            </div>

            <h2 className="font-heading text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              What the Renters' Rights Bill Means for You…
            </h2>
            
            <p className="text-muted-foreground text-lg mb-10">
              The proposed legislation brings substantial changes that landlords in Chester need to carefully evaluate:
            </p>

            {/* Challenges Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {challenges.map((item, index) => (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 * index }}
                  className="flex gap-4"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full border-2 border-primary flex items-center justify-center">
                    <span className="text-primary font-heading font-semibold">
                      {item.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-primary font-heading font-semibold text-lg mb-1">
                      {item.title}
                    </h3>
                    {item.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {item.description}
                      </p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="max-w-3xl mx-auto text-center mt-12"
        >
          <p className="text-lg text-foreground font-medium mb-6">
            Short-term lets give you the flexibility and control that traditional AST can no longer offer.
          </p>
          <a
            href="#valuation"
            className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-gold-dark text-primary-foreground font-heading font-semibold text-lg rounded-lg transition-all duration-300 shadow-gold hover:shadow-lg"
          >
            Discover a Better Alternative
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default RentersBillInfo;
