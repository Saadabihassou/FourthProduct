
import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Book, Lightbulb, Settings } from "lucide-react";

const steps = [
  {
    icon: Book,
    title: "Analyze Your Habits",
    description:
      "Our AI studies your work patterns and identifies when you're most productive throughout the day.",
  },
  {
    icon: Lightbulb,
    title: "Personalized Insights",
    description:
      "Receive custom recommendations on optimal focus periods and break times tailored to your unique style.",
  },
  {
    icon: Settings,
    title: "Adaptive Workflow",
    description:
      "ZenFocus continuously learns and adapts, helping you achieve more while maintaining balance.",
  },
];

export function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            How <span className="gradient-text">ZenFocus</span> Works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Our AI-powered system adapts to your natural productivity rhythms to help you
            achieve more with less stress.
          </p>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gray-50 dark:bg-gray-800 rounded-xl p-8 border border-gray-100 dark:border-gray-700 shadow-sm hover:shadow-md transition-all card-hover"
            >
              <div className="bg-indigo-100 dark:bg-indigo-900/50 w-14 h-14 rounded-lg flex items-center justify-center mb-6 mx-auto">
                <step.icon className="w-7 h-7 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{step.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 text-center">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-lg font-medium text-gray-700 dark:text-gray-300 mb-6">
              Experience the power of AI-driven productivity
            </p>
            <a
              href="#"
              className="inline-flex px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition-colors"
            >
              Get Started Now
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
