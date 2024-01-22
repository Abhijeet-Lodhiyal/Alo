import {motion} from 'framer-motion'


const Links = ({open}) => {
    const items = ["Home","AboutMe","Skills","Projects","ContactMe"]
    const variants = {
        open : {
            transition: {
                staggerChildren: 0.2,
              }
        },
        closed : {
            transition: {
                staggerChildren: 0.07,
                staggerDirection : -1
              }
        }
    }
    const itemVariants = {
        closed : {
            y: -50,
            opacity : 0,
        },
        open : {
            y: 0,
            opacity: 1,
        }
    }
  return (
    <motion.div className="absolute w-full h-full gap-[20px] flex flex-col justify-center items-center align-middle" variants={variants} animate={open ? "open" : "closed"}>
      {items.map((it,i) => {
        return <motion.a href={`#${it}`} key={i} variants={itemVariants} className='text-black font-Salsa'>
          {it}
        </motion.a>
      })}
    </motion.div>
  )
}

export default Links
 