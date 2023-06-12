import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";

export const Carousel: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div className="carousel">
      <h2>Carousel Model</h2>
      <Slider {...settings}>
        <div className="box">
          <h3>1</h3>
        </div>
        <div className="box">
          <h3>2</h3>
        </div>
        <div className="box">
          <h3>3</h3>
        </div>
        <div className="box">
          <h3>4</h3>
        </div>
        <div className="box">
          <h3>5</h3>
        </div>
      </Slider>
    </div>
  );
};
