import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'

const Details = ({position, company, companyLink, time, address, work, researchPaper=""}) => {
    const ref = useRef(null);
    return <li ref = {ref} className='my-8 first:mt-0 last:mb-0 w-[60%] md:w-[80%] mx-auto flex flex-col items-left justify-between'>
        <LiIcon reference = {ref}/>
        <motion.div initial={{y:50}} whileInView={{y:0}} transition={{duration:0.5, type: "spring"}}>
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{position}&nbsp;<a href={companyLink} target="_blank" className='text-primary capitalize dark:text-primaryDark'>@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm'>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
                {
                    researchPaper === "" ?
                        null : <a href={researchPaper} target="_blank" className='text-primary dark:text-primaryDark capitalize'> <br />Click me to view research paper</a>
                }
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const {scrollYProgress} = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    )
  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Experience</h2>
        <div className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div style={{scaleY: scrollYProgress}} ref={ref} className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]' />
            <ul className='w-full flex flex-col items-start justify-between ml-4 xl:ml-2'>
                <Details 
                position= "Software Engineer 2"
                company="Microsoft"
                time="August 2023-Present"
                address="Vancouver, BC"
                work = "Working on a team responsible for developing ingestion of Azure's telemetry (logs and metrics)"
                companyLink="https://www.microsoft.com"/>

                <Details 
                position= "Software Engineer"
                company="Microsoft"
                time="January 2021-August 2023"
                address="Redmond, WA"
                work = "Working on a team responsible for developing ingestion of Azure's telemetry (logs and metrics)"
                companyLink="https://www.microsoft.com"/>

                <Details 
                position= "Software Engineer"
                company="Amazon"
                time="August 2020-December 2020"
                address="Seattle, WA"
                work = "Worked on a team responsible for developing new features for Amazon scale search engine marketing systems"
                companyLink="https://www.amazon.com"/>

                <Details 
                position= "Graduate Student Researcher"
                company="UC Davis"
                time="January 2019-June 2020"
                address="Davis, CA"
                work = "Published a paper on data collection to be used for CCHD. Created software on Raspberry Pi and even analyzed breath waveforms using variations of RNN and CNN to detect anomalies in various breathing patterns."
                companyLink="https://www.ucdavis.edu/"
                researchPaper='https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/novel-system-to-collect-dual-pulse-oximetry-data-for-critical-congenital-heart-disease-screening-research/6AAA3E41E270A41ED3417FBCB8123B41'/>

                <Details 
                position= "Project Trainee"
                company="ITC Infotech"
                time="December 2017-April 2018"
                address="Bangalore, Karnataka"
                work = "Worked on creating Automatic Parking Spot Allocation System where the driver is directed to an empty parking spot with a help of a mobile app. The system is made using TensorFlow, SSD-Network, Microsoft Azure, and Android Studio."
                companyLink="https://www.itcinfotech.com/"/>
            </ul>
        </div>
    </div>
  )
}

export default Experience