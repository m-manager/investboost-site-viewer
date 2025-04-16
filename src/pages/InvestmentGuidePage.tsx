
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, BookOpen, Lightbulb, Target, TrendingUp, PieChart } from "lucide-react";

const InvestmentGuidePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="md:flex items-center">
            <div className="md:w-1/2 md:pr-12 mb-8 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
                Investment Guide
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Free resources to improve your investment strategy and achieve your financial goals.
                Our comprehensive guides are designed for investors at all levels.
              </p>
              <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white flex items-center">
                <Download className="mr-2 h-5 w-5" /> Download Complete Guide
              </Button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085" 
                alt="Investment Guide" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Guide Categories */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Investment Resources
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <BookOpen className="w-7 h-7 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Beginner's Guide</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Start your investment journey with our comprehensive beginner's guide. 
                  Learn the fundamentals of investing, understand different asset classes, 
                  and build a solid foundation for your financial future.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Understanding the stock market</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Introduction to bonds and fixed income</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Building your first portfolio</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-[#1A1F2C] border border-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Intermediate Strategies</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Take your investment knowledge to the next level with our intermediate guide. 
                  Explore advanced concepts, diversification strategies, and learn how to 
                  analyze investment opportunities more effectively.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Technical and fundamental analysis</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Diversification strategies</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Tax-efficient investing</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-[#1A1F2C] border border-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="w-14 h-14 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <TrendingUp className="w-7 h-7 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Advanced Techniques</h3>
                <p className="text-gray-600 mb-6 flex-grow">
                  Master sophisticated investment strategies and techniques with our 
                  advanced guide. Perfect for experienced investors looking to optimize 
                  returns and manage complex portfolios.
                </p>
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Options and derivatives strategies</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Alternative investments</p>
                  </div>
                  <div className="flex items-start">
                    <div className="text-[#9b87f5] mr-2 mt-1">•</div>
                    <p>Portfolio optimization models</p>
                  </div>
                </div>
                <Button className="w-full bg-white text-[#1A1F2C] border border-[#1A1F2C] hover:bg-[#1A1F2C] hover:text-white">
                  Read Guide
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Featured Articles */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Featured Articles
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border border-gray-100 overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5" 
                  alt="Article" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <Lightbulb className="w-5 h-5 text-[#9b87f5] mr-2" />
                  <span className="text-sm text-gray-500">Investment Strategy</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">
                  Understanding Market Volatility: A Guide to Steady Investing
                </h3>
                <p className="text-gray-600 mb-4">
                  Learn how to navigate market volatility with confidence and make 
                  strategic decisions that protect your portfolio during uncertain times.
                </p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto">
                  Read Article
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 overflow-hidden flex flex-col md:flex-row h-full">
              <div className="md:w-2/5 h-48 md:h-auto overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                  alt="Article" 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6 md:w-3/5">
                <div className="flex items-center mb-3">
                  <PieChart className="w-5 h-5 text-[#9b87f5] mr-2" />
                  <span className="text-sm text-gray-500">Portfolio Management</span>
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">
                  The Art of Asset Allocation: Balancing Risk and Reward
                </h3>
                <p className="text-gray-600 mb-4">
                  Discover the principles of effective asset allocation and how to 
                  structure your portfolio to align with your financial goals and risk tolerance.
                </p>
                <Button variant="link" className="text-[#9b87f5] hover:text-[#7E69AB] p-0 h-auto">
                  Read Article
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#1A1F2C] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Stay Updated with Investment Insights</h2>
          <p className="text-lg text-white/80 mb-8">
            Subscribe to our newsletter to receive the latest investment guides, 
            market analyses, and exclusive tips directly to your inbox.
          </p>
          <div className="bg-white p-1 rounded-lg flex flex-col md:flex-row">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-3 rounded-md focus:outline-none text-gray-800"
            />
            <Button className="w-full md:w-auto mt-2 md:mt-0 bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
              Subscribe
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default InvestmentGuidePage;
