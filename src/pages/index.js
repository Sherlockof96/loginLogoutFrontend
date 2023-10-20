import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import profilePic from "../images/profile/developer-pic-1.png"
import { LinkArrow } from '@/components/Icons'
import HireMe from '@/components/HireMe'
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg"
import TransitionEffect from '@/components/TransitionEffect'

export default function Home() {
  return (
    <>
      <Head>
        <title> Kavish | Home</title>
        <meta name="description" content='Home Page' />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout classname='pt-0 md:pt-2-16 sm:pt-8'> 
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className='w-1/2 md:w-full'>
              <Image src = {profilePic} alt="Kavish" className="w-full h-auto lg:hidden md:inline-block md:w-full" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"></Image>
            </div>
            <div className='w-1/2 flex-col items-center self-center lg:w-full lg:text-center'> 
              <AnimatedText text = "Turning Vision Into Reality With Code And Design." className='!text-6xl !text-left xl:!text-5xl lg:!left-center lg:!text=6xl md:!text-5xl sm:!text-3xl'/>
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>As a skilled developer, I am dedicated to turning ideas into applications. </p>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-24 md:hidden'>
          <Image src={lightBulb} alt='Kavish' className='w-full h-auto' />
        </div>
      </main>
    </>
  );
}
