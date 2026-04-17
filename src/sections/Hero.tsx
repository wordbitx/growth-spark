import { Link } from 'react-router-dom';
import { ArrowRight, Shield, Users, Sparkles, Download, Headphones } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Hero() {
  const features = [
    { icon: Download, text: 'Instant Delivery' },
    { icon: Shield, text: 'Quality Guaranteed' },
    { icon: Headphones, text: '24/7 Support' },
    { icon: Users, text: 'Trusted by Thousands' },
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 gradient-hero" />
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-200/10 rounded-full blur-3xl" />

      <div className="relative container-custom section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Premium Digital Solutions
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              Transform Your Digital Journey with{' '}
              <span className="gradient-text">GROWTH SPARK LLC</span>
            </h1>

            <p className="text-base sm:text-lg text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Discover premium digital products and services designed to help you grow your social media presence, 
              enhance your skills, and educate the next generation. All products delivered instantly to your email.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10">
              <Link to="/products">
                <Button className="btn-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Browse Products
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" className="btn-secondary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto">
                  Contact Us
                </Button>
              </Link>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm text-gray-600"
                >
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-600" />
                  </div>
                  <span className="font-medium">{feature.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Image/Visual */}
          <div className="relative order-1 lg:order-2">
            <div className="relative z-10 max-w-md mx-auto lg:max-w-none">
              {/* Main Delivery Image */}
              <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-6 transform hover:scale-[1.02] transition-transform duration-500">
                <img 
                  src="/images/delivery-hero.png" 
                  alt="Digital Products Instant Delivery" 
                  className="w-full h-auto rounded-xl"
                />
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Starting from</p>
                    <p className="text-xl sm:text-2xl font-bold text-purple-600">$6.99</p>
                  </div>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-gradient-to-br from-purple-400 to-indigo-400 border-2 border-white flex items-center justify-center text-white text-xs font-bold"
                      >
                        {String.fromCharCode(64 + i)}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating Cards - Hidden on small mobile */}
              <div className="hidden sm:block absolute -top-4 -right-2 lg:-right-6 bg-white rounded-xl shadow-lg p-3 lg:p-4 animate-fadeIn" style={{ animationDelay: '0.2s' }}>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-green-100 flex items-center justify-center">
                    <Download className="w-4 h-4 lg:w-5 lg:h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-medium text-gray-900">Instant Download</p>
                    <p className="text-[10px] lg:text-xs text-gray-500">Get it now</p>
                  </div>
                </div>
              </div>

              <div className="hidden sm:block absolute -bottom-2 -left-2 lg:-left-6 bg-white rounded-xl shadow-lg p-3 lg:p-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center gap-2 lg:gap-3">
                  <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <Users className="w-4 h-4 lg:w-5 lg:h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-xs lg:text-sm font-medium text-gray-900">10K+ Happy Customers</p>
                    <p className="text-[10px] lg:text-xs text-gray-500">Join them today</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-12 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {[
            { value: '34+', label: 'Digital Products' },
            { value: '10K+', label: 'Happy Customers' },
            { value: '99%', label: 'Satisfaction Rate' },
            { value: '24/7', label: 'Customer Support' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl md:text-4xl font-bold gradient-text">{stat.value}</p>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
