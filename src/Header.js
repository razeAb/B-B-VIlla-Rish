import React from "react";

const Header = () => {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
  <img
    src="\images\img51.jpeg"
    alt="Villa Rish Logo"
    className="h-10 transform scale-125" // Increases the size of the image
  />
  <span className="text-lg font-bold">VILLA RISH</span>
</div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8 text-sm font-medium">
          <a
            href="#home"
            className="hover:text-[#bba168] pb-1 border-b-2 border-transparent hover:border-[#bba168] transition duration-300"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:text-[#bba168] pb-1 border-b-2 border-transparent hover:border-[#bba168] transition duration-300"
          >
            About Us
          </a>
          <a
            href="#facilities"
            className="hover:text-[#bba168] pb-1 border-b-2 border-transparent hover:border-[#bba168] transition duration-300"
          >
            Facilities
          </a>
          <a
            href="#booking"
            className="hover:text-[#bba168] pb-1 border-b-2 border-transparent hover:border-[#bba168] transition duration-300"
          >
            Booking
          </a>
        </nav>

        {/* Contact Us Button */}
        <a href="#contact" className="bg-[#bba168] text-black px-6 py-2 rounded-md text-sm font-bold hover:bg-yellow-600 transition">
          Contact Us
        </a>
      </div>
    </header>
  );
};

export default Header;
