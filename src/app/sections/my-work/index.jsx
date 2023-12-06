import React from 'react'
import { Carousel } from '@/components/carousel'

export const MyWork = () => {
  return (
    <section id='my-work' className='h-full mt-32 pb-80 pt-36 relative max-lg:pt-8'>
        <div className='flex justify-center'>
            <h3 className='text-4xl h-auto font-bold mb-10 max-lg:mb-1 max-lg:text-3xl'>MES RÉALISATIONS</h3>
        </div>
        <>
            <Carousel/>
        </>
    </section>
  )
}
