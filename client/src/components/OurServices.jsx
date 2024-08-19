import React, {useState} from "react";
import PopUpTailwind from "./PopUpTailwind";
import taxi1 from "/taxi (1).png";
import taxi2 from "/taxi (2).png";
import taxi3 from "/taxi (3).png";
import taxi4 from "/taxi (4).png";
import taxi5 from "/taxi (5).png";
import taxi6 from "/taxi (6).png";


function OurServices() {
  const [showMyModal, setShowMyModal] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  const handleOnClose = () => setShowMyModal(false);

  const services = [
    {
      image: taxi1,
      rides: "City-to-City rides",
      descr:
        "Your stress-free solution for traveling between cities, with chauffeurs across the globe.That sounds like a great way to enhance the customer experience! By incorporating additional wait time and flight tracking, your service can ensure smooth and stress-free airport transfers. This can be particularly useful for customers who may be worried about delays or changes in their flight schedules. It's a strong value proposition that highlights reliability and convenience.",
      btlearn: "Learn more",
    },
    {
      image: taxi2,
      rides: "Chauffeur hailing",
      descr:
        "Enjoy the quality of a traditional chauffeur, with the convenience of riding within minutes of booking.That sounds like a great way to enhance the customer experience! By incorporating additional wait time and flight tracking, your service can ensure smooth and stress-free airport transfers. This can be particularly useful for customers who may be worried about delays or changes in their flight schedules. It's a strong value proposition that highlights reliability and convenience.",
      btlearn: "Learn more",
    },
    {
      image: taxi3,
      rides: "Airport transfers",
      descr:
        "With additional wait time and flight tracking in case of delays, our service is optimized to make every airport transfer a breeze.That sounds like a great way to enhance the customer experience! By incorporating additional wait time and flight tracking, your service can ensure smooth and stress-free airport transfers. This can be particularly useful for customers who may be worried about delays or changes in their flight schedules. It's a strong value proposition that highlights reliability and convenience.",
      btlearn: "Learn more",
    },
    {
      image: taxi4,
      rides: "Hourly and full day hire",
      descr:
        "For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort.That sounds like a great way to enhance the customer experience! By incorporating additional wait time and flight tracking, your service can ensure smooth and stress-free airport transfers. This can be particularly useful for customers who may be worried about delays or changes in their flight schedules. It's a strong value proposition that highlights reliability and convenience.",
      btlearn: "Learn more",
    },
    {
      image: taxi5,
      rides: "Event Shuttles",
      descr:
        "For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort.For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort.",
      btlearn: "Learn more",
    },
    {
      image: taxi6,
      rides: "Group Transportation",
      descr:
        "For by-the-hour bookings or daily chauffeur hire, choose one of our tailored services for total flexibility, reliability and comfort.That sounds like a great way to enhance the customer experience! By incorporating additional wait time and flight tracking, your service can ensure smooth and stress-free airport transfers. This can be particularly useful for customers who may be worried about delays or changes in their flight schedules. It's a strong value proposition that highlights reliability and convenience.",
      btlearn: "Learn more",
    },
  ];

  const handleLearnMoreClick = (service) => {
    setSelectedService(service);
    setShowMyModal(true);
  };

  const getTrimmedText = (text) => {
    return text.split(" ").slice(0, 21).join(" ") + "...";
  };

  return (
    <div className="" id="services">
      <div className="hidden lg:block h-[50px]"></div>
      <h1 className="text-2xl text-center py-4 lg:py-8 text-gray-700 font-bold md:text-4xl ">
        Our Services
      </h1>

      <div className="lg:flex lg:flex-wrap mx-4 mt-2 md:mt-6 md:flex md:flex-wrap md:justify-center gap-2 lg:gap-6">
        {services.map((item, key) => (
          <div className="md:w-1/3 lg:w-1/4 mx-3 " key={key}>
            <img
              className="rounded-xl h-20 mb-3 mx-auto"
              src={item.image}
              alt=""
            />
            <div className="flex flex-col gap-2 mb-6">
              <h2 className="text-xl text-center md:text-2xl font-semibold text-red-400 font-poppins">
                {item.rides}
              </h2>
              <p className="text-gray-700 text-center">
                {getTrimmedText(item.descr)}
              </p>
              <h3
                onClick={() => handleLearnMoreClick(item)}
                className="underline hover:no-underline cursor-pointer text-gray-700 font-semibold text-center"
              >
                {item.btlearn}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {showMyModal && selectedService && (
        <PopUpTailwind
          onClose={handleOnClose}
          service={selectedService}
          visible={showMyModal}
        />
      )}
    </div>
  );
}

export default OurServices;
