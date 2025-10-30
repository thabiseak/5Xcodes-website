import type { Metadata } from 'next';
import Link from 'next/link';
import { 
  CodeBracketIcon, 
  CloudIcon, 
  CpuChipIcon,
  DevicePhoneMobileIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Our Services | 5Xcodes - Software Development Company in Jaffna',
  description: 'Professional software development services including custom applications for bakeries, travel agencies, pharmacies, and more. Based in Jaffna, Sri Lanka.',
  keywords: 'software development, custom applications, bakery management, travel management, pharmacy systems, Jaffna, Sri Lanka',
  openGraph: {
    title: 'Our Services | 5Xcodes',
    description: 'Professional software development services in Jaffna, Sri Lanka',
    type: 'website',
  },
};

const services = [
  {
    title: 'Custom Development',
    description: 'Tailored software solutions for your specific business needs. We build custom applications for bakeries, travel agencies, pharmacies, and more.',
    icon: CodeBracketIcon,
    href: '/services/custom-development',
    features: [
      'Business Management Systems',
      'Inventory & Expense Tracking',
      'Customer Management',
      'Custom Workflows',
    ],
    color: 'from-electric-blue to-neon-blue',
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services to modernize your business operations.',
    icon: CloudIcon,
    href: '/services/cloud-solutions',
    features: [
      'Cloud Migration',
      'Infrastructure Setup',
      'DevOps Services',
      'Cloud Security',
    ],
    color: 'from-neon-purple to-electric-blue',
  },
  {
    title: 'AI Integration',
    description: 'Intelligent automation and AI-powered features to enhance your applications.',
    icon: CpuChipIcon,
    href: '/services/ai-integration',
    features: [
      'Process Automation',
      'Predictive Analytics',
      'Smart Recommendations',
      'Data Intelligence',
    ],
    color: 'from-deep-blue to-electric-blue',
  },
  {
    title: 'Mobile Apps',
    description: 'Native and cross-platform mobile applications for iOS and Android.',
    icon: DevicePhoneMobileIcon,
    href: '/services/mobile-apps',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-Platform Apps',
      'App Maintenance',
    ],
    color: 'from-electric-blue to-neon-purple',
  },
  {
    title: 'Security Solutions',
    description: 'Comprehensive security measures to protect your applications and data.',
    icon: ShieldCheckIcon,
    href: '/services/security',
    features: [
      'Security Audits',
      'Data Protection',
      'Access Control',
      'Compliance',
    ],
    color: 'from-neon-blue to-deep-blue',
  },
  {
    title: 'Analytics & Reporting',
    description: 'Business intelligence solutions to track performance and make data-driven decisions.',
    icon: ChartBarIcon,
    href: '/services/analytics',
    features: [
      'Real-time Dashboards',
      'Custom Reports',
      'Performance Tracking',
      'Data Visualization',
    ],
    color: 'from-neon-purple to-neon-blue',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-white/40"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-white/20 shadow-glass mb-8">
              <div className="w-2 h-2 bg-neon-blue rounded-full animate-pulse mr-3"></div>
              <span className="text-sm font-medium text-gray-700">
                Professional Software Development Services
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-display font-bold mb-6">
              <span className="bg-gradient-to-r from-deep-blue via-electric-blue to-neon-purple bg-clip-text text-transparent">
                Our Services
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              From custom business applications to cloud solutions, we deliver software that drives your success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-electric-blue to-neon-purple text-white font-semibold rounded-xl shadow-neon hover:shadow-neon-lg transition-all duration-300 overflow-hidden hover:scale-105"
              >
                <span className="relative z-10 flex items-center">
                  Get Started
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-neon-purple to-electric-blue opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Link>

              <Link
                href="/portfolio"
                className="px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 hover:scale-105"
              >
                View Portfolio
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Link
                  key={service.title}
                  href={service.href}
                  className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-white/20 shadow-glass hover:shadow-glass-lg transition-all duration-300 overflow-hidden hover:scale-105"
                >
                  {/* Gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <div className="relative p-8">
                    {/* Icon */}
                    <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-electric-blue transition-colors duration-300">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 rounded-full bg-electric-blue mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Learn More Link */}
                    <div className="flex items-center text-electric-blue font-semibold group-hover:translate-x-2 transition-transform duration-300">
                      Learn More
                      <ArrowRightIcon className="w-4 h-4 ml-2" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-deep-blue via-electric-blue to-neon-purple">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve your goals with custom software solutions
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-white text-electric-blue font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact Us Today
            <ArrowRightIcon className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </section>
    </main>
  );
}
