import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();

  return (
    <nav className="bg-gray-900 text-gray-300 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Link 
            to="/" 
            className="font-bold text-2xl text-white hover:text-blue-400 transition-all"
          >
            📚 BookSwap
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-400 transition-colors">
            Home
          </Link>
          <Link to="/about" className="hover:text-blue-400 transition-colors">
            About Us
          </Link>
          <Link to="/services" className="hover:text-blue-400 transition-colors">
            Services
          </Link>
          <Link to="/contact" className="hover:text-blue-400 transition-colors">
            Contact
          </Link>
        </div>

        {/* Auth Buttons */}
        <div className="flex items-center gap-3">
          {user ? (
            <>
              <Link
                to="/dashboard"
                className="text-sm hover:text-blue-400 transition-colors"
              >
                Dashboard
              </Link>
              <Link
                to="/books/create"
                className="px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-semibold transition"
              >
                Post Book
              </Link>
              <button
                onClick={() => {
                  logout();
                  nav("/");
                }}
                className="text-sm text-red-400 hover:text-red-500 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signup"
                className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-semibold transition"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
