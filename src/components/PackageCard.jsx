import React from 'react';

const packages = [
  {
    image: '/pexels-elina-sazonova-1850619.jpg',
    name: 'Paris',
    attractions: 'Eiffel Tower, Louvre Museum, Notre-Dame Cathedral',
    price: '$1200',
    rating: '4.8',
  },
  {
    image: '/pexels-pixabay-40142.jpg',
    name: 'New York',
    attractions: 'Statue of Liberty, Central Park, Times Square',
    price: '$1500',
    rating: '4.7',
  },
  {
    image: '/pexels-apasaric-2506923.jpg',
    name: 'Tokyo',
    attractions: 'Shibuya Crossing, Tokyo Tower, Senso-ji Temple',
    price: '$1300',
    rating: '4.9',
  },
  {
    image: '/pexels-patrick-995765.jpg',
    name: 'Sydney',
    attractions: 'Sydney Opera House, Bondi Beach, Sydney Harbour Bridge',
    price: '$1400',
    rating: '4.6',
  },
  {
    image: '/pexels-chris-schippers-139261-427679.jpg',
    name: 'London',
    attractions: 'Big Ben, Buckingham Palace, London Eye',
    price: '$1600',
    rating: '4.7',
  },
  {
    image: '/pexels-davifnr-2064827.jpg',
    name: 'Rome',
    attractions: 'Colosseum, Vatican City, Roman Forum',
    price: '$1250',
    rating: '4.8',
  },
  {
    image: '/pexels-apasaric-1388030.jpg',
    name: 'Barcelona',
    attractions: 'Sagrada Familia, Park Güell, La Rambla',
    price: '$1350',
    rating: '4.7',
  },
  {
    image: '/pexels-apasaric-618079.jpg',
    name: 'Dubai',
    attractions: 'Burj Khalifa, Dubai Mall, Palm Jumeirah',
    price: '$1550',
    rating: '4.9',
  },
  {
    image: '/pexels-arefin-879478.jpg',
    name: 'Istanbul',
    attractions: 'Hagia Sophia, Blue Mosque, Grand Bazaar',
    price: '$1200',
    rating: '4.8',
  },
];

const PackageCard = ({ image, name, attractions, price, rating }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{name}</h3>
        <p className="text-gray-600 mb-4">{attractions}</p>
        <div className="flex justify-between items-center mb-4">
          <span className="text-lg font-semibold">{price}</span>
          <span className="text-yellow-500 flex items-center">
            <i className="fas fa-star mr-1"></i>{rating}
          </span>
        </div>
        <button className="w-full bg-yellow-400 text-white py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
          Book Now
        </button>
      </div>
    </div>
  );
};

const PackageGallery = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Package Gallery</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              image={pkg.image}
              name={pkg.name}
              attractions={pkg.attractions}
              price={pkg.price}
              rating={pkg.rating}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PackageGallery;
