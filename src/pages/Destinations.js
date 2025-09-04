import React from "react";

const destinationsData = [
  { id: 1, name: "Paris", price: "$1200", image: "/images/destination1.jpg" },
  { id: 2, name: "Tokyo", price: "$1500", image: "/images/destination2.jpg" },
  { id: 3, name: "New York", price: "$1000", image: "/images/destination3.jpg" },
  { id: 4, name: "London", price: "$1100", image: "/images/destination4.jpg" },
  { id: 5, name: "Dubai", price: "$1300", image: "/images/destination5.jpg" },
  { id: 6, name: "Sydney", price: "$1400", image: "/images/destination6.jpg" },
];

const Destinations = () => {
  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Our Destinations</h2>
      <div className="row g-4">
        {destinationsData.map((dest) => (
          <div className="col-md-4" key={dest.id}>
            <div className="card h-100">
              <img
                src={dest.image}
                className="card-img-top"
                alt={dest.name}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{dest.name}</h5>
                <p className="card-text">{dest.price} per person</p>
                <button className="btn btn-primary">Book Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Destinations;
