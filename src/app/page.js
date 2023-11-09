import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'


export default function Portfolio() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
      <main className='h-full w-full'>
      <Home/>
      <AboutMe/>
      </main>
    </>
  )
}
 