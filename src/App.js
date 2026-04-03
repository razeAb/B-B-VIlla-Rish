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
import GoogleMaps from "./GoogleMapsTemp";
import Footer2 from "./Footer2";

function App() {
  const slides = [
    { src: "/images/img1.jpg" },
    { src: "/images/img3.jpg" },
    { src: "/images/img4.jpg" },
    { src: "/images/img5.jpg" },
    { src: "/images/img6.jpeg" },
    { src: "/images/img8.jpeg" },
    { src: "/images/img9.jpg" },
    { src: "/images/DSC_6810.jpg" },
    { src: "/images/DSC_6815.jpg" },
    { src: "/images/DSC_6821.jpg" },
    { src: "/images/DSC_6823.jpg" },
    { src: "/images/DSC_6844 (1).jpg" },
    { src: "/images/img13.jpeg" },
    { src: "/images/img14.jpg" },
    { src: "/images/img15.jpg" },
    { src: "/images/img16.jpg" },
    { src: "/images/img17.jpeg" },
    { src: "/images/img18.jpg" },
    { src: "/images/img19.jpg" },
    { src: "/images/img20.jpg" },
    { src: "/images/img22.jpg" },
    { src: "/images/img23.jpg" },
    { src: "/images/img24.jpg" },
    { src: "/images/img25.jpg" },
    { src: "/images/img26.jpg" },
    { src: "/images/img27.jpg" },
    { src: "/images/img28.jpg" },
    { src: "/images/img29.jpg" },
    { src: "/images/img30.jpg" },
    { src: "/images/img31.jpeg" },
    { src: "/images/img32.jpg" },
    { src: "/images/img34.jpg" },
    { src: "/images/img35.jpg" },
    { src: "/images/img36.jpg" },
    { src: "/images/img37.jpg" },
    { src: "/images/img38.jpg" },
    { src: "/images/img39.jpg" },
    { src: "/images/img40.jpg" },
    { src: "/images/img42.jpg" },
    { src: "/images/img43.jpg" },
    { src: "/images/img46.jpg" },
    { src: "/images/img49.jpg" },
    { src: "/images/garden1.jpeg" },
    { src: "/images/garden2.jpeg" },
    { src: "/images/garden3.jpeg" },
  ];

  return (
    <div className="App">
      <Header />
      <header className="booking-header text-right py-16 bg-white" dir="rtl">
        <h1 className="header text-5xl font-extrabold mb-6"> וילה ריש - חופשה של התחדשות המעניקה שלווה אמיתית </h1>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed">
          Villa Rish – פאר, יוקרה ושלווה ✨
          <br />
          אנחנו משפחה מהכפר הדרוזי ירכא, ומזמינים אתכם לחוויית אירוח מיוחדת בוילה המשפחתית שלנו – שילוב מושלם בין אירוח דרוזי חם לבין נוחות
          מודרנית ויוקרתית.
          <br />
          <br />
          <strong>Villa Rish &amp; Spa</strong> הוא ריזורט של שלווה בלב הגליל 🌿, עם נופים מרהיבים וחוויה בלתי נשכחת למשפחות ולקבוצות (עד 18 אורחים).
          <br />
          <br />
          <strong>מה מחכה לכם כאן?</strong>
          <br />
          • ספא וחמאם טורקי מסורתי, תפריט עיסויים מותאם אישית, ג'קוזי ענק ובריכה גדולה ומחוממת לאורך כל השנה ✨
          <br />
          • 4 חדרי שינה זוגיים מפוארים וחללי אירוח מרווחים 🏡
          <br />
          • מטבח מאובזר, עמדת מנגל מקצועית, שולחן סנוקר ופינג-פונג 🎯
          <br />
          • עמדת טעינה לרכב חשמלי, ממ"ד צמוד ושירות אישי 24/7 🚗
          <br />
          <br />
          יותר מוילה – זה המקום שלכם להטעין אנרגיות מחדש 💫
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
            <div className="w-full md:w-auto text-right ml-16">
              <div className="bg-[#bba168] text-white p-6 rounded-lg w-80 shadow-lg">
                <h2 className="text-2xl font-bold mb-8 bg-black text-white px-4 py-2 rounded-md font-bold  flex items-center justify-center">
                  מתקנים
                </h2>

                <ul className="space-y-4" dir="rtl">
                  <li>בריכה מחוממת</li>
                  <li>ג'קוזי</li>
                  <li>Wi-Fi חינם</li>
                  <li>חדרים ללא עישון</li>
                  <li>חניה חינם</li>
                  <li>טעינת רכב חשמלי</li>
                  <li>פסנתר כנף </li>
                  <li>שולחן ביליארד וסנוקר </li>
                  <li>פינת משחק לילדים </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* גלריה */}
        <section className="gallery-section py-24">
          <h2 className="text-4xl font-bold text-center mb-12">גלריה</h2>
          <div className="container mx-auto max-w-screen-xl">
            <ImageSlider slides={slides} />
          </div>
        </section>
        {/* {google maps} */}
        <section className="py-16 ">
          <h2 className="text-4xl font-bold text-center mb-12 ">מפה</h2>
          <div className="container mx-auto">
            <GoogleMaps />
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
      <Footer2 />
    </div>
  );
}

export default App;
