import Carousel from "react-bootstrap/Carousel";
import React, { useState } from "react";
import './Slider.css'; // Import the CSS file

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="slider-container">
      <Carousel interval={1500} activeIndex={index} onSelect={handleSelect}>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://img.freepik.com/premium-vector/book-bus-ticket-online-concept-idea-travel-tourism-planning-trip-online-buy-ticket-bus-app-illustration_277904-4913.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://img.freepik.com/premium-vector/man-buying-bus-ticket-online-smartphone-vector-illustration_357257-1402.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://t3.ftcdn.net/jpg/04/64/95/84/360_F_464958421_ANvZSiYNItJYlSHjnikzlELE4FC1e9BT.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://img.freepik.com/premium-vector/passengers-waiting-bus-city-bus-stop-vector_81522-3987.jpg"
            alt="Fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 slider-image"
            src="https://img.freepik.com/premium-vector/bus-stop-city-transport-people-waiting-buses-urban-street-road-men-women-public-transportation-vector-illustration-city-street-bus-traffic-transportation_53562-12420.jpg"
            alt="Fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
