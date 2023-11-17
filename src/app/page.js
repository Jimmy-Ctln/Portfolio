import NavBar from '@/components/nav-bar'
import { Home } from './sections/home'
import { AboutMe } from './sections/aboutme'
import { Skills } from './sections/skills'
import { Experiences } from './sections/experiences'
import { MyWork } from './sections/my-work'
import { Contact } from './sections/contact'
import { Footer } from '@/components/footer'
import Image from 'next/image'
import frame2 from "../../public/assets/diamond_frames/frame2.png";
import frame3 from "../../public/assets/diamond_frames/frame3.png";
import frame4 from "../../public/assets/diamond_frames/frame4.png";
import frame5 from "../../public/assets/diamond_frames/frame5.png";
import frame7 from "../../public/assets/diamond_frames/frame7.png";
import frame8 from "../../public/assets/diamond_frames/frame8.png";
import frame9 from "../../public/assets/diamond_frames/frame9.png"
import frame10 from "../../public/assets/diamond_frames/frame10.png"
import frame11 from "../../public/assets/diamond_frames/frame11.png"
import frame12 from "../../public/assets/diamond_frames/frame12.png"


export default function Portfolio() {
  return (
    <>
    <header className='fixed top-0 w-full h-10 flex justify-end items-center p-10 z-50 right-0 bg-gradient-to-r from-secondary to-primary'>
      <NavBar/>
    </header>
      <main>
        <Image className='absolute top-[15%] left-[5%]' width={368} height={462} src={frame2} alt='diamond icon'/>
        <Image className='absolute top-[60%] left-[45%]' width={88} height={132} src={frame3} alt='diamond icon'/>
        <Image className='absolute top-[59%] right-[2%]' width={500} height={503} src={frame4} alt='diamond icon'/>
        <Image className='absolute rotate-20 top-[112%] left-[5%]' width={267} height={230} src={frame8} alt='diamond icon'/>
        <Image className='absolute top-[170%] left-[25%]' width={368} height={303} src={frame7} alt='diamond icon'/>
        <Image className='absolute top-[211%] left-[57%]' width={200} height={200} src={frame9} alt='diamond icon'/>
        <Image className='absolute rotate-[-90deg] top-[260%] right-[-9%]' width={1000} height={1000} src={frame10} alt='diamond icon'/>
        <Image className='absolute rotate-[-10deg] top-[303%] left-[10%]' width={368} height={462} src={frame2} alt='diamond icon'/>
        <Image className='absolute top-[360%] right-[2%]' width={368} height={462} src={frame5} alt='diamond icon'/>
        <Image className='absolute top-[390%] left-[25%]' width={300} height={300} src={frame7} alt='diamond icon'/>
        <Image className='absolute top-[426%] left-[1%]' width={150} height={150} src={frame3} alt='diamond icon'/>
        <Image className='absolute rotate-[-180deg] blur-sm top-[424%] right-[2%]' width={150} height={150} src={frame11} alt='diamond icon'/>
        <Image className='absolute top-[490%] blur-sm left-[-5%]' width={600} height={500} src={frame10} alt='diamond icon'/>
        <Image className='absolute top-[510%] right-[10%]' width={300} height={300} src={frame4} alt='diamond icon'/>
        <Image className='absolute top-[560%] blur-sm left-[10%]' width={200} height={200} src={frame3} alt='diamond icon'/>
        <Image className='absolute top-[570%] blur-lg right-[10%]' width={400} height={400} src={frame12} alt='diamond icon'/>
        <div className='w-735 h-735 top-[-30%] right-[-25%] absolute bg-gradient-to-r from-third filter blur-[150px] rounded-full'></div>
        <div className='w-735 h-735 top-[70%] left-[-12%] absolute bg-gradient-to-r from-third filter blur-[50px] rounded-full'></div>

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
 