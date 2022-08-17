import React, { useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Slider.css";
import videogamesgif from "../../utils/VIDEOGAMES.gif";
import fleetimg from "../../utils/FLEET.jpg";
import logiexpressimg from "../../utils/LOGIEXPRESS.jpg";
import Modal from "../modal/Modal";
import ResponsiblePlayer from "./ResponsiblePlayer";
import image2 from "../../utils/2.png";
import image3 from "../../utils/3.png";
import image4 from "../../utils/4.png";
import image5 from "../../utils/5.png";
import image6 from "../../utils/6.png";
import image7 from "../../utils/7.png";
import image8 from "../../utils/8.png";
import image9 from "../../utils/9.png";
import eCommerceImg from '../../utils/E-commerceMagdalena.jpg'

const Slider = () => {

  const [modalEcommerce, setModalEcommerce] = useState(false);
  const [modalVideogame, setModalVideogame] = useState(false);
  const [modalFleet, setModalFleet] = useState(false);
  const [modalLogiexpress, setModalLogiexpress] = useState(false);

  const logiexpressImg = [
    {
      src: image2,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image3,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image2,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image4,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image5,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image6,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image7,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image8,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
    {
      src: image9,
      alt: "Logiexpress App",
      desc: "Logiexpress App",
    },
  ];

  const slidesInfo = [
    {
      src: videogamesgif,
      alt: "Videogames App",
      desc: "Videogames App",
      tecn: "React / Redux",
      modal: setModalVideogame,
    },
    {
      src: fleetimg,
      alt: "Fleet",
      desc: "Fleet",
      tecn: "React Native / Typescript",
      modal: setModalFleet,
    },
    {
      src: logiexpressimg,
      alt: "Logiexpress",
      desc: "Logiexpress",
      tecn: "React Native / Typescript",
      modal: setModalLogiexpress,
    },
    {
      src: eCommerceImg,
      alt: "E-Commerce Magdalena",
      desc: "E-Comemerce Magdalena",
      tecn: "React / Redux / MongoDb / Styled-components",
      modal: setModalEcommerce,
    },

  ];

  return (
    <div className="carousel-container">
      <div className="carousel-title">
        <div className="tittle-line">
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
        {slidesInfo.map((slide) => (
          <div className="slide-container" onClick={() => slide.modal(true)}>
            <img src={slide.src} alt={slide.alt} />
            <div className="slide-desc">
              <span>{slide.desc}</span>
            </div>
          </div>
        ))}
      </Carousel>
      <Modal
        modal={modalVideogame}
        setModal={setModalVideogame}
        title={"Videogames"}
        github={"https://github.com/alexk8uu/Proyect-VideoGames-Henry"}
      >
        <ResponsiblePlayer
          url={"https://www.youtube.com/watch?v=BrE_VPyweVs"}
        />
      </Modal>
      <Modal
        modal={modalFleet}
        setModal={setModalFleet}
        title={"Fleet"}
        github={"https://github.com/LOGIEXPRESS/Fleet"}
      >
        <ResponsiblePlayer
          url={"https://www.youtube.com/watch?v=ABfLEvydm44"}
        />
      </Modal>
      <Modal
        modal={modalEcommerce}
        setModal={setModalEcommerce}
        title={"E-Commerce Magdalena"}
        github={"https://github.com/alexk8uu/Magdalena-Ecommerce"}
      >
        <ResponsiblePlayer
          url={"https://youtu.be/r0nt2kX5u4U"}
        />
      </Modal>
      <Modal
        modal={modalLogiexpress}
        setModal={setModalLogiexpress}
        title={"Logiexpress"}
        github={"https://github.com/LOGIEXPRESS/LOGIEXPRESS"}
      >
        <div className="logiexpress-container">
        <Carousel
        infiniteLoop
        centerMode
        centerSlidePercentage={75}
        transitionTime={200}
        width={350}
        showStatus={false}
        showThumbs={false}
        emulateTouch
        dynamicHeight={true}
      >
        {logiexpressImg.map((slide) => (
          <div className="logiexpress-container-img" onClick={() => slide.modal(true)}>
            <img src={slide.src} alt={slide.alt} className='logiexpress_img' />
          </div>
        ))}
      </Carousel>
        </div>
      </Modal>
    </div>
  );
};

export default Slider;
