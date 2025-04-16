
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search, Calendar, User, Clock, ChevronRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Investment Blog
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Insights, analysis, and expert perspectives to help you make smarter investment decisions.
            </p>
            
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Search for articles..."
                className="w-full px-4 py-3 pl-12 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#9b87f5] focus:border-transparent"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Article */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81" 
                  alt="Featured Article" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <Badge className="bg-[#9b87f5] hover:bg-[#7E69AB] mb-4">Featured</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C] mb-4">
                  The Impact of AI on Investment Strategies in 2025
                </h2>
                <div className="flex items-center text-gray-500 mb-4 text-sm">
                  <div className="flex items-center mr-4">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>April 15, 2025</span>
                  </div>
                  <div className="flex items-center mr-4">
                    <User className="h-4 w-4 mr-1" />
                    <span>James Wilson</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 min read</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Artificial intelligence is transforming investment strategies across the industry. 
                  Learn how AI-powered analytics are being used to identify opportunities, 
                  manage risk, and optimize portfolio performance in ways that were previously impossible.
                </p>
                <Button className="flex items-center bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                  Read Article <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Latest Articles */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C]">
              Latest Articles
            </h2>
            <div className="flex space-x-2">
              <Button variant="outline" className="border-gray-200">
                All
              </Button>
              <Button variant="outline" className="border-gray-200">
                Strategy
              </Button>
              <Button variant="outline" className="border-gray-200">
                Market Analysis
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="border-0 shadow-lg overflow-hidden">
                <div className="h-48 overflow-hidden">
                  <img 
                    src={`https://images.unsplash.com/photo-148859636${i + 8}-08023-c5249f4df08${i}`} 
                    alt={`Article ${i}`} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center mb-3">
                    <Badge variant="outline" className="bg-[#F1F0FB] text-[#9b87f5] border-0">
                      {i % 3 === 0 ? "Market Analysis" : i % 3 === 1 ? "Strategy" : "Insights"}
                    </Badge>
                    <div className="text-sm text-gray-500">April {i + 10}, 2025</div>
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">
                    {i % 3 === 0 ? "Global Market Trends: Q2 2025 Outlook" : 
                     i % 3 === 1 ? "Defensive Investment Strategies for Uncertain Times" : 
                     "The Rise of Sustainable Investing in Emerging Markets"}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {i % 3 === 0 ? 
                      "Analysis of global market trends and forecasts for the second quarter of 2025, with insights into key sectors and regional performance." : 
                     i % 3 === 1 ? 
                      "Strategies for protecting your portfolio during market volatility while positioning for growth when conditions improve." : 
                      "How sustainable investing is gaining momentum in emerging markets and what this means for global investors."}
                  </p>
                  <div className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Clock className="h-4 w-4 mr-1" />
                      <span>{i + 4} min read</span>
                    </div>
                    <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto">
                      Read More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button className="bg-white text-[#1A1F2C] border border-gray-200 hover:bg-[#F1F0FB]">
              Load More Articles
            </Button>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Subscribe to Our Newsletter</h2>
          <p className="text-lg text-white/80 mb-8">
            Get the latest investment insights, market analysis, and expert tips delivered to your inbox weekly.
          </p>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
              <input 
                type="text" 
                placeholder="Your name" 
                className="flex-1 px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <input 
                type="email" 
                placeholder="Your email" 
                className="flex-1 px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
            </div>
            <Button className="w-full mt-4 bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default BlogPage;
