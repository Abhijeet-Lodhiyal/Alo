import { useState } from "react"
import Links from "./Links"
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";
import {motion} from "framer-motion"

const Sidebar = () => {
  const [open,setOpen] = useState(false)
  const variants = {
    open : {
      clipPath : "circle(1200px at 5px 10px)",
      transition : {
        type : "spring",
        stiffness : 20 ,
      }
    },
    close : {
      clipPath : "circle(20px at 25px 25px)",
      transition : {
          delay : 0.3,
          type : "spring",
          stiffness : 400,
          damping : 40,
      }
    }
  }
  return ( <motion.div className=" flex flex-col justify-center items-center bg-white " animate = {open ? "open" : "close"}>
        <motion.div className="fixed top-0 left-0 bottom-0 w-screen md:w-[400px] bg-white" variants={variants}>
            <Links open={open}/>
            <button className="w-[50px] h-[50px] top-[2px] left-[17px] bg-transparent fixed rounded-full text-black" onClick={() => { setOpen((prev) => !prev ) }}>{open ? <RxCross2 /> : <RxHamburgerMenu /> }</button>
        </motion.div>
    </motion.div>
  )
}

export default Sidebar
