import React, { useState } from "react";
import { z } from "zod";
import { IoMdCloseCircle } from "react-icons/io";


const registerSchema = z.object({
  fullName: z.string().min(3, "Full name must be at least 3 characters long"),
  contact: z.string().min(10, "Contact must be at least 10 digits").max(15),
  dateOfBirth: z.string(),
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
  gender: z.string().nonempty("Gender is required"),
});

const RegisterModal = ({ onClose,setIsLoginModalOpen }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    contact: "",
    dateOfBirth: "",
    email: "",
    password: "",
    gender: "",
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validation = registerSchema.safeParse(formData);

    if (validation.success) {
      console.log("Registration Successful", formData);
      onClose(); 
    } else {
      const formErrors = {};
      validation.error.errors.forEach((err) => {
        formErrors[err.path[0]] = err.message;
      });
      setErrors(formErrors);
    }
  };

  const handlelogin = () =>{
    onClose()
    setIsLoginModalOpen(true)
  }
  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#424242]  shadow-lg w-full max-w-lg p-6 relative text-white">
      <div className="flex flex-1 justify-between gap-1">
        <h2 className="text-2xl font-bold mb-4">Register</h2>
        <h3 onClick={onClose} className="cursor-pointer">
            <IoMdCloseCircle className="text-2xl text-[#FFEB3B]"/>
        </h3>
      </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md"
            />
            {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Contact</label>
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleInputChange}
              className="w-full px-4 text-black py-2 border border-gray-300 rounded-md"
            />
            {errors.contact && <p className="text-red-500">{errors.contact}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Date of Birth</label>
            <input
              type="date"
              name="dateOfBirth"
              value={formData.dateOfBirth}
              onChange={handleInputChange}
              className="w-full px-4 py-2 border text-black border-gray-300 rounded-md"
            />
            {errors.dateOfBirth && (
              <p className="text-red-500">{errors.dateOfBirth}</p>
            )}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email ID</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Gender</label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-black border border-gray-300 rounded-md"
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
            {errors.gender && <p className="text-red-500">{errors.gender}</p>}
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#FFEB3B] font-bold text-white py-2 px-4 "
            >
              Register
            </button>
          </div>

          <div className="text-center">
            <span  className="text-[#4CB051] hover:underline cursor-pointer" onClick={()=>{handlelogin()}}>
              Already have an account? Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterModal;
