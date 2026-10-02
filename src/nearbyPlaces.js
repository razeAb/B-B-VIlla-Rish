// Existing local guide entries, preserved from PlacesNear and RestaurantsNear.
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

export const nearbyPlaces = [
  ...places.map(place => ({ ...place, id: 'place-' + place.id, category: [1, 6, 8].includes(place.id) ? 'shops' : 'activities', image: place.image.replace('../images/', '/images/'), phone: place.id === 1 ? '+972507203099' : undefined })),
  ...restaurants.map(place => ({ ...place, id: 'food-' + place.id, category: 'food', title: place.title.trim(), image: place.image.replace('./images/', '/images/') })),
];
