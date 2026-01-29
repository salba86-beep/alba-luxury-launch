import { motion } from "framer-motion";
import { Button } from "./ui/button";

const IncomeComparison = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Short-Term Vs Longer Lets
          </h2>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="text-muted-foreground space-y-6 leading-relaxed">
            <p>
              The North West and North Wales remain a strong short-term market. A mix of leisure and business demand, beautiful countryside, and vibrant cities attracts millions of visitors and contractors each year.
            </p>
            <p>
              A well-managed two-bed can achieve around 65–70% occupancy, generating £20k+ in annual revenue.
            </p>
            <p>
              Although Short Let is often viewed as seasonal, this region is highly resilient. Spring and summer bring demand for gardens lovers, races, hikers, and coastal trips, while autumn and winter are supported by changing landscapes and popular Christmas markets.
            </p>
            <p>
              Ongoing development across the region also drives steady contractor demand, making the North West and North Wales not just great places to visit, but strong, year-round investment opportunities.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <p className="text-foreground mb-8 text-center">
            The example below, is a comparison from a Traditional Let Vs Short Let / Airbnb. The data reflected are based on 2 bedroom house/apt. in Chester Area rented for £1,200.00 pm.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto border border-border">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="bg-primary text-primary-foreground font-heading font-bold px-6 py-5 text-left text-sm uppercase tracking-wide">
                    
                  </th>
                  <th className="bg-muted text-foreground font-heading font-bold px-6 py-5 text-center text-sm uppercase tracking-wide">
                    Traditional Let
                  </th>
                  <th className="bg-accent text-accent-foreground font-heading font-bold px-6 py-5 text-center text-sm uppercase tracking-wide">
                    Short Let / Airbnb
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-border">
                  <td className="bg-primary/90 text-primary-foreground font-medium px-6 py-4 text-sm">
                    Monthly income from Rent
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-4 font-medium">
                    £1,200.00
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-4 font-medium">
                    £2,340.00
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-primary/90 text-primary-foreground px-6 py-4 text-sm">
                    Monthly expenses (i.e. Mortgage)
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-4">
                    £600.00
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-4">
                    £600.00
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-primary/90 text-primary-foreground px-6 py-4 text-sm">
                    Agent Fee's
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-4">
                    £120.00 (10%)
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-4">
                    £315.90 (13.5%)
                  </td>
                </tr>
                <tr className="border-t border-border">
                  <td className="bg-primary text-primary-foreground font-bold px-6 py-5 text-sm uppercase tracking-wide">
                    Total monthly Net income
                  </td>
                  <td className="bg-muted text-foreground text-center px-6 py-5 font-bold text-xl">
                    £480.00
                  </td>
                  <td className="bg-accent text-accent-foreground text-center px-6 py-5 font-bold text-xl">
                    £1,424.10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground italic text-center mt-8 text-sm"
          >
            Note: The income comparison above is an example & the Agent Fees are based on the current fee offer.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-10"
          >
            <Button 
              asChild 
              variant="outline" 
              className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-bold px-10 py-6 text-sm uppercase tracking-wide"
            >
              <a href="#valuation">Get Started Here</a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomeComparison;
