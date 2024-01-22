import {motion} from 'framer-motion'
const AboutMe = () => {
  return (
    <div className='h-screen bg-[#dbecf4] snap-center scroll-smooth  bg-[url("src/assets/hero4.webp")]  md:bg-[url("src/assets/hero.webp")] object-cover bg-cover md:text-black text-white'>
        <div className=" flex flex-col h-screen  items-center text-center">
          <motion.h1 className="lg:text-8xl md:text-5xl text-4xl md:mt-[10%] mt-[35%] font-Rakkas" initial={{opacity : 0,scale : 0.8}} whileInView={{opacity:1 ,scale:1}} transition={{duration:1.5}}> Who am I?</motion.h1>
          <motion.h3 className="lg:text-4xl md:text-2xl text-lg font-Gloock" initial={{opacity : 0}} whileInView={{opacity:1}} transition={{duration:1.5}}>Hi, I am Abhijeet</motion.h3>
          <motion.p className=" md:text-xl text-base  font-medium" initial={{y : 100}} whileInView={{y:0}} transition={{duration:1}}>A web developer , an upcoming software developer and forever a student. I am passionate about learning new things and exploring new technologies .<br/>
            Apart from that I love to read books, write poems and play any sports.
          <br/> I want to push myself to the limits and find out what milestones I can accomplish .</motion.p>
        </div>
    </div>
  )
}

export default AboutMe
