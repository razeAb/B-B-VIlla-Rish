import React from "react";
import Icon from "@mdi/react";
import { mdiWaze } from "@mdi/js";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../src/App.css";

const RestaurantsNear = () => {
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

  const restaurants = [
    {
      id: 1,
      image:
        "https://static.wixstatic.com/media/d5f6aa_122238a3853c44fe938ecc1d38f24a0d~mv2.jpg/v1/fill/w_661,h_440,al_c,q_90,usm_0.66_1.00_0.01/d5f6aa_122238a3853c44fe938ecc1d38f24a0d~mv2.webp",
      title: "honey sweets",
      description: "בית קפה קנאפה ומיתוקים",
      wazeLink: "https://waze.com/ul?q=32.95291096229205,35.20213960185384&navigate=yes",
    },
    {
      id: 2,
      image: "https://images.rest.co.il/Customers/80236368/d66b0a6d92ca4528a1e30d718a2dfe1e_14.jpg",
      title: "פיצה פאלה",
      description: "מסעדה איטלקית ופיצות כולל משלוחים",
      wazeLink: "https://waze.com/ul?q=32.95414583033369,35.18732954418131&navigate=yes",
    },
    {
      id: 3,
      image: "https://img.restaurantguru.com/w550/h367/r292-Good-Morning-Restaurant-food-2021-09-1.jpg",
      title: "מסעדת בוקר טוב",
      description: "מסעדת חומוס",
      wazeLink: "https://waze.com/ul?q=32.945951571266406,35.17028264232862&navigate=yes",
    },
    {
      id: 4,
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEdRMy6gc9l9KFxFu3Z1BL3Ji_4wdrKxoaRQ&s",
      title: "לה מינור",
      description: "מסעדה אוכל בסנון כפרי",
      wazeLink: "https://waze.com/ul?q=32.9563686398241,35.182972601849805&navigate=yes",
    },
    {
      id: 5,
      image: "https://img.restaurantguru.com/c829-Restaurant-Tabun-square-pulled-pork-sandwich.jpg",
      title: "טאבון הכיכר",
      description: "מבחר פיתות וסמבוסקים בטעמים שונים",
      wazeLink: "https://waze.com/ul?q=32.95354146899507,35.198721357671374&navigate=yes",
    },
    {
      id: 6,
      image: "https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg",
      title: "שווארמה אבו עלי",
      description: "שווארמה ברמה אחרת 30 שנות מצוינות",
      wazeLink: "https://waze.com/ul?q=32.953136325663245,35.19933633498597&navigate=yes",
    },
    {
      id: 7,
      image:
        "https://www.b144.co.il/_next/image/?url=https%3A%2F%2Fservices.b144.co.il%2FUtils%2FDynamicMediaHandler.ashx%3Ffilepath%3Ddynamic_img%2Fcategories%2Fdefaults%2Fcp_bakery_m1.jpg&w=1200&q=75",
      title: "מאפיית אלעין",
      description: "מאפיים והכנת בצקים בטאבון מדי בוקר",
      wazeLink: "https://waze.com/ul?q=32.95906494672141, 35.2172964122542&navigate=yes",
    },
    {
      id: 8,
      image: "./images/sweets.jpeg",
      title: " ממתקי תמיר",
      description: "     מבחר של מתוקים",
      wazeLink: "https://waze.com/ul?q=32.95444761533457, 35.2155750828109&navigate=yes",
    },
  ];

  return (
    <Carousel responsive={responsive}>
      {restaurants.map((restaurant) => (
        <div key={restaurant.id} className="card bg-[#bba168] text-white p-6 rounded-lg shadow-lg">
          <img src={restaurant.image} alt={restaurant.title} className="product--image w-full h-40 rounded-lg object-cover mb-4" />
          <h2 className="text-lg font-bold mb-2">{restaurant.title}</h2>
          <p className="text-sm mb-4">{restaurant.description}</p>
          <button
            onClick={() => window.open(restaurant.wazeLink, "_blank")}
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

export default RestaurantsNear;
