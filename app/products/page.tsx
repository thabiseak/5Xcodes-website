// import type { Metadata } from 'next';
// import { ProductsHero } from '@/components/products/ProductsHero';
// import { ProductsShowcase } from '@/components/products/ProductsShowcase';
// import { ProductsPricing } from '@/components/products/ProductsPricing';
// import { ProductsComparison } from '@/components/products/ProductsComparison';
// import { ProductsCTA } from '@/components/products/ProductsCTA';

// export const metadata: Metadata = {
//   title: 'Software Products & Solutions | 5Xcodes',
//   description: 'Discover our innovative software products: SaaS tools, analytics platforms, and enterprise solutions designed to accelerate your business growth.',
//   keywords: 'software products, SaaS tools, analytics platforms, enterprise solutions, business software',
//   openGraph: {
//     title: 'Software Products & Solutions | 5Xcodes',
//     description: 'Discover our innovative software products designed to accelerate your business growth.',
//     type: 'website',
//   },
// };

// export default function ProductsPage() {
//   return (
//     <main className="min-h-screen">
//       <ProductsHero />
//       <ProductsShowcase />
//       <ProductsPricing />
//       <ProductsComparison />
//       <ProductsCTA />
//     </main>
//   );
// }

export default function ProductsPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-deep-blue to-electric-blue bg-clip-text text-transparent">
          Products Coming Soon
        </h1>
        <p className="text-xl text-gray-600">
          We're working on something amazing. Check back soon!
        </p>
      </div>
    </main>
  );
}
