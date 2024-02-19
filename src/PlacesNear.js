import React from 'react';
import Icon from '@mdi/react';
import { mdiWaze } from '@mdi/js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../src/App.css";



const PlacesNear = () => {
  
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
  
  <Carousel responsive={responsive}>
    {/* 32.95520970521225, 35.21344186558524 */}
      <div className="card">
        <img className="product--image" src="/images/supermarket.jpeg" alt="liquor store open" />
       <h2>liquor store open 24/7</h2>
      <p>also open for delivery call number +972507203099</p>
     <button onClick={() => window.open('https://waze.com/ul?q=32.95520970521225,35.21344186558524&navigate=yes', '_blank')} className="navigation">
       <Icon path={mdiWaze} size={1} />
        </button>
     </div>
  <div className="card">
        <img className="product--image" src="https://media-cdn.tripadvisor.com/media/photo-s/1b/0f/e0/7c/caption.jpg" alt="kids airport" />
       <h2>kids airport</h2>
      <p>Amusement & Theme Parks</p>
     <button onClick={() => window.open('https://waze.com/ul?q=32.94695422585931,35.17259178272374&navigate=yes', '_blank')} className="navigation">
       <Icon path={mdiWaze} size={1} />
        </button>
     </div>
     {/* 32.94403000367458, 35.24948272572598 */}
     <div className="card">
  <img className="product--image" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/dc/78/37/getlstd-property-photo.jpg?w=1200&h=-1&s=1" alt="kishor winery" />
     <h2>kishor winery</h2>
        <p>Nestled in the hills of western galilee lies the Kishor vineyard...</p>
        <button onClick={()=> window.open('https://waze.com/ul?q=32.94403000367458,35.24948272572598&navigate=yes', '_blank')} className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
      {/* 32.995529647997266, 35.26907034772502 */}
      <div className="card">
     <img className="product--image" src="https://media-cdn.tripadvisor.com/media/photo-s/1b/c8/12/ca/caption.jpg" alt="Nof HaVradim Razors" />
        <h2>Nof HaVradim Razors</h2>
         <p>Self-driving RZR tours and jeep tours in the Galilees secret and spectaculer jungles...</p>
         <button onClick={()=> window.open('https://waze.com/ul?q=32.995529647997266,35.26907034772502&navigate=yes', '_blank')} className="navigation">
           <Icon path={mdiWaze} size={1} />
         </button>
       </div>
       {/* 32.94810871236614, 35.18172426841962 */}
       <div className="card">
        <img className="product--image" src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/10/4f/e0/12/one-of-the-small-fountains.jpg?w=1200&h=-1&s=1" alt="Al- Muna Gardens" />
        <h2>Al- Muna Gardens</h2>
       <p>beautiful natural gardens to go and explore</p>
       <button onClick={()=> window.open('https://waze.com/ul?q=32.94810871236614,35.18172426841962&navigate=yes', '_blank')} className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
      {/* 32.95632556906892, 35.18324377116409 */}
      <div className="card">
        <img className="product--image" src="https://bigcenters.co.il/wp-content/uploads/elementor/thumbs/%D7%99%D7%A8%D7%9B%D7%90-%D7%A4%D7%A8%D7%95%D7%A4%D7%99%D7%9C-scaled-ptafdnuhtz9ewvefe728ts4cipizrmz5o5jm0sm7i0.jpg" alt="Al- Muna Gardens" />
        <h2>BIG Fashion Outlet</h2>
       <p>outlet clothing brands shop</p>
       <button onClick={()=> window.open('https://waze.com/ul?q=32.95632556906892,35.18324377116409&navigate=yes', '_blank')}  className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
  
</Carousel>)
  
}
export default PlacesNear;
