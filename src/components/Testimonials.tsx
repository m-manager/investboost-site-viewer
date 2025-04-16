
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "InvestBoost transformed the way I approach my investment strategy. The insights and tools provided have been invaluable.",
      author: "Sarah Johnson",
      position: "Portfolio Manager",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      quote: "The analytics and AI-powered recommendations have helped me make smarter investment decisions. Highly recommended!",
      author: "David Chen",
      position: "Financial Analyst",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 5
    },
    {
      quote: "I've tried many investment platforms, but InvestBoost stands out with its user-friendly interface and powerful features.",
      author: "Emily Zhang",
      position: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=100&q=80",
      stars: 4
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-8 lg:px-16 bg-[#F1F0FB]">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1A1F2C] mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hear from professionals who have transformed their investment approach with InvestBoost.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-xl shadow-sm relative">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`h-5 w-5 ${i < testimonial.stars ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`} 
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">"{testimonial.quote}"</p>
              <div className="flex items-center">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full mr-4"
                />
                <div>
                  <h4 className="font-bold text-[#1A1F2C]">{testimonial.author}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
