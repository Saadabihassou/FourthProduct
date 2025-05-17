
import { useState } from "react";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const [isAnnual, setIsAnnual] = useState(true);

  const plans = [
    {
      name: "Free",
      description: "Great for getting started with basic productivity tracking",
      monthlyPrice: 0,
      annualPrice: 0,
      features: [
        "Basic productivity analysis",
        "Daily focus recommendations",
        "Up to 3 focus sessions per day",
        "7-day data history",
      ],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "Pro",
      description: "Perfect for professionals seeking advanced productivity tools",
      monthlyPrice: 9.99,
      annualPrice: 7.99,
      features: [
        "Advanced AI analysis & insights",
        "Unlimited focus sessions",
        "Custom work patterns & recommendations",
        "30-day data history & reporting",
        "Calendar integration",
        "Focus music & soundscapes",
      ],
      cta: "Start 14-Day Trial",
      highlighted: true,
    },
    {
      name: "Team",
      description: "For teams looking to enhance productivity and collaboration",
      monthlyPrice: 19.99,
      annualPrice: 16.99,
      features: [
        "All Pro features included",
        "Team productivity analytics",
        "Optimized meeting scheduling",
        "Collaborative focus sessions",
        "Shared team dashboards",
        "Admin controls & user management",
        "Priority customer support",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Choose the perfect plan to enhance your productivity journey.
          </p>

          <div className="mt-8 inline-flex items-center p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                !isAnnual
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "bg-transparent text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setIsAnnual(false)}
            >
              Monthly
            </button>
            <button
              className={`px-4 py-2 rounded-md transition-colors ${
                isAnnual
                  ? "bg-white dark:bg-gray-700 shadow-sm"
                  : "bg-transparent text-gray-700 dark:text-gray-300"
              }`}
              onClick={() => setIsAnnual(true)}
            >
              Annual <span className="text-xs text-emerald-500">Save 20%</span>
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`rounded-xl overflow-hidden border ${
                plan.highlighted
                  ? "border-indigo-500 dark:border-indigo-400 shadow-lg"
                  : "border-gray-200 dark:border-gray-700"
              }`}
            >
              {plan.highlighted && (
                <div className="bg-indigo-600 dark:bg-indigo-500 text-white text-center py-1.5 text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="p-6 md:p-8 bg-white dark:bg-gray-800">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">
                  {plan.description}
                </p>

                <div className="mb-6">
                  <span className="text-4xl font-bold">
                    ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                  </span>
                  <span className="text-gray-500 dark:text-gray-400 ml-2">
                    /month
                  </span>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5 mr-3" />
                      <span className="text-gray-600 dark:text-gray-300 text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Button
                  className={`w-full py-6 ${
                    plan.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-700 text-white"
                      : "bg-white dark:bg-transparent border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                  }`}
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
            All plans include our core AI productivity features. Need a custom solution for your enterprise?{" "}
            <a href="#" className="text-indigo-600 dark:text-indigo-400 hover:underline">
              Contact our sales team
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
