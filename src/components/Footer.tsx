
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin 
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8 px-4 md:px-8 lg:px-16">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          <div className="lg:col-span-2">
            <a href="/" className="text-2xl font-bold text-[#1A1F2C] mb-4 inline-block">
              InvestBoost
            </a>
            <p className="text-gray-600 mb-6 max-w-md">
              Empowering investors with intelligent tools and insights to navigate the complex world of investments.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-[#9b87f5] transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#1A1F2C] mb-4">Company</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Press</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Partners</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#1A1F2C] mb-4">Resources</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Webinars</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">API</a></li>
              <li><a href="#" className="text-gray-600 hover:text-[#9b87f5] transition-colors">Community</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-[#1A1F2C] mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-[#9b87f5] mr-3 shrink-0 mt-0.5" />
                <a href="mailto:info@investboost.com" className="text-gray-600 hover:text-[#9b87f5] transition-colors">info@investboost.com</a>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-[#9b87f5] mr-3 shrink-0 mt-0.5" />
                <a href="tel:+15551234567" className="text-gray-600 hover:text-[#9b87f5] transition-colors">+1 (555) 123-4567</a>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-[#9b87f5] mr-3 shrink-0 mt-0.5" />
                <span className="text-gray-600">123 Financial District<br />New York, NY 10005</span>
              </li>
            </ul>
          </div>
        </div>

        <hr className="border-gray-100 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} InvestBoost. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-[#9b87f5] text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
