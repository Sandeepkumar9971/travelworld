import React, { useState } from "react";
import { z } from "zod";
import { IoMdCloseCircle } from "react-icons/io";

// Zod schema for validation
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const LoginModal = ({ onClose,setIsRegisterModalOpen }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    // Validate form data using Zod schema
    const result = loginSchema.safeParse(formData);

    if (!result.success) {
      // Extract errors from the Zod validation
      const formattedErrors = result.error.format();
      setErrors({
        email: formattedErrors.email?._errors[0],
        password: formattedErrors.password?._errors[0],
      });
    } else {
      // No validation errors, proceed with login
      console.log("Login form submitted", formData);
      setErrors({}); // Clear errors
      onClose(); // Close the modal after successful login
    }
  };

  const handleregister = () =>{
      onClose()
      setIsRegisterModalOpen(true)
  }

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-[#424242]  shadow-lg w-full max-w-lg p-6 relative text-white">
        <h2 className="text-2xl font-bold mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              required
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className={`w-full px-4 py-2 border ${
                errors.password ? "border-red-500" : "border-gray-300"
              } rounded-md`}
              required
            />
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password}</p>
            )}
          </div>
          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-[#FFEB3B] text-white py-2 px-4 rounded-md hover:bg-[#FFEB3B]/50"
            >
              Login
            </button>
          </div>
          <div className="text-center">
            <span className="text-[#4CB051] hover:underline cursor-pointer" onClick={()=>{handleregister()}}>
              Don't have an account? Register
            </span>
          </div>
        </form>
        <span
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 cursor-pointer"
          onClick={onClose}
        >
           <IoMdCloseCircle className="text-2xl text-[#FFEB3B]"/>
        </span>
      </div>
    </div>
  );
};

export default LoginModal;
