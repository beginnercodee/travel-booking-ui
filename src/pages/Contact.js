import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Message sent!\n
Name: ${formData.name}
Email: ${formData.email}
Message: ${formData.message}`);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Contact Us</h2>
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
          <label htmlFor="message" className="form-label">Message</label>
          <textarea
            className="form-control"
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>

      {/* Footer Info */}
      <div className="text-center mt-5">
        <p>📞 Phone: +123 456 7890 | ✉️ Email: info@travelui.com</p>
        <p>🏢 Address: 123 Travel Street, Adventure City, World</p>
      </div>
    </div>
  );
};

export default Contact;
