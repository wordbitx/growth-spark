import { Link } from 'react-router-dom';
import { 
  Share2, 
  BookOpen, 
  Code2, 
  Briefcase, 
  Palette, 
  TrendingUp,
  ArrowRight,
  CheckCircle,
  Mail,
  Download,
  Headphones,
  Shield
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const services = [
  {
    id: 'social-media',
    title: 'Social Media Services',
    description: 'Grow your online presence with our comprehensive social media guides, strategies, and tools designed to boost engagement and followers across all major platforms.',
    icon: Share2,
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
    features: [
      'Instagram Growth Mastery - Build a massive following',
      'TikTok Viral Blueprint - Create viral content',
      'YouTube Channel Success - Monetize your channel',
      'LinkedIn Professional Branding - Network like a pro',
      'Twitter X Engagement - Grow your influence',
      'Facebook Ads Mastery - Run profitable campaigns'
    ],
    price: 'From $19.99',
  },
  {
    id: 'kids-learning',
    title: 'Kids Learning Resources',
    description: 'Fun and educational resources for children including alphabet books, math activities, science experiments, and coding for kids. Make learning enjoyable!',
    icon: BookOpen,
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
    features: [
      'Alphabet Adventure Book - Learn ABCs with fun',
      'Math Adventures Workbook - Master numbers',
      'Science Experiments - Discover the world',
      'Coding for Kids - Introduction to programming',
      'Interactive Activities - Engaging exercises',
      'Colorful Illustrations - Visual learning'
    ],
    price: 'From $12.99',
  },
  {
    id: 'dev-kits',
    title: 'Dev Kits & Programming',
    description: 'Comprehensive guides for Arduino, Raspberry Pi, Python programming, and web development. Perfect for beginners and tech enthusiasts.',
    icon: Code2,
    color: 'from-blue-500 to-indigo-500',
    bgColor: 'bg-blue-50',
    features: [
      'Arduino Starter Projects - Build electronics',
      'Raspberry Pi Collection - DIY computing',
      'Python for Beginners - Learn to code',
      'Web Development Bootcamp - Create websites',
      'Step-by-step Tutorials - Easy to follow',
      'Project Source Code - Ready to use'
    ],
    price: 'From $39.99',
  },
  {
    id: 'business',
    title: 'Business & Marketing',
    description: 'Professional guides for freelancing, digital marketing, e-commerce, and building a successful online business from scratch.',
    icon: Briefcase,
    color: 'from-purple-500 to-violet-500',
    bgColor: 'bg-purple-50',
    features: [
      'Freelancing Success Blueprint - Find clients',
      'Digital Marketing Masterclass - Grow online',
      'E-commerce Launch Guide - Start selling',
      'Email Marketing Automation - Convert leads',
      'SEO Optimization - Rank higher',
      'Copywriting Mastery - Sell with words'
    ],
    price: 'From $38.99',
  },
  {
    id: 'design',
    title: 'Design & Creative',
    description: 'Master design tools like Canva, learn copywriting, and unlock your creative potential with our comprehensive design courses.',
    icon: Palette,
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
    features: [
      'Canva Design Mastery - Create stunning visuals',
      'Copywriting Course - Write compelling copy',
      'SEO Content Guide - Optimize for search',
      'Social Media Graphics - Design like a pro',
      'Template Library - Ready-made designs',
      'Video Editing Basics - Create engaging content'
    ],
    price: 'From $32.99',
  },
  {
    id: 'virtual-services',
    title: 'Virtual Services',
    description: 'Virtual assistant training, remote work guides, and productivity tools to help you succeed in the digital workspace.',
    icon: TrendingUp,
    color: 'from-cyan-500 to-teal-500',
    bgColor: 'bg-cyan-50',
    features: [
      'VA Training Kit - Become a virtual assistant',
      'Remote Work Mastery - Work from anywhere',
      'Productivity Tools - Get more done',
      'Time Management - Optimize your day',
      'Client Communication - Build relationships',
      'Business Setup - Start your VA business'
    ],
    price: 'From $42.99',
  },
];

const whyChooseUs = [
  {
    icon: Download,
    title: 'Instant Delivery',
    description: 'All products delivered directly to your email within minutes of purchase'
  },
  {
    icon: Shield,
    title: 'Quality Content',
    description: 'Expert-crafted resources designed for maximum impact and results'
  },
  {
    icon: CheckCircle,
    title: 'Affordable Prices',
    description: 'Premium products starting from just $6.99 with no hidden fees'
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our team is here to help you every step of the way, 24/7'
  }
];

export function ServicesPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
            Discover our comprehensive range of digital products and services designed to help you grow, learn, and succeed
          </p>
          <Link to="/products">
            <Button className="bg-white text-purple-600 hover:bg-purple-50 font-semibold px-8 py-3 rounded-lg">
              Browse All Products
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Services List */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image/Visual Side */}
                  <div className={`${service.bgColor} p-8 md:p-12 flex items-center justify-center`}>
                    <div className={`w-32 h-32 md:w-48 md:h-48 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg`}>
                      <service.icon className="w-16 h-16 md:w-24 md:h-24 text-white" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-gray-600 mb-6">
                      {service.description}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-500">Starting from</p>
                        <p className="text-2xl font-bold text-purple-600">{service.price}</p>
                      </div>
                      <Link to={`/products?category=${service.title.split(' ')[0]}`}>
                        <Button className="btn-primary">
                          Explore Products
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose GROWTH SPARK LLC?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We are committed to providing high-quality digital products that deliver real value
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Have Questions?
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto mb-8">
            Our team is here to help you find the perfect digital products for your needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg">
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
            </Link>
            <a href="mailto:info@growthsparkllc.com">
              <Button variant="outline" className="border-gray-600 text-white hover:bg-gray-800 px-8 py-3 rounded-lg">
                info@growthsparkllc.com
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
