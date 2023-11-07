import React from 'react'

export default function NavBar() {
  return (
    <nav>
        <ul className='flex justify-end gap-10'> 
            <li className='cursor-pointer'>Home</li>
            <li className='cursor-pointer'>Qui suis-je ?</li>
            <li className='cursor-pointer'>Compétences</li>
            <li className='cursor-pointer'>Expériences</li>
            <li className='cursor-pointer'>Réalisation</li>
            <li className='cursor-pointer'>Contact</li>
        </ul>  
    </nav>
  )
}
