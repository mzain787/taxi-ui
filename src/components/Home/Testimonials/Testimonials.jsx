import React,{useRef} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import TestimonialCard from './TestimonialCard';
import capture from "../../../assets/images/Capture.png"
import reverseIcon from "../../../assets/images/prev-icon.png"
import forwardIcon from "../../../assets/images/forward-icon.png"
import "./Testimonials.css"
function Testimonials() {
  const slides = [
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    },
    {
      name: 'Reynald Dela Pedra',
      reviews:'8 reviews',
      description: 'Wath the sing up,about details,we',
    }
  ];

  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1240,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  const SliderRef = useRef(null);
  const handleNext = () => {
    SliderRef.current.slickNext();
  };

  const handlePrev = () => {
    SliderRef.current.slickPrev();
  }
  
  return (
    <div className='wrapper Testimonials'>
      <div className="testimonials-heading">
        <img src={capture} alt="image" />
      </div>
      <div className="testimonial-navigation-icons">
      <img
      style={{cursor:"pointer"}}
            src={reverseIcon}
            alt="reverse-icon"
            className="navigation-icon"
            onClick={handlePrev}
          />
          <img
            style={{cursor:"pointer"}}
            src={forwardIcon}
            alt="forward-icon"
            className="navigation-icon"
            onClick={handleNext}
          />
      </div>
       <Slider ref={SliderRef}  {...settings}>
      {slides.map((slide, index) => (
        <TestimonialCard key={index} {...slide} />
      ))}
    </Slider>
    </div>
  )
};

export default Testimonials