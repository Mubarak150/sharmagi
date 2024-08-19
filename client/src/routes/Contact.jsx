import React, { useState } from 'react';
import axios from 'axios'; 
import Media from "../components/Media";

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    firstName: false,
    lastName: false,
    email: false,
    message: false,
  });

  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    // Update errors based on field changes
    const updatedErrors = { ...errors };
    switch (name) {
      case 'firstName':
      case 'lastName':
        updatedErrors[name] = value.length === 0;
        break;
      case 'email':
        updatedErrors[name] = !validateEmail(value);
        break;
      case 'message':
        updatedErrors[name] = value.length === 0;
        break;
      default:
        break;
    }
    setErrors(updatedErrors);

    // Check if all fields are valid to enable submit button
    setIsSubmitDisabled(
      Object.values(updatedErrors).some((error) => error === true)
    );
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      // Send form data to backend
      const response = await axios.post('http://localhost:3000/api/contact', formData);
      setSuccessMessage(response.data.message);
      setErrorMessage('');
      // Reset form data after successful submission
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        message: '',
      });
    } catch (error) {
        console.log(error)
      setErrorMessage("all fields required");
      setSuccessMessage('');
    }
  };

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center mt-3 lg:mt-28">
      <div className="absolute inset-0 bg-gray-300">
        <iframe
          width="100%"
          height="100%"
          frameBorder={0}
          marginHeight={0}
          marginWidth={0}
          title="map"
          scrolling="no"
          src="https://maps.google.com/maps?width=100%&height=600&hl=en&q=Boston,+MA&ie=UTF8&t=&z=14&iwloc=B&output=embed"

          style={{ filter: "grayscale(1) contrast(1.2) opacity(0.4)" }}
        />
      </div>
      <div className="hidden lg:flex flex-col justify-center items-start px-3 lg:w-1/3 ">
        {/* <h2 className="text-red-400 text-2xl py-1 font-bold">Contact Us!</h2>
        <h3 className="text-gray-700 font-semibold text-lg">
          Contact us for competitive pricing on all our transportation services, ensuring you get the best value for your journey.
        </h3> */}
      </div>
      <div className="flex items-center justify-center mt-24 mx-4 z-20">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                First Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-50 text-gray-700 border-2 rounded-none ${
                  errors.firstName ? 'border-red-500' : 'border-gray-800'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
              />
              {errors.firstName && (
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              )}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                Last Name
              </label>
              <input
                className={`appearance-none block w-full bg-gray-50 text-gray-700 border-2 rounded-none ${
                  errors.lastName ? 'border-red-500' : 'border-gray-800'
                } rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
              />
              {errors.lastName && (
                <p className="text-red-500 text-xs italic">Please fill out this field.</p>
              )}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-email">
                Email
              </label>
              <input
                className={`appearance-none block w-full bg-gray-50 text-gray-700 border-2 rounded-none ${
                  errors.email ? 'border-red-500' : 'border-gray-800'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="grid-email"
                type="email"
                placeholder="example@mail.com"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic">Please enter a valid email address.</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-message">
                Your Message
              </label>
              <textarea
                className={`appearance-none block w-full bg-gray-50 text-gray-700 border-2 rounded-none ${
                  errors.message ? 'border-red-500' : 'border-gray-800'
                } rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-red-500`}
                id="grid-message"
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic">Please enter a message.</p>
              )}
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <button
                className={`flex items-center justify-center py-2 bg-red-400 hover:bg-slate text-white rounded-sm hover:shadow-md w-full h-full ${
                  isSubmitDisabled ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                type="submit"
                disabled={isSubmitDisabled}
              >
                Submit
              </button>
            </div>
          </div>

          {successMessage && (
            <p className="text-green-500 text-xs italic mt-4">{successMessage}</p>
          )}

          {errorMessage && (
            <p className="text-red-500 text-xs italic mt-4">{errorMessage}</p>
          )}

          <div className="flex gap-3 mt-6">
            <Media />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
