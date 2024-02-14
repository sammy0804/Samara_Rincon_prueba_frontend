import Slider from 'react-slick';
import Card from './Card';

//styles slide
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import "../../styles/slider.css"

const CardSlider = ({ cards }) => {
 
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
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1
        }
      }
    ]
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
