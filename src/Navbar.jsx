import {motion} from 'framer-motion'
import Sidebar from "./Sidebar/Sidebar";
const Navbar = ({nav}) => {
  return (
    <div className={`flex flex-col ${nav}`}>
        <div className="flex justify-center align-middle items-center ">
            <div className="md:hidden block"><Sidebar /></div>
            <a className="text-5xl font-bold font-Gloock" href="#Home">Alo</a>
        </div>
        <div className="md:flex flex-row gap-x-9 justify-center p-5 hidden font-Salsa">
            < motion.a className="text-3xl hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 border-black" href='#AboutMe' initial={{y:0}} whileHover={{y : -10}} >About Me</motion.a>
            <motion.a className="text-3xl hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 border-black " href='#Projects' initial={{y:0}} whileHover={{y : -10}}>Projects</motion.a>
            <motion.a className="text-3xl hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 border-black" href='#Skills' initial={{y:0}} whileHover={{y : -10}}>Skills</motion.a>
            <motion.a className="text-3xl hover:border-2 hover:border-t-0 hover:border-l-0 hover:border-r-0 border-black " href='#ContactMe' initial={{y:0}} whileHover={{y : -10}}>Contact Me</motion.a>
        </div>
    </div>
    
  )
}

export default Navbar
