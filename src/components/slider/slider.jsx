import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../../styles/Slider.css"
import Slider from 'react-slick';
import Card from './card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const CardSlider = ({ cards }) => {
  // Previous Arrow
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow slick-prev" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronLeft} />
      </div>
    );
  };

  // Next Arrow
  const NextArrow = ({ onClick }) => {
    return (
      <div className="slick-arrow slick-next" onClick={onClick}>
        <FontAwesomeIcon icon={faChevronRight} />
      </div>
    );
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ],
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {cards.map((card, idx) => (
          <Card key={idx} {...card} />
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
