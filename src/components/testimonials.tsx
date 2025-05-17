
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Product Manager",
    company: "TechCorp",
    image: "https://i.pravatar.cc/150?img=11",
    content:
      "ZenFocus changed my work life completely. I'm accomplishing more in 5 hours than I used to in 8. The personalized focus recommendations are spot on!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Creative Director",
    company: "Design Studio",
    image: "https://i.pravatar.cc/150?img=5",
    content:
      "As someone with ADHD, finding focus has always been challenging. ZenFocus adapts to my energy levels throughout the day and helps me channel my creativity productively.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Software Engineer",
    company: "InnovateTech",
    image: "https://i.pravatar.cc/150?img=8",
    content:
      "The AI recommendations helped me establish a coding rhythm I didn't know was possible. Deep work sessions are now a daily reality instead of a rare occurrence.",
    rating: 4,
  },
];

export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [autoplay, setAutoplay] = useState(true);

  const next = useCallback(() => {
    setCurrent((current) => (current === testimonials.length - 1 ? 0 : current + 1));
  }, []);

  const prev = useCallback(() => {
    setCurrent((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  }, []);

  // Autoplay functionality
  useEffect(() => {
    if (!autoplay) return;
    
    const interval = setInterval(() => {
      next();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [autoplay, next]);

  // Pause autoplay on hover
  const stopAutoplay = () => setAutoplay(false);
  const startAutoplay = () => setAutoplay(true);

  return (
    <section
      id="testimonials"
      className="py-24 bg-indigo-50 dark:bg-indigo-900/20"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="gradient-text">Users</span> Say
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            Join thousands of professionals who've transformed their work habits with ZenFocus.
          </p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 md:p-12"
            >
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="shrink-0">
                  <img
                    src={testimonials[current].image}
                    alt={testimonials[current].name}
                    className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover border-4 border-indigo-100 dark:border-indigo-900"
                  />
                </div>
                <div>
                  <div className="flex mb-4">
                    {[...Array(testimonials[current].rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-6 italic">
                    "{testimonials[current].content}"
                  </blockquote>
                  <div>
                    <p className="font-bold text-gray-900 dark:text-white">
                      {testimonials[current].name}
                    </p>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[current].role}, {testimonials[current].company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex justify-center mt-8 items-center gap-4">
            <button
              onClick={prev}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrent(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    current === index
                      ? "bg-indigo-600 dark:bg-indigo-400"
                      : "bg-gray-300 dark:bg-gray-600"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="p-2 rounded-full bg-white dark:bg-gray-800 shadow hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
