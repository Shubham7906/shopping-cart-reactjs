import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    cardNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    alert(`Order placed`);
  };

  return (
    <div className="container mx-auto mt-10 p-4">
      <h2 className="text-2xl font-semibold mb-6">Checkout</h2>
      <form onSubmit={handleSubmit}>
        {/* Shipping Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Shipping Information</h3>
          <div className="mb-4">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        {/* Payment Information */}
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
          <div className="mb-4">
            <label htmlFor="cardNumber">Card Number</label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              className="w-full p-2 border rounded"
              required
            />
          </div>
        </div>

        <div className="flex justify-end">
          <Link to='/'
            onClick={() => handleSubmit()}
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
          >
            Place Order
          </Link>
        </div>
      </form>
    </div>
  );
}

export default Checkout;
