import img1 from "../../assets/hangman.png";
import img2 from "../../assets/hangman2.png";
import img3 from "../../assets/lights1.png";

import "./Carousel.css";

export const Carousel: React.FC = () => {
  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="0"
          className="active"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="1"
        ></li>
        <li
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide-to="2"
        ></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img src={img1} className="d-block w-100" alt="Slide 1" />
          <div className="carousel-caption slide1 d-none d-md-block">
            <a
              className="link"
              href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
              target="_blank"
              style={{ color: "red" }}
            >
              DEMO
            </a>
            <a
              className="link"
              href="https://getbootstrap.com/docs/4.0/getting-started/introduction/"
              target="_blank"
              style={{ color: "red" }}
            >
              GITHUB LINK
            </a>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img2} className="d-block w-100" alt="Slide 2" />
          <div className="carousel-caption d-none d-md-block">
            <h5 style={{ color: "red" }}>Caption for Slide 2</h5>
            <p style={{ color: "red" }}>Description for Slide 2</p>
          </div>
        </div>
        <div className="carousel-item">
          <img src={img3} className="d-block w-100" alt="Slide 3" />
          <div className="carousel-caption slide3 d-none d-md-block ">
            <h5>Caption for Slide 3</h5>
            <p>Description for Slide 3</p>
          </div>
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="prev"
        style={{ backgroundColor: "020260" }}
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-bs-slide="next"
        style={{ backgroundColor: "020260" }}
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </a>
    </div>
  );
};
