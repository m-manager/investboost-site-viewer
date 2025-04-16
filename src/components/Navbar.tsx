
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="py-6 px-4 md:px-8 lg:px-16 bg-white fixed w-full z-50 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="/" className="text-2xl font-bold text-[#1A1F2C]">
              InvestBoost
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Features
            </a>
            <a href="#testimonials" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Testimonials
            </a>
            <a href="#pricing" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
              Pricing
            </a>
            <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
              Get Started
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 py-4 bg-white">
            <div className="flex flex-col space-y-4">
              <a href="#" className="text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                Home
              </a>
              <a href="#features" className="text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                Features
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                Testimonials
              </a>
              <a href="#pricing" className="text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                Pricing
              </a>
              <div className="px-4">
                <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white w-full">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
