import { useState } from "react";
import { Carousel } from "react-bootstrap";
import "../assets/stylesheets/PlanetCarousel.css";

export default function PlanetCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className="solar__carousel__container">
      <Carousel
        className="solar__planet__carousel"
        activeIndex={index}
        variant="dark"
        onSelect={handleSelect}
      >
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/mercury">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/mercury-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">mercury</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/venus">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/venus-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">venus</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/earth">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/earth-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">earth</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/mars">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/mars-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">mars</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/jupiter">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/jupiter-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">jupiter</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/saturn">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/saturn-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">saturn</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/uranus">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/uranus-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">uranus</h3>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item className="solar__carousel__item">
          <div className="solar__planet__img__container">
            <a href="/neptune">
              <img
                className="solar__planet__img"
                src="https://space-facts.com/wp-content/uploads/neptune-transparent.png"
                alt=""
              />
            </a>
          </div>
          <Carousel.Caption>
            <h3 className="solar__planet__caption">neptune</h3>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="solar__carousel__instruction">
        click on a planet to receive more info
      </div>
    </div>
  );
}
