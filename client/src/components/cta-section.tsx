import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Phone } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-16 gradient-purple">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Ready to Get Your Loan?</h2>
        <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
          Join thousands of Indians who have already received instant loans through our AI-powered platform
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/pre-apply">
            <Button 
              size="lg"
              className="bg-white text-primary hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
            >
              <Rocket className="mr-2 h-4 w-4" />
              Start Pre-Application
            </Button>
          </Link>
          <Link href="/contact">
            <Button 
              variant="outline" 
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-primary transition-all duration-200"
            >
              <Phone className="mr-2 h-4 w-4" />
              Contact Support
            </Button>
          </Link>
        </div>

        <div className="mt-8 text-purple-200 text-sm">
          <p>✓ No hidden charges  ✓ Transparent terms  ✓ Quick approval</p>
        </div>
      </div>
    </section>
  );
}
