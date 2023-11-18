import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'
import { Skills } from './sections/skills'
import { Experiences } from './sections/experiences'
import { MyWork } from './sections/my-work'
import { Contact } from './sections/contact'
import { Design } from '@/components/design'


export default function Portfolio() {
  return (
    <>
    <header className='fixed top-0 w-full h-10 flex justify-end items-center p-10 z-50 right-0 bg-gradient-to-r from-secondary to-primary'>
      <NavBar/>
    </header>
      <Design/>
      <main>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
      <MyWork/>
      <Contact/>
      </main>
    </>
  )
}
 