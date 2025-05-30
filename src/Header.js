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

        {/* Contact Us Button */}
        <a
          href="https://app.b-on.co.il/online/order-v2/Rish"
          target="_blank"
          className="bg-[#bba168] text-black px-6 py-2 rounded-md text-sm font-bold hover:bg-yellow-600 transition"
        >
          להזמנת מקום
        </a>
      </div>
    </header>
  );
};

export default Header;
