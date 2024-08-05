import React from 'react';
import Questionare from './Questionare';
import bigSign from './Coomp/theuniversalsign.webp';

const TheQuestion = () => {
  return (
    <div className='w-screen flex justify-center bg-blue-400'>
      <div className='relative'>
        <div className='bg-red-400 rounded-2xl my-8 relative'>
          <img src={bigSign} className='h-48 w-full rounded-2xl object-cover' alt="" />
          <div className='absolute inset-0 bg-orange-500 bg-opacity-95 flex flex-col justify-center items-center rounded-2xl'>
            <div className='text-white text-center'>
              <h1 className='text-5xl font-bold text-black italic '>
                National Tour Siman
                <span className='text-white'>O</span>
                
                <span className='text-blue-500'>F</span>
              </h1>
              <h2 className='text-3xl mt-2 text-black font-semibold italic'>Orlando FL, 2025</h2>
            </div>
          </div>
        </div>
        <Questionare />
      </div>
    </div>
  );
}

export default TheQuestion;
