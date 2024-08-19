import React from "react";

function Heading() {
  return (
    <div className="flex flex-col items-center justify-center">
      <h2 className="text-gray-600 font-bold font-poppins text-center md:text-xl lg:text-3xl mx-4 mt-24 font-teachers w-4/5 lg:w-3/4">
        “Sharma Gi Travels provided an outstanding experience! Their service was punctual, professional, and incredibly smooth. I highly recommend them for any transportation needs in the Boston area. Thank you for making my trip hassle-free.”
      </h2>
      <p className="text-gray-500 font-semibold font-poppins text-center md:text-lg lg:text-2xl mx-4 mt-4 italic">-Ava</p>
      <div className="hidden lg:block h-[50px]"></div>
    </div>
  );
}

export default Heading;
