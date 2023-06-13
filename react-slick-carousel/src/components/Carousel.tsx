import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Carousel.css";
import { data } from "../data/data";

export const Carousel: React.FC = () => {
  const settings = {
    className: "center",
    centerMode: true,
    centerPadding: "60px",
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: true,
    autoplaySpeed: 2000,
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
      <Slider {...settings}>
        {data.map((item) => (
          <div className="box" key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} alt={item.name} />
            <div className="link-container">
              <div>
                <a href={item.github} target="_blank">
                  GitHub
                </a>
              </div>
              <div>
                <a href={item.live} target="_blank">
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
