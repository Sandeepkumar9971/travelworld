import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center space-y-8 md:space-y-0">
        
        {/* Left Side - Image with Branding */}
        <div className="w-full md:w-1/2 p-4 rounded-lg shadow-lg">
          <div className="text-center flex justify-center mb-4">
            <span className="text-yellow-500 font-pacifico text-5xl uppercase font-bold">
              Travel
            </span>
            <span className="text-green-500 font-pacifico text-5xl uppercase font-bold">
              World
            </span>
          </div>
          <img
            src="about.jpg" 
            alt="Travel World"
            className="w-full h-full object-center md:max-h-[400px] rounded-lg"
          />
        </div>

        {/* Right Side - Information */}
        <div className="w-full md:w-1/2 p-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">About Us</h2>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Established in 2024, <strong>Travel World</strong> was founded with the mission to offer premium travel experiences to clients worldwide. Over the years, we have earned a reputation for creating unforgettable journeys, customizing trips based on individual needs and desires.
          </p>
          <p className="text-base md:text-lg leading-relaxed mb-4">
            Our team is dedicated to delivering excellent service, ensuring the highest standards of safety and satisfaction. From luxury vacations to adventure-packed itineraries, we cater to all types of travelers.
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            With a wealth of experience, <strong>Travel World</strong> is your trusted partner in making every journey an extraordinary adventure. We look forward to guiding you on your next exploration.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
