
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Video, FileText, Download, ArrowRight, Clock, Calendar, Play } from "lucide-react";

const LearnMorePage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Investment Education Center
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Enhance your investment knowledge with our comprehensive learning resources,
              designed for investors at all levels.
            </p>
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                <BookOpen className="mr-2 h-5 w-5" /> Beginner's Guide
              </Button>
              <Button variant="outline" className="border-gray-200">
                <Video className="mr-2 h-5 w-5" /> Video Tutorials
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Course */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="md:flex">
              <div className="md:w-1/2 h-64 md:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1665686308634-cb04addd4fd5?q=80&w=1470&auto=format&fit=crop" 
                  alt="Investment Fundamentals Course" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8 md:p-12">
                <Badge className="bg-[#9b87f5] hover:bg-[#7E69AB] mb-4">Featured Course</Badge>
                <h2 className="text-2xl md:text-3xl font-bold text-[#1A1F2C] mb-4">
                  Investment Fundamentals: Building a Strong Portfolio
                </h2>
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-500">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>8 Hours</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <FileText className="h-4 w-4 mr-1" />
                    <span>12 Lessons</span>
                  </div>
                  <div className="flex items-center text-gray-500">
                    <BookOpen className="h-4 w-4 mr-1" />
                    <span>Beginner Level</span>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  Master the essentials of building and managing a diversified investment portfolio. 
                  This comprehensive course covers asset allocation, risk management, and investment selection
                  techniques to help you create a strong foundation for long-term financial success.
                </p>
                <Button className="flex items-center bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                  Start Learning <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
      
      {/* Learning Paths */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Learning Paths
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Follow our structured learning paths to develop your investment skills from beginner to advanced.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Beginner', 'Intermediate', 'Advanced'].map((level, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                    {index === 0 ? (
                      <BookOpen className="w-8 h-8 text-[#9b87f5]" />
                    ) : index === 1 ? (
                      <FileText className="w-8 h-8 text-[#9b87f5]" />
                    ) : (
                      <Video className="w-8 h-8 text-[#9b87f5]" />
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">{level} Investor</h3>
                  <p className="text-gray-600 mb-6">
                    {index === 0 
                      ? "Start your investment journey with foundational concepts and basic strategies for building your first portfolio." 
                      : index === 1 
                      ? "Expand your knowledge with advanced concepts, technical analysis, and more sophisticated investment strategies."
                      : "Master complex investment techniques, portfolio management, risk hedging, and professional-level analysis."}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {[1, 2, 3, 4].map((item) => (
                      <li key={item} className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-[#9b87f5] mr-2"></div>
                        <span className="text-gray-600">
                          {index === 0 
                            ? (item === 1 ? "Investment Basics" : item === 2 ? "Understanding Risk" : item === 3 ? "Asset Classes 101" : "Building Your First Portfolio")
                            : index === 1
                            ? (item === 1 ? "Technical Analysis" : item === 2 ? "Fundamental Analysis" : item === 3 ? "Diversification Strategies" : "Tax-Efficient Investing")
                            : (item === 1 ? "Advanced Options Strategies" : item === 2 ? "Portfolio Optimization" : item === 3 ? "Alternative Investments" : "Macroeconomic Analysis")}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                    Start This Path
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Video Library */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Video Tutorial Library
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Watch expert-led video tutorials on various investment topics.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="border-0 shadow-lg overflow-hidden">
                <div className="aspect-video relative">
                  <img 
                    src={`https://images.unsplash.com/photo-16${i}543210987-123456789${i}`} 
                    alt={`Video Tutorial ${i}`} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="absolute bottom-2 right-2">
                    <Badge className="bg-[#1A1F2C]">{Math.floor(Math.random() * 10) + 5}:00</Badge>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-[#1A1F2C] mb-2 line-clamp-1">
                    {i === 1 ? "Understanding Market Cycles" : 
                     i === 2 ? "Technical Analysis Fundamentals" : 
                     i === 3 ? "ETFs vs Mutual Funds Comparison" : 
                     i === 4 ? "Dividend Investing Strategies" : 
                     i === 5 ? "Real Estate Investment Trusts" : 
                     "Cryptocurrency Investment Basics"}
                  </h3>
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" />
                      <span>March {i + 10}, 2025</span>
                    </div>
                    <Badge variant="outline" className="bg-transparent text-[#9b87f5] border-[#9b87f5]">
                      {i <= 2 ? "Beginner" : i <= 4 ? "Intermediate" : "Advanced"}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-200 hover:bg-[#F1F0FB]">
              View All Videos
            </Button>
          </div>
        </div>
      </section>
      
      {/* Resources & Guides */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Downloadable Resources
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access our collection of free guides, templates, and worksheets to enhance your investment journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              "Portfolio Tracking Spreadsheet", 
              "Risk Assessment Worksheet", 
              "Retirement Planning Guide", 
              "Investment Tax Guide", 
              "Asset Allocation Framework", 
              "Financial Goal Setting Template", 
              "Market Research Checklist", 
              "ESG Investing Guide"
            ].map((title, index) => (
              <Card key={index} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-6 h-6 text-[#9b87f5]" />
                  </div>
                  <h3 className="font-bold text-[#1A1F2C] mb-3">{title}</h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {index % 2 === 0 
                      ? "A comprehensive resource to help you track, analyze, and optimize your investment performance."
                      : "Essential guide with practical tips and strategies to improve your investment outcomes."}
                  </p>
                  <Button variant="outline" className="w-full border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                    <Download className="mr-2 h-4 w-4" /> Download
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Educational Events */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Upcoming Educational Events
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join our live webinars, workshops, and Q&A sessions with investment experts.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-1/3 bg-[#1A1F2C] text-white p-6 flex flex-col items-center justify-center">
                      <div className="text-lg">April</div>
                      <div className="text-4xl font-bold">{20 + i}</div>
                      <div className="text-lg">2025</div>
                      <Badge className="mt-2 bg-[#9b87f5]">
                        {i % 2 === 0 ? "Webinar" : "Workshop"}
                      </Badge>
                    </div>
                    <div className="md:w-2/3 p-6">
                      <h3 className="text-lg font-bold text-[#1A1F2C] mb-2">
                        {i === 1 ? "Navigating Market Volatility" : 
                         i === 2 ? "Sustainable Investing Workshop" : 
                         i === 3 ? "Retirement Income Strategies" : 
                         "Tax-Efficient Portfolio Management"}
                      </h3>
                      <div className="flex items-center text-gray-500 text-sm mb-4">
                        <Clock className="h-4 w-4 mr-1" />
                        <span>{i % 2 === 0 ? "2:00 PM - 3:30 PM EST" : "11:00 AM - 12:30 PM EST"}</span>
                      </div>
                      <p className="text-gray-600 mb-4">
                        {i === 1 
                          ? "Learn effective strategies to manage your investments during periods of market uncertainty and volatility."
                          : i === 2 
                          ? "Discover how to incorporate ESG factors into your investment process for both impact and financial returns."
                          : i === 3 
                          ? "Explore strategies to generate sustainable income from your investment portfolio during retirement."
                          : "Master techniques to minimize tax impact and maximize after-tax returns from your investments."}
                      </p>
                      <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                        Register Now
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-200 hover:bg-white">
              View All Events
            </Button>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "Are the educational resources free?",
                a: "Most of our basic educational content is free for all users. Premium educational content, including advanced courses and specialized workshops, are available to Premium and Enterprise subscribers."
              },
              {
                q: "How often is new content added?",
                a: "We add new educational content weekly, including articles, videos, and resources. We also host 2-3 live educational events each month."
              },
              {
                q: "Can I suggest topics for future content?",
                a: "Absolutely! We welcome suggestions from our community. You can submit topic ideas through your account dashboard or by contacting our support team."
              },
              {
                q: "Can I access the educational content on mobile devices?",
                a: "Yes, all of our educational content is fully optimized for mobile devices, allowing you to learn on the go from your smartphone or tablet."
              }
            ].map((faq, index) => (
              <Card key={index} className="border border-gray-100 hover:border-[#9b87f5] transition-colors">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-[#1A1F2C] mb-2">{faq.q}</h3>
                  <p className="text-gray-600">{faq.a}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Your Investment Knowledge?</h2>
          <p className="text-lg text-white/80 mb-8">
            Start your learning journey today and gain the knowledge and skills to make smarter investment decisions.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
            <BookOpen className="mr-2 h-5 w-5" /> Start Learning
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default LearnMorePage;
