import React from 'react';
import {Link} from 'react-router-dom'

const SingUp = () => {
    return (
        <div className='bg-gray-200 flex justify-center items-center py-20 px-4'>
            <div className='w-[400px] h-[620px] bg-white shadow-2xl rounded-md'>
                <div className='text-center py-2'>
                    <h1 className='text-2xl font-bold'>Create a new account</h1>
                    <p>It's quick and easy.</p>
                </div>
                <hr />
               <form action="submit">
                    <div className='grid grid-cols-2 gap-4 py-4 px-4'>
                            <input className='required:border-red-500 border rounded-md border-gray-300 px-4 py-2' type="text" name="First Name" placeholder='First Name'  id="" />
                            <input className='required:border-red-500 border rounded-md border-gray-300 px-4 py-2' type="text" name="Last Name" placeholder='Last Name' id="" />
                    </div>
                    <div className='flex flex-col px-4 mb-4'>
                            <input className='required:border-red-500 rounded-md px-4 py-2 border border-gray-300  mb-4' type="email" name="email" placeholder='Email address or phone number' id="" />
                            <input className='required:border-red-500 rounded-md px-4 py-2 border border-gray-300 ' type="password" name="password" placeholder='Password' id="" />
                    </div>
                    <label className='px-4 mb' htmlFor="">Date of birth</label>
                    <div className='px-4 flex flex-col mt-2 '>
                        <input className='required:border-red-500 border border-gray-300 text-center rounded-sm' type="date"  id="" />
                    </div>
                    <label className='px-4 mb' htmlFor="">Gender</label>
                    <div className='px-4 flex justify-between items-center mt-2 '>
                      <div> <span>Male</span> <input className='default:ring-2 required:border-red-500' type="radio" name="" id="" /></div>
                      <div> <span>Female</span> <input className='default:ring-2 required:border-red-500' type="radio" name="" id="" /></div>
                      <div> <span>Other</span> <input className='default:ring-2 required:border-red-500' type="radio" name="" id="" /></div>
                    </div>
               </form>
                <div>
                    <p className='text-[12px] px-4 pt-2 sm:pt-4'>People who use our service may have uploaded your contact information to Cloud-Mtech. <Link className="hover:text-blue-500 hover:underline" to="/">Learn more.</Link> </p>
                    <p className='text-[12px] px-4 py-2 sm:py-4'>By clicking Sign Up, you agree to our Terms, Data Policy and <Link className='hover:text-blue-500 hover:underline' to="/">Cookie Policy</Link>. You may receive SMS notifications from us and can opt out at any time.</p>
                </div>
                <div className='flex justify-center'>
                    <input className='bg-green-500 cursor-pointer py-2 px-10 text-white font-bold rounded-md hover:bg-green-600' type="button" value="Submit" />
                </div>
                <Link to="/sing-in" className='text-md text-blue-500 hover:underline flex justify-center sm:mt-4'>Already have an account?</Link>
            </div>
        </div> 
    );
};

export default SingUp;