import { useEffect, useState } from "react";

interface CounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
}

function Counter({ target, suffix = "", prefix = "" }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function StatisticsSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary">
              <Counter target={300} suffix="M+" />
            </div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Million+</div>
            <div className="text-sm text-gray-500">Underserved Users</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-green-500">
              <Counter target={2} />
            </div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Minutes</div>
            <div className="text-sm text-gray-500">Average Approval</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-yellow-500">
              <Counter target={99} suffix="%" />
            </div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Percent</div>
            <div className="text-sm text-gray-500">Digital Process</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-purple-500">
              <Counter target={50000} prefix="₹" />
            </div>
            <div className="text-lg font-semibold text-gray-700 mt-2">Rupees</div>
            <div className="text-sm text-gray-500">Maximum Loan</div>
          </div>
        </div>
      </div>
    </section>
  );
}
