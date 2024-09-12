
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import logo from '../assets/vineetLogo.png';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaInstagram } from 'react-icons/fa';
import ThemeBtn from './ThemeButton';


const NavBar = () => {
  return (
    <nav className=" mb-8 flex items-center justify-between">
      <div className="flex flex-shrink-1 items-center">
        <img className="mx- w-20" src={logo} alt="logo" />
      </div>
      <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
        <ThemeBtn />
        <a href="http://linkedin.com/in/vineet-maurya-75aa52230" target='_blank'>
            <FaLinkedin className='text-slate-700 dark:text-slate-300'/>
              </a>
              <a href="https://github.com/Vineet369" target='_blank'>
            <FaGithub className='text-slate-700 dark:text-slate-300'/>
            </a>
            <a href="https://x.com/Vineet_369?t=MrsY8DFSvhLJBjIT_kKWBg&s=09" target='_blank'>
            <FaSquareXTwitter className='text-slate-700 dark:text-slate-300'/>
            </a>
            <a href="#" target='_blank'>
            <FaInstagram className='text-slate-700 dark:text-slate-300'/>
            </a>
            <a href="https://docs.google.com/document/d/1cNjV8YkDDCy4dqmbcaVHvc33eeB4Ar-4rQPva0PyRpQ/edit?usp=drive_link" target='_blank'>
          <h2 className='text-lg dark:text-slate-300'>| My Resume</h2>
        </a>
        </div>
    </nav>
  )
}

export default NavBar
