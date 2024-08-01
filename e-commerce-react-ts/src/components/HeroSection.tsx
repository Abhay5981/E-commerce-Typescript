import React from 'react'



const HeroSection: React.FC = () => {
    return (
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
          <p className="text-xl mb-8">
            We provide the best solutions for your business. Join us and grow together.
          </p>
          <a href="#get-started" className="bg-white text-blue-600 px-6 py-3 rounded-full text-lg font-semibold hover:bg-gray-200">
            Get Started
          </a>
        </div>
      </section>
    );
  };

export default HeroSection
