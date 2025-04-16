
import { 
  BarChart3, 
  Shield, 
  LineChart, 
  AlertCircle, 
  BrainCircuit, 
  TrendingUp 
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: <BarChart3 className="h-12 w-12 text-[#9b87f5]" />,
      title: "Advanced Analytics",
      description: "Get comprehensive insights on market trends and investment opportunities with our powerful analytics tools."
    },
    {
      icon: <Shield className="h-12 w-12 text-[#9b87f5]" />,
      title: "Secure Transactions",
      description: "Rest easy knowing your investments and personal data are protected by industry-leading security measures."
    },
    {
      icon: <LineChart className="h-12 w-12 text-[#9b87f5]" />,
      title: "Performance Tracking",
      description: "Monitor the performance of your investments in real-time with intuitive visualization tools."
    },
    {
      icon: <AlertCircle className="h-12 w-12 text-[#9b87f5]" />,
      title: "Intelligent Alerts",
      description: "Receive timely notifications about important market events that could impact your investment strategy."
    },
    {
      icon: <BrainCircuit className="h-12 w-12 text-[#9b87f5]" />,
      title: "AI-Powered Insights",
      description: "Leverage artificial intelligence to identify patterns and opportunities that human analysis might miss."
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-[#9b87f5]" />,
      title: "Growth Strategies",
      description: "Access expert-curated strategies designed to maximize returns while managing risk effectively."
    }
  ];

  return (
    <section id="features" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Powerful Features to Enhance Your Investments
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to make informed investment decisions and grow your portfolio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="mb-6">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#1A1F2C] mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
