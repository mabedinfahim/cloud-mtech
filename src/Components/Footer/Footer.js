import React from 'react';
import { Link } from 'react-router-dom';
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';

const Footer = () => {
    return (
        <div className='bg-[#0F172A] px-10 sm:px-20 pt-20 pb-6 '>
        <div className='border-b-[1px] border-gray-500 sm:grid sm:grid-cols-3 sm:gap-4 lg:flex lg:justify-between text-white pb-6'> 
           <div>
                <h1 className='text-2xl mb-2'>SOLUTIONS</h1>
                <div className='flex flex-col'>
                    <Link to="/">Marketing</Link>
                    <Link to="/">Analytics</Link>
                    <Link to="/">Commerce</Link>
                    <Link to="/">Data</Link>
                    <Link to="/">Cloud</Link>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>SUPPORT</h1>
                <div className='flex flex-col'>
                    <Link to="/">Pricing</Link>
                    <Link to="/">Documentation</Link>
                    <Link to="/">Guides</Link>
                    <Link to="/">API Status</Link>
                </div>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>COMPANY</h1>
               <div className='flex flex-col'>
                    <Link to="/">About</Link>
                    <Link to="/">Blog</Link>
                    <Link to="/">Jobs</Link>
                    <Link to="/">Press</Link>
                    <Link to="/">Partners</Link>
               </div>
            </div>
            <div>
                <h1 className='text-2xl mb-2'>LEGAL</h1>
                <div className='flex flex-col'>
                    <Link to="/">Claims</Link>
                    <Link to="/">Privacy</Link>
                    <Link to="/">Terms</Link>
                    <Link to="/">Policies</Link>
                    <Link to="/">Conditions</Link>
                </div>
            </div>
            <div className='w-2/5 sm:w-4/5 text-start'>
                <h1 className='text-2xl mb-4'>SUBSCRIBE TO OUR NEWSLETTER</h1>
                <p className='mb-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                <div className='block sm:flex justify-center sm:items-center'>
                    <input className='py-2 sm:w-80 rounded-lg text-gray-500 pl-4 mb-2' type="text" name="Email" placeholder="E-mail" id="" /><input className='bg-blue-500 w-20 py-2 sm:ml-2 px-4 rounded-lg hover:bg-[#0F172A] border hover:text-blue-500 border-blue-500 hover:border-blue-500' type="submit" value="Submit" />
                </div>
            </div>
           </div>
           <div className='py-6 flex justify-between items-center'>
                <div className='text-white'> 
                    <p>2022 Cloud-Mtech. All rights reserved</p>
                </div>
                <div className='flex justify-center gap-2'>
                    <Link to='/'> <FacebookOutlinedIcon className='text-white w-8 h-8'/></Link>
                    <Link to='/'> <FacebookOutlinedIcon className='text-white w-8 h-8'/></Link>
                    <Link to='/'> <FacebookOutlinedIcon className='text-white w-8 h-8'/></Link>
                    <Link to='/'> <FacebookOutlinedIcon className='text-white w-8 h-8'/></Link>
                </div>
           </div>
        </div>
    );
};
 
export default Footer;