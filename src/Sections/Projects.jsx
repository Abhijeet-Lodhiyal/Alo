import pitr from '../assets/pitr.webp'
import bt from '../assets/bt.webp'
import lu from '../assets/lu.webp'
import qa from '../assets/qa.webp'
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from 'react';


const items = [
  {
    id: 1,
    title: "Lucid",
    desc: "I have crafted a full-stack website utilizing ReactJS, NodeJS, and Socket.io. This platform enables users to seamlessly upload posts, engage in discussions by commenting on others' posts, and connect through real-time chat with friends. With a user-friendly interface and dynamic features, the website combines the power of React for front-end interactivity, NodeJS for backend functionality, and Socket.io for instant communication, creating a comprehensive and interactive online experience.",
    img: lu,
  },
  {
  id: 2,
  title: "Brain tumor detection",
  desc: "I have created a Convolutional Neural Network (CNN) model for detecting brain tumors in MRI images. To enhance accessibility, I converted the model into a TensorFlow.js format. This allows seamless integration with React, empowering users to make real-time predictions directly in the browser. Now, with the combined capabilities of the CNN model and the interactive interface of React, users can efficiently and conveniently assess the presence of brain tumors in MRI scans. ",
  img: bt,
}, {
  id: 3,
  title: "Paris in the rain",
  desc: "Developed a comprehensive website using ReactJS, TailwindCSS, and Framer Motion, dedicated to providing detailed insights into tourist destinations, restaurants, and hotels in Paris. The dynamic user interface, crafted with ReactJS, coupled with the visually appealing design using TailwindCSS and Framer Motion, ensures an immersive and informative experience for anyone planning to visit the enchanting city of Paris",
  img: pitr,
},
{
  id: 4,
  title: "Quiz App",
  desc: "I've developed an engaging quiz website leveraging React and Framer Motion for the frontend. The platform tests candidates on general trivia questions sourced from an API, enhancing their knowledge and entertainment. To elevate the user experience, I integrated a TensorFlow.js model for speech recognition, allowing users to interact verbally. This combination of cutting-edge technologies ensures an interactive, educational, and innovative experience for users exploring the diverse realm of general trivia on this platform",
  img: qa,
}
];


const ProjItem = ({ item }) => {
  const ref = useRef();
  const { scrollYProgress } = useScroll()
  return (<div className='h-screen bg-gradient-to-b to-[#87bdd3] from-[#2aa5d5] snap-center scroll-smooth flex  justify-center align-middle items-center overflow-hidden' ref={ref}>
    <div className='w-[90%] flex gap-5 lg:flex-row flex-col items-center mt-20' >
      <motion.div className='lg:w-[50%] w-[90%] ' initial= {item.id % 2 == 0 ?  {y : -200}: {y : 200}} whileInView={{y : 0}} transition={{duration : 1}}>
        <img className='rounded-lg' src={item.img}></img>
      </motion.div>
      <motion.div className='lg:w-[50%] flex flex-col  rounded-xl  items-center p-4' initial= {item.id % 2 == 0 ?  {y : 200}: {y : -200}} whileInView={{y : 0}} transition={{duration : 1}}>
        <p className='font-Rakkas lg:text-8xl md:text-5xl text-4xl'>{item.title}</p>
        <p className='font-Salsa text-sm md:text-base'>{item.desc}</p>
      </motion.div>
    </div>
  </div>);
}

const Projects = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30
  });
  return (
    <div className='relative ' ref={ref}>
      <div className='bg-[#2aafd8] sticky top-0 l-0 p-4 text-center text-7xl'>
        <p className='mb-4 font-Gloock lg:text-8xl md:text-5xl text-4xl'>Projects</p>
        <motion.div style={{ scaleX }} className=' h-4 bg-[#000] sticky top-0 l-0 text-center  rounded-xl  text-7xl'></motion.div>
      </div>
      {items.map((item, key) => {
        return (<ProjItem key={key} item={item} />
        );
      })}
    </div>
  )
}

export default Projects
