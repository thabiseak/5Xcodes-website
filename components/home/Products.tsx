'use client';

import React, { useState } from 'react';
import { 
  RocketLaunchIcon,
  ChartBarIcon,
  BuildingOfficeIcon,
  ArrowRightIcon,
  PlayIcon,
  CheckIcon
} from '@heroicons/react/24/outline';

const products = [
  {
    id: 'saas-tools',
    name: 'SaaS Tools',
    description: 'Comprehensive software-as-a-service solutions that scale with your business.',
    icon: RocketLaunchIcon,
    features: ['Scalable Architecture', 'Multi-tenant Support', 'API Integration', 'Analytics Dashboard'],
    pricing: 'Starting at $99/month',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'analytics-platform',
    name: 'Analytics Platform',
    description: 'Advanced data analytics and business intelligence tools for data-driven decisions.',
    icon: ChartBarIcon,
    features: ['Real-time Analytics', 'Custom Dashboards', 'Data Visualization', 'Predictive Insights'],
    pricing: 'Starting at $199/month',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'enterprise-suite',
    name: 'Enterprise Suite',
    description: 'Complete enterprise solution with advanced security and compliance features.',
    icon: BuildingOfficeIcon,
    features: ['Enterprise Security', 'Compliance Management', 'Advanced Analytics', '24/7 Support'],
    pricing: 'Starting at $499/month',
    color: 'from-green-500 to-emerald-500',
  },
];

export function Products() {
  const [selectedProduct, setSelectedProduct] = useState(products[0]);

  return (
    <section className="py-12 sm:py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
            Our <span className="bg-gradient-to-r from-electric-blue to-neon-purple bg-clip-text text-transparent">Products</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Powerful software solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        {/* Product Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-10 md:mb-12 px-2">
          {products.map((product) => (
            <button
              key={product.id}
              onClick={() => setSelectedProduct(product)}
              className={`px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 md:py-3 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 ${
                selectedProduct.id === product.id
                  ? 'bg-gradient-to-r from-electric-blue to-neon-purple text-white shadow-neon'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {product.name}
            </button>
          ))}
        </div>

        {/* Selected Product */}
        <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-glass border border-white/20 p-6 sm:p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 items-center">
            {/* Product Info */}
            <div>
              <div className={`inline-flex p-3 sm:p-4 rounded-xl bg-gradient-to-r ${selectedProduct.color} mb-4 sm:mb-6`}>
                <selectedProduct.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">
                {selectedProduct.name}
              </h3>
              
              <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                {selectedProduct.description}
              </p>

              {/* Features */}
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                {selectedProduct.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckIcon className="w-4 h-4 sm:w-5 sm:h-5 text-electric-blue mr-2 sm:mr-3 flex-shrink-0" />
                    <span className="text-sm sm:text-base text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Pricing */}
              <div className="text-xl sm:text-2xl font-bold text-gray-900 mb-6 sm:mb-8">
                {selectedProduct.pricing}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold text-sm sm:text-base rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105">
                  <span className="relative z-10 flex items-center justify-center">
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group flex items-center justify-center px-6 sm:px-8 py-3 sm:py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold text-sm sm:text-base rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105">
                  <PlayIcon className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover:scale-110 transition-transform duration-300" />
                  Watch Demo
                </button>
              </div>
            </div>

            {/* Product Image/Visual */}
            <div className="relative mt-8 lg:mt-0">
              <div className="bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 rounded-2xl p-6 sm:p-8 h-60 sm:h-72 md:h-80 flex items-center justify-center">
                <div className="text-center">
                  <div className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-3 sm:mb-4 rounded-2xl bg-gradient-to-r ${selectedProduct.color} flex items-center justify-center`}>
                    <selectedProduct.icon className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 text-white" />
                  </div>
                  <h4 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2">
                    {selectedProduct.name}
                  </h4>
                  <p className="text-sm sm:text-base text-gray-600">
                    Advanced features and capabilities
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* All Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mt-10 sm:mt-12 md:mt-16">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white/80 backdrop-blur-sm rounded-2xl p-5 sm:p-6 shadow-glass border border-white/20 hover:shadow-glass-lg transition-all duration-300 hover:scale-105 cursor-pointer"
              onClick={() => setSelectedProduct(product)}
            >
              <div className={`inline-flex p-2.5 sm:p-3 rounded-xl bg-gradient-to-r ${product.color} mb-3 sm:mb-4 group-hover:scale-110 transition-transform duration-300`}>
                <product.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              
              <h4 className="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-electric-blue transition-colors duration-300">
                {product.name}
              </h4>
              
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 line-clamp-2">
                {product.description}
              </p>
              
              <div className="text-base sm:text-lg font-semibold text-gray-900">
                {product.pricing}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}