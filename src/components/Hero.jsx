import { useState, useEffect } from "react";

export const Hero = () => {
  const [countryIndex, setCountryIndex] = useState(0);
  const countries = ["United States", "India", "France", "Germany", "Canada"];

  // Automatically update the country name every 2 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCountryIndex((prevIndex) => (prevIndex + 1) % countries.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [countries.length]);

  return (
    <section
      className="h-[90vh] bg-[url('https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')] bg-cover bg-center bg-no-repeat relative"
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="text-center mx-auto text-white">
          {/* Welcome Text */}
          <h1 className="text-4xl font-bold sm:text-6xl mb-4">
            Welcome to <span className="text-yellow-400"> 
                <span className="text-yellow-500 font-pacifico uppercase">Travel</span>
            <span className="text-green-500 font-pacifico uppercase">World</span>
            </span>
          </h1>

          {/* Country Change Text */}
          <h2 className="text-5xl font-extrabold text-white sm:text-7xl">
            Visit <span className="text-blue-400">{countries[countryIndex]}</span>
          </h2>

          {/* Book Now Button */}
          <div className="mt-8">
            <button className="px-8 py-3 bg-yellow-500  hover:bg-rose-600 text-white text-lg rounded-lg font-semibold shadow-md">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
