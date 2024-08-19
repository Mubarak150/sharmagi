import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios'; // Add axios for making HTTP requests

function BookingForm() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'from':
        setFrom(value);
        break;
      case 'to':
        setTo(value);
        break;
      case 'date':
        setDate(value);
        break;
      case 'time':
        setTime(value);
        break;
      case 'phone':
        setPhone(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setErrors({});
    setSuccess('');

    try {
      const response = await axios.post('http://localhost:3000/api/bookings', {
        from,
        to,
        date: date.toISOString().split('T')[0], // Format date to YYYY-MM-DD
        time,
        phoneNumber: phone,
      });

      setSuccess(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        setErrors({ message: error.response.data.message || 'An error occurred' });
      } else {
        setErrors({ message: 'An error occurred' });
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col px-1 py-2 items-center justify-center min-h-auto lg:mt-12">
      <div className="bg-white p-4 md:p-8 rounded bg-opacity-90 shadow-xl w-[96vw] md:w-[92vw] lg:w-[540px] ">
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex justify-normal items-center gap-2 bg-gray-100 px-3 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#374151" className="size-6">
                <path fillRule="evenodd" d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <label htmlFor="from" className="block text-gray-700 text-sm font-medium">
                From:
              </label>
              <input
                type="text"
                id="from"
                name="from"
                value={from}
                onChange={handleInputChange}
                placeholder="address, hotel, airport etc"
                className="mt-1 block w-full bg-gray-100 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-normal items-center gap-2 bg-gray-100 px-3 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>

            </div>
            <div>
              <label htmlFor="to" className="block text-gray-700 text-sm font-medium">
                To:
              </label>
              <input
                type="text"
                id="to"
                name="to"
                value={to}
                onChange={handleInputChange}
                placeholder="address, hotel, airport etc"
                className="mt-1 block w-full bg-gray-100 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-normal items-center gap-2 bg-gray-100 px-3 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
              </svg>

            </div>
            <div>
              <label htmlFor="date" className="block text-gray-700 text-sm font-medium">
                Date:
              </label>
              <DatePicker
                selected={date}
                onChange={(date) => setDate(date)}
                dateFormat="yyyy-MM-dd"
                className="mt-1 block w-full bg-gray-100 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-normal items-center gap-2 bg-gray-100 px-3 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
              </svg>

            </div>
            <div>
              <label htmlFor="time" className="block text-gray-700 text-sm font-medium">
                Time:
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={time}
                onChange={handleInputChange}
                className="mt-1 block w-full bg-gray-100 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div className="flex justify-normal items-center gap-2 bg-gray-100 px-3 py-3">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
              </svg>
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 text-sm font-medium">
                Phone:
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                onChange={handleInputChange}
                placeholder="Your phone number"
                className="mt-1 block w-full bg-gray-100 py-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className={`w-full py-2 px-4 bg-red-400 text-white rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 ${
              isLoading ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
          
          {success && (
            <div className="text-green-500 mt-4">{success}</div>
          )}
          
          {errors.message && (
            <div className="text-red-500 mt-4">{errors.message}</div>
          )}
        </form>
      </div>
    </div>
  );
}

export default BookingForm;
