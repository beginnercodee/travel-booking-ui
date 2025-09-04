import React, { useState } from "react";

const Booking = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    travelDate: "",
    travelers: 1,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Booking submitted!\n
Name: ${formData.name}
Email: ${formData.email}
Travel Date: ${formData.travelDate}
Travelers: ${formData.travelers}`);
    setFormData({ name: "", email: "", travelDate: "", travelers: 1 });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Book Your Trip</h2>
      <form onSubmit={handleSubmit} className="mx-auto" style={{ maxWidth: "500px" }}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="name" 
            name="name" 
            value={formData.name} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="travelDate" className="form-label">Travel Date</label>
          <input 
            type="date" 
            className="form-control" 
            id="travelDate" 
            name="travelDate" 
            value={formData.travelDate} 
            onChange={handleChange} 
            required 
          />
        </div>

        <div className="mb-3">
          <label htmlFor="travelers" className="form-label">No. of Travelers</label>
          <input 
            type="number" 
            className="form-control" 
            id="travelers" 
            name="travelers" 
            min="1" 
            value={formData.travelers} 
            onChange={handleChange} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">Submit Booking</button>
      </form>
    </div>
  );
};

export default Booking;
