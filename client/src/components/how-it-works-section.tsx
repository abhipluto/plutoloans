export default function HowItWorksSection() {
  const steps = [
    {
      number: "1",
      title: "Apply Online",
      description: "Fill out our simple form in under 2 minutes. No lengthy paperwork required.",
      color: "bg-primary"
    },
    {
      number: "2",
      title: "AI Assessment",
      description: "Our AI analyzes your digital footprint and UPI transactions for instant approval.",
      color: "bg-green-500"
    },
    {
      number: "3",
      title: "Get Funded",
      description: "Receive funds directly in your bank account within minutes of approval.",
      color: "bg-yellow-500"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-xl text-gray-600">Get approved in 3 simple steps with our AI-powered platform</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className={`w-20 h-20 ${step.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-white text-2xl font-bold">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
