'use client'

import React from 'react'
import { Carousel } from '@/components/carousel'
import { ProjectList } from '@/components/project-list'
import useWindowSize from '@/components/hooks/useWindowSize'

export const MyWork = () => {

  const isSmallScreen = useWindowSize(780)

  return (
    <section id='my-work' className='h-full pb-40 pt-36 relative max-lg:pt-8'>
        <div className='flex justify-center'>
            <h3 className='text-4xl h-auto font-bold mb-10 max-lg:mb-1 max-lg:text-3xl'>MES RÉALISATIONS</h3>
        </div>
        <>
          {isSmallScreen ? (
            <ProjectList/>
          ) : (
            <Carousel/>
          )}
        </>
    </section>
  )
}
