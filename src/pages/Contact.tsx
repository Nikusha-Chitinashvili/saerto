import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, AlertTriangle, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    emergencySupport: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <div className="py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Get Started Today
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your online reputation? Contact us for a free consultation 
            or get immediate emergency support.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="(555) 123-4567"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  placeholder="Tell us about your reputation management needs..."
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="emergencySupport"
                  name="emergencySupport"
                  checked={formData.emergencySupport}
                  onChange={handleChange}
                  className="h-4 w-4 text-red-600 focus:ring-red-500 border-gray-300 rounded"
                />
                <label htmlFor="emergencySupport" className="ml-3 block text-sm text-gray-900">
                  This is an emergency situation requiring immediate attention
                </label>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:scale-105 transition-all duration-300 flex items-center justify-center group"
              >
                Send Message
                <Send className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </form>
          </div>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-3xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-red-600 mr-3" />
                <h3 className="text-2xl font-bold text-red-800">Emergency Support</h3>
              </div>
              <p className="text-red-700 mb-6 leading-relaxed">
                Facing a reputation crisis? Our emergency response team is available 24/7 
                to help protect and restore your business reputation.
              </p>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-800 font-semibold">1-800-CRISIS-1</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-red-600 mr-3" />
                  <span className="text-red-800">emergency@reputationpro.com</span>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-gray-50 rounded-3xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Phone</div>
                    <div className="text-gray-600">1-800-REP-PRO</div>
                    <div className="text-sm text-gray-500">Mon-Fri: 8AM-8PM EST</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Email</div>
                    <div className="text-gray-600">hello@reputationpro.com</div>
                    <div className="text-sm text-gray-500">We respond within 24 hours</div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Office</div>
                    <div className="text-gray-600">
                      123 Business Avenue<br />
                      New York, NY 10001
                    </div>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-blue-600 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">Hours</div>
                    <div className="text-gray-600">
                      Mon-Fri: 8:00 AM - 8:00 PM EST<br />
                      Sat: 9:00 AM - 5:00 PM EST<br />
                      Sun: Emergency support only
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Response Times</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-blue-800">General Inquiries:</span>
                  <span className="font-semibold text-blue-900">Within 24 hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">New Consultations:</span>
                  <span className="font-semibold text-blue-900">Same business day</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-blue-800">Emergency Support:</span>
                  <span className="font-semibold text-blue-900">Within 1 hour</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;