import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/css/global.css'
import '../../assets/styles/sass/Flagge.scss'
import { Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import DeService from '../../services/DeService'

// https://react-bootstrap.github.io/components/carousel/
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [flags, setFlags] = useState([]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const deService = new DeService();
        const response = await deService.getFlags();
        setFlags(response);
      } catch (error) {
        console.error("error while fetching the profile data in dashboard page", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='flag-cont container-fluid hght100pr bg-dark'>
      <div className='hght100pr'>
        <Carousel activeIndex={index} onSelect={handleSelect} interval={1000} fade>
          {flags.map(flg => (
            <Carousel.Item key={flg.land}>
              <img
                className="d-block m-auto wdth40per"
                src={flg.imgUrl}
                alt="First slide"
              />
              <Carousel.Caption>
                <div>
                  <h3>{flg.land}</h3>
                  {flg.farbe.map(frb => (
                    <span key={frb}>{frb} <br /> </span>
                  ))}
                </div>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>

  );
}