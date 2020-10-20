import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import shop1 from '../images/shop-1.jpg'
import shop2 from '../images/shop-2.jpg'
import shop3 from '../images/shop-3.jpg'
import shop4 from '../images/shop-4.jpg'
import shop5 from '../images/shop-5.jpg'

const slideImages = [
  { shop1 }, { shop2 }, { shop3 }, { shop4 }, { shop5 }
];

const Slideshow = () => {
  return (
    <div className="App">

      <div className="slide-container">
      


 
        <div id='container2'>
          <div id='animationhed'>
            <p>Let's Go Shopping!</p>
            <div id='flip'>
              <div><div>Get Ready,</div></div>
              <div><div>Get Shopping!</div></div>
              <div><div>Shop With us</div></div>
            </div>
          </div>
        </div>
        <Slide>
          <div className="each-slide">
            <div className="slide-img" style={{ 'backgroundImage': `url(${shop1})` }}>

            </div>
          </div>
          <div className="each-slide">
            <div className="slide-img" style={{ 'backgroundImage': `url(${shop2})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide-img" style={{ 'backgroundImage': `url(${shop3})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide-img" style={{ 'backgroundImage': `url(${shop4})` }}>
            </div>
          </div>
          <div className="each-slide">
            <div className="slide-img" style={{ 'backgroundImage': `url(${shop5})` }}>
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
}

export default Slideshow;