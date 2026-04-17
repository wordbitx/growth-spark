import { Link } from 'react-router-dom';
import { 
  Share2, 
  BookOpen, 
  Code2, 
  Briefcase, 
  Palette, 
  TrendingUp,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'social-media',
    title: 'Social Media Services',
    description: 'Grow your online presence with our comprehensive social media guides, strategies, and tools designed to boost engagement and followers.',
    icon: Share2,
    color: 'from-pink-500 to-rose-500',
    features: ['Instagram Growth', 'TikTok Viral Strategies', 'YouTube Success', 'LinkedIn Branding'],
    products: 8,
  },
  {
    id: 'kids-learning',
    title: 'Kids Learning',
    description: 'Fun and educational resources for children including alphabet books, math activities, science experiments, and coding for kids.',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    features: ['Alphabet Learning', 'Math Workbooks', 'Science Adventures', 'Coding for Kids'],
    products: 4,
  },
  {
    id: 'dev-kits',
    title: 'Dev Kits & Programming',
    description: 'Comprehensive guides for Arduino, Raspberry Pi, Python programming, and web development for beginners and enthusiasts.',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500',
    features: ['Arduino Projects', 'Raspberry Pi', 'Python Programming', 'Web Development'],
    products: 4,
  },
  {
    id: 'business',
    title: 'Business & Marketing',
    description: 'Professional guides for freelancing, digital marketing, e-commerce, and building a successful online business.',
    icon: Briefcase,
    color: 'from-purple-500 to-violet-500',
    features: ['Freelancing Success', 'Digital Marketing', 'E-commerce Launch', 'Email Marketing'],
    products: 5,
  },
  {
    id: 'design',
    title: 'Design & Creative',
    description: 'Master design tools like Canva, learn copywriting, and unlock your creative potential with our design courses.',
    icon: Palette,
    color: 'from-orange-500 to-amber-500',
    features: ['Canva Mastery', 'Copywriting', 'SEO Optimization', 'Content Creation'],
    products: 3,
  },
  {
    id: 'virtual-services',
    title: 'Virtual Services',
    description: 'Virtual assistant training, remote work guides, and productivity tools to help you succeed in the digital workspace.',
    icon: TrendingUp,
    color: 'from-cyan-500 to-teal-500',
    features: ['VA Training', 'Remote Work', 'Productivity', 'Time Management'],
    products: 2,
  },
];

export function Services() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Categories
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our wide range of digital products designed to help you grow, learn, and succeed
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-5">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                <span className="text-sm text-gray-500">
                  {service.products} Products
                </span>
                <Link
                  to={`/products?category=${service.title.split(' ')[0]}`}
                  className="flex items-center gap-1 text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors"
                >
                  Explore
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-purple-600 to-indigo-600 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h3>
            <p className="text-purple-100 mb-6 max-w-xl mx-auto">
              Browse our collection of digital products and find the perfect resources for your needs.
            </p>
            <Link to="/products">
              <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg">
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
