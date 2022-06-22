import React from 'react';
import { CheckIcon } from '@heroicons/react/solid'
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <>
            <div className='bg-[#0F172A] px-20 h-[800px] md:h-[600px] mb-[1400px] md:mb-[500px]'> 
            <p className='text-2xl text-gray-500 uppercase text-center font-semibold py-10'>Pricing</p>
            <h1 className='text-5xl font-bold text-white text-center'>The right price for your research</h1>
            <p className='text-center py-10 text-2xl text-gray-500 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur delectus dolores explicabo repudiandae hic cupiditate a eos exercitationem recusandae alias.</p>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
            <div className='h-[1000px] sm:h-[650px] bg-white shadow-2xl rounded-xl'>
                    <p className='mt-8 ml-8 py-1 uppercase bg-[#C7D2FE] px-2 rounded-full w-28 text-center'>Stander</p>
                    <div className='flex items-end pl-8 pt-6'>
                        <h1 className='text-6xl font-bold'>$49</h1><span>/mo</span>
                    </div>
                    <p className='text-2xl text-gray-500 pl-8 pr-2 py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className='pl-8 mb-10'>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4' /> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                    </ul>
                    <Link to='/' className='flex justify-center'><button className='w-4/5 rounded-xl bg-blue-500 text-white py-4'>GET STARTED</button></Link>
                </div>
                <div className='h-[1000px] sm:h-[650px] bg-white shadow-2xl rounded-xl'>
                    <p className='mt-8 ml-8 py-1 uppercase bg-[#C7D2FE] px-2 rounded-full w-28 text-center'>PREMIUM</p>
                    <div className='flex items-end pl-8 pt-6'>
                        <h1 className='text-6xl font-bold'>$99</h1><span>/mo</span>
                    </div>
                    <p className='text-2xl text-gray-500 pl-8 pr-2 py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                    <ul className='pl-8 mb-10'>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4' /> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                       <div className='flex'><CheckIcon className='text-green-500 w-8 h-8 mr-2 mb-4'/> <li className='text-2xl'>Lorem, ipsum dolor.</li></div>
                    </ul>
                   <Link to='/' className='flex justify-center'><button className='w-4/5 rounded-xl bg-blue-500 text-white py-4'>GET STARTED</button></Link>
                </div>
            </div>
        </div>
        </>
    );
};

export default Pricing;