// import type { Metadata } from 'next';
// import { PortfolioHero } from '@/components/portfolio/PortfolioHero';
// import { PortfolioFilter } from '@/components/portfolio/PortfolioFilter';
// import { PortfolioGrid } from '@/components/portfolio/PortfolioGrid';
// import { PortfolioCTA } from '@/components/portfolio/PortfolioCTA';

// export const metadata: Metadata = {
//   title: 'Portfolio & Case Studies | 5Xcodes',
//   description: 'Explore our portfolio of successful projects and case studies. See how we\'ve helped businesses transform with custom software solutions.',
//   keywords: 'portfolio, case studies, projects, software development, success stories',
//   openGraph: {
//     title: 'Portfolio & Case Studies | 5Xcodes',
//     description: 'Explore our portfolio of successful projects and case studies.',
//     type: 'website',
//   },
// };

export default function PortfolioPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
          Portfolio Coming Soon
        </h1>
        <p className="text-xl text-gray-600">
          We're working on showcasing our amazing projects. Check back soon!
        </p>
      </div>
    </main>
  );
}
