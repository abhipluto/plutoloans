import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Pluto Loans</h1>
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Home
              </Link>
              <a href="#about" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Services
              </a>
              <Link href="/contact" className="text-gray-700 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
                Contact
              </Link>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link href="/pre-apply">
              <Button className="bg-primary text-white hover:bg-primary/90 transition-colors duration-200">
                Pre-Apply
              </Button>
            </Link>
            <button 
              className="md:hidden text-gray-500 hover:text-gray-700"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <Link href="/" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Home
              </Link>
              <a href="#about" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                About
              </a>
              <a href="#services" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Services
              </a>
              <Link href="/contact" className="text-gray-700 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
