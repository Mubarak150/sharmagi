import React from "react";

function PopUpTailwind({ onClose, service, visible }) {
  if (!visible) return null; // Check if visible is true before rendering

  const handleOnClose = (e) => {
    if (e.target.id === "popup-modal") onClose();
  };

  return (
    <div
      onClick={handleOnClose}
      id="popup-modal"
      tabIndex={-1}
      className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50"
    >
      <div className="relative p-4 w-full max-w-md max-h-full">
        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 py-5 px-5">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
          >
            <svg
              className="w-3 h-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span className="sr-only">Close modal</span>
          </button>
          <div className="p-4 md:p-5 text-center">
            <img
              className="mx-auto mb-4 w-40 h-32"
              src={service.image}
              alt=""
            />
            <h3 className="mb-5 text-xl font-bold text-red-400 dark:text-gray-400">
              {service.rides}
            </h3>
            <p className="text-gray-700 text-justify">{service.descr}</p>
            <button
              onClick={onClose}
              className="mt-4 text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PopUpTailwind;
