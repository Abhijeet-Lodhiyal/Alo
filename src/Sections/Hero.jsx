import Navbar from "../Navbar"
import {  motion, useAnimation, AnimatePresence, easeOut } from "framer-motion"
import { useEffect, useState } from "react"
import Alo from '../assets/Alo.png'

const Hero = () => {
	const controls = useAnimation();
	const [display, setDisplay] = useState('')
	const [nav, setNav] = useState('hidden')
	useEffect(() => {
		const animateStates = async () => {
			await controls.start({ opacity: 0 }, { duration: 1 });
			await controls.start({ opacity: 1 }, { duration: 1 });
			await controls.start({ opacity: 0 }, { duration: 1 });

		};
		setTimeout(() => {
			setDisplay('hidden')
			setNav('')
		}, 2000)

		animateStates();
	}, [controls]);
	return (
		<div className='h-[100vh] snap-center scroll-smooth overflow-hidden justify-center items-center bg-[#d5bfaa] bg-[url("src/assets/hero3.webp")] md:bg-[url("src/assets/hero2.webp")]  bg-cover md:text-black text-white'>
			<Navbar nav={nav} />
			<AnimatePresence>
				<motion.div className={`h-screen  bg-gradient-to-b to-[#87bdd3] from-[#2aa5d5]  flex items-center justify-center overflow-hidden z-50 ${display}`} initial={{ opacity: 1 }} exit={{ ease: easeOut, opacity: 0 }} >
					<motion.img src={Alo} animate={controls}></motion.img>
				</motion.div>
			</AnimatePresence>
		</div>
	)
}

export default Hero
