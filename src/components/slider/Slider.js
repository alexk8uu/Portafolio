import React, { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './Slider.css'
import videogamesgif from '../../utils/VIDEOGAMES.gif'
import fleetimg from '../../utils/FLEET.jpg'
import Modal from '../modal/Modal';
import styled from 'styled-components';
import ReactPlayer from 'react-player';


const Slider = () => {



  const [modalVideogame, setModalVideogame] = useState(false);
  const [modalFleet, setModalFleet] = useState(false);
  const [modalLogiexpress, setModalLogiexpress] = useState(false);

  const slidesInfo = [
    {
      src: videogamesgif,
      alt: 'Videogames App',
      desc: 'Videogames App',
      tecn: 'React / Redux',
      modal: setModalVideogame,
    },
    {
      src: fleetimg,
      alt: 'Fleet',
      desc: 'Fleet',
      tecn: 'React Native / Typescript',
      modal: setModalFleet
    },
    {
      src: 'https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg',
      alt: 'Logiexpress',
      desc: 'Logiexpress',
      tecn: 'React Native / Typescript',
      modal: setModalLogiexpress
    }
  ];

  return (
    <div className='carousel-container'>
      <div className='carousel-title'>
        <div className='tittle-line'>
        <h2>Mis Proyectos</h2>
        </div>
      </div>
      <Carousel
        infiniteLoop
        centerMode
        centerSlidePercentage={75}
        transitionTime={200}
        width={600}
        showStatus={false}
        showThumbs={false}
        emulateTouch
        dynamicHeight={false}
      >
        {
          slidesInfo.map(slide => (
            <div className="slide-container" onClick={() => slide.modal(true)}>
              <img src={slide.src} alt={slide.alt} />
              <div className="slide-desc" >
                <span>{slide.desc}</span>
                <p>{slide.tecn}</p>
              </div>
            </div>
          ))
        }
      </Carousel>
      <Modal
        modal={modalVideogame}
        setModal={setModalVideogame}
        title={'Videogames'}
        github={'https://github.com/alexk8uu/Proyect-VideoGames-Henry'}
      >
        <Container>
          <ReactPlayer 
          url='https://www.youtube.com/watch?v=BrE_VPyweVs'
          controls
          />
        </Container>
      </Modal>
      <Modal
        modal={modalFleet}
        setModal={setModalFleet}
        title={'Fleet'}
        github={'https://github.com/LOGIEXPRESS/Fleet'}
      >
        <Container>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=ABfLEvydm44'
          controls
          />
        </Container>
      </Modal>
      <Modal
        modal={modalLogiexpress}
        setModal={setModalLogiexpress}
        title={'Logiexpress'}
        github={'https://github.com/LOGIEXPRESS/LOGIEXPRESS'}
      >
        <Container>
        <ReactPlayer 
          url='https://www.youtube.com/watch?v=zTitoHKsyJg'
          controls
          />
       
        </Container>
      </Modal>
    </div>
  )
}

export default Slider;


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 10px;
  }

  p {
    color: aqua ;
  }

`;