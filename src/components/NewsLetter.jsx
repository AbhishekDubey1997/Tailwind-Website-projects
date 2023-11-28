import React from 'react'

export default function NewsLetter() {
  return (
    <div className='bg-[#2699fb] p-4'>

        <div className=" max-w-[1100px] md:flex justify-between py-[50px] ">

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
  )
}
