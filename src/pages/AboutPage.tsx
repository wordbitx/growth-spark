import { Target, Eye, Heart, Award, Users, Zap } from 'lucide-react';

const values = [
  {
    icon: Heart,
    title: 'Customer First',
    description: 'We put our customers at the heart of everything we do, ensuring their success is our priority.'
  },
  {
    icon: Award,
    title: 'Quality Excellence',
    description: 'Every product is crafted with care and expertise to deliver maximum value and results.'
  },
  {
    icon: Zap,
    title: 'Instant Delivery',
    description: 'Get immediate access to your purchases with our automated digital delivery system.'
  },
  {
    icon: Users,
    title: 'Community Driven',
    description: 'We build products based on real customer needs and feedback from our community.'
  }
];

const stats = [
  { value: '20+', label: 'Digital Products' },
  { value: '10K+', label: 'Happy Customers' },
  { value: '50K+', label: 'Products Sold' },
  { value: '4.9/5', label: 'Average Rating' }
];

export function AboutPage() {
  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-purple-600 to-indigo-700 text-white py-16 md:py-24">
        <div className="container-custom text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About GROWTH SPARK LLC
          </h1>
          <p className="text-xl text-purple-100 max-w-2xl mx-auto">
            Empowering individuals and businesses with premium digital products since 2020
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="bg-purple-50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed">
                To provide high-quality, affordable digital products that empower individuals and businesses 
                to achieve their goals. We believe everyone deserves access to premium educational resources, 
                tools, and guides that can transform their personal and professional lives.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-2xl p-8">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed">
                To become the leading provider of digital products worldwide, known for our quality, 
                affordability, and customer satisfaction. We envision a world where anyone can access 
                the knowledge and tools they need to succeed in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-xl shadow-sm">
                <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at GROWTH SPARK LLC
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="text-center p-6 bg-gray-50 rounded-xl hover:bg-purple-50 transition-colors duration-300"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Company Information</h2>
              <div className="space-y-4">
                <div>
                  <p className="text-gray-400 text-sm">Company Name</p>
                  <p className="text-lg font-medium">GROWTH SPARK LLC</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Address</p>
                  <p className="text-lg">290 Fillmore St</p>
                  <p className="text-lg">Denver, CO 80206</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Phone</p>
                  <p className="text-lg">+1 919 892 3654</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-lg">info@growthsparkllc.com</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Website</p>
                  <p className="text-lg">growthsparkllc.com</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-800 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">What Makes Us Different</h3>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">1</span>
                  </div>
                  <p className="text-gray-300">All products are created by industry experts with years of experience</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">2</span>
                  </div>
                  <p className="text-gray-300">Instant delivery to your email - no waiting required</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">3</span>
                  </div>
                  <p className="text-gray-300">Affordable pricing without compromising on quality</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">4</span>
                  </div>
                  <p className="text-gray-300">24/7 customer support to assist you whenever needed</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-sm">5</span>
                  </div>
                  <p className="text-gray-300">Regular updates and new product releases</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
