import React from "react";
import Single from "../assets/img/single.png";
import Double from "../assets/img/double.png";
import Triple from "../assets/img/triple.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Plans() {
  return (
    <>
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
    <div className='bg-[#2699fb] max-w-[1280px]  mx-auto   py-[50px] md:pl-[80px] md:grid lg:grid-cols-3  text-white'>
      <div className='pl-8 md:pl-1'>
        <h1 className='w-full text-3xl font-bold text-black  '>WsCube Tech.</h1>

        <p className='py-4 pr-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>

        <div className='flex justify-between w-[60%] my-6 mr:10'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
        </div>

      </div>


      <div className='lg:col-span-2 flex justify-evenly md:mt-1 mt:10 '>
        <div>

          <h6 className='font-medium  text-black'>Solutions</h6>
          <ul>
            <li className='py-2 text-sm'>Analytics</li>
            <li className='py-2 text-sm'>Marketing</li>
            <li className='py-2 text-sm'>Commerce</li>
            <li className='py-2 text-sm'>Insights</li>
          </ul>
          
        </div>
        <div>
          <h6 className='font-medium text-black'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Pricing</li>
            <li className='py-2 text-sm'>Document</li>
            <li className='py-2 text-sm'>Guides</li>
            <li className='py-2 text-sm'>API Status</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Company</h6>
          <ul>
            <li className='py-2 text-sm'>About</li>
            <li className='py-2 text-sm'>Blog</li>
            <li className='py-2 text-sm'>Jobs</li>
            <li className='py-2 text-sm'>Press</li>
            <li className='py-2 text-sm'>Careers</li>
          </ul>
        </div>
        <div>
          <h6 className='font-medium text-black'>Legal</h6>
          <ul>
            <li className='py-2 text-sm'>Claim</li>
            <li className='py-2 text-sm'>Policy</li>
            <li className='py-2 text-sm'>Terms</li>
          </ul>
        </div>
      </div>



    </div>
    </>
  );
}
