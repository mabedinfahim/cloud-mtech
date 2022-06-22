import React from 'react';
import { Link } from 'react-router-dom';

const SingIn = () => {
    return (
        <div className='flex justify-center items-center bg-gray-200 py-6 sm:py-20'>
            <div className='w-[300px] h-[280px] sm:w-[400px] sm:h-[300px] bg-white shadow-2xl rounded-lg'>
                <h1 className='text-xl font-bold text-center my-4'>Sing In</h1>
                <div className='flex flex-col justify-center mx-6'>
                    <input className='bg-[#e6eef4] py-2 mb-4 pr-4 pl-2 border border-gray-300 rounded-md' type="email" name="email" placeholder="Email address or phone number" id="" />
                    <input className='bg-[#e6eef4] py-2 pr-4 mb-4 pl-2 border border-gray-300 rounded-md' type="password" name="password" placeholder="Password" id="" />
                    <input className='bg-blue-500 py-2 pr-4 pl-2 border rounded-md text-white' type="submit" name="number" value='Log In' id="" />
                </div>
                <div className='flex justify-center px-4 pt-2'>
                    <Link className="text-blue-500" to='/'>Forgotten account? .</Link>
                    <Link className='text-blue-500' to='/'>Sign up for Cloud-Mtech</Link>
                </div>
            </div>
        </div>
    );
};

export default SingIn;