import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import { MenuIcon, XIcon } from '@heroicons/react/solid'


const Header = () => {
    const [open,setOpen]=useState(false)
    return (
        <div className='md:flex px-4 py-4 bg-white shadow-lg sm:justify-between items-center lg:px-20 sticky top-0' >
            <div onClick={()=>setOpen(!open)} className="w-8 h-8 md:hidden block ml-2">{open? <XIcon/>:<MenuIcon/>}</div>
           <div className='text-3xl font-bold uppercase text-blue-500 hidden md:block'>Cloud-MTech.</div>
            <nav className= {`md:grid md:grid-cols-5 gap-4 ${open?"block":"hidden"}`}>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/about">About</CustomLink>
                <CustomLink to="/support">Support</CustomLink>
                <CustomLink to="/platforms">Platforms</CustomLink>
                <CustomLink to="/pricing">Pricing</CustomLink>
            </nav>
            <div className={`md:grid md:grid-cols-2 sm:gap-4 flex flex-col ${open? "block":"hidden"}`}>
                <Link className='font-semibold sm:py-2 px-2 sm:px-4 border-blue-500 hover:bg-blue-500 hover:rounded-lg hover:text-white ' to='/sing-in'>Sing In</Link>
                <Link className='font-semibold sm:py-2 px-2 sm:px-4 border-blue-500 hover:bg-blue-500 hover:rounded-lg hover:text-white ' to='/sing-Up'>Sing Up</Link>
            </div>
        </div>
    );
};

export default Header;