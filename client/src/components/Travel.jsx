import React from "react";

function Travel() {
  const typeTravel = [
    {
      image:
        "https://images.ctfassets.net/ov8o7v78mnye/2gUt2Ywe94RQTcajGHmG97/79558b3c62ec69f3ffe4b3fe61680b28/shield-check.svg",
      head: "Safety first",
      para: "Travel confidently knowing your safety is our #1 priority. Rigorous health and cleaning standards round out a best-in-class service.",
    },
    {
      image:
        "https://images.ctfassets.net/ov8o7v78mnye/1vprSNER4zLt0hDlaeBQUp/43c3253616d03a046f5f05a6f74f6037/car.svg",
      head: "Private travel solutions",
      para: "Discover your one-stop travel shop: long-distance rides, one way or return, by the hour, airport transfers, and more.",
    },
    {
      image:
        "https://images.ctfassets.net/ov8o7v78mnye/5Ltt2XJOYgNKVawcoM2sTl/9a3b9a39a80ab144e4b3be8ef4bd6e0d/leaf.svg",
      head: "Sustainable travel",
      para: "Breathe easy knowing all ride emissions are offset, as part of our global carbon offset program — the industry’s first.",
    },
  ];
  return (
    <div className="flex flex-col gap-2">
      <div className="hidden lg:block h-[60px]"></div>
      <h2 className="text-2xl text-center py-2 text-gray-700 font-bold md:text-4xl">What We Offer</h2>
      
      <div className="mt-4 mx-8 mb-3 lg:flex lg:flex-nowrap  flex flex-wrap md:px-24 lg:px-24">
        {typeTravel.map((item, key) => (
          <div key={key} className="mb-6 md:w-1/3 lg:w-1/4 mx-auto ">
            <img className="mx-auto" src={item.image} alt="" />
            <div className="mt-2 flex flex-col gap-3">
              <h2 className="text-center text-gray-500 font-bold md:text-xl  lg:text-2xl font-poppins">
                {item.head}
              </h2>
              <p className="text-center text-gray-700 text-base lg:pl-8  md:mx-5 lg:ms-0">
                {item.para}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Travel;
