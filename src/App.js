import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate } from "react-router-dom";
import "../src/App.css";
import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "react-multi-carousel/lib/styles.css";
import PlacesNear from "./PlacesNear";
import RestaurantsNear from "./RestaurantsNear";
import Icons from "./icons";
import Header from "./Header"; // ייבוא כותרת
import Footer from "./Footer"; // ייבוא תחתית עמוד
import BookingLinks from "./BookingLinks"; // ייבוא קישורי הזמנה

function App() {
  const slides = [
    { src: "/images/img1.jpg" },
    { src: "/images/img2.jpg" },
    { src: "/images/img3.jpg" },
    { src: "/images/img4.jpg" },
    { src: "/images/img5.jpg" },
    { src: "/images/img6.jpg" },
    { src: "/images/img7.jpg" },
    { src: "/images/img8.jpg" },
    { src: "/images/img9.jpg" },
    { src: "/images/img10.jpg" },
    { src: "/images/img11.jpg" },
    { src: "/images/img12.jpg" },
    { src: "/images/img13.jpg" },
    { src: "/images/img14.jpg" },
    { src: "/images/img15.jpg" },
    { src: "/images/img16.jpg" },
    { src: "/images/img17.jpg" },
    { src: "/images/img18.jpg" },
    { src: "/images/img19.jpg" },
    { src: "/images/img20.jpg" },
    { src: "/images/img21.jpg" },
    { src: "/images/img22.jpg" },
    { src: "/images/img23.jpg" },
    { src: "/images/img24.jpg" },
    { src: "/images/img25.jpg" },
    { src: "/images/img26.jpg" },
    { src: "/images/img27.jpg" },
    { src: "/images/img28.jpg" },
    { src: "/images/img29.jpg" },
    { src: "/images/img30.jpg" },
    { src: "/images/img31.jpg" },
    { src: "/images/img32.jpg" },
    { src: "/images/img33.jpg" },
    { src: "/images/img34.jpg" },
    { src: "/images/img35.jpg" },
    { src: "/images/img36.jpg" },
    { src: "/images/img37.jpg" },
    { src: "/images/img38.jpg" },
    { src: "/images/img39.jpg" },
    { src: "/images/img40.jpg" },
    { src: "/images/img41.jpg" },
    { src: "/images/img42.jpg" },
    { src: "/images/img43.jpg" },
    { src: "/images/img44.jpg" },
    { src: "/images/img45.jpg" },
    { src: "/images/img46.jpg" },
  ];

  return (
    <div className="App">
      <Header />
      <header className="booking-header text-right py-16 bg-white" dir="rtl">
  <h1 className="text-5xl font-extrabold mb-6">בואו להזמין איתנו</h1>
  <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
  על Villa Rish - בית האירוח שלנו בירכא

אנחנו משפחה מהכפר הדרוזי ירכא, שמחים להזמין אתכם לחוויית אירוח מיוחדת בווילה המשפחתית שלנו. Villa Rish היא בית שתוכנן בקפידה כדי להעניק לאורחינו את השילוב המושלם בין אווירה ביתית חמה לבין נוחות מודרנית ויוקרתית.

הווילה שלנו משקיפה אל נופי הגליל המרהיבים, ומשלבת את המסורת הדרוזית המפורסמת בהכנסת אורחים יחד עם כל הפינוקים שתוכלו לבקש - החל מבריכת שחייה חיצונית מפנקת, דרך מטבח מאובזר במלואו, ועד לארבעה חדרי שינה מרווחים.

הצוות שלנו, הדובר עברית, ערבית ואנגלית, זמין עבורכם 24/7 כדי להבטיח שהשהייה שלכם תהיה מושלמת. אנחנו מאמינים שהמיקום המיוחד שלנו, במרחק נסיעה קצר מאתרי התיירות המובילים של הצפון כמו עכו וחיפה, יחד עם האירוח החם והמסורתי, יהפכו את הביקור שלכם לחוויה בלתי נשכחת.
  </p>



        <div className="mt-6 flex justify-center">
          {/* <input
            type="email"
            placeholder="הכנס כתובת מייל לעדכונים"
            className="p-3 w-96 border border-gray-300 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#bba168]"
          />
          <button className="p-3 bg-[#bba168] text-white font-bold rounded-r-lg hover:bg-yellow-700 transition">
            שלח
          </button> */}
        </div>
      </header>
      <main>
        <section className="facilities-section bg-[#bba168] py-16 text-white">
          <div className="flex justify-start items-center flex-col md:flex-row">
            <div className="w-full md:w-auto text-left ml-16">
              <h2 className="text-4xl font-bold mb-8">מתקנים</h2>
              <div className="bg-black text-white p-6 rounded-lg w-80 shadow-lg">
                <ul className="space-y-4">
                  <li>חדרים ללא עישון</li>
                  <li>חניה חינם</li>
                  <li>בית פרטי</li>
                  <li>בריכת שחייה חיצונית</li>
                  <li>Wi-Fi חינם</li>
                  <li>בריכה מחוממת</li>
                  <li>טעינת רכב חשמלי</li>
                  <li>ג'קוזי</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* גלריה */}
        <section className="gallery-section py-16">
          <h2 className="text-4xl font-bold text-center mb-12">גלריה</h2>
          <div className="container mx-auto">
            <ImageSlider slides={slides} />
          </div>
        </section>

        {/* דברים לעשות */}
        <section className="things-to-do py-16 bg-white">
          <h2 className="section-title">
            דברים לעשות ב- <span>כפר ירכא</span>
          </h2>
          <PlacesNear />
        </section>

        {/* מקומות לאכול */}
        <section className="places-to-eat py-16 bg-white">
          <h2 className="section-title">
            מקומות לאכול ב- <span>כפר ירכא</span>
          </h2>
          <RestaurantsNear />
        </section>

        {/* קישורי הזמנה */}
      </main>
      <Footer />
      <BookingLinks />
    </div>
  );
}

export default App;
