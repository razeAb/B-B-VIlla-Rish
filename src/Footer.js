import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="contact-section bg-black text-white py-12">
      {/* אזור יצירת קשר */}
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4">צרו קשר</h2>
        <p className="text-lg mb-2">פנו אלינו לשאלות או הזמנות.</p>
        <p className="text-lg font-semibold mb-6">מספר טלפון: +972506290202</p>
        <p className="text-lg font-semibold mb-6">מספר טלפון: +972506223153</p>

        <div className="mt-6 flex justify-center items-center gap-8">
          <a
            href="https://wa.me/972506290202"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="לוגו WhatsApp" className="w-12 h-12" />
          </a>
          <a
            href="https://www.instagram.com/villarish?igsh=azN3dzNpcGticGE4"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="לוגו Instagram" className="w-12 h-12" />
          </a>
          <a
            href="https://www.facebook.com/share/1AbQccujje/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
              alt="לוגו Facebook"
              className="w-12 h-12"
            />
          </a>
          <a
            href="https://t.me/+B_wOZaSCw2k5YjU0"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform transform hover:scale-110"
          >
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg" alt="לוגו Telegram" className="w-12 h-12" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
