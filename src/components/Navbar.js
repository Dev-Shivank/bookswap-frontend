
import { useState, useRef } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, X, ChevronDown, Mic } from "lucide-react"
import Button from "./ui/Button"

const categories = [
  { name: "Entertainment", href: "/category/entertainment" },
  { name: "Sports", href: "/category/sports" },
  { name: "Technology", href: "/category/technology" },
  { name: "Business", href: "/category/business" },
  { name: "Health", href: "/category/health" },
  { name: "Spirituality", href: "/category/spirituality" },
]


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [showDropdown, setShowDropdown] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  const dropdownTimer = useRef(null)

  const handleMouseEnter = () => {
    clearTimeout(dropdownTimer.current)
    setShowDropdown(true)
  }

  const handleMouseLeave = () => {
    dropdownTimer.current = setTimeout(() => {
      setShowDropdown(false)
    }, 150)
  }

  return (
    <nav className="bg-gradient-to-r from-amber-50 via-cream-50 to-yellow-50 text-amber-900 shadow-lg backdrop-blur-md sticky top-0 z-50 border-b border-amber-200/30">
      <div className="container-max section-padding">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/celebre-bg.png"
                alt="The Célèbre Show Logo"
                className="h-16 w-16 object-contain transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400/20 to-yellow-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="text-2xl font-serif font-bold bg-gradient-to-r from-amber-700 via-yellow-600 to-amber-800 bg-clip-text text-transparent">
                The Célèbre Show
              </span>
              <p className="text-xs text-amber-600 font-medium tracking-wider uppercase">Podcast Experience</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`relative font-medium transition-all duration-300 ${
                isActive("/")
                  ? "text-amber-700 after:w-full"
                  : "text-amber-800 hover:text-amber-700 after:w-0 hover:after:w-full"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-600 after:to-yellow-600 after:transition-all after:duration-300`}
            >
              Home
            </Link>

            {/* Podcasts Dropdown */}
            <div className="relative" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
              <button className="flex items-center space-x-1 font-medium text-amber-800 hover:text-amber-700 transition-all duration-300 group">
                <span>Podcasts</span>
                <ChevronDown
                  className={`h-4 w-4 transition-transform duration-300 ${showDropdown ? "rotate-180" : ""}`}
                />
              </button>

              {showDropdown && (
                <div className="absolute top-full left-0 mt-3 w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-xl border border-amber-200/50 py-3 z-50 animate-in fade-in-0 zoom-in-95 duration-200">
                  <Link
                    to="/podcasts"
                    className="block px-5 py-3 text-sm font-medium text-amber-800 hover:bg-amber-50 hover:text-amber-700 transition-colors duration-200 border-b border-amber-100"
                  >
                    All Podcasts
                  </Link>
                  <div className="py-1">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={category.href}
                        className="block px-5 py-2 text-sm text-amber-700 hover:bg-amber-50 hover:text-amber-800 transition-colors duration-200"
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* <Link
              to="/guests"
              className={`relative font-medium transition-all duration-300 ${
                isActive("/guests")
                  ? "text-amber-700 after:w-full"
                  : "text-amber-800 hover:text-amber-700 after:w-0 hover:after:w-full"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-600 after:to-yellow-600 after:transition-all after:duration-300`}
            >
              Guests
            </Link> */}

            <Link
              to="/about"
              className={`relative font-medium transition-all duration-300 ${
                isActive("/about")
                  ? "text-amber-700 after:w-full"
                  : "text-amber-800 hover:text-amber-700 after:w-0 hover:after:w-full"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-600 after:to-yellow-600 after:transition-all after:duration-300`}
            >
              About Us
            </Link>

            <Link
              to="/contact"
              className={`relative font-medium transition-all duration-300 ${
                isActive("/contact")
                  ? "text-amber-700 after:w-full"
                  : "text-amber-800 hover:text-amber-700 after:w-0 hover:after:w-full"
              } after:absolute after:bottom-[-4px] after:left-0 after:h-0.5 after:bg-gradient-to-r after:from-amber-600 after:to-yellow-600 after:transition-all after:duration-300`}
            >
              Contact
            </Link>
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button className="bg-gradient-to-r from-amber-600 via-yellow-600 to-amber-700 hover:from-amber-700 hover:via-yellow-700 hover:to-amber-800 text-white font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              <span className="flex items-center space-x-2">
                <Mic className="h-4 w-4" />
                <span>Be Our Guest</span>
              </span>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-amber-800 hover:bg-amber-100 transition-colors duration-200"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-6 border-t border-amber-200/50 bg-gradient-to-b from-amber-50/80 to-yellow-50/80 backdrop-blur-sm rounded-b-xl">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-amber-800 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-amber-100/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/podcasts"
                className="text-amber-800 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-amber-100/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                All Podcasts
              </Link>
              {categories.map((category) => (
                <Link
                  key={category.name}
                  to={category.href}
                  className="text-amber-700 hover:text-amber-800 py-2 px-6 rounded-lg hover:bg-amber-100/50 transition-all duration-200 text-sm"
                  onClick={() => setIsOpen(false)}
                >
                  {category.name}
                </Link>
              ))}
              <Link
                to="/guests"
                className="text-amber-800 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-amber-100/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Guests
              </Link>
              <Link
                to="/about"
                className="text-amber-800 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-amber-100/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-amber-800 hover:text-amber-700 font-medium py-2 px-4 rounded-lg hover:bg-amber-100/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t border-amber-200/50">
                <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white w-full font-semibold py-3 rounded-full shadow-lg">
                  <span className="flex items-center justify-center space-x-2">
                    <Mic className="h-4 w-4" />
                    <span>Our Next Guest</span>
                  </span>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
