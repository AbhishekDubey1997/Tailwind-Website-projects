import React, { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

export default function Header() {

    const[toggle,setToggle] = useState(0);

  return (
   
      <div className='bg-[#2699fb] p-4'>
        <div className='max-w-[1100px]  mx-auto flex justify-between items-center'>
            <div className='md:text-3xl font-bold text-[25px]'>
                WsCube Tech
            </div>

            {
                
                toggle?
                <IoMdClose onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block' /> 
                :
                <IoMenuSharp onClick={()=>setToggle(!toggle)} className='text-white text-3xl md:hidden block'/>
            
            }
            
            <ul className='hidden md:flex  text-white gap-10 cursor-pointer'>
                <li><Link to="/">Company</Link></li>
                <li><Link to="/Tutorials">Tutorials</Link></li>
                <li><Link to="/Resources">Resources</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
                
                
                
            </ul>

            {/* responsive menu */}

            <ul className={`duration-500 md:hidden text-white fixed w-full h-screen bg-black  top-[68px] 
            ${toggle ? 'left-[0]' : 'left-[-100%]'}
            `}>

                <li className='text-center p-4 text-2xl mt-[80px]' ><Link to="/" onClick={()=>setToggle(!toggle)}>Company</Link></li>
                <li className='text-center p-4 text-2xl'><Link to="/Tutorials"onClick={()=>setToggle(!toggle)}>Tutorials</Link></li>
                <li className='text-center p-4 text-2xl'><Link to="/Resources"onClick={()=>setToggle(!toggle)}>Resources</Link></li>
                <li className='text-center p-4 text-2xl'><Link to="/Contact"onClick={()=>setToggle(!toggle)}>Contact</Link></li>
                
            
                
            </ul>    
        </div>
      </div>
    
  )
}
