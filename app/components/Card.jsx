import React from 'react';

const Card = () => {
    const packages = [
        {
          id: 1,
          name: "Bike Wash",
          price: "₹60",
          description: "A quick and effective wash to keep your bike spotless.",
          features: [
            "Pressure Washing",
            "Foam Wash",
            "Tyre Polish",
            "Black Parts Polish"
          ],
          gradient: "from-indigo-900 to-blue-900",
          accentColor: "bg-blue-500"
        },
        {
          id: 2,
          name: "Top Wash",
          price: "₹200 - 250",
          description: "A detailed wash for a fresh and gleaming exterior.",
          features: [
            "Exterior Pressure Washing",
            "Foam Wash",
            "Tyre Polish",
            "Black Parts Polish"
          ],
          gradient: "from-violet-900 to-purple-900",
          accentColor: "bg-purple-500"
        },
        {
          id: 3,
          name: "Basic Car Wash",
          price: "₹350 - 450",
          description: "A complete wash to refresh and restore your car’s look.",
          features: [
            "Exterior Pressure Washing",
            "Foam Wash",
            "Interior Vaccume",
            "Tyre & Dashboard Polish",
            "Black Parts Polish"
          ],
          gradient: "from-emerald-900 to-teal-900",
          accentColor: "bg-emerald-500"
        },
        {
          id: 4,
          name: "Premium Wash",
          price: "₹500 - 600",
          description: "A deep-cleaning treatment for an ultimate shine inside out.",
          features: [
            "Exterior Pressure Washing",
            "Foam Wash",
            "Interior Vaccume",
            "Upholstery Cleaning",
            "Full Body Polishing",
          ],
          gradient: "from-amber-900 to-yellow-900",
          accentColor: "bg-amber-500",
          featured: true
        }
      ];
    
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg) => (
          <div 
            key={pkg.id} 
            className={`rounded-xl overflow-hidden transition-all duration-500 hover:scale-105 border border-gray-800 bg-black `}
          >
            <div className={`bg-gradient-to-br ${pkg.gradient} p-6`}>
              <p className="uppercase text-xs font-medium mb-3 tracking-wider text-gray-300 opacity-80">Package</p>
              <h2 className="text-2xl font-bold text-white tracking-wide">{pkg.name}</h2>
              <div className="mt-4 flex items-baseline">
                <p className="text-3xl font-bold text-white">{pkg.price}</p>
                <span className="ml-1 text-xs text-gray-300 opacity-90">only</span>
              </div>
              <p className="mt-2 text-sm text-gray-300 opacity-90">{pkg.description}</p>
            </div>
            
            <div className="p-6">
              <p className="uppercase text-xs font-medium mb-4 tracking-wider text-gray-400">What's included</p>
              <ul className="space-y-3">
                {pkg.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-gray-300 text-sm">
                    <div className={`${pkg.accentColor} w-4 h-4 rounded-full mr-3 mt-0.5 flex items-center justify-center`}>
                      <svg className="w-2.5 h-2.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
              

            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;