import React from 'react';
import { Star, Search, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      number: '01',
      icon: Star,
      title: 'Generate More Reviews',
      description: 'Ethical increase of positive reviews using automated, compliant systems.',
      details: [
        'Automated review invitation system',
        'Multi-platform review generation',
        'Platform policy compliance',
        'Personalized follow-up sequences',
        'Review funnel optimization'
      ]
    },
    {
      number: '02',
      icon: Search,
      title: 'Boost Search Rankings',
      description: 'Optimize local SEO for visibility and higher search rankings.',
      details: [
        'Local SEO optimization',
        'Google Business Profile enhancement',
        'Citation building and management',
        'Keyword optimization',
        'Local directory submissions'
      ]
    },
    {
      number: '03',
      icon: Shield,
      title: 'Build Lasting Trust',
      description: 'Build trust through professional responses and continuous monitoring.',
      details: [
        'Professional review responses',
        '24/7 brand monitoring',
        'Crisis management protocols',
        'Ongoing reputation maintenance',
        'Performance tracking and reporting'
      ]
    }
  ];

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            How We Help You Build a Trusted Brand
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our proven 3-step process transforms your online reputation into a powerful business asset.
          </p>
        </div>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center text-2xl font-bold text-white mr-6">
                      {step.number}
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center">
                      <step.icon className="h-8 w-8 text-gray-700" />
                    </div>
                  </div>
                  <h2 className="text-4xl font-bold text-gray-900 mb-6">
                    {step.title}
                  </h2>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {step.description}
                  </p>
                  <ul className="space-y-3">
                    {step.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start space-x-3">
                        <CheckCircle className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700 text-lg">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 text-center border border-gray-100">
                    <step.icon className="h-24 w-24 text-gray-400 mx-auto mb-8" />
                    <div className="text-4xl font-bold text-gray-900 mb-4">Step {step.number}</div>
                    <div className="text-xl font-semibold text-gray-700">{step.title}</div>
                  </div>
                </div>
              </div>

              {index < steps.length - 1 && (
                <div className="hidden lg:flex justify-center mt-16">
                  <ArrowRight className="h-8 w-8 text-gray-300 rotate-90" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-24 bg-gradient-to-br from-gray-50 to-white rounded-3xl p-16 border border-gray-100">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Results Speak for Themselves
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our systematic approach delivers measurable improvements across all key metrics.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">300%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Increase in Reviews</div>
              <div className="text-gray-600">Average review volume growth</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-green-600 to-green-500 bg-clip-text text-transparent mb-4">4.8★</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Average Rating</div>
              <div className="text-gray-600">Across all major platforms</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">250%</div>
              <div className="text-xl font-semibold text-gray-900 mb-2">Traffic Increase</div>
              <div className="text-gray-600">From improved search rankings</div>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Start Your Transformation?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Let us show you exactly how our proven process can transform your business reputation.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 inline-flex items-center group"
          >
            Get Your Free Strategy Session
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;