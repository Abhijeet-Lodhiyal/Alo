import emailjs from '@emailjs/browser';
import { FaLinkedin  , FaGithub , FaInstagram  } from "react-icons/fa";
import {motion} from 'framer-motion'
import { useRef  ,useState} from 'react';

const ContactMe = () => {
    const form = useRef();
    const [formValues, setFormValues] = useState({
      name: "",
      email: "",
      message: ""
    });
  
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_390xe8n', 'template_dkxvq4g', form.current, 'kSrBQ6MhYMqb0ATNg')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        setFormValues({
          name: "",
          email: "",
          message: ""
        });
    };
  return (
    <div className='h-screen bg-gradient-to-b to-[#87bdd3] from-[#2aa5d5] snap-center scroll-smooth  flex lg:flex-row flex-col items-center justify-center gap-5'>
      <motion.div className="lg:w-[50%] flex flex-col items-center gap-7 " initial={{opacity : 0 , y : 100}} whileInView={{opacity : 1 ,y : 0}}
      transition={{duration : 1}}>
        <h1 className="xl:text-7xl md:text-5xl text-3xl font-bold font-Gloock">Let's get in touch</h1>
        <h3 className="font-Salsa">I would love to get in contact with you.</h3>
        <h2 className="font-Salsa">Email : abhijeetlodhiyal@gmail.com</h2>
        <div className='flex gap-4 text-3xl'>
          <a href='https://www.linkedin.com/in/abhijeet-lodhiyal-45a572221/'><FaLinkedin className='text-[#0d6893]'/></a>
          <a href='https://github.com/Abhijeet-Lodhiyal'><FaGithub /></a>
          <a href='https://www.instagram.com/abhijeetlodhiyal/?igsh=ZGNjOWZkYTE3MQ%3D%3D'><FaInstagram className='text-[#bd3add]'/></a>
        </div>
      </motion.div>
        <motion.form className="lg:w-[50%] w-[95%] flex flex-col gap-5 items-center" initial={{opacity : 0 ,scale : 0.5}} whileInView={{opacity : 1 ,scale : 1}}
      transition={{duration : 1}} ref={form} onSubmit={sendEmail}>
          <input type="text" placeholder="Name" required className="md:w-[50%] w-[90%] md:p-4 p-2 rounded-lg bg-white" name='user' value={formValues.name}
          onChange={(e) =>
            setFormValues({ ...formValues, name: e.target.value })
          }></input>
          <input type="email" placeholder="Email" required className="md:w-[50%] w-[90%] md:p-4 p-2 rounded-lg bg-white" name='email' value={formValues.email}
          onChange={(e) =>
            setFormValues({ ...formValues, email: e.target.value })
          }></input>
          <textarea placeholder="Message" rows={8} className="md:w-[50%] w-[90%] md:p-4 p-2 rounded-lg bg-white" name='message' value={formValues.message}
          onChange={(e) =>
            setFormValues({ ...formValues, message: e.target.value })
          }></textarea>
          <button type="submit" className="rounded-xl bg-white pb-2 pl-4 pr-4 pt-2 font-Salsa text-[#242323e0]">Submit</button>
        </motion.form>
    </div>
  )
}


export default ContactMe
