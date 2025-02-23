import Image from 'next/image';
import React from 'react'

interface WhyChooseCardProps {
    image:string;
    title:string;
}

const WhyChooseCard = ({image,title}:WhyChooseCardProps) => {
  return (
    <div>
      <Image src={image} alt='image' width={70} height={70} className='mx-auto'/>
      <h1 className='mt-6 text-center text-zinc-800 font-bold text-xl'>{title}</h1>
      <p className='mt-2 text-center text-xs font-medium text-zinc-700'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae, sit facere. Corporis culpa sapiente architecto.</p>
    </div>
  )
}

export default WhyChooseCard
