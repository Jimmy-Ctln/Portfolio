import React from 'react'

export default function NavBar() {
  return (
    <nav className='border-2 border-red-500'>
        <ul className='flex justify-end gap-10'> 
            <li>Home</li>
            <li>Qui suis-je ?</li>
            <li>Compétences</li>
            <li>Expériences</li>
            <li>Réalisation</li>
            <li>Contact</li>
        </ul>  
    </nav>
  )
}
