"use client";
import { reviewData } from '@/data/data';
import Image from 'next/image';
import React from 'react'
import { FaStar } from 'react-icons/fa';
import "swiper/css"
import "swiper/css/effect-cards"
import { EffectCards } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const ReviewsSlider = () => {
  return (
    <div>
      <Swiper effect='cards' grabCursor={true} modules={[EffectCards]} className='md:w-[450px] md:h-[350px] w-[90%] h-[300px] ' >
        {reviewData.map((data) => {
            return (
                <SwiperSlide key={data.id} className='bg-white rounded-3xl block'>
                    <div className='w-[80%] mx-auto mt-16   '>
                        <p className='text-xs sm:text-sm md:text-base font-semibold'>{data.review}</p>
                        <div className='flex items-center mt-4 '>
                            <FaStar className='md:w-6 md:h-6 w-3 h-3 text-primary '/>
                            <FaStar className='md:w-6 md:h-6 w-3 h-3 text-primary '/>
                            <FaStar className='md:w-6 md:h-6 w-3 h-3 text-primary '/>
                            <FaStar className='md:w-6 md:h-6 w-3 h-3 text-primary '/>
                            <FaStar className='md:w-6 md:h-6 w-3 h-3 text-primary '/>
                        </div>
                        <div className='mt-10'>
                            <div className='flex items-center space-x-4'>
                                <Image src={data.image} alt='client' width={60} height={60} className='rounded-full'/> 
                                <div>
                                    <p className='text-sm sm:text-lg font-semibold'>{data.name}</p>
                                    <p className='text-zinc-600 text-xs sm:text-base'>{data.profession}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  )
}

export default ReviewsSlider
