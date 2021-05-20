import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Slide1 from '../../assets/Slide1';
import Slide2 from '../../assets/Slide2';
import Slide3 from '../../assets/Slide3';
import Slide4 from '../../assets/Slide4';


import './my-component.style.css';

const myCarousel = () => {
    return (
        <>
          <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3>First Assignment</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3>Second Assignment</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Slide3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Third Assignment</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>  
            
        </>
    )
}

export default myCarousel;
