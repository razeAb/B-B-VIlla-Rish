import React from "react";

const Footer = () => {
  return (
    <footer className="contact-section bg-black text-white py-12">
      {/* אזור יצירת קשר */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">צרו קשר</h2>
        <p className="text-lg mb-2">פנו אלינו לשאלות או הזמנות.</p>
        <p className="text-lg font-semibold mb-6">מספר טלפון: +972506223153</p>
        <div className="flex justify-center items-center gap-4">
          {/* <input
            type="email"
            placeholder="הכניסו אימייל לקבלת עדכונים"
            className="p-3 w-80 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#bba168]"
          /> */}
          {/* <button className="p-3 bg-[#bba168] text-black font-bold rounded-r-lg hover:bg-yellow-700 transition">
            שלח
          </button> */}
        </div>
        <div className="mt-6 flex justify-center items-center gap-8">
          <a
            href="https://wa.me/972506223153"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
              alt="לוגו WhatsApp"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="לוגו Instagram"
              className="w-12 h-12"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
