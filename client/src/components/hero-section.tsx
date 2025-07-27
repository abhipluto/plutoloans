import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Rocket, Play, Shield, Lock } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="gradient-bg py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6">
              India's Credit Crisis
              <span className="text-primary block">Ends Here</span>
            </h1>
            <div className="text-lg sm:text-xl text-gray-600 mb-8 space-y-3">
              <p className="font-semibold">
                <span className="text-primary font-bold">300M+ excluded.</span>
                <span className="text-gray-700"> High interest. No access.</span>
              </p>
              <p>
                Pluto Loans is unlocking <span className="font-bold text-gray-900">₹500–₹50K</span> loans via 
                <span className="font-bold text-primary"> AI</span> – 
                <span className="italic">no CIBIL, no paperwork</span>.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/pre-apply">
                <Button 
                  size="lg" 
                  className="bg-primary text-white hover:bg-primary/90 transform hover:scale-105 transition-all duration-200 shadow-lg w-full sm:w-auto"
                >
                  <Rocket className="mr-2 h-4 w-4" />
                  Pre-Apply Now
                </Button>
              </Link>
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200 w-full sm:w-auto"
              >
                <Play className="mr-2 h-4 w-4" />
                Watch Demo
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-6 text-sm text-gray-500">
              <div className="flex items-center">
                <Shield className="h-4 w-4 text-green-500 mr-2" />
                RBI Regulated
              </div>
              <div className="flex items-center">
                <Lock className="h-4 w-4 text-green-500 mr-2" />
                Secure & Encrypted
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="floating-animation">
              <img 
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
                alt="Diverse professionals using mobile banking" 
                className="rounded-2xl shadow-2xl w-full h-auto" 
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold text-primary">₹50,000</div>
              <div className="text-sm text-gray-600">Max Loan Amount</div>
            </div>
            <div className="absolute -top-6 -right-6 bg-green-500 text-white p-4 rounded-xl shadow-lg">
              <div className="text-2xl font-bold">2 mins</div>
              <div className="text-sm">Approval Time</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
