import React from 'react';
import { Link } from 'react-router-dom';

const ForgottenPassword = () => {
    return (
        <div className='bg-gray-200 py-20'>
            <div className='w-[300px] h-[330px] md:w-[480px] md:h-[300px] bg-white shadow-2xl mx-auto p-6 rounded-md'>
                <h1 className='text-2xl font-bold py-4'>Find Your Account</h1>
                <hr/>
                <p className='py-4'>Please enter your email address or mobile number to search for your account.</p>
                <input className='border border-gray-300 rounded-md mb-4 py-2 w-full pl-2' type="text" name="" placeholder='Email address or phone number' id="" />
                <hr />
                <div className='flex justify-end items-center w-full'>
                    <div className='flex justify-between gap-2 items-center w-3/6 py-4'>
                        <Link className='bg-gray-200 text-gray-500 font-bold px-2 md:px-6 py-2 rounded-md' to='/'>Cancel</Link>
                        <Link className='bg-blue-500 text-white font-bold px-2 md:px-6 py-2 rounded-md' to='/'>Search</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgottenPassword;