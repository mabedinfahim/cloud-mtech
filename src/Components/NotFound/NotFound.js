import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='bg-gray-300 py-20 px-4'>
            <div className='w-[300px] h-[330px] md:w-[480px] md:h-[300px] bg-white flex flex-col justify-center items-center shadow-2xl mx-auto p-6 rounded-md'>
                <div>
                    <h1 className='text-4xl font-bold text-center text-red-500'>Oops...!!</h1>
                    <h1 className='text-4xl font-bold text-center text-red-500'>Page Not Found</h1>
                </div>
                <div className='flex justify-center items-center'>
                    <Link className='bg-green-500 text-white font-bold py-2 px-4 rounded-md mt-6' to='/'>Back to Home</Link>
                </div>
            </div>
        </div>
    );
};

export default NotFound;