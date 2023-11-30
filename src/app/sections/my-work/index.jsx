import React from 'react'
import { Carousel } from '@/components/carousel'

export const MyWork = () => {
  return (
    <section id='my-work' className='pt-32 pb-20 border-2 border-red-700 max-lg:pt-8 max-lg:pb-8'>
        <div className='flex justify-center'>
            <h3 className='text-4xl h-auto font-bold mb-10 max-lg:mb-1 max-lg:text-3xl'>MES RÉALISATIONS</h3>
        </div>
        <>
            <Carousel/>
        </>
    </section>
  )
}
