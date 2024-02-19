import React, { useEffect } from "react";
import "../src/App.css";
import ImageSlider from "./ImageSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Icon from "@mdi/react";
import { mdiWaze } from "@mdi/js";
import PlacesNear from "./PlacesNear";
import RestaurantsNear from "./RestaurantsNear";
import ReactDOM from "react-dom";
import Icons from "./icons";
{
  /* <img src="/images/img51.jpeg" alt="Header Image" /> */
}

function App() {
  const scrollArrows = document.querySelectorAll(".arrow-box span");

  // Add click event listeners to each <span> element
  useEffect(() => {
    const handleArrowClick = () => {
      window.scrollBy({ top: window.innerHeight, left: 0, behavior: "smooth" });
    };

    const scrollArrows = document.querySelectorAll(".arrow-box span");

    // Add click event listeners to each <span> element
    scrollArrows.forEach((span) => {
      span.addEventListener("click", handleArrowClick);
    });

    // Clean up event listeners when component unmounts
    return () => {
      scrollArrows.forEach((span) => {
        span.removeEventListener("click", handleArrowClick);
      });
    };
  }, []);

  // Settings for the image slider carousel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  // Array of image slides for the slider
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
  // Styles for the container of the image slider
  const containerStyles = {
    width: "700px",
    height: "280px",
    margin: "0 auto",
  };

  // Media query for screens with a maximum width of 600px
  if (window.matchMedia("(max-width: 600px)").matches) {
    containerStyles.width = "500px";
  }
  if (window.matchMedia("(max-width: 480px)").matches) {
    containerStyles.width = "500px";
  }
  if (window.matchMedia("(max-width: 768px)").matches) {
    containerStyles.width = "500px";
  }

  return (
    <div className="App">
      <header class="header">
        <div class="header-left">
          <img src="/images/img51.jpeg" alt="Header Image" />
        </div>
        <div class="header-right">
          <h1>About Us</h1>
          <p>
            במקום האירוח Villa Rish שבירכא יש בריכת שחייה חיצונית, גינה וטרקלין משותף, ותוכלו ליהנות גם מאינטרנט אלחוטי בחינם ומנוף להרים.
            בווילה יש מטבח משותף וחניה פרטית בחינם. הווילה כוללת מיזוג אוויר, חדר מגורים, מטבח מאובזר במלואו עם מקרר ומכונת קפה וחדר רחצה עם
            בידה ומקלחת. מספר חדרי השינה: 4. בחדר הרחצה יש אמבטיה ומוצרי טיפוח ללא תשלום, ומגבות ומצעים עומדים לרשותכם. הצוות בדלפק הקבלה
            דובר ערבית, אנגלית ועברית, וישמח לעזור מסביב לשעון. במקום האירוח Villa Rish יש טרסה ומתקני ברביקיו. מקום האירוח Villa Rish ממוקם
            במרחק של 18 ק''מ מהגנים הבהאיים בעכו ו-38 ק''מ מתיאטרון חיפה. מקום האירוח נמצא 33 ק''מ מנמל התעופה חיפה.
          </p>
        </div>
        <div class="arrow-box">
          <span></span>
          <span></span>
          <p class="scroll-text">Scroll Down</p>
        </div>
      </header>

      <main>
        <section>
          <div className="container1">
            <h2>facilities</h2>
            <Icons />
          </div>
        </section>
        <section>
          <h2>photos</h2>
          <p>Explore our cozy rooms and book your stay with us.</p>
          {/* Add room listings or images here */}
          <div style={containerStyles}>
            <ImageSlider slides={slides} />
          </div>
        </section>
        <section>
          <h2>things to do in yarka village</h2>
          <PlacesNear />
          <h2>places to eat in yarka village</h2>
          <RestaurantsNear />
          <h2>Contact Us</h2>
          <p>Reach out to us for inquiries or reservations.</p>
          {/* Add a contact form or contact information here */}
          <p>phone number : +972506223153</p>
          <a href="https://api.whatsapp.com/send?phone=972506223153" target="_blank" rel="noopener noreferrer">
            <img
              src="https://static.whatsapp.net/rsrc.php/v3/y7/r/DSxOAUB0raA.png" // Update with the correct path to your WhatsApp logo image
              alt="WhatsApp Logo"
              style={{ width: "100px", height: "auto", marginRight: "10px" }}
            />
          </a>
          <a href="https://www.instagram.com/villarish/?utm_source=qr&igsh=azN3dzNpcGticGE4" target="_blank" rel="noopener noreferrer">
            <img
              src="https://www.instagram.com/static/images/ico/favicon-192.png/68d99ba29cc8.png"
              alt="Instagram Logo"
              style={{ width: "30px", height: "30px", marginRight: "10px" }}
            />
          </a>
          <br></br>
          <br></br>
          <div>
            <h2>booking using websites</h2>
            <a href="https://www.booking.com/hotel/il/villa-rish.he.html" target="_blank" rel="noopener noreferrer">
              <img
                src="data:image/png;base64,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" // Update with the correct path to your image
                alt="Booking Logo"
                style={{ width: "40px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a href="https://my.weekend.co.il/villa_rish/#whataround" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.weekend.co.il/images/logo_transperant.svg"
                alt="Weekend Logo"
                style={{ width: "100px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a
              href="https://www.vila4u.com/%D7%95%D7%99%D7%9C%D7%95%D7%AA_%D7%91%D7%A6%D7%A4%D7%95%D7%9F/%D7%92%D7%9C%D7%99%D7%9C_%D7%9E%D7%A2%D7%A8%D7%91%D7%99/%D7%99%D7%A8%D7%9B%D7%90/%D7%95%D7%99%D7%9C%D7%94_%D7%A8%D7%99%D7%A9/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://www.vila4u.com/webimages/minilogo3.png"
                alt="Booking Logo"
                style={{ width: "100px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.vila.co.il/%D7%95%D7%99%D7%9C%D7%94_%D7%A8%D7%99%D7%A9/" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.vila.co.il/webimages/newlogo_final2.png"
                alt="Booking Logo"
                style={{ width: "100px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.vii.co.il/Villa_Rish" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.vii.co.il/assets/img/logo_new.png"
                alt="Booking Logo"
                style={{ width: "50px", height: "auto", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.ttt.co.il/villas/showCabin.html?site=1940" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.ttt.co.il/villas/images/logo2.png"
                alt="Booking Logo"
                style={{ width: "100px", height: "auto", backgroundColor: "lightblue", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.zimmer4me.co.il/showCabin.asp?name=3180" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.zimmer4me.co.il/images/logo3.png"
                alt="Booking Logo"
                style={{ width: "100px", height: "30px", backgroundColor: "red", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.vilaplus.co.il/showCabin.asp?site=985" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.vilaplus.co.il/images/logo2.png"
                alt="Booking Logo"
                style={{ width: "1px", height: "auto", backgroundColor: "red", marginRight: "10px" }}
              />
            </a>
            <a href="https://www.rrr.co.il/showCabin.asp?site=3236" target="_blank" rel="noopener noreferrer">
              <img
                src="https://www.rrr.co.il/images/logo.png?1"
                alt="Booking Logo"
                style={{ width: "100px", height: "auto", marginRight: "10px" }}
              />
            </a>
          </div>
        </section>
      </main>
      <br></br>
      <footer>
        <p>&copy; 2024 Villa_Rish All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
