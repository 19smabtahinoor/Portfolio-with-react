import React from 'react';
import { Carousel } from "react-bootstrap";

function CarouselSlider(props) {
    return (
        <>
              <Carousel fade>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={props.image}
                        alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>{props.title}</h3>
                            <p>{props.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                                        
               </Carousel>
        </>
    );
}

export default CarouselSlider;