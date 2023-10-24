import React from 'react';
import './Products.css';
import Img1 from './images/friheten-sleeper-sectional.avif';
import Img2 from './images/eket-wall-mounted.avif';
import Img3 from './images/lagkapten.avif';
import Product from './product/Product.jsx'
const  products=
[
  {id:1,img_src:Img1 ,name:'FRIHETEN  Sleeper sectional',price:'$899.00' ,dest:'Sleeper sectional,3 seat w/storage, Skiftebo dark gray'},
  {id:2,img_src:Img2 ,name:'EKET Wall-mounted cabinet combination',price:'$350.00' ,dest:'Wall-mounted cabinet combination, dark gray/gray-green,'},
  {id:3,img_src:Img3 ,name:'LAGKAPTEN / ALEX',price:'$239.97' ,dest:'Desk, black-brown/white, 55 1/8x23 5/8 '},
];

function Products() {
  return (
   <>
   <div id="Team" className="our-team ">
  <div className="title">
    <h1 className>Our Products </h1>
    <p className="line" ></p>
  </div>
  <div className="container ">
    <div className="team-content ">
{products.map((product)=>
  <Product {...product} key={product.id}/>

)}

    </div> {/* /team-content */}
  </div> {/* /container */}
</div>
</>

)
}
export default Products