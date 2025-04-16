
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$29",
      period: "per month",
      description: "Perfect for individuals getting started with investing",
      features: [
        "Basic market analytics",
        "Portfolio tracking",
        "5 investment alerts",
        "Email support",
        "Mobile app access"
      ],
      buttonText: "Get Started",
      highlighted: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      description: "Ideal for active investors seeking deeper insights",
      features: [
        "Advanced analytics and insights",
        "Unlimited portfolio tracking",
        "25 custom investment alerts",
        "Priority email and chat support",
        "AI-powered recommendations",
        "Performance forecasting",
        "API access"
      ],
      buttonText: "Get Started",
      highlighted: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      description: "For teams and professional investment managers",
      features: [
        "All Professional features",
        "Team collaboration tools",
        "Custom reporting",
        "Unlimited alerts",
        "24/7 priority support",
        "Dedicated account manager",
        "Custom integrations",
        "Training sessions"
      ],
      buttonText: "Contact Sales",
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="py-24 px-4 md:px-8 lg:px-16 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            Transparent Pricing Plans
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your investment needs and goals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`border ${plan.highlighted ? 'border-[#9b87f5] shadow-lg' : 'border-gray-200'} rounded-xl overflow-hidden relative`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 left-0 right-0 bg-[#9b87f5] text-white text-center py-1 text-sm font-medium">
                  Most Popular
                </div>
              )}
              <CardHeader className={`${plan.highlighted ? 'pt-8' : 'pt-6'} pb-6`}>
                <h3 className="text-2xl font-bold text-[#1A1F2C] mb-2">{plan.name}</h3>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold text-[#1A1F2C]">{plan.price}</span>
                  <span className="text-gray-600 ml-2">{plan.period}</span>
                </div>
                <p className="text-gray-600 mt-3">{plan.description}</p>
              </CardHeader>
              <CardContent className="border-t border-b border-gray-100 py-6">
                <ul className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-[#9b87f5] mr-3 shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter className="pt-6 pb-8">
                <Button 
                  className={`w-full py-6 ${plan.highlighted ? 'bg-[#9b87f5] hover:bg-[#7E69AB]' : 'bg-[#1A1F2C] hover:bg-[#9b87f5]'} text-white`}
                >
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
