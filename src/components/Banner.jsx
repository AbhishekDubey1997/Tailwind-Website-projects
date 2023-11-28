import React from "react";
import Typed from "react-typed";

export default function Banner() {
  return (
    <div className="bg-[#2699fb] w-full py-[55px]">
       
      <div className="max-w-[1100px] my-[100px] mx-auto text-center font-bold "> 

        <div className="text-xl md:text-3xl ">Learn With us</div>

        <h2 className="text-white text-[30px]  md:text-[60px]">

          Grow With us.

        </h2>


        <div className=" text-[20px] md:text-[40px] text-white ">

          Learn{" "}
          <Typed
            strings={[
              "Web Development",
              "Digital Maketing",
              "Software Development",
            ]}
            typeSpeed={100}
            backSpeed={100}
            loop={true}
          />

        </div>

        <button className="bg-black font-medium text-white px-7 py-2.5 my-5 rounded">

          Get Started

        </button>

      </div>
      
    </div>
  );
}
