import React from 'react';
import { Link } from 'react-router-dom';
import image1 from '../../images/Uploading-amico.png'
import { CloudUploadIcon,DatabaseIcon,ServerIcon,PaperAirplaneIcon} from '@heroicons/react/solid'

const Home = () => {
    return (
       <div className='bg-gray-200 pb-8'>
         <div className='sm:flex justify-between items-center px-6 py-2 sm:px-20' >
            <div className='w-3/5'>
                <p className='text-xl sm:text-2xl'>Unique Sequencing & Production</p>
                <p className='text-5xl sm:text-6xl font-bold py-6 text-blue-500'>Cloud Management</p>
                <p className='text-2xl mb-10'>This is our Tech brand.</p>
                <Link className=' font-semibold text-blue-500 py-4 px-10 hover:bg-blue-500 rounded-lg hover:text-white border-solid border-2 border-blue-500 transition duration-150 ease-linear' to='/'>GET STARTED </Link>
            </div>
            <div className='sm:w-2/5 mt-16'>
                <img src={image1} className="w-40% flex shrink-0" alt="" srcset="" />
            </div>
        </div>
        <div className='sm:mb-10 sm:px-20 mt-20'>
            <div className='mx-auto w-5/6  rounded-lg bg-gray-100'>
                <h1 className='text-center pt-6 pb-6'>Data Services</h1>
                <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 pl-10  md:gap-4 '>
                    <div className='grid justify-center items-center w-1/4 h-[100px] gap-2 '>
                    <CloudUploadIcon className='w-6 h-6 text-blue-500'/><div className='text-gray-500'>App Security</div>
                    </div>
                    <div className='grid justify-center items-center w-1/4 h-[100px] gap-2'>
                    <DatabaseIcon className='w-6 h-6 text-blue-500'/><div className='text-gray-500'>App Security</div>
                    </div>
                    <div className='grid justify-center items-center w-1/4 h-[100px] gap-2'>
                    <ServerIcon className='w-6 h-6 text-blue-500'/><div className='text-gray-500'>App Security</div>
                    </div>
                    <div className='grid justify-center items-center w-1/4 h-[100px] gap-2'>
                    <PaperAirplaneIcon className='w-6 h-6 text-blue-500'/><div className='text-gray-500'>App Security</div>
                    </div>
                </div>
            </div>
        </div>
       </div>
    );
};

export default Home;