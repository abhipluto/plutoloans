import { Card, CardContent } from "@/components/ui/card";
import { Building, Smartphone, Shield, Lock } from "lucide-react";

export default function TrustIndicatorsSection() {
  const indicators = [
    {
      icon: <Building className="h-8 w-8 text-white" />,
      title: "RBI Regulated",
      description: "Compliant with Reserve Bank of India guidelines",
      color: "bg-green-500"
    },
    {
      icon: <Smartphone className="h-8 w-8 text-white" />,
      title: "Secure UPI Infra",
      description: "Built on India's trusted UPI payment system",
      color: "bg-primary"
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: "PCI-DSS Compliant",
      description: "Highest security standards for payment processing",
      color: "bg-yellow-500"
    },
    {
      icon: <Lock className="h-8 w-8 text-white" />,
      title: "Data Encrypted",
      description: "256-bit SSL encryption for all transactions",
      color: "bg-purple-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Our Trusted Backers</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're in the process of onboarding trusted lending partners and fintech investors
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {indicators.map((indicator, index) => (
            <Card key={index} className="bg-gray-50 rounded-xl p-6 text-center card-hover border-0">
              <CardContent className="p-0">
                <div className={`w-16 h-16 ${indicator.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  {indicator.icon}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{indicator.title}</h3>
                <p className="text-sm text-gray-600">{indicator.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
