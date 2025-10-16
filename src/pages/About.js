import React from "react";

export default function About() {
  return (
    <section className="bg-gray-900 text-gray-300 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Left Image Section */}
        <div className="md:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1516979187457-637abb4f9353"
            alt="Readers exchanging books"
            className="rounded-lg shadow-2xl"
          />
          <div className="absolute -bottom-6 -right-6 bg-blue-600 rounded-lg p-3 text-white text-sm font-semibold shadow-lg">
            10K+ Books Shared 📚
          </div>
        </div>

        {/* Right Text Section */}
        <div className="md:w-1/2 space-y-6">
          <h2 className="text-4xl font-bold text-white">
            About <span className="text-blue-500">BookSwap</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            BookSwap was born from a simple idea — to make reading accessible, affordable, and sustainable.
            Instead of letting great stories gather dust, we help them find new readers.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our platform allows users to exchange, donate, or buy used books effortlessly. We’re building a 
            community where every book finds a new home, and every reader finds their next favorite story.
          </p>
          <div className="pt-4">
            <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg font-semibold transition">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
