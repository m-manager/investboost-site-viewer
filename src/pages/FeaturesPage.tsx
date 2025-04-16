
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { LineChart, BarChart, PieChart, Sparkles, Shield, Gauge } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const FeaturesPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Powerful Investment Tools
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Our comprehensive suite of investment tools helps you make smarter decisions, 
              reduce risk, and maximize your returns through data-driven insights.
            </p>
          </div>
        </div>
      </section>
      
      {/* Main Features Grid */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Core Features
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <LineChart className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Portfolio Analysis</h3>
                <p className="text-gray-600 mb-6">
                  Comprehensive analysis of your investment portfolio with 
                  detailed metrics on performance, diversification, and growth potential.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Asset allocation visualization</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Performance tracking over custom periods</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Benchmark comparison tools</span>
                  </li>
                </ul>
                <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Risk Assessment</h3>
                <p className="text-gray-600 mb-6">
                  Advanced risk analysis tools to evaluate and minimize the potential 
                  risks in your investment strategy while maximizing returns.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Volatility measurement</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Downside risk projection</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Diversification scoring system</span>
                  </li>
                </ul>
                <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <BarChart className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Market Insights</h3>
                <p className="text-gray-600 mb-6">
                  Real-time market data and analytics to help you stay ahead 
                  of market trends and make informed investment decisions.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Real-time market updates</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Trend analysis and forecasting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Sector performance comparison</span>
                  </li>
                </ul>
                <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white mt-auto">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Advanced Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Advanced Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border border-gray-100 hover:border-[#9b87f5] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <PieChart className="w-6 h-6 text-[#9b87f5] mr-3" />
                  <h3 className="text-lg font-bold text-[#1A1F2C]">AI-Powered Recommendations</h3>
                </div>
                <p className="text-gray-600">
                  Receive personalized investment recommendations based on your goals, risk tolerance, and market conditions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:border-[#9b87f5] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Sparkles className="w-6 h-6 text-[#9b87f5] mr-3" />
                  <h3 className="text-lg font-bold text-[#1A1F2C]">Tax Optimization</h3>
                </div>
                <p className="text-gray-600">
                  Maximize your after-tax returns with our tax-loss harvesting and efficient withdrawal planning tools.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border border-gray-100 hover:border-[#9b87f5] transition-colors">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Gauge className="w-6 h-6 text-[#9b87f5] mr-3" />
                  <h3 className="text-lg font-bold text-[#1A1F2C]">Retirement Planning</h3>
                </div>
                <p className="text-gray-600">
                  Project your retirement savings and income with our advanced calculators and simulation tools.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Start Investing Smarter?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of investors who are already maximizing their returns with InvestBoost's powerful tools.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
            Get Started for Free
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default FeaturesPage;
