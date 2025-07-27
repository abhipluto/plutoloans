// PreApply.jsx – Form with EmailJS Integration

import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { Rocket, User, Mail, Phone, IndianRupee, Clock, Shield, Zap, CheckCircle, ArrowRight } from 'lucide-react';

const PreApply = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    if (formRef.current) {
      emailjs.sendForm(
        'service_fes810k',
        'template_h3igwjg',
        formRef.current,
        'R7eWMQcRk7QSfffhV'
      ).then(() => {
        alert("Submitted successfully! We'll notify you at launch.");
        if (formRef.current) {
          formRef.current.reset();
        }
      }).catch((err: any) => {
        alert("Submission failed. Try again.");
        console.error(err);
      }).finally(() => {
        setIsSubmitting(false);
      });
    }
  };

  const benefits = [
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "2-Minute Approval",
      description: "Get instant decisions with our AI technology"
    },
    {
      icon: <Shield className="h-6 w-6 text-green-500" />,
      title: "No CIBIL Required",
      description: "Alternative credit assessment for everyone"
    },
    {
      icon: <Zap className="h-6 w-6 text-yellow-500" />,
      title: "Same-Day Disbursal",
      description: "Funds directly to your bank account"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Pre-Apply",
      description: "Fill this simple form in under 1 minute"
    },
    {
      number: "2",
      title: "AI Assessment",
      description: "Our AI analyzes your digital footprint"
    },
    {
      number: "3",
      title: "Get Notified",
      description: "We'll contact you when we launch"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-blue-50">
      {/* Hero Section */}
      <div className="pt-16 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Rocket className="h-4 w-4 mr-2" />
            Early Access Program
          </div>
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
            Pre-Apply for <span className="text-primary">Pluto Loans</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Be the first to access AI-powered personal loans. Join thousands who are already waiting for our revolutionary lending platform.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Pre-Apply Form */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-white" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Join the Waitlist</h2>
              <p className="text-gray-600">Reserve your spot for priority access when we launch</p>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="h-4 w-4 inline mr-2" />
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="h-4 w-4 inline mr-2" />
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="h-4 w-4 inline mr-2" />
                  Your Mobile
                </label>
                <input
                  name="mobile"
                  type="tel"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="Enter your mobile number"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <IndianRupee className="h-4 w-4 inline mr-2" />
                  Loan Requirement / Interest
                </label>
                <input
                  name="interest"
                  type="text"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 text-gray-900"
                  placeholder="E.g., ₹5,000 for books, ₹25,000 for business"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-primary to-purple-600 text-white py-4 px-6 rounded-lg font-semibold text-lg hover:shadow-lg focus:ring-4 focus:ring-primary/20 transition-all duration-200 transform hover:scale-105 disabled:opacity-50 disabled:transform-none flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Join Waitlist
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree to receive updates about Pluto Loans launch
              </p>
            </form>
          </div>

          {/* Information Section */}
          <div className="space-y-8">
            {/* Benefits */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Why Join Early?</h3>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                    <div className="flex items-start">
                      <div className="mr-4 mt-1">
                        {benefit.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">{benefit.title}</h4>
                        <p className="text-gray-600 text-sm">{benefit.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
              <div className="space-y-4">
                {steps.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold text-sm mr-4 flex-shrink-0">
                      {step.number}
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">{step.title}</h4>
                      <p className="text-gray-600 text-sm">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Launch Promise */}
            <div className="bg-gradient-to-r from-green-500 to-primary rounded-2xl p-8 text-white">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-8 w-8 mr-3" />
                <h3 className="text-xl font-bold">Launch Promise</h3>
              </div>
              <p className="mb-4">Early users get exclusive benefits:</p>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Priority loan processing
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Special interest rates
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Extended repayment terms
                </li>
                <li className="flex items-center">
                  <CheckCircle className="h-4 w-4 mr-2" />
                  Dedicated customer support
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreApply;
