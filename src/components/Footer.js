import React from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Instagram ,Facebook } from 'lucide-react';

const Footer = () => {
  return (
 <footer className="bg-gradient-to-r from-amber-50 via-cream-50 to-yellow-50 text-amber-900 border-t border-amber-200/40">
  <div className="container-max section-padding py-16">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {/* Logo and Description */}
    <div className="lg:col-span-2">
  <div className="flex items-center space-x-3 mb-4 group">
    <div className="p-1">
      <img
        src="/celebre-bg.png" // Update this path if your logo is elsewhere
        alt="The Célèbre Show Logo"
        className="h-12 w-12 object-contain rounded-md"
      />
    </div>
    <span className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
      The Célèbre Show
    </span>
  </div>

  <p className="text-amber-700 mb-6 max-w-md">
    Where stories come alive. Discover engaging conversations, inspiring stories, and thought-provoking
    discussions from our diverse range of podcast episodes.
  </p>
</div>


      {/* Quick Links */}
      <div>
        <h3 className="font-semibold mb-4 text-amber-800">Quick Links</h3>
        <div className="space-y-2">
          {["/", "/podcasts", "/guests", "/about", "/contact"].map((path, i) => (
            <Link
              key={i}
              to={path}
              className="block text-amber-700 hover:text-amber-900 transition-colors"
            >
              {["Home", "All Podcasts", "Guests", "About Us", "Contact"][i]}
            </Link>
          ))}
        </div>
      </div>

      {/* Categories */}
      <div>
        <h3 className="font-semibold mb-4 text-amber-800">Categories</h3>
        <div className="space-y-2">
          {["entertainment", "sports", "technology", "business", "health"].map((cat) => (
            <Link
              key={cat}
              to={`/category/${cat}`}
              className="block text-amber-700 hover:text-amber-900 transition-colors"
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </Link>
          ))}
        </div>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-amber-200/50 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-amber-600 text-sm mb-4 md:mb-0">
        © {new Date().getFullYear()} The Célèbre Show. All rights reserved.
      </p>

      {/* Social Links */}
      <div className="flex space-x-4">
        <a href="https://www.youtube.com/@thecelebreshoww" className="text-amber-600 hover:text-amber-800 transition-colors">
          <Youtube className="h-5 w-5" />
        </a>
        <a href="https://www.facebook.com/share/1CjzbjHw4u/" className="text-amber-600 hover:text-amber-800 transition-colors">
          <Facebook className="h-5 w-5" />
        </a>
        <a href="https://www.instagram.com/thecelebreshoww?igsh=MXJmYTZqY3V5czNrcw==" className="text-amber-600 hover:text-amber-800 transition-colors">
          <Instagram className="h-5 w-5" />
        </a>
        
      </div>
    </div>
  </div>
</footer>

  );
};

export default Footer;