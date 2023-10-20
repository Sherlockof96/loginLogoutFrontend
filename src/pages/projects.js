import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { GithubIcon } from '@/components/Icons'
import project1Img from "../images/projects/project1.png"
import project2Img from "../images/projects/project2.png"
import project3Img from "../images/projects/project3.png"
import project4Img from "../images/projects/project4.jpeg"
import project5Img from "../images/projects/project5.png"
import project6Img from "../images/projects/project6.png"
import TransitionEffect from '@/components/TransitionEffect'

const FeaturedProject = ({type, title, summary, img, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative rounded-br-2xl dark:border-light dark:bg-dark lg:flex-col lg:p-8 xs:rounded-2xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl xs:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target="_blank" className='w-10 dark:text-light'><GithubIcon /></Link>
                    <Link href={link} target="_blank" className='ml-4 rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
            
        </article>
    )
}

const Project = ({type, title, img, link, github}) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light dark:bg-dark bg-light p-6 relative xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto '/>
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary dark:text-primaryDark font-medium text-xl lg:text-lg md:text-base'>
                    {type}
                </span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light lg:text-2xl'>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between md:text-base'>
                    <Link href={link} target="_blank" className='text-lg font-semibold underline dark:text-light'>Visit</Link>
                    <Link href={github} target="_blank" className='w-8 dark:text-light md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Kavish | Projects</title>
            <meta name='description' content='Kavish Project'></meta>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center'>
            <Layout classname='pt-16 '>
                <AnimatedText text="Imagination Trumps Knowledge!" className='mb-16 lg:!text-7xl sm:!mb-8 sm:!text-6xl xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                        title="Movie Recommendation System "
                        summary="A machine learning based movie recommendation system that recommends movies based on the user's previous ratings and the ratings of other users. It uses the concept of collaborative filtering to recommend movies."
                        link ="https://github.com/Sherlockof96/Movie-Recommendation-System"
                        type = "Featured Project"
                        img={project1Img}
                        github="https://github.com/Sherlockof96/Movie-Recommendation-System"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Collect Data For CCHD Screening Research"
                        link ="https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/novel-system-to-collect-dual-pulse-oximetry-data-for-critical-congenital-heart-disease-screening-research/6AAA3E41E270A41ED3417FBCB8123B41"
                        type = "Project"
                        img={project2Img}
                        github="https://www.cambridge.org/core/journals/journal-of-clinical-and-translational-science/article/novel-system-to-collect-dual-pulse-oximetry-data-for-critical-congenital-heart-disease-screening-research/6AAA3E41E270A41ED3417FBCB8123B41"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="An Efficient Approach To Civil Structures Health Monitoring Using Fog Computing"
                        link ="http://ijassa.ipu.ru/index.php/ijassa/article/view/543/462"
                        type = "Project"
                        img={project3Img}
                        github="http://ijassa.ipu.ru/index.php/ijassa/article/view/543/462"
                        />
                    </div>

                    <div className='col-span-12'>
                    <FeaturedProject 
                        title="Automatic Car Parking Allocation System"
                        summary="Using computer vision and image processing, this project aims to automate the process of car parking allocation. It will help in reducing the time required to park a car and also reduce the human effort required."
                        link ="https://github.com/Sherlockof96/ParkingSpot"
                        type = "Featured Project"
                        img={project4Img}
                        github="https://github.com/Sherlockof96/ParkingSpot"
                        />
                    </div>


                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Raft Consensus Protocol"
                        link ="https://github.com/Sherlockof96/ECS251-DevOS"
                        type = "Project"
                        img={project5Img}
                        github="https://github.com/Sherlockof96/ECS251-DevOS"
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project 
                        title="Art Classification by Medium"
                        link ="https://github.com/Sherlockof96/Art-Classification"
                        type = "Project"
                        img={project6Img}
                        github="https://github.com/Sherlockof96/Art-Classification"
                        />
                    </div>


                </div>
            </Layout>
        </main>
    </>
  )
}

export default projects