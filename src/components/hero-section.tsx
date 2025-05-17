
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-bg">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-emerald-300 dark:bg-emerald-800 rounded-full mix-blend-multiply filter blur-3xl animate-float"></div>
        <div className="absolute top-40 right-1/4 w-96 h-96 bg-indigo-300 dark:bg-indigo-800 rounded-full mix-blend-multiply filter blur-3xl animate-float" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 py-20 mt-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center lg:text-left"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="inline-block bg-indigo-100 dark:bg-indigo-900/40 text-indigo-700 dark:text-indigo-300 py-1 px-3 rounded-full text-sm font-medium mb-6"
            >
              AI-Powered Productivity
            </motion.span>
            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
            >
              Find your <span className="gradient-text">focus</span>,<br />
              amplify your <span className="gradient-text">productivity</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-lg mx-auto lg:mx-0"
            >
              ZenFocus helps you achieve deep work and stay in flow with AI that adapts to your unique productivity style.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-6">
                Start Free Trial
              </Button>
              <Button size="lg" variant="outline" className="px-8 py-6">
                Watch Demo
              </Button>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: isVisible ? 1 : 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="mt-8 text-sm text-gray-500 dark:text-gray-400"
            >
              No credit card required • 14-day free trial
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative"
          >
            {/* App mockup */}
            <div className="relative mx-auto max-w-md lg:max-w-lg">
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="h-12 bg-gray-100 dark:bg-gray-900 flex items-center px-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg mb-4">
                    <h3 className="text-lg font-medium mb-2">Today's Focus</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full bg-emerald-500 mr-3"></div>
                        <p className="text-sm">Complete project proposal</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 mr-3"></div>
                        <p className="text-sm">Research competitive analysis</p>
                      </div>
                      <div className="flex items-center">
                        <div className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600 mr-3"></div>
                        <p className="text-sm">Schedule team sync</p>
                      </div>
                    </div>
                  </div>
                  <div className="bg-indigo-50 dark:bg-indigo-900/30 p-4 rounded-lg">
                    <div className="flex items-start">
                      <div className="bg-indigo-100 dark:bg-indigo-800 p-2 rounded-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-indigo-600 dark:text-indigo-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                        </svg>
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="text-sm font-medium text-indigo-700 dark:text-indigo-300">AI Suggestion</h4>
                        <p className="text-xs text-indigo-600/70 dark:text-indigo-400/70 mt-1">
                          Based on your energy levels, now would be the perfect time to tackle the project proposal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Floating element */}
              <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 w-40">
                <div className="flex items-center mb-2">
                  <div className="w-2 h-2 bg-emerald-500 rounded-full mr-2"></div>
                  <span className="text-xs font-medium">Focus Score</span>
                </div>
                <div className="text-2xl font-bold">87%</div>
                <div className="text-xs text-gray-500 dark:text-gray-400">+12% from yesterday</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120" className="fill-white dark:fill-gray-900">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z"></path>
        </svg>
      </div>
    </section>
  );
}
