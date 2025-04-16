
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-36 pb-24 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-white to-[#F1F0FB]">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#1A1F2C] leading-tight">
              Boost Your Investment Strategy
            </h1>
            <p className="text-xl text-gray-600 max-w-lg">
              Smart analytics, personalized insights, and expert guidance to help you make better investment decisions.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white px-8 py-6 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-[#1A1F2C] text-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white px-8 py-6 text-lg">
                <span>Learn More</span>
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="pt-8">
              <p className="text-gray-500 mb-4">Trusted by industry leaders</p>
              <div className="flex flex-wrap gap-8 items-center opacity-70">
                <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="h-8" />
                <img src="https://via.placeholder.com/120x40" alt="Company Logo" className="h-8" />
              </div>
            </div>
          </div>
          <div className="lg:ml-auto">
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7"
              alt="Investment Analytics Dashboard"
              className="rounded-xl shadow-2xl w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
