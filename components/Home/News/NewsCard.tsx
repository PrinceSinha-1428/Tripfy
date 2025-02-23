import Image from 'next/image';
import React from 'react'


interface NewsCardProps {
    image:string;
    title:string;
    date:string;
}

const NewsCard = ({image,title,date}:NewsCardProps) => {
  return (
    <div>
        <div className='h-[300px] '>
            <Image src={image} alt={title} width={300} height={300} className='w-full h-full object-cover rounded-lg' />
        </div>
        <h1 className='mt-6 text-lg text-zinc-900 font-semibold hover:text-blue-950 transition-all duration-200 cursor-pointer'>{title}</h1>
        <p className='text-sm text-zinc-700 mt-3 '>{date}</p>
    </div>
  )
}

export default NewsCard
