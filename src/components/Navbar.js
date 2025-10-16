import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../lib/auth";

export default function Navbar() {
  const { user, logout } = useAuth();
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

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

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 focus:outline-none"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Desktop Links */}
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

        <div className="hidden md:flex items-center gap-3">
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
            <Link
              to="/signup"
              className="px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-semibold transition"
            >
              Sign Up
            </Link>
          )}
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 pb-4 space-y-3">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition-colors"
          >
            Home
          </Link>
          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition-colors"
          >
            About Us
          </Link>
          <Link
            to="/services"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition-colors"
          >
            Services
          </Link>
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="block hover:text-blue-400 transition-colors"
          >
            Contact
          </Link>

          {/* Auth Buttons */}
          <div className="pt-3 border-t border-gray-700">
            {user ? (
              <>
                <Link
                  to="/dashboard"
                  onClick={() => setIsOpen(false)}
                  className="block text-sm hover:text-blue-400 transition-colors"
                >
                  Dashboard
                </Link>
                <Link
                  to="/books/create"
                  onClick={() => setIsOpen(false)}
                  className="block mt-2 px-3 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-semibold transition"
                >
                  Post Book
                </Link>
                <button
                  onClick={() => {
                    logout();
                    setIsOpen(false);
                    nav("/");
                  }}
                  className="block mt-2 text-sm text-red-400 hover:text-red-500 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/signup"
                onClick={() => setIsOpen(false)}
                className="block mt-2 px-4 py-1 bg-blue-500 hover:bg-blue-600 text-white rounded text-sm font-semibold transition"
              >
                Sign Up
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
