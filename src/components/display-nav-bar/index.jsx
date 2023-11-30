import React, {useState} from 'react'
import Link from 'next/link'

export const DisplayNavBar = ({handleClick}) => {

  return (
    <div className="fixed top-0 left-0 right-0 w-full h-full">
    <nav className='flex justify-center bg-[#0f1113] bg-opacity-90 w-full h-full'>
      <ul className="flex flex-col justify-center text-2xl items-center gap-10">
        <li>
          <Link href="#home" onClick={handleClick} className="cursor-pointer">
            Home
          </Link>
        </li>
        <li>
          <Link href="#about-me" onClick={handleClick} className="cursor-pointer">
            Qui suis-je ?
          </Link>
        </li>
        <li>
          <Link href="#skills" onClick={handleClick} className="cursor-pointer">
            Compétences
          </Link>
        </li>
        <li>
          <Link href="#experiences" onClick={handleClick} className="cursor-pointer">
            Expériences
          </Link>
        </li>
        <li>
          <Link href="#my-work" onClick={handleClick} className="cursor-pointer">
            Réalisations
          </Link>
        </li>
        <li>
          <Link href="#contact" onClick={handleClick} className="cursor-pointer">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  </div>
  )
}
