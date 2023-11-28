import React from "react";
import Single from "../assets/img/single.png";
import Double from "../assets/img/double.png";
import Triple from "../assets/img/triple.png";

export default function Plans() {
  return (
    <div className="px-2 py-[70px]">

      <div className="max-w-[1100px] mx-auto md:grid grid-cols-3 gap-6 ">

        <div className="shadow-xl my-4 h-[500px] hover:scale-105 duration-500 flex flex-col">

          <img
            className="w-[90px] mx-auto mt-[20px] bg-white"
            src={Single}
            alt="/"
          />

          <h2 className="text-[20px] font-bold text-center py-5">

            Web development

          </h2>

          <p className="text-center text-3xl font-bold">$149</p>

          <div className="text-center font-medium">

            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>

            <p className="py-2 border-b mx-8">

              Lorem Ipsum is simply dummy text of the printing

            </p>

            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>

          </div>

          <button className="bg-[#00df9a] w-[160px] rounded-md font-medium my-6 m-auto px-3 py-2">

            Start Trial

          </button>

        </div>


        <div className="shadow-xl my-4 h-[500px] bg-gray-100 hover:scale-105 duration-500 flex flex-col">

          <img
            className="w-[90px] mx-auto mt-[20px] bg-transparent"
            src={Double}
            alt="/"
          />

          <h2 className="text-[20px] font-bold text-center py-5">

            Digital Marketing

          </h2>
          <p className="text-center text-3xl font-bold">$149</p>

          <div className="text-center font-medium">

            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>

            <p className="py-2 border-b mx-8">

              Lorem Ipsum is simply dummy text of the printing

            </p>

            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>

          </div>

          <button className="bg-black text-[#00df9a] w-[160px] rounded-md font-medium my-6 m-auto px-3 py-2 ">

            Start Trial

          </button>

        </div>


        <div className="shadow-xl my-4 h-[500px] hover:scale-105 duration-500 flex flex-col">

          <img
            className="w-[90px] mx-auto mt-[10px] bg-white"
            src={Triple}
            alt="/"
          />

          <h2 className="text-[20px] font-bold text-center py-5">

            App Development

          </h2>

          <p className="text-center text-3xl font-bold">$149</p>

          <div className="text-center font-medium">

            <p className="py-2 border-b mx-8 mt-8">Lorem Ipsum is simply </p>

            <p className="py-2 border-b mx-8">

              Lorem Ipsum is simply dummy text of the printing

            </p>

            <p className="py-2 border-b mx-8">Lorem Ipsum is simply dumm.</p>

          </div>

          <button className="bg-[#00df9a] w-[160px]  rounded-md font-medium my-6 m-auto px-3 py-2">

            Start Trial

          </button>

        </div>

      </div>
      
    </div>
  );
}
