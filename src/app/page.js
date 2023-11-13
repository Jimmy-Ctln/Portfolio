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
    <header>
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
 