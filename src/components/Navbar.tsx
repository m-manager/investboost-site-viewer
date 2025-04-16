
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

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
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <a href="#" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
                    Home
                  </a>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-[#9b87f5]">
                    Features
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#1A1F2C] to-[#403E43] p-6 no-underline outline-none focus:shadow-md"
                            href="#features"
                          >
                            <div className="mt-4 mb-2 text-lg font-medium text-white">
                              Investment Tools
                            </div>
                            <p className="text-sm leading-tight text-white/90">
                              Powerful analytics and investment tools designed to maximize your returns
                            </p>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <a
                          href="#features"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Portfolio Analysis</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Track and optimize your investment portfolio
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#features"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Risk Assessment</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Evaluate and minimize investment risks
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#features"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Market Insights</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Stay ahead with real-time market data
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-transparent text-gray-700 hover:text-[#9b87f5]">
                    Resources
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white">
                    <ul className="grid w-[300px] gap-3 p-4">
                      <li>
                        <a
                          href="#testimonials"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Success Stories</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn from our successful customers
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Investment Guide</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Free resources to improve your investment strategy
                          </p>
                        </a>
                      </li>
                      <li>
                        <a
                          href="#"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F1F0FB] hover:text-[#9b87f5] focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest articles and market updates
                          </p>
                        </a>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <a href="#pricing" className="text-gray-700 hover:text-[#9b87f5] transition-colors">
                    Pricing
                  </a>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
            
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
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                  Features <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <a href="#features" className="w-full">Portfolio Analysis</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#features" className="w-full">Risk Assessment</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#features" className="w-full">Market Insights</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
              <DropdownMenu>
                <DropdownMenuTrigger className="flex items-center text-gray-700 hover:text-[#9b87f5] px-4 py-2 transition-colors">
                  Resources <ChevronDown className="ml-1 h-4 w-4" />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="bg-white">
                  <DropdownMenuItem>
                    <a href="#testimonials" className="w-full">Success Stories</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Investment Guide</a>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <a href="#" className="w-full">Blog</a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              
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
