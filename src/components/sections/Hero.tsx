import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Transform Your Business with Our GUGU GAG Solution
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Streamline your workflow, boost productivity, and scale your business with our cutting-edge platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
              Get Started Free
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition-colors">
              Watch Demo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;