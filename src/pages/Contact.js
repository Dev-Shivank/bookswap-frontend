import React from "react";

export default function Contact() {
  return (
    <section className="bg-gray-900 text-gray-300 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-white">
            Get in <span className="text-blue-500">Touch</span>
          </h2>
          <p className="text-gray-400 leading-relaxed">
            Have questions, feedback, or partnership ideas?  
            We’d love to hear from you. Fill out the form or reach us through the details below.
          </p>
          <div className="space-y-2">
            <p><strong>Email:</strong> support@bookswap.com</p>
            <p><strong>Phone:</strong> +91 98765 43210</p>
            <p><strong>Location:</strong> Lucknow , Uttar Pradesh, India</p>
          </div>
        </div>

        {/* Right Form */}
        <form className="bg-gray-800 rounded-xl p-8 shadow-xl space-y-5">
          <div>
            <label className="block text-gray-400 mb-2">Full Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label className="block text-gray-400 mb-2">Message</label>
            <textarea
              rows="4"
              className="w-full px-4 py-2 bg-gray-700 text-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
