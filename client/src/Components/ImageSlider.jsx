import { useState } from "react";
import "../Styles/ImageSlider.css"
import Image11 from "../Images/productsImages/product1/1.jpg";
import Image12 from "../Images/productsImages/product1/2.jpg";
import Image13 from "../Images/productsImages/product1/3.jpg";

const ImageSlider = ({slides}) => {
        
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };


  // imagen de fondo 
  const slideStylesWidthBackground = {
    // backgroundImage: url({require(slides[currentIndex].src}),
    // backgroundImage: `url(${require(ruta)})`
    // backgroundImage: `url(${require(slides[currentIndex].src)})`
    // backgroundImage: url(${slides[currentIndex].src})
    backgroundImage: `url("https://img.freepik.com/foto-gratis/coche-sedan-deportivo-lujo-blanco-pie-rastro-carrera-vista-frontal_114579-1161.jpg")`
  };

  return (
    <div className="slider">
      <div>
        <div onClick={goToPrevious} className="arrow left-arrow">
          ❰
        </div>
        <div onClick={goToNext} className="arrow right-arrow">
          ❱
        </div>
      </div>
      <div className="slide" style={slideStylesWidthBackground}></div>
      <div className="dots-container">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dot ${slideIndex === currentIndex ? "active-dot" : ""}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;

