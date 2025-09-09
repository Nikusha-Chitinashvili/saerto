import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Shield, TrendingUp, CheckCircle } from 'lucide-react';

const Home = () => {
  const platforms = ['Google', 'Yelp', 'Facebook', 'TripAdvisor', 'Trustpilot'];
  
  const services = [
    {
      icon: Star,
      title: 'Review Generation',
      description: 'Ethically increase positive reviews with automated, compliant systems.',
    },
    {
      icon: Shield,
      title: 'Crisis Management',
      description: '24/7 monitoring and rapid response to protect your reputation.',
    },
    {
      icon: TrendingUp,
      title: 'SEO Optimization',
      description: 'Improve local search rankings and online visibility.',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-6 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Transform Your Reputation Into Your Greatest{' '}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Growth Asset
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
              From crisis management to growth catalyst — we turn your online reputation 
              into a powerful business driver with measurable results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-900 hover:text-white transition-all duration-300"
              >
                Emergency Support
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              See Your Potential Transformation
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that transformed their online reputation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-3xl p-12 text-center border border-red-200">
              <div className="text-6xl font-bold text-red-600 mb-4">2.1★</div>
              <div className="text-2xl font-semibold text-red-700 mb-6">Before</div>
              <ul className="text-red-600 space-y-2 text-left">
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Few positive reviews</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Poor online visibility</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-red-400 rounded-full mr-3"></span>Losing customers</li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-3xl p-12 text-center border border-green-200">
              <div className="text-6xl font-bold text-green-600 mb-4">4.8★</div>
              <div className="text-2xl font-semibold text-green-700 mb-6">After</div>
              <ul className="text-green-600 space-y-2 text-left">
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Consistent 5-star reviews</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>Top search rankings</li>
                <li className="flex items-center"><span className="w-2 h-2 bg-green-400 rounded-full mr-3"></span>300% more customers</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Platforms Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 mb-8">Trusted across all major platforms</p>
            <div className="flex flex-wrap justify-center items-center gap-8">
              {platforms.map((platform) => (
                <div
                  key={platform}
                  className="bg-white px-6 py-3 rounded-full shadow-sm border border-gray-100 text-gray-700 font-medium"
                >
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete Solution Suite
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your online presence into a competitive advantage
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                <Link
                  to="/services"
                  className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center group"
                >
                  Learn more
                  <ArrowRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link
              to="/services"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
            >
              View All Services
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Reputation?
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            Join hundreds of businesses that have transformed their online presence 
            into a powerful growth engine.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;