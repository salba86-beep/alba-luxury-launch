import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, PoundSterling, TrendingUp, Calculator } from "lucide-react";

// Data extracted from the document
const incomeData: Record<string, Record<string, { annual: number; monthly: number }>> = {
  "Chester & Cheshire": {
    "1": { annual: 19890, monthly: 1658 },
    "2": { annual: 28080, monthly: 2340 },
    "3": { annual: 30420, monthly: 2535 },
    "4": { annual: 33930, monthly: 2828 },
  },
  "Greater Manchester": {
    "1": { annual: 14503, monthly: 1209 },
    "2": { annual: 20044, monthly: 1670 },
    "3": { annual: 22040, monthly: 1837 },
    "4": { annual: 23283, monthly: 1940 },
  },
  "Liverpool & Merseyside": {
    "1": { annual: 17239, monthly: 1437 },
    "2": { annual: 22052, monthly: 1838 },
    "3": { annual: 23543, monthly: 1962 },
    "4": { annual: 24645, monthly: 2054 },
  },
  "North Wales": {
    "1": { annual: 24547, monthly: 2046 },
    "2": { annual: 28487, monthly: 2374 },
    "3": { annual: 30954, monthly: 2579 },
    "4": { annual: 33389, monthly: 2782 },
  },
};

const areas = Object.keys(incomeData);
const bedrooms = ["1", "2", "3", "4"];

const IncomeCalculator = () => {
  const [selectedArea, setSelectedArea] = useState(areas[0]);
  const [selectedBedrooms, setSelectedBedrooms] = useState("2");

  const currentData = incomeData[selectedArea][selectedBedrooms];

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Calculator className="w-4 h-4" />
            Income Estimator
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            See Your <span className="text-primary">Earning Potential</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your area and property size to see estimated short-term rental income
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-luxury-lg border border-border overflow-hidden">
            {/* Selection Tabs */}
            <div className="p-6 md:p-8 border-b border-border bg-muted/30">
              {/* Area Selection */}
              <div className="mb-6">
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <MapPin className="w-4 h-4 text-primary" />
                  Select Your Area
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                  {areas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedArea === area
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedroom Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-3">
                  <Bed className="w-4 h-4 text-primary" />
                  Number of Bedrooms
                </label>
                <div className="flex gap-2">
                  {bedrooms.map((bed) => (
                    <button
                      key={bed}
                      onClick={() => setSelectedBedrooms(bed)}
                      className={`flex-1 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 ${
                        selectedBedrooms === bed
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-background border border-border text-foreground hover:border-primary/50 hover:bg-primary/5"
                      }`}
                    >
                      {bed} {parseInt(bed) === 1 ? "Bedroom" : "Bedrooms"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="p-6 md:p-8 bg-gradient-to-br from-primary/5 via-transparent to-accent/5">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Monthly Income */}
                <motion.div
                  key={`${selectedArea}-${selectedBedrooms}-monthly`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-medium">Monthly Income</span>
                    <PoundSterling className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-primary">
                      £{currentData.monthly.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-2">Estimated average based on local market data</p>
                </motion.div>

                {/* Annual Income */}
                <motion.div
                  key={`${selectedArea}-${selectedBedrooms}-annual`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 shadow-lg"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-foreground/80 text-sm font-medium">Annual Revenue</span>
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">
                      £{currentData.annual.toLocaleString()}
                    </span>
                    <span className="text-primary-foreground/70 text-sm">/year</span>
                  </div>
                  <p className="text-primary-foreground/70 text-xs mt-2">Potential annual earnings with short-term lets</p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-6 text-center"
              >
                <p className="text-muted-foreground text-sm mb-4">
                  Want a personalised valuation for your specific property?
                </p>
                <button
                  onClick={() => {
                    const heroSection = document.getElementById('lead-form');
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="inline-flex items-center gap-2 bg-accent hover:bg-accent/90 text-accent-foreground px-6 py-3 rounded-lg font-semibold transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  Get Your Free Valuation
                  <TrendingUp className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <div className="px-6 md:px-8 py-4 bg-muted/50 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                * Estimates based on average short-term rental performance in each region. Actual earnings may vary based on property condition, amenities, and seasonality.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IncomeCalculator;
