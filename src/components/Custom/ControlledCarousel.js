import 'bootstrap/dist/css/bootstrap.min.css'
import { Carousel } from 'react-bootstrap'
import { useState } from 'react'


// https://react-bootstrap.github.io/components/carousel/
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <div className='container home-pg-cont'>
      <Carousel activeIndex={index} onSelect={handleSelect} interval={1000} fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/6/67/Middle_Bridge%2C_Basel%2C_Switzerland.JPG"
            alt="First slide"
          />
          <Carousel.Caption>
            <h3>RHEIN</h3>
            <p>Rhein ist ein Fluss in DE</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/6/66/Blick_vom_Hohfelsen.jpg"
            alt="Second slide"
          />

          <Carousel.Caption>
            <h3>SCHWARZWALD</h3>
            <p>Baum, Blume, ganz in der Natur</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://upload.wikimedia.org/wikipedia/commons/f/fc/Montage_of_Vienna.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>

  );
}