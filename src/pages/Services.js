import React from "react";
import { FaBookOpen, FaHandsHelping, FaShoppingCart } from "react-icons/fa";

export default function Services() {
  return (
    <section className="bg-gray-900 text-gray-300 py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-white mb-6">
          What We <span className="text-blue-500">Offer</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          We bring together readers who love stories and want to share them.
          Explore how BookSwap makes your reading journey more exciting.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Service 1 */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition">
            <FaBookOpen className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Book Exchange</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Trade your favorite novels, textbooks, or classics with other readers nearby and discover new worlds every week.
            </p>
          </div>

          {/* Service 2 */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition">
            <FaHandsHelping className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Book Donation</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Give your old books a second life by donating them to students, schools, and book lovers who need them most.
            </p>
          </div>

          {/* Service 3 */}
          <div className="bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-blue-500/30 hover:-translate-y-2 transition">
            <FaShoppingCart className="text-4xl text-blue-500 mb-4 mx-auto" />
            <h3 className="text-xl font-semibold text-white mb-2">Buy Used Books</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Browse and purchase pre-loved books at a fraction of the price — sustainable, affordable, and rewarding.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
