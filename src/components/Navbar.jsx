import { useState } from 'react';
import { Menu } from 'lucide-react'; // Hamburger icon ke liye
export const Navbar = () =>{
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    return(
      <header className="bg-gray-800 text-white w-full">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Brand Logo or Name */}
        <div className="text-2xl font-bold">
          {/* Replace with logo or brand name */}
          {/* <img
            src="/logoimage.png"
            alt="Brand Logo"
            className="h-12 w-12 inline-block"
          /> */}
          {
            " "}
          <span className="text-yellow-500 font-pacifico uppercase font-bold">Travel</span>
          <span className="text-green-500 font-pacifico uppercase font-bold">World</span>
        </div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
          <a href="#" className="hover:text-yellow-500">
            Home
          </a>
          <a href="#" className="hover:text-yellow-500">
            Book
          </a>

          {/* Packages with Dropdown */}
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

          <a href="#" className="hover:text-yellow-500">
            Services
          </a>
          <a href="#" className="hover:text-yellow-500">
            Gallery
          </a>
          <a href="#" className="hover:text-yellow-500">
            About
          </a>
        </nav>

        {/* Login and Register Buttons */}
        <div className="space-x-4 hidden md:flex">
          <button className="px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400">
            Login
          </button>
          <button className="px-4 py-2 bg-yellow-500 font-bold rounded hover:bg-yellow-400">
            Register
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex justify-between items-center">
          <button
            className="text-yellow-500"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <Menu/>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 py-4">
          <nav className="flex flex-col space-y-4 items-center">
            <a href="#" className="hover:text-yellow-500">
              Home
            </a>
            <a href="#" className="hover:text-yellow-500">
              Book
            </a>
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
            <a href="#" className="hover:text-yellow-500">
              Services
            </a>
            <a href="#" className="hover:text-yellow-500">
              Gallery
            </a>
            <a href="#" className="hover:text-yellow-500">
              About
            </a>

            {/* Login and Register Buttons */}
            <div className='flex flex-1 flex-row gap-5'>
            <button className="px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400 w-24">
              Login
            </button>
            <button className="px-4 py-2 bg-yellow-500 rounded font-bold hover:bg-yellow-400 w-24">
              Register
            </button>
            </div>
          </nav>
        </div>
      )}
    </header>

    )
}