import {motion} from 'framer-motion'
import { useEffect, useState } from 'react'
const Cursor = () => {
  const [position,setPosition] = useState({x: 0 , y : 0})


  useEffect(() => {
    const mouseMove = (e) => {
      setPosition({x:e.clientX , y : e.clientY})
    }
    window.addEventListener("mousemove",mouseMove)
    return () => {
      window.removeEventListener("mousemove",mouseMove)
    }
  } ,[])

  return (
      <motion.img src='src\assets\computermouse.svg' animate={{x:position.x,y:position.y}} className='bg-transparent fixed h-10 w-10 '></motion.img>
  )
}

export default Cursor
