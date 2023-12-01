import React from "react";
import laptop from "../assets/img/laptop.jpg";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Experts() {
  return (
    <>
    <div className="max-w-[1100px] mx-auto my-10 py-[40px]  md:grid grid-cols-2">
      <div className=" col-span-1 md:w-[80%]">
        <img src={laptop} alt="" />
      </div>

      <div className="col-span-1 flex flex-col justify-center px-3 ">
        <h1 className="text-justify text-[#00df9a] font-bold my-2">
          LEARN FROM REACT
        </h1>

        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro,
          possimus cum eligendi, doloremque aliquid numquam vitae error
          asperiores cupiditate, voluptas optio quaerat quo fugiat et suscipit
          dicta modi iusto sed facilis officia pariatur magni? Cumque ipsum
          voluptatum cum,
        </p>

        <button className="bg-black text-white w-[100px] my-3 p-2 rounded">
          Get Started
        </button>
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
