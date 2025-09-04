import React from "react";
import { FaPlane, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="hero text-white text-center py-5"
        style={{
          background:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('/images/hero.jpg') center/cover no-repeat",
        }}
      >
        <h1 className="display-4 fw-bold">Explore the World with TravelUI</h1>
        <p className="lead">
          Find your perfect destination and book your trip easily.
        </p>
      </section>

      {/* Search Bar */}
      <section className="featured container my-5">
        <div className="row g-3 justify-content-center">
          <div className="col-md-3">
            <input type="text" className="form-control rounded-pill shadow-sm" placeholder="From" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control rounded-pill shadow-sm" placeholder="To" />
          </div>
          <div className="col-md-3">
            <input type="date" className="form-control rounded-pill shadow-sm" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary rounded-pill w-100 shadow-sm">
              <FaPlane className="me-2" /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured container my-5">
        <h2 className="mb-4 text-center fw-bold">Featured Destinations</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card h-100 shadow-sm rounded-4">
              <img
                src="/images/destination1.jpg"
                className="card-img-top rounded-top-4"
                alt="Destination 1"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Paris</h5>
                <p className="card-text">$1200 per person</p>
                <button className="btn btn-primary w-100 rounded-pill shadow-sm">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm rounded-4">
              <img
                src="/images/destination2.jpg"
                className="card-img-top"
                alt="Destination 2"
              />
              <div className="card-body text-center">
                <h5 className="card-title">Tokyo</h5>
                <p className="card-text">$1500 per person</p>
                <button className="btn btn-primary w-100 rounded-pill shadow-sm">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card h-100 shadow-sm rounded-4">
              <img
                src="/images/destination3.jpg"
                className="card-img-top"
                alt="Destination 3"
              />
              <div className="card-body text-center">
                <h5 className="card-title">New York</h5>
                <p className="card-text">$1000 per person</p>
                <button className="btn btn-primary w-100 rounded-pill shadow-sm">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
