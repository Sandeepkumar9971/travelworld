import { useState } from "react";
import { Menu } from "lucide-react";
import RegisterModal from './forms/registerform';
import LoginModal from './forms/loginform'; 

export const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false); // Register Modal state
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false); // Login Modal state

  return (
    <header className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <span className="text-yellow-500 font-pacifico uppercase font-bold">
            Travel
          </span>
          <span className="text-green-500 font-pacifico uppercase font-bold">
            World
          </span>
        </div>

        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-yellow-500">Home</a>
          <a href="#" className="hover:text-yellow-500">Book</a>

          <div
            className="relative cursor-pointer hover:text-yellow-500"
            onMouseEnter={() => setIsDropdownOpen(true)}
            onMouseLeave={() => setIsDropdownOpen(false)}
          >
            <span>Packages</span>
            {isDropdownOpen && (
              <div className="z-30 absolute left-0 py-2 w-48 bg-white rounded-lg shadow-lg text-black">
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  United States
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  India
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  France
                </a>
                <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                  Germany
                </a>
              </div>
            )}
          </div>

          <a href="#" className="hover:text-yellow-500">Services</a>
          <a href="#" className="hover:text-yellow-500">Gallery</a>
          <a href="#" className="hover:text-yellow-500">About</a>
        </nav>

        <div className="space-x-4 hidden md:flex">
          <button
            className="px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400"
            onClick={() => setIsLoginModalOpen(true)} // Open login modal
          >
            Login
          </button>
          <button
            className="px-4 py-2 bg-yellow-500 font-bold rounded hover:bg-yellow-400"
            onClick={() => setIsRegisterModalOpen(true)} // Open register modal
          >
            Register
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <Menu className="h-8 w-8" />
          </button>
        </div>

        {/* Render Register Modal */}
        {isRegisterModalOpen && (
          <RegisterModal onClose={() => setIsRegisterModalOpen(false)} setIsLoginModalOpen={setIsLoginModalOpen}/>
        )}

        {/* Render Login Modal */}
        {isLoginModalOpen && (
          <LoginModal onClose={() => setIsLoginModalOpen(false)} setIsRegisterModalOpen={setIsRegisterModalOpen}/>
        )}
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden">
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Home</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Book</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Packages</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Services</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">Gallery</a>
          <a href="#" className="block px-4 py-2 hover:bg-gray-700">About</a>
          <div className="py-2">
            <button
              className="px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400"
              onClick={() => setIsLoginModalOpen(true)} // Open login modal in mobile view
            >
              Login
            </button>
            <button
              className="ml-2 px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400"
              onClick={() => setIsRegisterModalOpen(true)} // Open register modal in mobile view
            >
              Register
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
