import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'
import { Skills } from './sections/skills'
import { Experiences } from './sections/experiences'
import { MyWork } from './sections/my-work'
import { Contact } from './sections/contact'
import { Footer } from '@/components/footer'


export default function Portfolio() {
  return (
    <>
    <header className='fixed h-10 flex justify-center items-center p-10 rounded-lg z-50 right-0 mr-10 bg-gradient-to-r from-secondary to-primary'>
      <NavBar/>
    </header>
      <main>
      <Home/>
      <AboutMe/>
      <Skills/>
      <Experiences/>
      <MyWork/>
      <Contact/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  )
}
 