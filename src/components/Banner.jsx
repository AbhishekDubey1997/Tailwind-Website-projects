import React from "react";
import Typed from "typed.js";
import { useEffect , useRef } from "react";
import laptop from "../assets/img/laptop.jpg"
import Single from "../assets/img/single.png";
import Double from "../assets/img/double.png";
import Triple from "../assets/img/triple.png";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

export default function Banner() {

  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
      "Web Development",
      "Digital Maketing",
      "Software Development"], 
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
    <div className="bg-[#2699fb] w-full py-[55px]">
       
      <div className="max-w-[1100px] my-[100px] mx-auto text-center font-bold "> 

        <div className="text-xl md:text-3xl ">Learn With us</div>

        <h2 className="text-white text-[30px]  md:text-[60px]">

          Grow With us.

        </h2>


        <div className=" text-[20px] md:text-[40px] text-white ">

          Learn{" "}
          
           <span ref={el}></span>


        </div>

        <button className="bg-black font-medium text-white px-7 py-2.5 my-5 rounded">

          Get Started

        </button>

      </div>
      
    </div>

    {/* Expert */}

    <div className='max-w-[1100px] mx-auto my-10   md:grid grid-cols-2'>

        <div className=' col-span-1 md:w-[80%]'>

            <img src={laptop} alt="" />

        </div>

        <div className='col-span-1 flex flex-col justify-center px-3 '>

            <h1 className='text-justify text-[#00df9a] font-bold my-2'>LEARN FROM REACT</h1>

            <p className='my-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima porro, possimus cum eligendi, doloremque aliquid numquam vitae error asperiores cupiditate, voluptas optio quaerat quo fugiat et suscipit dicta modi iusto sed facilis officia pariatur magni? Cumque ipsum voluptatum cum,</p>

            <button className='bg-black text-white w-[100px] my-3 p-2 rounded'>Get Started</button>
            
        </div>
      
    </div>

    {/* newsletter */}

    <div className='bg-[#2699fb] py:6 md:pl-[70px] px-6'>

        <div className=" max-w-[1100px] md:flex justify-between py-[50px]">

            <div className='m-2'>

                <h1 className=' text-[20px] md:text-[40px] text-white font-bold '>Want to learn latest I.T skills?</h1>

                <span className='text-white'>Sign up to our newsletter and stay up to date.</span>

            </div>

            <div className='m-2'>

                <input type="text" className='p-3 mr-2 text-slate-300 my-3 rounded' placeholder='Email' />

                <button className='bg-black font-medium text-white px-7 py-2.5 my-3 md:my-5 rounded'>Get Started</button>

                <br />

                <p className='text-white'>We care about the protection of your Data.Read our <br />
               
                <a href="" className='text-black'>Privacy Policies</a></p>

            </div>
            

        </div>
      
    </div>

    {/* Plans */}

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

    {/* Footer */}

    <div className='bg-[#2699fb] max-w-[1265px]  mx-auto  py-[50px] md:pl-[80px] md:grid lg:grid-cols-3  text-white'>
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
