import React from 'react';
import { Star, Shield, Search, BarChart3, MessageSquare, Bell, CheckCircle, ArrowRight } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Star,
      title: 'Review Generation',
      description: 'Ethically increase positive reviews across all major platforms with automated, compliant systems.',
      features: [
        'Automated review requests',
        'Multi-platform management',
        'Platform policy compliance',
        'Custom review funnels',
        'Follow-up sequences'
      ]
    },
    {
      icon: Shield,
      title: 'Crisis Management',
      description: 'Rapid response to negative reviews and reputation threats with professional damage control.',
      features: [
        '24/7 monitoring & alerts',
        'Professional response drafting',
        'Damage control strategies',
        'Legal support coordination',
        'Recovery action plans'
      ]
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve local search rankings and online visibility to attract more customers.',
      features: [
        'Local SEO optimization',
        'Google Business Profile',
        'Citation management',
        'Keyword optimization',
        'Directory submissions'
      ]
    },
    {
      icon: BarChart3,
      title: 'Analytics & Reporting',
      description: 'Comprehensive tracking and insights to measure ROI and reputation improvements.',
      features: [
        'Performance reports',
        'Competitor analysis',
        'ROI tracking',
        'Custom dashboards',
        'Trend analysis'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Review Response',
      description: 'Timely, professional responses to customer reviews that maintain your brand voice.',
      features: [
        'Personalized responses',
        'Brand voice consistency',
        'Issue resolution tracking',
        'Response templates',
        'Escalation procedures'
      ]
    },
    {
      icon: Bell,
      title: 'Brand Monitoring',
      description: 'Continuous monitoring of brand mentions across the web to stay ahead of issues.',
      features: [
        'Social media monitoring',
        'News & blog mentions',
        'Real-time alerts',
        'Sentiment analysis',
        'Competitor tracking'
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Complete reputation management solutions designed to transform your online presence 
            into a competitive advantage.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start space-x-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-16 text-white">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let us create a customized reputation management strategy for your business.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Start Your Transformation
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;