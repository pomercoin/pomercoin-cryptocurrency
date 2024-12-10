import React from 'react';
import CountUp from 'react-countup';

export function Stats() {
  return (
    <div className="py-20 bg-gradient-to-r from-orange-500 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-white text-center">
          {[
            { value: 250000, label: "Holders", suffix: "+" },
            { value: 1000000, label: "Market Cap", prefix: "$" },
            { value: 95, label: "Price Growth", suffix: "%" },
            { value: 50000, label: "Community Members", suffix: "+" }
          ].map((stat, index) => (
            <div key={index}>
              <h3 className="text-3xl md:text-4xl font-bold mb-2">
                {stat.prefix}
                <CountUp end={stat.value} duration={2.5} separator="," />
                {stat.suffix}
              </h3>
              <p className="text-white/80">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}