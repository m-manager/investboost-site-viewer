
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const SuccessStoriesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Success Stories
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Real stories from real investors who have transformed their financial future using InvestBoost.
            </p>
          </div>
        </div>
      </section>
      
      {/* Featured Success Story */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158" 
                  alt="Success Story" 
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
                <Badge className="bg-[#9b87f5] hover:bg-[#7E69AB] mb-4 self-start">Featured Story</Badge>
                <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
                  "I grew my portfolio by 43% in one year"
                </h2>
                <p className="text-gray-600 mb-6">
                  Sarah J., a tech professional from San Francisco, was struggling to make sense of market volatility and investment options. 
                  After using InvestBoost's portfolio analysis tools, she optimized her investments and saw remarkable growth.
                </p>
                <div className="mb-6">
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-2"></div>
                    <p className="font-medium">43% portfolio growth in 12 months</p>
                  </div>
                  <div className="flex items-center mb-2">
                    <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-2"></div>
                    <p className="font-medium">Reduced portfolio volatility by 28%</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-[#9b87f5] mr-2"></div>
                    <p className="font-medium">Saved $3,400 in investment fees</p>
                  </div>
                </div>
                <Button className="flex items-center bg-[#1A1F2C] hover:bg-[#9b87f5] text-white self-start">
                  Read Full Story <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* More Success Stories */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            More Success Stories
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Investor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">
                  Michael T., Retirement Planner
                </h3>
                <p className="text-gray-600 mb-4">
                  "InvestBoost's retirement planning tools helped me create a 
                  clear roadmap for my clients, increasing their confidence and satisfaction."
                </p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto flex items-center">
                  Read Story <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1487958449943-2429e8be8625" 
                  alt="Investor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">
                  Emily R., Small Business Owner
                </h3>
                <p className="text-gray-600 mb-4">
                  "The market insights feature gave me the confidence to diversify 
                  my investments when expanding my business internationally."
                </p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto flex items-center">
                  Read Story <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d" 
                  alt="Investor" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-2">
                  David L., First-Time Investor
                </h3>
                <p className="text-gray-600 mb-4">
                  "As someone new to investing, InvestBoost's risk assessment tools 
                  helped me make confident decisions despite market volatility."
                </p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto flex items-center">
                  Read Story <ChevronRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-16">
            The Impact of InvestBoost
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-2">25,000+</div>
              <p className="text-white/80">Active Users</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-2">$1.2B+</div>
              <p className="text-white/80">Assets Analyzed</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-2">32%</div>
              <p className="text-white/80">Average Return Rate</p>
            </div>
            
            <div>
              <div className="text-4xl md:text-5xl font-bold text-[#9b87f5] mb-2">98%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold text-[#1A1F2C] mb-6">Ready to Write Your Success Story?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of successful investors who have transformed their financial future with InvestBoost.
          </p>
          <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white px-8 py-6 text-lg">
            Start Your Journey Today
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default SuccessStoriesPage;
