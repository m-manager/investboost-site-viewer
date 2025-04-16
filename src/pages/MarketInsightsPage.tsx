
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  LineChart, 
  BarChart, 
  Globe, 
  TrendingUp, 
  TrendingDown, 
  Clock, 
  Search, 
  Zap
} from "lucide-react";

const MarketInsightsPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1F2C] mb-6">
              Market Insights & Analytics
            </h1>
            <p className="text-lg text-gray-600 mb-10">
              Stay ahead with real-time market data, in-depth analysis, and predictive insights
              to make informed investment decisions in any market condition.
            </p>
            <Button className="bg-[#1A1F2C] hover:bg-[#9b87f5] text-white px-8 py-6">
              <TrendingUp className="mr-2 h-5 w-5" /> Explore Market Data
            </Button>
          </div>
        </div>
      </section>
      
      {/* Market Overview */}
      <section className="py-12 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Today's Market Overview
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">S&P 500</h3>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+1.2%</span>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-green-100 to-green-50 rounded-lg"></div>
                <div className="mt-4 text-sm text-gray-500 flex justify-between">
                  <span>4,782.24</span>
                  <span className="text-green-500">+56.78</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">NASDAQ</h3>
                  <div className="flex items-center text-green-500">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    <span>+1.6%</span>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-green-100 to-green-50 rounded-lg"></div>
                <div className="mt-4 text-sm text-gray-500 flex justify-between">
                  <span>15,103.58</span>
                  <span className="text-green-500">+236.94</span>
                </div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">DOW JONES</h3>
                  <div className="flex items-center text-red-500">
                    <TrendingDown className="h-4 w-4 mr-1" />
                    <span>-0.3%</span>
                  </div>
                </div>
                <div className="h-24 bg-gradient-to-r from-red-50 to-red-100 rounded-lg"></div>
                <div className="mt-4 text-sm text-gray-500 flex justify-between">
                  <span>38,763.45</span>
                  <span className="text-red-500">-117.89</span>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#1A1F2C]">10Y Treasury</h3>
                  <div className="text-red-500">-0.05%</div>
                </div>
                <div className="text-2xl font-bold mt-1 text-[#1A1F2C]">3.82%</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#1A1F2C]">Bitcoin</h3>
                  <div className="text-green-500">+2.8%</div>
                </div>
                <div className="text-2xl font-bold mt-1 text-[#1A1F2C]">$65,284</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#1A1F2C]">WTI Crude</h3>
                  <div className="text-green-500">+1.2%</div>
                </div>
                <div className="text-2xl font-bold mt-1 text-[#1A1F2C]">$82.56</div>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-md">
              <CardContent className="p-4">
                <div className="flex justify-between items-center">
                  <h3 className="text-sm font-medium text-[#1A1F2C]">Gold</h3>
                  <div className="text-green-500">+0.6%</div>
                </div>
                <div className="text-2xl font-bold mt-1 text-[#1A1F2C]">$2,324</div>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 text-center">
            <div className="flex items-center justify-center text-sm text-gray-500">
              <Clock className="h-4 w-4 mr-1" />
              <span>Last updated: April 16, 2025 at 12:30 PM</span>
            </div>
          </div>
        </div>
      </section>
      
      {/* In-depth Analysis Features */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            In-depth Market Analysis
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mr-4">
                  <LineChart className="w-6 h-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Technical Analysis</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Access comprehensive technical analysis tools to identify trends, patterns, and potential market movements:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Pattern Recognition</span>
                    <p className="text-gray-600 text-sm">Automatic detection of chart patterns including head and shoulders, double tops/bottoms, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Indicator Suite</span>
                    <p className="text-gray-600 text-sm">Over 100 technical indicators including RSI, MACD, Bollinger Bands, and custom indicator creation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Multi-timeframe Analysis</span>
                    <p className="text-gray-600 text-sm">Analyze trends across different timeframes to confirm signals and validate trading decisions</p>
                  </div>
                </li>
              </ul>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                Explore Technical Tools
              </Button>
            </div>
            
            <div>
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mr-4">
                  <BarChart className="w-6 h-6 text-[#9b87f5]" />
                </div>
                <h3 className="text-xl font-bold text-[#1A1F2C]">Fundamental Analysis</h3>
              </div>
              <p className="text-gray-600 mb-6">
                Dive deep into company financials, economic indicators, and valuation metrics:
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Financial Statement Analysis</span>
                    <p className="text-gray-600 text-sm">Compare income statements, balance sheets, and cash flow statements across companies and over time</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Valuation Metrics</span>
                    <p className="text-gray-600 text-sm">Comprehensive valuation tools including P/E, EV/EBITDA, DCF models, and more</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <span className="text-[#9b87f5] mr-2">•</span>
                  <div>
                    <span className="font-medium text-[#1A1F2C]">Economic Data</span>
                    <p className="text-gray-600 text-sm">Access to global economic indicators, central bank data, and economic calendars</p>
                  </div>
                </li>
              </ul>
              <Button variant="outline" className="border-[#9b87f5] text-[#9b87f5] hover:bg-[#9b87f5] hover:text-white">
                Explore Fundamental Data
              </Button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Global Markets */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Global Market Coverage
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Track markets around the world with comprehensive data and insights
              covering major global exchanges, currencies, and commodities.
            </p>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-xl mb-12">
            <div className="aspect-video bg-[#1A1F2C] relative">
              <div className="absolute inset-0 opacity-20 bg-pattern"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Globe className="w-24 h-24 text-[#9b87f5]/80" />
              </div>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-6">
              <div className="grid grid-cols-5 gap-4">
                <div className="text-center">
                  <div className="text-sm font-medium">US</div>
                  <div className="text-green-500 font-bold">+1.2%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Europe</div>
                  <div className="text-green-500 font-bold">+0.8%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Asia</div>
                  <div className="text-red-500 font-bold">-0.3%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">LatAm</div>
                  <div className="text-green-500 font-bold">+1.5%</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-medium">Australia</div>
                  <div className="text-red-500 font-bold">-0.1%</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">Asian Markets</h3>
                  <Badge className="bg-[#9b87f5]">Live</Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Nikkei 225</span>
                    <div className="flex items-center text-red-500">
                      <span>34,892.76</span>
                      <TrendingDown className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Shanghai Composite</span>
                    <div className="flex items-center text-green-500">
                      <span>3,231.46</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Hang Seng</span>
                    <div className="flex items-center text-red-500">
                      <span>17,895.53</span>
                      <TrendingDown className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">European Markets</h3>
                  <Badge className="bg-green-500">Open</Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>FTSE 100</span>
                    <div className="flex items-center text-green-500">
                      <span>7,841.72</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>DAX</span>
                    <div className="flex items-center text-green-500">
                      <span>18,456.32</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>CAC 40</span>
                    <div className="flex items-center text-green-500">
                      <span>8,084.97</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1A1F2C]">Currencies & Commodities</h3>
                  <Badge className="bg-blue-500">24/7</Badge>
                </div>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>EUR/USD</span>
                    <div className="flex items-center text-green-500">
                      <span>1.0862</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <span>Gold</span>
                    <div className="flex items-center text-green-500">
                      <span>$2,324.50</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Crude Oil</span>
                    <div className="flex items-center text-green-500">
                      <span>$82.56</span>
                      <TrendingUp className="h-4 w-4 ml-1" />
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Market Research */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Expert Market Research
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Access exclusive research reports, market analyses, and expert opinions to inform your investment strategy.
            </p>
          </div>
          
          <div className="relative mb-12">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search className="w-5 h-5 text-gray-400" />
            </div>
            <input 
              type="search" 
              className="block w-full p-4 pl-10 text-sm border border-gray-200 rounded-lg focus:ring-[#9b87f5] focus:border-[#9b87f5]" 
              placeholder="Search for reports, sectors, or companies..." 
            />
            <Button className="absolute right-2.5 bottom-2.5 bg-[#1A1F2C] hover:bg-[#9b87f5]">
              Search
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-0">
                  <div className="aspect-[3/2] relative">
                    <img 
                      src={`https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1470&auto=format&fit=crop&crop=edges`} 
                      alt="Market Research" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2">
                      <Badge className="bg-[#1A1F2C]">
                        {i === 1 ? "Sector Analysis" : i === 2 ? "Trend Report" : "Market Forecast"}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">
                      {i === 1 
                        ? "Emerging Technologies: Investment Opportunities for 2025" 
                        : i === 2 
                        ? "Global Supply Chain Evolution: Market Implications" 
                        : "Q3 2025 Economic Outlook and Market Forecast"}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {i === 1 
                        ? "Explore the investment landscape of emerging technologies, including AI, quantum computing, and biotechnology."
                        : i === 2 
                        ? "How evolving global supply chains are affecting markets and creating new investment opportunities."
                        : "Comprehensive analysis of economic trends and market forecasts for the third quarter of 2025."}
                    </p>
                    <div className="flex justify-between items-center">
                      <div className="text-sm text-gray-500">April {10 + i}, 2025</div>
                      <Button variant="ghost" className="text-[#9b87f5] hover:text-[#9b87f5] hover:bg-[#F1F0FB] p-0 h-auto">
                        Read Report →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <Button variant="outline" className="border-gray-200 text-gray-700 hover:bg-[#F1F0FB]">
              View All Research Reports
            </Button>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Elevate Your Market Intelligence?</h2>
          <p className="text-lg text-white/80 mb-8">
            Get access to professional-grade market insights, analysis tools, and expert research to make smarter investment decisions.
          </p>
          <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
            <Zap className="mr-2 h-5 w-5" /> Get Premium Market Insights
          </Button>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default MarketInsightsPage;
