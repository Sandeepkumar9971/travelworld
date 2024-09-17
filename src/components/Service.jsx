import React from 'react';

const services = [
  {
    title: 'Affordable Hotel',
    description: 'Find budget-friendly hotels with excellent amenities for a comfortable stay.',
    icon: '/pet-shelter.png',
  },
  {
    title: 'Food & Drinks',
    description: 'Enjoy delicious local cuisine and refreshing drinks at various restaurants and cafes.',
    icon: '/fast-food.png',
  },
  {
    title: 'Safety Guide',
    description: 'Receive comprehensive safety information and guidance for a worry-free trip.',
    icon: '/guidelines.png',
  },
  {
    title: '24/7 Support',
    description: 'Access round-the-clock customer support for any issues or queries you may have.',
    icon: '/24-hours-support.png',
  },
  {
    title: 'Local Tours',
    description: 'Join guided tours to explore local attractions and hidden gems.',
    icon: '/tour-guide.png',
  },
  {
    title: 'Transportation',
    description: 'Convenient and reliable transportation options to get you where you need to go.',
    icon: '/transportation.png',
  },
];

const ServiceCard = ({ title, description, icon }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex flex-col items-center text-center">
      <img src={icon} alt={title} className="w-16 h-16 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const ServicesSection = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
