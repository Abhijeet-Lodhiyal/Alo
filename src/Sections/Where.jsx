import profile from '../assets/profile3.webp'
import {motion} from 'framer-motion'

const Where = () => {
  return (
    <div className="h-screen bg-gradient-to-b to-[#87bdd3] from-[#2aa5d5]  snap-center scroll-smooth  flex md:flex-row flex-col items-center justify-center overflow-hidden">
    <motion.div className=" md:w-[50%] flex justify-center items-center md:h-[70%] h-[40%] overflow-hidden" initial={{x : -100}} whileInView={{x : 0}} transition={{duration : 1}}>
        <img src={profile} className=""></img>
    </motion.div>
    <motion.div className=" md:w-[40%]  text-[black]  rounded-xl p-4" initial={{x : 100}} whileInView={{x : 0}}  transition={{duration : 1}}>
        <h1 className="lg:text-7xl md:text-5xl text-4xl font-Rakkas mb-2" >What can I do for you?</h1>
        <h2 className='font-Salsa md:text-base text-sm' >I'm passionate about machine learning and web development, and I'm eager to take on related projects. Additionally, I'm open to exploring areas like AI, data science, and cybersecurity. Continuous learning drives me, and I stay updated on the latest tech. If you have exciting projects or want to discuss innovations in computer science, feel free to reach out. Let's collaborate and push the boundaries of what's possible in this field.</h2>
    </motion.div>
    </div>
  )
}

export default Where
