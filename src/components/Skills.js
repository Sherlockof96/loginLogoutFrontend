import React from 'react'
import {motion} from 'framer-motion'

const Skill = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark cursor-pointer absolute dark:bg-light dark:text-dark 
        lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:text-bold lg:p-6 md:p-4 xs:text-xs xs:p-2' 
        whileHover={{scale:1.05}} 
        initial={{x:0, y:0}} 
        whileInView= {{x:x, y:y, transition: {duration:1.5}}}
        viewport={{once: true}}>
            {name}
        </motion.div>
    )

}
const Skills = () => {
  return (
        <>
            <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] md:bg-circularLightMd md:dark:bg-circularDarkMd sm:bg-circularLightSm sm:dark:bg-circularDarkSm lg:bg-circularLightLg lg:dark:bg-circularDarkLg '>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:bg-light dark:text-dark lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.05}}>
                    Web
                </motion.div>

                <Skill name="CSS" x="-5vw" y="-10vw" />
                <Skill name="HTML" x="-20vw" y="2vw" />
                <Skill name="ReactJS" x="20vw" y="6vw" />
                <Skill name="NextJS" x="-1vw" y="11vw" />
                <Skill name="C#" x="-20vw" y="-15vw" />
                <Skill name="Python" x="15vw" y="-12vw" />
                <Skill name="Java" x="32vw" y="-5vw" />
                <Skill name="Git" x="-5vw" y="18vw" />
                <Skill name="Docker" x="-25vw" y="18vw" />
                <Skill name="AWS" x="-25vw" y="-6vw" />
                <Skill name="Microsoft Azure" x="3vw" y="-20vw" />
                <Skill name="PHP" x="12vw" y="16vw" />
                <Skill name="SQL" x="16vw" y="-5vw" />

            </div>
        </>
    )
}

export default Skills