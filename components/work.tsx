
import React from 'react'
import fr1 from '../public/assets/d1.jpg'
import fr2 from '../public/assets/f1.jpg'
import fr3 from '../public/assets/w3.jpg'
import fr4 from '../public/assets/d2.jpg'
import fr5 from '../public/assets/w6.jpg'
import Image from 'next/image';
import { FaArrowRightLong } from "react-icons/fa6";
import { FaLongArrowAltRight } from "react-icons/fa";
import free from '../public/assets/f3.jpg'



const data = [
    {
        id : 1,
        image : fr1
    },
    {
        id : 2,
        image : fr2
    },
    {
        id : 3,
        image : fr3
    },
    {
        id : 4,
        image : fr4
    },
    {
        id : 5,
        image : fr5
    }
]

const Work = () => {
  return (
    <div className='flex justify-center relative  '>
        <Image alt='' src={free} height={600} width={900} className='h-[55vh] lg:h-[90vh] w-full opacity-20 ' />
    <div className='absolute'>
        <div  className='font-semibold text-[35px] lg:text-[50px] text-white text-center mt-5 lg:mt-10'>
            Media
        </div>
       <div className='relative flex items-center pl-5'>
<div className='w-full h-full overflow-x-scroll scroll snap-x whitespace-nowrap scroll-smooth scrollbar-hide' id='slider' >
        {data.map((item) => (
            <Image height={300} width={300} src={item.image} alt="" key={item.id} className='w-[205px] h-[175px] lg:w-[300px] lg:h-[270px] inline-block rounded-md  lg:rounded-lg my-10 mx-3 lg:mx-5 snap-start cursor-pointer hover:scale-105 ease-in-out duration-300' />
        ))}
</div>
       </div>
       <div className='mt-3 mb-7 flex justify-center items-center'>
                <div className='flex justify-center px-6 py-2 gap-x-2 items-center cursor-pointer hover:bg-black hover:border border-blue-600 transition-all duration-300 text-white bg-blue-600 font-semibold text-xl lg:text-2xl' >
                    See More <FaLongArrowAltRight className='h-7 w-7' />
                </div>
       </div>
    </div>
    </div>
  )
}

export default Work