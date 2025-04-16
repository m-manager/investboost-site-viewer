
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, BarChart3, PieChart, Layers, ArrowRight, TrendingUp } from "lucide-react";

const PortfolioAnalysisPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Portfolio Analysis
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Get a comprehensive analysis of your investment portfolio with detailed metrics on performance, 
              diversification, and growth potential to make smarter investment decisions.
            </p>
            <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white px-8 py-6">
              Analyze Your Portfolio
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Portfolio Analysis Tools
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Performance Tracking</h3>
                <p className="text-gray-600 mb-6">
                  Track your portfolio's performance over time with detailed metrics on returns, 
                  volatility, and benchmark comparisons.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Historical performance analysis</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Benchmark comparison</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Return attribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <PieChart className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Asset Allocation</h3>
                <p className="text-gray-600 mb-6">
                  Visualize your portfolio's asset allocation across different asset classes, 
                  sectors, and geographic regions to ensure optimal diversification.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Sector breakdown</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Geographic exposure</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Asset class distribution</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <BarChart3 className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Risk Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Understand the risk profile of your portfolio with detailed metrics on volatility, 
                  drawdowns, and diversification to optimize for risk-adjusted returns.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Risk metrics calculation</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Correlation analysis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Stress testing scenarios</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-[#1A1F2C] mb-6">
                Interactive Portfolio Dashboard
              </h2>
              <p className="text-gray-600 mb-6">
                Our interactive dashboard provides a comprehensive view of your portfolio's performance, 
                allocation, and risk metrics, all in one place. Use it to track your investments, 
                identify potential issues, and make informed decisions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/10 p-2 rounded-full mr-4">
                    <TrendingUp className="h-5 w-5 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1F2C]">Real-time Updates</h3>
                    <p className="text-gray-600">Get real-time updates on your portfolio's performance and market changes.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-[#9b87f5]/10 p-2 rounded-full mr-4">
                    <Layers className="h-5 w-5 text-[#9b87f5]" />
                  </div>
                  <div>
                    <h3 className="font-bold text-[#1A1F2C]">Customizable Views</h3>
                    <p className="text-gray-600">Customize the dashboard to focus on the metrics that matter most to you.</p>
                  </div>
                </li>
              </ul>
              <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white">
                Explore Dashboard Features <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1535320903710-d993d3d77d29" 
                alt="Portfolio Dashboard" 
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonial Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            What Our Users Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">
                  "The portfolio analysis tools have completely transformed how I manage my investments. 
                  I now have a clear understanding of my portfolio's performance and risk profile, 
                  which has helped me make better investment decisions."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-[#1A1F2C]">Robert Chen</h4>
                    <p className="text-sm text-gray-500">Individual Investor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <p className="text-gray-600 mb-6 italic">
                  "As a financial advisor, I use InvestBoost's portfolio analysis tools with all my clients. 
                  The detailed insights and clear visualizations make it easy to explain complex financial 
                  concepts to clients and help them understand their investments better."
                </p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                  <div>
                    <h4 className="font-bold text-[#1A1F2C]">Sarah Johnson</h4>
                    <p className="text-sm text-gray-500">Financial Advisor</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Analyze Your Portfolio?</h2>
          <p className="text-lg text-white/80 mb-8">
            Get started with our portfolio analysis tools today and gain valuable insights into your investments.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
            Start Free Analysis
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default PortfolioAnalysisPage;
