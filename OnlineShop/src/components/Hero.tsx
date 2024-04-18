import './styles/Hero.css';
import { useState } from 'react';
import image1 from '../images/Online Store.png';

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = [image1];

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (currentImageIndex - 1 + images.length) % images.length,
    );
  };

  return (
    <section className='hero'>
      <div className='hero__content'>
        <h1 className='hero__title'>Welcome to our store</h1>
        <p className='hero__description'>
          Shop for the best products at the best prices
        </p>
        <div>
          <img src={image1} alt='carousel' className='hero__image' />
          <button
            onClick={prevImage}
            className='hero__button hero__button--prev'
          >
            Previous
          </button>
          <button
            onClick={nextImage}
            className='hero__button hero__button--next'
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
