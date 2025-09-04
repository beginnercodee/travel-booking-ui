import React from "react";
import { FaPlane, FaMapMarkerAlt } from "react-icons/fa";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero bg-primary text-white text-center py-5">
        <h1 className="display-4">Explore the World with TravelUI</h1>
        <p className="lead">Find your perfect destination and book your trip easily.</p>
      </section>

      {/* Search Bar */}
      <section className="search-bar container my-5">
        <div className="row g-3 justify-content-center">
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="From" />
          </div>
          <div className="col-md-3">
            <input type="text" className="form-control" placeholder="To" />
          </div>
          <div className="col-md-3">
            <input type="date" className="form-control" />
          </div>
          <div className="col-md-2">
            <button className="btn btn-primary w-100">
              <FaPlane /> Search
            </button>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured container my-5">
        <h2 className="mb-4 text-center">Featured Destinations</h2>
        <div className="row g-4">
          <div className="col-md-4">
            <div className="card">
              <img src="/images/destination1.jpg" className="card-img-top" alt="Destination 1" />
              <div className="card-body text-center">
                <h5 className="card-title">Paris</h5>
                <p className="card-text">$1200 per person</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/images/destination2.jpg" className="card-img-top" alt="Destination 2" />
              <div className="card-body text-center">
                <h5 className="card-title">Tokyo</h5>
                <p className="card-text">$1500 per person</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>

          <div className="col-md-4">
            <div className="card">
              <img src="/images/destination3.jpg" className="card-img-top" alt="Destination 3" />
              <div className="card-body text-center">
                <h5 className="card-title">New York</h5>
                <p className="card-text">$1000 per person</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
