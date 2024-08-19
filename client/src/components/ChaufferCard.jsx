import React from "react";
// import image from "/AT.jpg";

function ChaufferCard() {
  return (
    <div className="flex items-center justify-between bg-red-400 text-white p-6 mt-7">
      <div className="relative md:w-1/2 p-8 lg:ml-8 bg-gradient-to-r from-red-300 to-red-600 shadow-lg">
        <div className="absolute -top-2 left-4 text-6xl text-white mt-3 ">
          &ldquo;
        </div>
        <div>
          <h1 className="text-4xl font-bold mb-4">
            I'M MORE THAN A CHAUFFEUR,
          </h1>
          <p className="text-xl mb-8">I'M YOUR SAFE SPACE ON WHEELS.</p>
          <div className="text-right">
            <p className="font-signature text-3xl">John Doe</p>
            <p className="text-sm mt-1"></p>
          </div>
        </div>
      </div>

      <div className="w-1/2 md:block">
        {/* <img src={image} alt="Chauffeur" className="w-full h-auto" /> */}
      </div>
    </div>
  );
}

export default ChaufferCard;
