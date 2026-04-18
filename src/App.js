import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
import ImageManager from "./ImageManager";
import PhotoBrowser from "./PhotoBrowser";
import baseSlides from "./slidesData";
import {
  buildCarouselSlides,
  IMAGES_UPDATED_EVENT,
  readAddedImages,
  readDeletedImages,
} from "./imageStorage";

function App() {
  const [slides, setSlides] = useState(baseSlides);

  useEffect(() => {
    const syncSlides = () => {
      const added = readAddedImages();
      const deleted = readDeletedImages();
      setSlides(buildCarouselSlides(baseSlides, added, deleted));
    };

    syncSlides();
    window.addEventListener(IMAGES_UPDATED_EVENT, syncSlides);
    return () => window.removeEventListener(IMAGES_UPDATED_EVENT, syncSlides);
  }, []);

  const Home = () => (
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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/manage-images" element={<ImageManager />} />
        <Route path="/photo-browser" element={<PhotoBrowser />} />
      </Routes>
    </Router>
  );
}

export default App;
