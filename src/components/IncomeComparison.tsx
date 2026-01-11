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
            Normal AST vs Doing Short Lets
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Below is an example income comparison from doing a Traditional AST/Long Let vs doing Short Lets/Airbnb. 
            See the example data below based on a 2 Bedroom Apt Rented at £1200 market rate.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          {/* Comparison Table */}
          <div className="overflow-x-auto rounded-xl shadow-luxury border border-border/50">
            <table className="w-full">
              {/* Header Row */}
              <thead>
                <tr>
                  <th className="bg-primary text-primary-foreground font-heading font-semibold px-6 py-4 text-left">
                    Comparison Table
                  </th>
                  <th className="bg-muted text-foreground font-heading font-semibold px-6 py-4 text-center">
                    Typical AST
                  </th>
                  <th className="bg-primary text-primary-foreground font-heading font-semibold px-6 py-4 text-center">
                    Short Lets / Airbnb
                  </th>
                </tr>
              </thead>
              <tbody>
                {/* Monthly Income */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground font-medium px-6 py-3">
                    Monthly Income from Rent
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3 font-medium">
                    £1,200
                  </td>
                  <td className="bg-primary/10 text-foreground text-center px-6 py-3 font-medium">
                    £2,650
                  </td>
                </tr>

                {/* Monthly Expenses Header */}
                <tr>
                  <td className="bg-primary text-primary-foreground font-semibold px-6 py-3">
                    MONTHLY EXPENSES
                  </td>
                  <td className="bg-accent text-accent-foreground px-6 py-3"></td>
                  <td className="bg-primary/20 px-6 py-3"></td>
                </tr>

                {/* Mortgage */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground px-6 py-3">
                    Mortgage
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3">
                    £650
                  </td>
                  <td className="bg-primary/10 text-foreground text-center px-6 py-3">
                    £650
                  </td>
                </tr>

                {/* Agent Management Fees */}
                <tr>
                  <td className="bg-primary/90 text-primary-foreground px-6 py-3">
                    Agent Management Fee's
                  </td>
                  <td className="bg-muted/50 text-foreground text-center px-6 py-3">
                    £120 at 10%
                  </td>
                  <td className="bg-primary/10 text-foreground text-center px-6 py-3">
                    £397.50 at 15%
                  </td>
                </tr>

                {/* Total After Expenses */}
                <tr>
                  <td className="bg-primary text-primary-foreground font-semibold px-6 py-4">
                    TOTAL AFTER EXPENSES
                  </td>
                  <td className="bg-accent text-accent-foreground text-center px-6 py-4 font-bold text-lg">
                    £430
                  </td>
                  <td className="bg-primary text-primary-foreground text-center px-6 py-4 font-bold text-lg">
                    £1,602.50
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
            Note: The income comparison above is an example & the Agent Fees are based on the current Letting Agent Prices in the UK.
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
