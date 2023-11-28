import React from 'react'
import laptop from "../assets/img/laptop.jpg"

export default function Experts() {
  return (
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
  )
}

