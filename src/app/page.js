import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'
import { Skills } from './sections/skills'


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
      </main>
    </>
  )
}
 