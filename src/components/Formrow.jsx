import React, { useState } from 'react'

const Formrow = () => {
  const [formData, setFormData] = useState({
    destination: '',
    persons: 1,
    startDate: '',
    endDate: '',
    description: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { destination, persons, startDate, endDate, description } = formData;
    const currentDate = new Date().toISOString().split('T')[0];
    const start = new Date(startDate);
    const end = new Date(endDate);

    // Validate form
    if (!destination || persons <= 0 || !startDate || !endDate || description.length < 50 || description.length > 500) {
      alert('Please fill in all fields correctly.');
      return;
    }

    if (startDate < currentDate) {
      alert('Start date must be in the future.');
      return;
    }

    if (endDate <= startDate) {
      alert('End date must be after the start date.');
      return;
    }

    alert('Booking successful!');
    setFormData({
      destination: '',
      persons: 1,
      startDate: '',
      endDate: '',
      description: '',
    });
  };

  return (
    <div className="flex flex-col md:flex-row gap-2 justify-center items-center min-h-screen bg-gray-100 py-8">
      {/* Left Section - Image */}
      <div className="w-full md:w-1/2 p-4 rounded-lg shadow-lg ">
      <div className="text-center flex justify-center">
    <span className="text-yellow-500 font-pacifico text-5xl uppercase font-bold block">
      Travel
    </span>
    <span className="text-green-500 font-pacifico text-5xl uppercase font-bold block">
      World
    </span>
  </div>
  <img
    src="travel-agent.png"
    alt="Travel World"
    className="w-full h-full object-cover md:max-h-[640px] "
  />
  {/* Text Below the Image */}
  
</div>


      {/* Right Section - Form */}
      <div className="w-full md:w-1/2 p-8 bg-white shadow-lg rounded-lg md:max-h-[800px] flex flex-col justify-center">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Book Your Travel</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Destination */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Where to:</label>
            <select
              name="destination"
              value={formData.destination}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300"
              required
            >
              <option value="">Select Destination</option>
              <option value="New York">New York</option>
              <option value="London">London</option>
              <option value="Tokyo">Tokyo</option>
              <option value="Sydney">Sydney</option>
            </select>
          </div>

          {/* Persons */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">How Many Persons:</label>
            <input
              type="number"
              name="persons"
              value={formData.persons}
              onChange={handleInputChange}
              min="1"
              className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300"
              required
            />
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Start Date:</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300"
              min={new Date().toISOString().split('T')[0]} // Restrict to future dates
              required
            />
          </div>

          {/* End Date */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">End Date:</label>
            <input
              type="date"
              name="endDate"
              value={formData.endDate}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300"
              min={formData.startDate} // Restrict to dates after the start date
              required
            />
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-semibold mb-2 text-gray-700">Description:</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              className="w-full p-3 border rounded-lg text-gray-600 focus:ring-2 focus:ring-yellow-300"
              minLength="50"
              maxLength="500"
              placeholder="Enter at least 50 characters, maximum 500 characters."
              required
            />
          </div>

          {/* Book Now Button */}
          <div>
            <button
              type="submit"
              className="w-full bg-yellow-400 text-white py-3 px-6 rounded-lg font-bold hover:bg-yellow-500 transition duration-300"
            >
              Book Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Formrow;
