import React from 'react'
import Image from 'next/image'
import github from '../../../public/assets/social_network_icons/github.svg'
import linkedin from '../../../public/assets/social_network_icons/linkedin.svg'
import Link from 'next/link'


export function SocialNetworks() {
  return (
    <div className='flex gap-5'>
      <Link href="https://github.com/Jimmy-Ctln" target='_blank'>
        <Image className='w-8 h-8 cursor-pointer' src={github} alt='logo github'/>
      </Link>
      <Link href="https://www.linkedin.com/in/jimmycatalano/" target='_blank'>
        <Image className='w-8 h-8 cursor-pointer' src={linkedin} alt='logo linkedin'/>
      </Link>
    </div>
  )
}
 