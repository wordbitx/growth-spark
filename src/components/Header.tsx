import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X, Phone, Mail, ChevronDown, Scale, FileText, Shield, Cookie, RotateCcw } from 'lucide-react';
import { useCart } from '@/context/CartContext';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { totalItems, setIsCartOpen } = useCart();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/products', label: 'Products' },
    { path: '/services', label: 'Services' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
  ];

  return (
    <header className="w-full">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-purple-700 to-indigo-700 text-white py-2 px-4">
        <div className="container-custom flex justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <a href="tel:+19198923654" className="flex items-center gap-1 hover:text-purple-200 transition-colors">
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+1 919 892 3654</span>
            </a>
            <a href="mailto:info@growthsparkllc.com" className="flex items-center gap-1 hover:text-purple-200 transition-colors">
              <Mail className="w-4 h-4" />
              <span className="hidden sm:inline">info@growthsparkllc.com</span>
            </a>
          </div>
          <p className="hidden md:block text-purple-100">Digital Products Delivered to Your Email</p>
        </div>
      </div>

      {/* Main Header */}
      <div
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isScrolled ? 'glass shadow-lg' : 'bg-white'
        }`}
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <img 
                src="/images/logo-icon.png" 
                alt="GROWTH SPARK LLC" 
                className="w-10 h-10 md:w-12 md:h-12 object-contain"
              />
              <div className="block">
                <h1 className="font-bold text-base md:text-xl text-gray-900 leading-tight">
                  GROWTH SPARK
                </h1>
                <p className="text-[10px] md:text-xs text-purple-600 font-medium">LLC</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                    isActive(link.path)
                      ? 'text-purple-700 bg-purple-50'
                      : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}

              {/* Legal Dropdown */}
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-purple-700 hover:bg-purple-50 transition-all duration-200">
                    Legal
                    <ChevronDown className="w-4 h-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuItem asChild>
                    <Link to="/terms" className="flex items-center gap-2 cursor-pointer">
                      <FileText className="w-4 h-4" />
                      Terms of Service
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/privacy" className="flex items-center gap-2 cursor-pointer">
                      <Shield className="w-4 h-4" />
                      Privacy Policy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/cookies" className="flex items-center gap-2 cursor-pointer">
                      <Cookie className="w-4 h-4" />
                      Cookie Policy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/refund" className="flex items-center gap-2 cursor-pointer">
                      <RotateCcw className="w-4 h-4" />
                      Refund Policy
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/legal" className="flex items-center gap-2 cursor-pointer">
                      <Scale className="w-4 h-4" />
                      Legal Information
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-2">
              {/* Cart Button */}
              <button
                onClick={() => setIsCartOpen(true)}
                className="relative p-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                <ShoppingCart className="w-5 h-5 md:w-6 md:h-6 text-gray-700" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-bold rounded-full flex items-center justify-center">
                    {totalItems}
                  </span>
                )}
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-purple-50 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-gray-700" />
                ) : (
                  <Menu className="w-6 h-6 text-gray-700" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 animate-fadeIn">
            <div className="container-custom py-4">
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                      isActive(link.path)
                        ? 'text-purple-700 bg-purple-50'
                        : 'text-gray-700 hover:text-purple-700 hover:bg-purple-50'
                    }`}
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="border-t border-gray-100 my-2 pt-2">
                  <p className="px-4 py-2 text-xs font-semibold text-gray-500 uppercase">Legal</p>
                  <Link
                    to="/terms"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <FileText className="w-4 h-4" />
                    Terms of Service
                  </Link>
                  <Link
                    to="/privacy"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <Shield className="w-4 h-4" />
                    Privacy Policy
                  </Link>
                  <Link
                    to="/cookies"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <Cookie className="w-4 h-4" />
                    Cookie Policy
                  </Link>
                  <Link
                    to="/refund"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Refund Policy
                  </Link>
                  <Link
                    to="/legal"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-2 px-4 py-3 text-sm text-gray-700 hover:text-purple-700 hover:bg-purple-50 rounded-lg"
                  >
                    <Scale className="w-4 h-4" />
                    Legal Information
                  </Link>
                </div>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
