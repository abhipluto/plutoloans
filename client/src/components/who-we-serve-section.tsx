import { Card, CardContent } from "@/components/ui/card";
import { Bike, GraduationCap, Store } from "lucide-react";

export default function WhoWeServeSection() {
  const services = [
    {
      icon: <Bike className="h-8 w-8 text-white" />,
      title: "Gig Workers",
      description: "UPI income, no salary slip? We got you covered with instant loan approvals based on your digital transaction history.",
      amount: "₹1,000 - ₹25,000",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      gradient: "from-primary to-purple-accent"
    },
    {
      icon: <GraduationCap className="h-8 w-8 text-white" />,
      title: "Students",
      description: "₹1K–₹5K urgent needs? Fast approvals without credit history. Focus on studies, not financial stress.",
      amount: "₹500 - ₹5,000",
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      gradient: "from-green-500 to-primary"
    },
    {
      icon: <Store className="h-8 w-8 text-white" />,
      title: "Small Vendors",
      description: "Get ₹10K–₹30K for daily inventory, same-day disbursal. Keep your business running smoothly.",
      amount: "₹5,000 - ₹50,000",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=250",
      gradient: "from-yellow-500 to-purple-accent"
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Who We Serve</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Empowering India's underserved communities with instant, AI-powered financial solutions
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="bg-white rounded-2xl p-8 card-hover shadow-lg border-0">
              <CardContent className="p-0">
                <div className="mb-6">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="rounded-xl w-full h-48 object-cover" 
                  />
                </div>
                <div className="text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <div className="text-sm text-primary font-semibold">{service.amount}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
