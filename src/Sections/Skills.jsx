import { SiTypescript, SiJavascript, SiTailwindcss, SiFramer, SiKeras, SiTensorflow, SiOpencv, SiPandas, SiNumpy, SiScikitlearn, SiMongodb, SiMysql, SiCplusplus, SiC, SiPython } from "react-icons/si";
import { FcLinux } from "react-icons/fc";
import { FaHtml5, FaJava } from "react-icons/fa";
import { DiCss3 } from "react-icons/di";
import { TbBrandNodejs } from "react-icons/tb";
import {motion} from 'framer-motion'

const Skills = () => {
  return (
    <div className='h-screen bg-gradient-to-b to-[#87bdd3] from-[#2aa5d5] snap-center scroll-smooth flex flex-col  items-center overflow-hidden'>
      <h1 className="lg:text-8xl md:text-5xl text-3xl font-bold md:mb-4 mb-2 mt-4 font-Gloock">Skills</h1>
      <div className="w-[90%] flex flex-wrap gap-3 justify-center h-[90%]">
        <motion.div className=" rounded-xl flex flex-col justify-center lg:w-[40%] md:w-[45%] md:h-[40%] w-[100%] text-center bg-white shadow-lg"
          initial={{x : -100}} whileInView={{x : 0}} transition={{duration : 1}}>
          <h1 className="font-Salsa lg:text-4xl md:text-2xl text-xl">Front End</h1>
          <div className="flex flex-wrap gap-5 justify-center p-4">
            <FaHtml5  className="xl:text-7xl d md:text-5xl text-3xl text-[#ff7813]" />
            <SiTypescript className="xl:text-7xl d md:text-5xl text-3xl text-[#3178c6]"  />
            <DiCss3  className="xl:text-7xl d md:text-5xl text-3xl text-[#1169ab]" />
            <SiJavascript  className="xl:text-7xl d md:text-5xl text-3xl text-[#f6de1d]" />
            <SiTailwindcss  className="xl:text-7xl d md:text-5xl text-3xl text-[#00b6d6]" />
            <SiFramer  className="xl:text-7xl d md:text-5xl text-3xl text-[#01abff]" />
          </div>
        </motion.div>
        <motion.div className=" rounded-xl flex flex-col justify-center lg:w-[40%]  md:w-[45%] md:h-[40%] w-[100%] text-center bg-white shadow-lg"
        initial={{x : 100}} whileInView={{x : 0}} transition={{duration : 1}}>
          <h1 className="xl:text-4xl md:text-2xl text-xl font-Salsa">Machine learning</h1>
          <div className="flex flex-wrap gap-5 justify-center p-4">
            <SiKeras className="xl:text-7xl text-3xl text-[#d00101]" />
            <SiTensorflow className="xl:text-7xl d md:text-5xl text-3xl text-[#fa8e02]" />
            <SiOpencv className="xl:text-7xl  d md:text-5xl text-3xl " />
            <SiPandas className="xl:text-7xl d md:text-5xl text-3xl " />
            <SiNumpy className="xl:text-7xl d md:text-5xl text-3xl text-[#4c76cc]" />
            <SiScikitlearn  className="xl:text-7xl d md:text-5xl text-3xl text-[#f69938]"/>

          </div>
        </motion.div>
        <motion.div className=" rounded-xl flex flex-col justify-center lg:w-[40%] md:w-[45%] md:h-[40%] w-[100%] text-center bg-white shadow-lg"
        initial={{x : -100}} whileInView={{x : 0}} transition={{duration : 1}}>
          <h1 className="lg:text-4xl md:text-2xl text-xl font-Salsa">Back End</h1>
          <div className="flex flex-wrap gap-5 justify-center p-4">
            <TbBrandNodejs className="xl:text-7xl md:text-5xl text-3xl text-[#539d43]"/>
            <SiMongodb className="xl:text-7xl md:text-5xl text-3xl text-[#1e8d37]"/>
            <SiMysql className="xl:text-7xl md:text-5xl text-3xl text-[#4d80a8]"/>
          </div>
        </motion.div>
        <motion.div className=" rounded-xl flex flex-col justify-center lg:w-[40%] md:w-[45%] md:h-[40%] w-[100%] text-center bg-white shadow-lg"
        initial={{x : 100}} whileInView={{x : 0}} transition={{duration : 1}}>
          <h1 className="lg:text-4xl md:text-2xl text-xl font-Salsa">Others</h1>
          <div className="flex flex-wrap gap-5 justify-center p-4">
            <FaJava className="xl:text-7xl md:text-5xl text-3xl text-[#eb6f00]"/>
            <SiCplusplus className="xl:text-7xl md:text-5xl text-3xl text-[#004580]" />
            <SiC  className="xl:text-7xl md:text-5xl text-3xl text-[#283596]"/>
            <SiPython  className="xl:text-7xl md:text-5xl text-3xl text-[#396e9d]"/>
            <FcLinux  className="xl:text-7xl md:text-5xl text-3xl text-[#f6de1d]"/>
          </div>
        </motion.div>


      </div>
    </div>
  )
}

export default Skills
