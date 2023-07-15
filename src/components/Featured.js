import React,{useState} from 'react'
import {BsChevronCompactLeft, BsChevronCompactRight} from 'react-icons/bs'
import {RxDotFilled} from 'react-icons/rx'
const Featured = () => {

    const sliders=[
         {
            url:'https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         },
         {
            url:'https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
         },
         {
            url:'https://c0.wallpaperflare.com/preview/797/1015/608/burrito-chicken-close-up-delicious.jpg',
         },
    ]
    const[currentIndex, setCurrentIndex] = useState(0)

    const prevSlider = () =>{
        const isFirstSlide=currentIndex === 0
        const newIndex = isFirstSlide ? sliders.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }

    const nextSlider = () =>{
        const isFirstSlide=currentIndex === sliders.length -1
        const newIndex = isFirstSlide ? 0 : currentIndex +1
        setCurrentIndex(newIndex)

    }
    const moveToNextslide = (slideIndex) =>{
        setCurrentIndex(slideIndex)
    }
    return ( 
        <div className='max-w-[1520px] h-[400px] w-full py-4 px-4 relative group'>
            <div className='w-full h-full rounded-2xl bg-center bg-cover duration-500'
                style={{backgroundImage:`url(${sliders[currentIndex].url})`}}
            ></div>
            <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactLeft onClick={prevSlider}/>
            </div>
            <div className='hidden group-hover:block absolute top-[40%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-orange-700 text-white cursor-pointer'>
                <BsChevronCompactRight onClick={nextSlider}/>
            </div>
            <div className='flex top-4 justify-center py-2'>
                {
                    sliders.map((sliderItems, sliderIndex)=>(
                        <div
                            key={sliderIndex}
                            onClick={()=>moveToNextslide(sliderIndex)}
                         className='text-2xl cursor-pointer'>
                            <RxDotFilled/>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured
