import { motion } from "framer-motion";
import { Button } from "./ui/button";

const IncomeComparison = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
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
          className="max-w-4xl mx-auto mb-10"
        >
          <div className="text-muted-foreground space-y-4 leading-relaxed">
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
          <p className="text-foreground mb-6 text-center">
            The example below, is a comparison from a Traditional Let Vs Short Let / Airbnb. The data reflected are based on 2 bedroom house/apt. in Chester Area rented for £1,200.00 pm.
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl shadow-luxury border border-border/50">
            <table className="w-full">
              {/* Header Row */}
              <thead>
                <tr>
                  <th className="bg-primary text-primary-foreground font-heading font-semibold px-6 py-4 text-left">
                    
                  </th>
                  <th className="bg-muted text-foreground font-heading font-semibold px-6 py-4 text-center">
                    Traditional Let
                  </th>
                  <th className="bg-accent text-accent-foreground font-heading font-semibold px-6 py-4 text-center">
                    Short Let / Airbnb
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Monthly Income */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground font-medium px-6 py-3">
                    Monthly income from Rent
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3 font-medium">
                    £1,200.00
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-3 font-medium">
                    £2,340.00
                  </td>
                </tr>

                {/* Monthly Expenses */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground px-6 py-3">
                    Monthly expenses (i.e. Mortgage)
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3">
                    £600.00
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-3">
                    £600.00
                  </td>
                </tr>

                {/* Agent Fees */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground px-6 py-3">
                    Agent Fee's
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3">
                    £120.00 (10%)
                  </td>
                  <td className="bg-accent/20 text-foreground text-center px-6 py-3">
                    £315.90 (13.5%)
                  </td>
                </tr>

                {/* Total Monthly Net Income */}
                <tr>
                  <td className="bg-primary text-primary-foreground font-semibold px-6 py-4">
                    Total monthly Net income
                  </td>
                  <td className="bg-muted text-foreground text-center px-6 py-4 font-bold text-lg">
                    £480.00
                  </td>
                  <td className="bg-accent text-accent-foreground text-center px-6 py-4 font-bold text-lg">
                    £1,424.10
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground italic text-center mt-6 text-sm"
          >
            Note: The income comparison above is an example & the Agent Fees are based on the current fee offer.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center mt-8"
          >
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-heading font-semibold px-8 py-6 text-lg"
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
