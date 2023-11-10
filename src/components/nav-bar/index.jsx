import React from 'react'
import Link from 'next/link'

export default function NavBar() {
  return (
    <nav>
        <ul className='flex justify-end gap-10'> 
        <li><Link href='#home'className='cursor-pointer'>Home</Link></li>
        <li><Link href='#about-me' className='cursor-pointer'>Qui suis-je ?</Link></li>
        <li><Link href='#skills' className='cursor-pointer'>Compétences</Link></li>
        <li><Link href='#experiences' className='cursor-pointer'>Expériences</Link></li>
        <li><Link href='' className='cursor-pointer'>Réalisation</Link></li>
        <li><Link href='' className='cursor-pointer'>Contact</Link></li>
        </ul>  
    </nav>
  )
}
