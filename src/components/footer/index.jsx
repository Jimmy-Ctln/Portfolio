import React from 'react'
import { SocialNetworks } from '../social-networks'

export const Footer = () => {
  return (

    <div className='flex justify-center items-center gap-3 w-full mt-10 pb-10'>
        <span className='text-lg max-md:text-sm max-sm:text-xs'>Jimmy Catalano © 2023</span>
      <div className='w-12 max-sm:w-10'>
        <SocialNetworks/>
      </div>
    </div>
  )
}
