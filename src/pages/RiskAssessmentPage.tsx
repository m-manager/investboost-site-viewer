
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, AlertTriangle, Check, Zap, BarChart3, PieChart } from "lucide-react";

const RiskAssessmentPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Comprehensive Risk Assessment
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Identify, analyze, and mitigate investment risks with our advanced risk assessment tools.
              Make smarter decisions with a clear understanding of your portfolio's risk profile.
            </p>
            <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white px-8 py-6">
              Start Your Risk Assessment
            </Button>
          </div>
        </div>
      </section>
      
      {/* Main Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Our Risk Assessment Framework
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <Shield className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Risk Identification</h3>
                <p className="text-gray-600 mb-6">
                  Our advanced algorithms scan your portfolio to identify potential risk factors including market volatility, 
                  concentration risk, and correlation risk.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Volatility analysis</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Risk factor identification</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Concentration detection</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <AlertTriangle className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Risk Measurement</h3>
                <p className="text-gray-600 mb-6">
                  Quantify and measure the impact of various risk types using historical data, 
                  stress tests, and predictive modeling to understand potential downsides.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Value at Risk (VaR) analysis</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Stress testing scenarios</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Downside projection modeling</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6 flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Risk Mitigation</h3>
                <p className="text-gray-600 mb-6">
                  Receive actionable recommendations to reduce portfolio risks while maintaining 
                  your target returns, with customized strategies for your investment goals.
                </p>
                <ul className="text-left w-full mb-6">
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Diversification recommendations</span>
                  </li>
                  <li className="flex items-start mb-3">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Hedging strategies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[#9b87f5] mr-2">•</span>
                    <span>Portfolio rebalancing</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Visual Risk Assessment */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Visual Risk Assessment Dashboard
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our interactive dashboard provides clear visualization of your portfolio risks, 
              making it easy to understand complex risk metrics at a glance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <BarChart3 className="w-6 h-6 text-[#9b87f5] mr-3" />
                  <h3 className="text-lg font-bold text-[#1A1F2C]">Risk Factor Analysis</h3>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71" 
                    alt="Risk Analysis Dashboard" 
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  Our risk factor analysis breaks down specific sources of risk in your portfolio, 
                  from market-level factors to asset-specific considerations.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <PieChart className="w-6 h-6 text-[#9b87f5] mr-3" />
                  <h3 className="text-lg font-bold text-[#1A1F2C]">Diversification Analysis</h3>
                </div>
                <div className="bg-gray-100 rounded-lg aspect-video flex items-center justify-center">
                  <img 
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f" 
                    alt="Diversification Chart" 
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
                <p className="mt-4 text-gray-600">
                  Visualize how well your investments are diversified across sectors, 
                  asset classes, geographies, and risk factors to spot potential concentration risks.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            What Our Clients Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-[#1A1F2C]">
                        {i === 1 ? "Sarah Johnson" : i === 2 ? "Michael Chen" : "David Williams"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {i === 1 ? "Individual Investor" : i === 2 ? "Financial Advisor" : "Portfolio Manager"}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">
                    {i === 1 
                      ? "The risk assessment tools helped me understand my portfolio's vulnerability to market downturns. I was able to make adjustments that protected my investments during the last correction." 
                      : i === 2 
                      ? "I use InvestBoost's risk assessment with all my clients. It provides clear, actionable insights that help me guide clients toward safer, more balanced portfolios." 
                      : "As a portfolio manager, the stress testing capabilities are invaluable. We can model complex scenarios and ensure our strategies are robust against various market conditions."}
                  </p>
                  <div className="flex text-[#9b87f5]">
                    {'★★★★★'}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Understand Your Portfolio Risk?</h2>
          <p className="text-lg text-white/80 mb-8">
            Take control of your investment risk with our comprehensive assessment tools. 
            Start building a more resilient portfolio today.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
            <Zap className="mr-2 h-5 w-5" /> Start Free Risk Assessment
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default RiskAssessmentPage;
