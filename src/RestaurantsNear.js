import React from 'react';
import Icon from '@mdi/react';
import { mdiWaze } from '@mdi/js';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "../src/App.css";



const RestaurantsNear = () => {
    const responsive = {
        superLargeDesktop: {
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
    {/* 32.95291096229205, 35.20213960185384 */}
  <div className="card">
        <img className="product--image" src="https://static.wixstatic.com/media/d5f6aa_122238a3853c44fe938ecc1d38f24a0d~mv2.jpg/v1/fill/w_661,h_440,al_c,q_90,usm_0.66_1.00_0.01/d5f6aa_122238a3853c44fe938ecc1d38f24a0d~mv2.webp" alt="honey sweets" />
       <h2>honey sweets</h2>
      <p>small caffee that serves middle eastern sweets</p>
     <button onClick={() => window.open('https://waze.com/ul?q=32.95291096229205,35.20213960185384&navigate=yes', '_blank')} className="navigation">
       <Icon path={mdiWaze} size={1} />
        </button>
     </div>
     {/* 32.95414583033369, 35.18732954418131   */}
        <div className="card">
  <img className="product--image" src="https://images.rest.co.il/Customers/80236368/d66b0a6d92ca4528a1e30d718a2dfe1e_14.jpg" alt="pizza pala" />
     <h2>pizza pala</h2>
        <p>italian style restaurant</p>
        <button onClick={()=> window.open('https://waze.com/ul?q=32.95414583033369,35.18732954418131&navigate=yes', '_blank')} className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
      {/* 32.945951571266406, 35.17028264232862 */}
      <div className="card">
     <img className="product--image" src="https://img.restaurantguru.com/w550/h367/r292-Good-Morning-Restaurant-food-2021-09-1.jpg" alt="Nof HaVradim Razors" />
     
        <h2>good morning resturant</h2>
         <p>a middle eastern breakfast restaurant</p>
         <button onClick={()=> window.open('https://waze.com/ul?q=32.945951571266406,35.17028264232862&navigate=yes', '_blank')} className="navigation">
           <Icon path={mdiWaze} size={1} />
         </button>
       </div>
       {/* 32.9563686398241, 35.182972601849805 */}
       <div className="card">
        <img className="product--image" src="https://media.easy.co.il/images/UserThumbs/26545502_1590863622407.jpg" alt="la dolce vita" />
        <h2>la dolce vita</h2>
       <p>desert and coffee palce</p>
       <button onClick={()=> window.open('https://waze.com/ul?q=32.9563686398241,35.182972601849805&navigate=yes', '_blank')} className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
     <div className="card">
        <img className="product--image" src="https://img.restaurantguru.com/c829-Restaurant-Tabun-square-pulled-pork-sandwich.jpg" alt="tabun square" />
        <h2>tabun square</h2>
       <p>druze tabun food</p>
       <button onClick={()=> window.open('https://waze.com/ul?q=32.95354146899507,35.198721357671374&navigate=yes', '_blank')}  className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
      {/* 32.953136325663245, 35.19933633498597 */}
      <div className="card">
        <img className="product--image" src="https://www.kitchensanctuary.com/wp-content/uploads/2015/02/Chicken-Shawarma-square-FS-57.jpg" alt="shawarma " />
        <h2>shawarma abu ali</h2>
       <p>famous shawarma place in the village</p>
       <button onClick={()=> window.open('https://waze.com/ul?q=32.953136325663245,35.19933633498597&navigate=yes', '_blank')}  className="navigation">
          <Icon path={mdiWaze} size={1} />
        </button>
      </div>
</Carousel>)
  
}
export default RestaurantsNear;
