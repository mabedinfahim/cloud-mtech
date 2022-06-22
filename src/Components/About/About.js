import React from 'react';

const About = () => {
    return (
        <div className='px-20 py-20'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold mb-5'>Trusted by developers across the world</h1>
                <p className='text-3xl text-gray-400'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque asperiores earum placeat veritatis dignissimos itaque.</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 text-center'>
                <div className='w-3/3 md:w-2/3 lg:w-2/3 py-8 shadow-2xl rounded bg-white'>
                    <h1 className='text-6xl font-bold text-blue-500'>100%</h1>
                    <p className='text-1xl font-semibold text-gray-400'>Completion</p>
                </div>
                <div className='w-3/3 md:w-2/3 lg:w-2/3 py-8 my-6 lg:my-0 shadow-2xl rounded bg-white'>
                    <h1 className='text-6xl font-bold text-blue-500'>24/7</h1>
                    <p className='text-1xl font-semibold text-gray-400'>Delivery</p>
                </div>
                <div className='w-3/3 md:w-2/3 lg:w-2/3 py-8 md:mt-6 shadow-2xl  rounded bg-white'>
                    <h1 className='text-6xl font-bold text-blue-500'>100K</h1>
                    <p className='text-1xl font-semibold text-gray-400'>Transactions</p>
                </div>
            </div>
        </div>
    );
};

export default About;