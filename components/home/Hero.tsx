'use client';

import { ArrowRightIcon, PlayIcon } from '@heroicons/react/24/outline';
import { FloatingCodeElements } from './FloatingCodeElements';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Background Elements */}
      <FloatingCodeElements />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
      
      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 pb-12 sm:pt-24 sm:pb-16">
        <div>
          {/* Badge */}
          <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-glass mb-6 sm:mb-8">
            <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-neon-blue rounded-full animate-pulse mr-2 sm:mr-3"></div>
            <span className="text-xs sm:text-sm font-medium text-gray-700">
              Accelerating Digital Transformation
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-display font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-deep-blue via-electric-blue to-neon-purple bg-clip-text text-transparent">
              Accelerate Your
            </span>
            <br />
            <span className="bg-gradient-to-r from-neon-purple via-electric-blue to-deep-blue bg-clip-text text-transparent">
              Digital Future
            </span>
            <br />
            <span className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">
              5X Faster
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 sm:mb-10 md:mb-12 max-w-4xl mx-auto leading-relaxed px-4">
            Transform your business with cutting-edge software solutions, AI integration, 
            and cloud technologies. We build the future, today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-14 md:mb-16 px-4">
            <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold text-sm sm:text-base rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105">
              <span className="relative z-10 flex items-center justify-center">
                Get Started Today
                <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <button className="group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold text-sm sm:text-base rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
              <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
            {[
              { number: '5+', label: 'Projects Delivered' },
              { number: '99%', label: 'Client Satisfaction' },
              { number: '5X', label: 'Faster Development' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl xs:text-3xl sm:text-3xl md:text-4xl font-bold bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent mb-1 sm:mb-2">
                  {stat.number}
                </div>
                <div className="text-xs sm:text-sm text-gray-600 font-medium px-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-electric-blue/60 rounded-full flex justify-center animate-bounce">
          <div className="w-1 h-3 bg-electric-blue rounded-full mt-2" />
        </div>
      </div>
    </section>
  );
}