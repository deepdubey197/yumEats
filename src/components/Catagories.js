import React from 'react'
import {catagories} from '../data/data'
const Catagories = () => {
    console.log(catagories)
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
           Trending Chains</h1>
           <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
                {catagories.map((item)=>{

                return  <div
                key={item.id}
                 className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                        <img
                        className='object-cover rounded-xl w-full h-full cursor-pointer shadow-2xl'
                        src={item.image}
                        alt={item.name}
                        />
                    </div>
                })}
           </div>


    </div>
  )
}

export default Catagories
