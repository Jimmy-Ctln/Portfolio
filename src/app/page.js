import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'
import { Skills } from './sections/skills'
import { Experiences } from './sections/experiences'


export default function Portfolio() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
      <main className='h-full w-full'>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
      </main>
    </>
  )
}
 