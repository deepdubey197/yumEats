import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'>Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className='w-[550px] mx-3 my-4' src='https://www.getfoodcourt.com/static/media/FC_two_phones.6ec9a842f905769677f9.webp'/>
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold text-2xl'>Get The App</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p>
                Discover a world of culinary delights with yumEats! Download our Android app now and embark on a gastronomic adventure right at your fingertips. From mouthwatering dishes to convenient food ordering, yumEats brings you a seamless and delightful dining experience. Explore an array of flavors, satisfy your cravings, and experience the joy of exceptional food, all with just a tap. Get started today and indulge in a feast of flavors with yumEats!
                     
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>
    </div>
  )
}

export default Delivery
