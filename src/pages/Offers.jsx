// src/pages/Offers.jsx
import offer1 from "../assets/offers/offer1.jpg";
import offer2 from "../assets/offers/offer2.jpg";
import offer3 from "../assets/offers/offer3.jpg";

export default function Offers() {
  return (
    <div className="container my-5">
      <h2 className="fw-bold mb-4">🔥 Special Offers</h2>
      <div
        id="offersCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="4000" // Auto-slide every 4 sec
      >
        <div className="carousel-inner rounded shadow">
          <div className="carousel-item active">
            <img
              src={offer1}
              className="d-block w-100 carousel-img"
              alt="Offer 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={offer2}
              className="d-block w-100 carousel-img"
              alt="Offer 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={offer3}
              className="d-block w-100 carousel-img"
              alt="Offer 3"
            />
          </div>
        </div>

        {/* Carousel Controls (Arrows) */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#offersCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#offersCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
