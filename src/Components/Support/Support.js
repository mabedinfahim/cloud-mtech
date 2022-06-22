import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon,ChipIcon,PhoneIcon, SupportIcon } from '@heroicons/react/solid'

const Support = () => {
    return (
    <div className='bg-banner-img bg-cover px-20 py-1 h-[700px] mb-[1500px] md:mb-[900px] lg:mb-80'>
        <h4 className='text-3xl text-white text-center pt-10'>SUPPORT</h4>
        <h1 className='text-3xl sm:text-5xl md:text-7xl font-bold py-6 text-center text-white'>Finding the right team</h1>
        <h5 className='text-3xl pb-52 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. In repudiandae veritatis ratione error tenetur, voluptates architecto possimus ad! Omnis minima ea quidem quisquam unde beatae, minus illo et cum vel?</h5>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 lg:gap-6'>
            <div className='w-5/6 md:w-5/6 bg-white h-[500px] md:h-[483px] shadow-2xl rounded-lg'>
                <div className='p-4 bg-blue-500 w-[60px] rounded-lg'>
                    <PhoneIcon className='w-8 h-8 mx-auto text-white'/>
                </div>
                <div className='p-6'>
                    <h1 className='pb-8 pt-6 font-bold text-2xl'>Sales</h1>
                    <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
                <hr />
                <div className='flex items-center bg-gray-100 p-4 rounded-b-lg'>
                    <Link className='pl-6 text-blue-500' to="/">Contact Us </Link><ArrowRightIcon className='w-4 h-4 text-blue-500 ml-2'/>
                </div>
            </div>

            <div className='w-5/6 md:w-5/6 bg-white h-[500px] md:h-[483px] shadow-2xl rounded-lg'>
                <div className='p-4 bg-blue-500 w-[60px] rounded-lg'>
                    <SupportIcon className='w-8 h-8 mx-auto text-white'/>
                </div>
                <div className='p-6'>
                    <h1 className='pb-8 pt-6 font-bold text-2xl'>Sales</h1>
                    <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
                <hr />
                <div className='flex items-center bg-gray-100 p-4 rounded-b-lg'>
                <Link className='pl-6 text-blue-500' to="/">Contact Us </Link><ArrowRightIcon className='w-4 h-4 text-blue-500 ml-2'/>
                </div>
            </div>

            <div className='w-5/6 md:w-5/6 bg-white h-[500px] md:h-[483px] shadow-2xl rounded-lg'>
                <div className='p-4 bg-blue-500 w-[60px] rounded-lg'>
                    <ChipIcon className='w-8 h-8 mx-auto text-white'/>
                </div>
                <div className='p-6'>
                    <h1 className='pb-8 pt-6 font-bold text-2xl'>Media Inquiries</h1>
                    <p className='text-xl text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident iure placeat blanditiis ea sint earum hic iste quibusdam exercitationem.</p>
                </div>
                <hr />
                <div className='flex items-center bg-gray-100 p-4 rounded-b-lg'>
                    <Link className='pl-6 text-blue-500' to="/">Contact Us </Link><ArrowRightIcon className='w-4 h-4 text-blue-500 ml-2'/>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Support;