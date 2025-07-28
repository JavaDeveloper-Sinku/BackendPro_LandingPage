'use client';

import React from 'react';
import {
  Code2,
  Shield,
  Database,
  Cloud,
  Users,
  CheckCircle,
  Mail,
  Phone,
  Coffee,
  Zap,
  Server,
  Lock,
  Code
} from 'lucide-react';

const JavaService: React.FC = () => {
  const services = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: 'REST API Development',
      subtitle: 'Spring Boot',
      description: 'Build robust, scalable REST APIs with Spring Boot framework, following industry best practices and clean architecture patterns.'
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'JWT Auth & Role-based Access',
      subtitle: 'Security First',
      description: 'Implement secure authentication systems with JWT tokens and role-based access control for enterprise-grade security.'
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'DB Schema Design',
      subtitle: 'MySQL/PostgreSQL',
      description: 'Design efficient database schemas optimized for performance, scalability, and data integrity with proper indexing.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Admin Panel Integration',
      subtitle: 'Management Tools',
      description: 'Create powerful admin interfaces for content management, user administration, and system monitoring.'
    },
    {
      icon: <Cloud className="w-8 h-8" />,
      title: 'Cloud Deployment',
      subtitle: 'Render/AWS',
      description: 'Deploy applications to cloud platforms with CI/CD pipelines, monitoring, and auto-scaling capabilities.'
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: 'API performance optimization ',
      subtitle: 'Scalable Systems milliseconds',
      description: 'Design and implement API architectures for better scalability, maintainability, and productivity.'
    }
  ];

  const features: string[] = [
    'Clean, tested, and production-ready code',
    'Industry best practices and design patterns',
    'Comprehensive documentation',
    'Post-deployment support',
    'Fast delivery timeline',
    'Scalable architecture design'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Code className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">	DockSpring</span>
            </div>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>Get Quote</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            <span>Java Backend Services – Delivered Fast & Secure</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build Scalable
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600"> Backend Systems</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            I help startups and companies build scalable backend systems using Java, Spring Boot, and MySQL/PostgreSQL.
            From secure login systems to REST APIs and microservices, I deliver clean, tested, and production-ready code.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
              <Mail className="w-5 h-5" />
              <span className="font-semibold">Free Project Consultation</span>
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors duration-200 flex items-center space-x-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">View Portfolio</span>
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Services Offered</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive Java backend development services to power your applications
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl border border-gray-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-200">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-blue-600 font-medium text-sm mb-3">{service.subtitle}</p>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose My Services?</h2>
              <p className="text-xl text-gray-600 mb-8">
                I focus on delivering high-quality, maintainable code that scales with your business needs.
              </p>

              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Coffee className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start?</h3>
                <p className="text-gray-600 mb-6">
                  Let's discuss your project requirements and build something amazing together.
                </p>
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold shadow-lg">
                  Schedule Free Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl font-bold mb-4">Ready to Build Your Next Project?</h2>
          <p className="text-xl mb-8 opacity-90">
            Contact me for a free project consultation and let's bring your ideas to life.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors duration-200 font-semibold text-lg shadow-lg">
            📩 Contact for Free Project Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Coffee className="w-6 h-6 text-blue-400" />
            <span className="text-xl font-bold">Java Backend Services</span>
          </div>
          <p className="text-gray-400 mb-4">
            Professional Java backend development services for modern applications
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-400">
            <span>© 2025 Java Backend Services</span>
            <span>•</span>
            <span>Built with ❤️ and Java</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default JavaService;
