import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'


export default function Portfolio() {
  return (
    <>
    <header>
      <NavBar/>
    </header>
      <main className='h-full w-full'>
      <Home/>
      </main>
    </>
  )
}
 