import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, PoundSterling, TrendingUp, Calculator } from "lucide-react";

// Revenue data with ranges
const incomeData: Record<string, Record<string, { annual: [number, number]; monthly: [number, number] }>> = {
  "Chester & Cheshire": {
    "1": { annual: [18000, 21000], monthly: [1500, 1750] },
    "2": { annual: [26000, 30000], monthly: [2167, 2500] },
    "3": { annual: [28000, 32000], monthly: [2333, 2667] },
    "4": { annual: [31000, 34000], monthly: [2583, 2833] },
  },
  "Greater Manchester": {
    "1": { annual: [14000, 15000], monthly: [1167, 1250] },
    "2": { annual: [19000, 21000], monthly: [1583, 1750] },
    "3": { annual: [21000, 23000], monthly: [1750, 1917] },
    "4": { annual: [22000, 23500], monthly: [1833, 1958] },
  },
  "Liverpool & Merseyside": {
    "1": { annual: [17000, 17500], monthly: [1417, 1458] },
    "2": { annual: [21500, 22500], monthly: [1792, 1875] },
    "3": { annual: [23000, 24000], monthly: [1917, 2000] },
    "4": { annual: [24000, 25000], monthly: [2000, 2083] },
  },
  "North Wales": {
    "1": { annual: [24000, 25000], monthly: [2000, 2083] },
    "2": { annual: [28000, 29000], monthly: [2333, 2417] },
    "3": { annual: [30500, 31500], monthly: [2542, 2625] },
    "4": { annual: [33000, 34000], monthly: [2750, 2833] },
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

        {/* Hero Section */}
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
            Turn Your Property into a <span className="text-primary">High-Earning Short-Term Rental</span>
          </h2>

          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Select your area and property size to see your potential short-term rental revenue. Typical 2-bedroom apartments in Chester & Cheshire can earn <strong>£26,000–£30,000 per year</strong>.
          </p>
        </motion.div>

        {/* Calculator Card */}
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
                  {areas.map(area => (
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
                  {bedrooms.map(bed => (
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
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card rounded-xl p-6 border border-border shadow-lg cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground text-sm font-medium">Monthly Income</span>
                    <PoundSterling className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      £{currentData.monthly[0].toLocaleString()}–£{currentData.monthly[1].toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-2">
                    Potential monthly revenue based on local market data
                  </p>
                </motion.div>

                {/* Annual Income */}
                <motion.div
                  key={`${selectedArea}-${selectedBedrooms}-annual`}
                  whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(0,0,0,0.15)" }}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-gradient-to-br from-primary to-primary/80 rounded-xl p-6 shadow-lg cursor-pointer"
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-primary-foreground/80 text-sm font-medium">Annual Revenue</span>
                    <TrendingUp className="w-5 h-5 text-accent" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                      £{currentData.annual[0].toLocaleString()}–£{currentData.annual[1].toLocaleString()}
                    </span>
                    <span className="text-primary-foreground/70 text-sm">/year</span>
                  </div>
                  <p className="text-primary-foreground/70 text-xs mt-2">
                    Potential annual earnings with short-term lets
                  </p>
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
                    const heroSection = document.getElementById("lead-form");
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: "smooth" });
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
                *Estimates based on average short-term rental performance. Actual earnings may vary depending on property condition, location, amenities, and occupancy.
              </p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default IncomeCalculator;
