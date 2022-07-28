import 'bootstrap/dist/css/bootstrap.min.css'
import '../../assets/styles/css/global.css'
import '../../assets/styles/sass/Flagge.scss'
import { Carousel } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import DeService from '../../services/DeService'
import CustomDropdown from '../Custom/CustomDropdown'

// https://react-bootstrap.github.io/components/carousel/
export default function ControlledCarousel() {
  const [index, setIndex] = useState(0);
  const [flags, setFlags] = useState([]);
  const [flagsOnSearch, setFlagsOnSearch] = useState([
    {
      _id: "62d53ad2d1cbee147e71cda1",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg",
      farbe: [
        "rot",
        "weiß"
      ],
      artikel: "",
      land: "Österreich",
      country: "Austria"
    },
    {
      _id: "62dea54c85f0def29bb71e56",
      imgUrl: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg",
      farbe: [
        "rot",
        "weiß",
        "blau"
      ],
      artikel: "das",
      land: "Australien",
      country: "Australia"
    }
  ]); // TODO : show this array of flags in dropdown, below search button
  const [searchText, setSearchText] = useState('')
  let delay;

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
        console.error("error while fetching the flags", error);
      }
    };
    fetchData();
  }, []);


  // show countries for query in search bar
  const callApi = ()=> {
    console.log('call Api',searchText)
    const deService = new DeService();
    const body = {field:"country", country: searchText}
    console.error(body);
    deService.getFlgsByStringSrch(body)
        .then((data) => {
            console.error(data);
        })
        .catch((err) => {
            console.warn(err);
            console.warn(err.message);
        })
  }

  const keyDown = (e)=>{
    console.error(e.key);
    if (e.key === "Enter") {
      clearTimeout(delay)
      callApi()
      console.log('keyDown press and ready for api call')
    }
  }

  // https://stackoverflow.com/questions/67436567/how-can-we-use-useeffect-for-multiple-props-value-changes
  useEffect(() => {
    delay = setTimeout(() => {
      if(searchText)
        callApi()
    }, 1000)
    return () => clearTimeout(delay)
  }, [searchText]);

  const handleSearchFlag = (e) => {
    e.preventDefault()
  }

  return (

    <>

    <div className='my-srch-bar'>
      <nav class="navbar navbar-dark bg-dark">
        <div class="container-fluid">
          <a class="navbar-brand">FLAGS</a>
          <form class="d-flex" onSubmit={handleSearchFlag}>
            <input class="form-control me-2" value={searchText} type="search" placeholder="Search..." onChange={(e) => setSearchText(e.target.value)} onKeyDown={keyDown} aria-label="Search" />
            {/* <button class="btn btn-outline-success" type="submit">Search</button> */}
            <div>
              <CustomDropdown flagsOnSearch={flagsOnSearch} />
            </div>
          </form>
        </div>
      </nav>
    </div>

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
    
    </>

  );
}