import React from 'react'
import { Carousel } from '@/components/carousel'

export const MyWork = () => {
  return (
    <section id='my-work' className='mt-20 pt-40 pb-20'>
        <div className='flex justify-center'>
            <h3 className='text-4xl h-auto font-bold mb-10'>MES RÉALISATIONS</h3>
        </div>
        <>
            <Carousel/>
        </>
    </section>
  )
}
