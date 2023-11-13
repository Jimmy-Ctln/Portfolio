import React from 'react'
import { Carousel } from '@/components/carousel'

export const MyWork = () => {
  return (
    <div className='mt-40'>
        <div className='flex justify-center'>
            <h3 className='text-4xl h-auto font-bold'>MES RÉALISATIONS</h3>
        </div>
        <div>
            <Carousel/>
        </div>
    </div>
  )
}
