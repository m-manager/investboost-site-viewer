
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Rocket, ArrowRight, Shield, LineChart, Users } from "lucide-react";

const GetStartedPage = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Start Your Investment Journey Today
            </h1>
            <p className="text-lg text-white/90 mb-10">
              Join thousands of investors who are already optimizing their portfolios
              and maximizing returns with InvestBoost's powerful tools.
            </p>
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl">
              <h2 className="text-2xl font-bold mb-4">Create Your Free Account</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                <input 
                  type="text" 
                  placeholder="First Name" 
                  className="px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <input 
                  type="text" 
                  placeholder="Last Name" 
                  className="px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="mb-6">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <div className="mb-6">
                <input 
                  type="password" 
                  placeholder="Create Password" 
                  className="w-full px-4 py-3 rounded-md bg-white/20 border border-white/30 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
              </div>
              <Button className="w-full bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white py-6 text-lg">
                <Rocket className="mr-2 h-5 w-5" />
                Create Free Account
              </Button>
              <div className="mt-4 text-sm text-white/70">
                By signing up, you agree to our Terms of Service and Privacy Policy
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              How InvestBoost Works
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our platform makes it easy to start optimizing your investments in just a few steps.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <Card key={step} className="border-0 shadow-lg relative">
                <div className="absolute -top-5 -left-5 w-12 h-12 rounded-full bg-[#9b87f5] flex items-center justify-center text-white font-bold text-xl">
                  {step}
                </div>
                <CardContent className="pt-8 pb-6 px-6">
                  <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">
                    {step === 1 
                      ? "Create Your Account" 
                      : step === 2 
                      ? "Connect Your Portfolio" 
                      : "Get Personalized Insights"}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {step === 1 
                      ? "Sign up for a free account in less than 2 minutes. No credit card required to get started."
                      : step === 2 
                      ? "Securely link your existing investment accounts or manually add your portfolio holdings."
                      : "Receive customized analysis, risk assessments, and optimization recommendations."}
                  </p>
                  <img 
                    src={`https://images.unsplash.com/photo-1${step === 1 ? '507925921958-25b9f46a3597' : step === 2 ? '551288049-bebda4e38f71' : '460925895917-afdab827c52f'}`} 
                    alt={`Step ${step}`} 
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Plan Options */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1A1F2C] mb-4">
              Choose Your Plan
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Select the plan that best fits your investment needs and goals.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Free</CardTitle>
                <CardDescription>For individual investors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#1A1F2C]">$0</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {["Basic portfolio tracking", "Limited market data", "Standard risk assessment", "Email support"].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1A1F2C] hover:bg-[#9b87f5]">
                  Get Started
                </Button>
              </CardFooter>
            </Card>
            
            {/* Premium Plan */}
            <Card className="border-0 shadow-xl relative">
              <div className="absolute top-0 left-0 right-0 flex justify-center">
                <Badge className="bg-[#9b87f5] transform -translate-y-1/2">Most Popular</Badge>
              </div>
              <CardHeader className="text-center pb-4 pt-6">
                <CardTitle className="text-2xl">Premium</CardTitle>
                <CardDescription>For active investors</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#1A1F2C]">$29</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {[
                    "Advanced portfolio analysis", 
                    "Real-time market data", 
                    "Comprehensive risk assessment", 
                    "Portfolio optimization",
                    "Priority email & chat support",
                    "5 custom watchlists"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#9b87f5] hover:bg-[#1A1F2C]">
                  Get Premium
                </Button>
              </CardFooter>
            </Card>
            
            {/* Enterprise Plan */}
            <Card className="border-0 shadow-lg">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <CardDescription>For financial advisors & firms</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-[#1A1F2C]">$99</span>
                  <span className="text-gray-500">/month</span>
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <ul className="space-y-3">
                  {[
                    "All Premium features", 
                    "Client management portal", 
                    "API access", 
                    "Advanced reporting tools", 
                    "White-label options",
                    "Dedicated account manager"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-[#1A1F2C] hover:bg-[#9b87f5]">
                  Contact Sales
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Benefits */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Why Choose InvestBoost
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Bank-Level Security</h3>
              <p className="text-gray-600">
                Your data is protected with 256-bit encryption, SOC 2 compliance, and regular security audits.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <LineChart className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Data-Driven Insights</h3>
              <p className="text-gray-600">
                Our AI-powered platform analyzes thousands of data points to provide you with personalized investment recommendations.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-[#9b87f5]/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-[#9b87f5]" />
              </div>
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-4">Expert Support</h3>
              <p className="text-gray-600">
                Get help from our team of investment professionals and customer support specialists whenever you need it.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            What Our Customers Say
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="text-[#9b87f5] text-2xl mb-4">
                    ❝
                  </div>
                  <p className="text-gray-600 mb-6">
                    {i === 1 
                      ? "InvestBoost has completely transformed how I manage my portfolio. The risk assessment tools helped me avoid several poor investments and maximize my returns."
                      : i === 2 
                      ? "As a financial advisor, I use InvestBoost with all of my clients. The platform's insights and analytics make it easy to demonstrate value and explain complex concepts."
                      : "The market insights feature alone is worth the price. I've saved thousands by being ahead of market trends that I wouldn't have spotted on my own."}
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-gray-200 mr-4"></div>
                    <div>
                      <h4 className="font-bold text-[#1A1F2C]">
                        {i === 1 ? "Rebecca Thompson" : i === 2 ? "James Wilson" : "Mark Rodriguez"}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {i === 1 ? "Individual Investor" : i === 2 ? "Financial Advisor" : "Premium Member"}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* FAQs */}
      <section className="py-16 px-4 md:px-8 lg:px-16">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center text-[#1A1F2C] mb-12">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-6">
            {[
              {
                q: "How long does it take to set up an account?",
                a: "Setting up your account takes less than 2 minutes. After that, you can immediately start adding your portfolio information or connect your existing investment accounts."
              },
              {
                q: "Can I connect my existing brokerage accounts?",
                a: "Yes, InvestBoost securely connects with over 10,000 financial institutions worldwide, allowing you to easily import your holdings from most major brokerages and banks."
              },
              {
                q: "Is my financial data secure?",
                a: "Absolutely. We use bank-level 256-bit encryption and follow strict security protocols. We never store your login credentials, and all data transmission is securely encrypted."
              },
              {
                q: "Can I cancel my subscription at any time?",
                a: "Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees."
              },
              {
                q: "Do you offer a free trial for Premium features?",
                a: "Yes, all new users get a 14-day free trial of our Premium features so you can experience the full power of InvestBoost before deciding which plan is right for you."
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
      
      {/* Final CTA */}
      <section className="py-16 px-4 md:px-8 lg:px-16 bg-gradient-to-r from-[#1A1F2C] to-[#403E43] text-white">
        <div className="container mx-auto text-center max-w-3xl">
          <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Investment Strategy?</h2>
          <p className="text-lg text-white/80 mb-8">
            Join thousands of successful investors who are already using InvestBoost to optimize their portfolios and maximize returns.
          </p>
          <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
            <Button className="bg-[#9b87f5] hover:bg-white hover:text-[#1A1F2C] text-white px-8 py-6 text-lg">
              <Rocket className="mr-2 h-5 w-5" /> Get Started for Free
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-[#1A1F2C] px-8 py-6 text-lg">
              Schedule a Demo <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default GetStartedPage;
