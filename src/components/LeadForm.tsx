import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle } from "lucide-react";

const LeadForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    postcode: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, this would send to a backend
    setIsSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-card rounded-lg p-8 shadow-luxury-lg border border-border/50 text-center"
      >
        <div className="flex justify-center mb-4">
          <CheckCircle className="w-16 h-16 text-primary" />
        </div>
        <h3 className="font-heading text-2xl font-bold text-foreground mb-2">
          Thank You!
        </h3>
        <p className="text-muted-foreground">
          We'll send your free Airbnb income valuation within 24 hours.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      className="bg-card rounded-lg p-6 md:p-8 shadow-luxury-lg border border-border/50"
    >
      <div className="text-center mb-6">
        <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
          Free Valuation
        </span>
        <h3 className="font-heading text-xl md:text-2xl font-bold text-foreground">
          Get Your Airbnb Income Estimate
        </h3>
        <p className="text-muted-foreground text-sm mt-2">
          Discover how much more you could earn in just 60 seconds
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="name" className="text-foreground font-medium">
            Full Name
          </Label>
          <Input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            required
            value={formData.name}
            onChange={handleChange}
            className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="email" className="text-foreground font-medium">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            required
            value={formData.email}
            onChange={handleChange}
            className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="phone" className="text-foreground font-medium">
            Phone Number
          </Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+44 7XXX XXXXXX"
            required
            value={formData.phone}
            onChange={handleChange}
            className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary"
          />
        </div>

        <div>
          <Label htmlFor="postcode" className="text-foreground font-medium">
            Property Postcode
          </Label>
          <Input
            id="postcode"
            name="postcode"
            type="text"
            placeholder="SW1A 1AA"
            required
            value={formData.postcode}
            onChange={handleChange}
            className="mt-1.5 bg-background border-border focus:ring-primary focus:border-primary"
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-primary hover:bg-gold-dark text-primary-foreground font-heading font-semibold py-6 text-lg shadow-gold transition-all duration-300 hover:shadow-lg"
        >
          Get My Free Valuation
        </Button>

        <p className="text-center text-xs text-muted-foreground mt-3">
          No obligation. We respect your privacy.
        </p>
      </form>
    </motion.div>
  );
};

export default LeadForm;
