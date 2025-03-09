import React from "react";
import Icon from "@mdi/react";
import { mdiWaze } from "@mdi/js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../src/App.css";

const PlacesNear = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const places = [
    {
      id: 1,
      image: "/images/supermarket.jpeg",
      title: "קיוסק 24/7",
      description: "פתוח למשלוחים למספר +972507203099",
      wazeLink: "https://waze.com/ul?q=32.95520970521225,35.21344186558524&navigate=yes",
    },
    {
      id: 2,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/e0/7c/caption.jpg",
      title: "מיי בייבי",
      description: "מתחם קניות למוצרי ילדים ופארק שעשועים",
      wazeLink: "https://waze.com/ul?q=32.94695422585931,35.17259178272374&navigate=yes",
    },
    {
      id: 3,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dc/78/37/getlstd-property-photo.jpg?w=1200&h=-1&s=1",
      title: "יקב כישור",
      description: "יקב כישור שבו עובדים אנשים עם צרכים מיוחדים",
      wazeLink: "https://waze.com/ul?q=32.94403000367458,35.24948272572598&navigate=yes",
    },
    {
      id: 4,
      image: "https://media-cdn.tripadvisor.com/media/photo-s/1b/c8/12/ca/caption.jpg",
      title: "טרקטורטני נוף הוורדים",
      description: "טיולי ריזירים בטבע",
      wazeLink: "https://waze.com/ul?q=32.995529647997266,35.26907034772502&navigate=yes",
    },
    {
      id: 5,
      image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4f/e0/12/one-of-the-small-fountains.jpg?w=1200&h=-1&s=1",
      title: "גני אל מונה",
      description: "גנים מופלאים לטיול רגלי ולקחת תמונות מרהיבות",
      wazeLink: "https://waze.com/ul?q=32.94810871236614,35.18172426841962&navigate=yes",
    },
    {
      id: 6,
      image:
        "https://bigcenters.co.il/wp-content/uploads/elementor/thumbs/%D7%99%D7%A8%D7%9B%D7%90-%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C-scaled-ptafdnuhtz9ewvefe728ts4cipizrmz5o5jm0sm7i0.jpg",
      title: "BIG Fashion Outlet",
      description: "מרכז קניות גדול עם מציאות של מותגים",
      wazeLink: "https://waze.com/ul?q=32.95632556906892,35.18324377116409&navigate=yes",
    },
    {
      id: 7,
      image:
        "https://inature.info/w/images/thumb/4/4a/%D7%A2%D7%99%D7%9F_%D7%99%D7%A4%D7%A2%D7%9D1.jpg/320px-%D7%A2%D7%99%D7%9F_%D7%99%D7%A4%D7%A2%D7%9D1.jpg",
      title: "מסלול ואדי עין אל מגנונה",
      description: "מעיין השוכן בלב הטבע עם זרימת מים מדהימה בימי חורף",
      wazeLink: "https://waze.com/ul?q=32.96168788287706, 35.22795708656132&navigate=yes",
    },
    {
      id: 8,
      image: "../images/supermarket2.jpeg",
      title: "סופר מרקט אלרים",
      description: "סופרמרקט גדול עם כל המצרכים",
      wazeLink: "https://waze.com/ul?q=32.95507778497727, 35.21949617789516&navigate=yes",
    },
  ];

  return (
    <Carousel responsive={responsive}>
      {places.map((place) => (
        <div key={place.id} className="card bg-[#bba168] text-white p-6 rounded-lg shadow-lg">
          <img src={place.image} alt={place.title} className="product--image w-full h-40 rounded-lg object-cover mb-4" />
          <h2 className="text-lg font-bold mb-2">{place.title}</h2>
          <p className="text-sm mb-4">{place.description}</p>
          <button
            onClick={() => window.open(place.wazeLink, "_blank")}
            className="bg-blue-500 text-white px-4 py-2 rounded-md font-bold hover:bg-blue-600 flex items-center justify-center"
          >
            <Icon path={mdiWaze} size={1} className="mr-2" />
            Waze
          </button>
        </div>
      ))}
    </Carousel>
  );
};

export default PlacesNear;
