import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/Slide1.png';
import Slide2 from '../../assets/Slide2.png';
import Slide3 from '../../assets/Slide3.png';
import Slide4 from '../../assets/Slide4.png';
import ScrollDown from '../ScrollDown/scroll-down.component';


import './MyCarousel.style.css';

const MyCarousel = () => {
  return (
    <div id="home">
      <Carousel controls={false} indicators interval={2500} pauseOnHover={false}>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide1}
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide2}
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide3}
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 custom-img"
            src={Slide4}
            alt="Second slide"
          />
        </Carousel.Item>
      </Carousel>
    <ScrollDown />
    </div>
  )
}

export default MyCarousel;
