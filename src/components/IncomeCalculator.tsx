import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Bed, PoundSterling, TrendingUp, Calculator } from "lucide-react";

const incomeData: Record<string, Record<string, { annual: number; monthly: number }>> = {
  "Chester & Cheshire": {
    "1": { annual: 19890, monthly: 1658 },
    "2": { annual: 28080, monthly: 2340 },
    "3": { annual: 30420, monthly: 2535 },
    "4": { annual: 33930, monthly: 2828 }
  },
  "Greater Manchester": {
    "1": { annual: 14503, monthly: 1209 },
    "2": { annual: 20044, monthly: 1670 },
    "3": { annual: 22040, monthly: 1837 },
    "4": { annual: 23283, monthly: 1940 }
  },
  "Liverpool & Merseyside": {
    "1": { annual: 17239, monthly: 1437 },
    "2": { annual: 22052, monthly: 1838 },
    "3": { annual: 23543, monthly: 1962 },
    "4": { annual: 24645, monthly: 2054 }
  },
  "North Wales": {
    "1": { annual: 24547, monthly: 2046 },
    "2": { annual: 28487, monthly: 2374 },
    "3": { annual: 30954, monthly: 2579 },
    "4": { annual: 33389, monthly: 2782 }
  }
};

const areas = Object.keys(incomeData);
const bedrooms = ["1", "2", "3", "4"];

const IncomeCalculator = () => {
  const [selectedArea, setSelectedArea] = useState(areas[0]);
  const [selectedBedrooms, setSelectedBedrooms] = useState("2");
  const currentData = incomeData[selectedArea][selectedBedrooms];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 border border-primary text-primary px-4 py-2 text-xs font-heading tracking-widest uppercase mb-8">
            <Calculator className="w-4 h-4" />
            Income Estimator
          </span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            See Your Earning Potential
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
          <div className="bg-card border border-border overflow-hidden">
            {/* Selection Tabs */}
            <div className="p-8 md:p-10 border-b border-border">
              {/* Area Selection */}
              <div className="mb-8">
                <label className="flex items-center gap-2 text-sm font-heading font-bold text-foreground mb-4 uppercase tracking-wide">
                  <MapPin className="w-4 h-4 text-primary" />
                  Select Your Area
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {areas.map((area) => (
                    <button
                      key={area}
                      onClick={() => setSelectedArea(area)}
                      className={`px-4 py-4 text-sm font-medium transition-all duration-300 border ${
                        selectedArea === area
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {area}
                    </button>
                  ))}
                </div>
              </div>

              {/* Bedroom Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm font-heading font-bold text-foreground mb-4 uppercase tracking-wide">
                  <Bed className="w-4 h-4 text-primary" />
                  Number of Bedrooms
                </label>
                <div className="flex gap-3">
                  {bedrooms.map((bed) => (
                    <button
                      key={bed}
                      onClick={() => setSelectedBedrooms(bed)}
                      className={`flex-1 px-4 py-4 text-sm font-medium transition-all duration-300 border ${
                        selectedBedrooms === bed
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border text-foreground hover:border-primary"
                      }`}
                    >
                      {bed} {parseInt(bed) === 1 ? "Bed" : "Beds"}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Display */}
            <div className="p-8 md:p-10 bg-muted/30">
              <div className="grid md:grid-cols-2 gap-6">
                {/* Monthly Income */}
                <motion.div
                  key={`${selectedArea}-${selectedBedrooms}-monthly`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3 }}
                  className="bg-card border border-border p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-muted-foreground text-sm font-heading uppercase tracking-wide">
                      Monthly Income
                    </span>
                    <PoundSterling className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-primary">
                      £{currentData.monthly.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground text-sm">/month</span>
                  </div>
                  <p className="text-muted-foreground text-xs mt-4 uppercase tracking-wide">
                    Estimated average based on local market data
                  </p>
                </motion.div>

                {/* Annual Income */}
                <motion.div
                  key={`${selectedArea}-${selectedBedrooms}-annual`}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="bg-accent border border-accent p-8"
                >
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-accent-foreground/70 text-sm font-heading uppercase tracking-wide">
                      Annual Revenue
                    </span>
                    <TrendingUp className="w-5 h-5 text-accent-foreground" />
                  </div>
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl md:text-5xl font-heading font-bold text-accent-foreground">
                      £{currentData.annual.toLocaleString()}
                    </span>
                    <span className="text-accent-foreground/60 text-sm">/year</span>
                  </div>
                  <p className="text-accent-foreground/60 text-xs mt-4 uppercase tracking-wide">
                    Potential annual earnings with short-term lets
                  </p>
                </motion.div>
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                className="mt-10 text-center"
              >
                <p className="text-muted-foreground text-sm mb-6">
                  Want a personalised valuation for your specific property?
                </p>
                <button
                  onClick={() => {
                    const heroSection = document.getElementById('lead-form');
                    if (heroSection) {
                      heroSection.scrollIntoView({ behavior: 'smooth' });
                    }
                  }}
                  className="brutalist-btn inline-flex items-center gap-3"
                >
                  Get Your Free Valuation
                  <TrendingUp className="w-4 h-4" />
                </button>
              </motion.div>
            </div>

            {/* Disclaimer */}
            <div className="px-8 md:px-10 py-6 bg-muted/50 border-t border-border">
              <p className="text-xs text-muted-foreground text-center uppercase tracking-wide">
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
