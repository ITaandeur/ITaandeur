import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Laptop, ArrowLeft } from 'lucide-react';

export function Layout({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/over-ons", text: "Over ons" },
    { href: "/diensten", text: "Diensten" },
    { href: "/tarieven", text: "Tarieven" },
    { href: "/faq", text: "FAQ" },
    { href: "/storing-melden", text: "Storing Melden" },
    { href: "/contact", text: "Contact" }
  ];

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white shadow-lg fixed w-full z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              {location.pathname !== '/' && (
                <button
                  onClick={handleGoBack}
                  className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  aria-label="Ga terug"
                >
                  <ArrowLeft className="w-6 h-6" />
                </button>
              )}
              <Link to="/" className="flex items-center">
                <Laptop className="w-8 h-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">ITaandeur</span>
              </Link>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={`text-gray-700 hover:text-blue-600 transition-colors ${
                    location.pathname === link.href ? 'text-blue-600 font-semibold' : ''
                  }`}
                >
                  {link.text}
                </Link>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    className={`block px-2 py-1 text-gray-700 hover:text-blue-600 transition-colors ${
                      location.pathname === link.href ? 'text-blue-600 font-semibold' : ''
                    }`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Main Content */}
      <div className="pt-16">
        {children}
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Over ITaandeur</h3>
              <p className="text-gray-400">
                Professionele IT-hulp aan huis in Utrecht en omgeving. 
                Wij staan voor u klaar met snelle en betaalbare oplossingen.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400">
                Email: info@itaandeur.nl
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Werkgebied</h3>
              <p className="text-gray-400">
                Utrecht en omgeving<br />
                24/7 beschikbaar voor al uw IT-problemen
              </p>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ITaandeur</p>
          </div>
        </div>
      </footer>
    </div>
  );
}