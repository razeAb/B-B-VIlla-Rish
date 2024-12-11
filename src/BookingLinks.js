import React from "react";

const BookingLinks = () => {
  return (
    <section className="booking-links py-12 bg-white text-center">
      <h2 className="text-4xl font-bold mb-8">הזמנת חדרים באמצעות אתרים</h2>
      <div className="flex flex-wrap justify-center items-center gap-8">
        <a
          href="https://www.booking.com/hotel/il/villa-rish.he.html"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img
            src="https://w7.pngwing.com/pngs/309/733/png-transparent-booking-com-app-logo-tech-companies-thumbnail.png"
            alt="לוגו Booking.com"
            className="w-16 h-16 object-contain"
          />
        </a>
        <a
          href="https://my.weekend.co.il/villa_rish/#whataround"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img
            src="https://www.weekend.co.il/images/logo_transperant.svg"
            alt="לוגו Weekend"
            className="w-24 h-24 object-contain"
          />
        </a>
        <a
          href="https://www.vila4u.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img
            src="https://www.vila4u.com/webimages/minilogo3.png"
            alt="לוגו Vila4U"
            className="w-24 h-24 object-contain"
          />
        </a>
        {/* <a
          href="https://www.vii.co.il/"
          target="_blank"
          rel="noopener noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <img
            src="https://www.vii.co.il/assets/img/logo_new.png"
            alt="לוגו VII"
            className="w-24 h-24 object-contain"
          />
        </a> */}
      </div>
    </section>
  );
};

export default BookingLinks;
