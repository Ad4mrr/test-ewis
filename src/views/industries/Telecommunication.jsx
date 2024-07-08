/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import CardStyleTwo from '../../components/layouts/CardStyleTwo';
import ParagraphOne from '../../components/common/ParagraphOne';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import {  motion, useScroll, useSpring } from "framer-motion";
import hero from '../../assets/Telecominication/HeroSection.gif'
import second from '../../assets/Telecominication/second.webp'
import icon from '../../assets/Telecominication/Icon.webp'
function Telecommunication() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    useEffect(() => {
        // window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])

    return (
        <>
            <Helmet>
                <title>Telecommunication</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <Headroom>
                <NavBar />
            </Headroom>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />
          
            <div className="max-w-7xl mx-auto  h-screen  bg-fixed px-5 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
                    <div className="flex flex-col items-center justify-center lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5" >

                        <HeroSectionStyleOne
                            buttonTextSolid='Explore more'
                            to='#teleSecond'
                            heroTitle='Unlocking Insights for Enhanced Service Experience'
                            paraText="EW Information Systems Ltd (EWIS) has partnered with Pinnacle Digital Analytics (Pvt) Ltd to bring you SPECTA, a powerful analytics platform that provides actionable insights into network performance, business trends, and customer behavior."
                        />

                    </div>
                    <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
                        data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"

                    >
                        <img src={hero} alt="" className='scale-90' />

                    </div>
                </div>
            </div>
            <div className='bg-videobg px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10" id='teleSecond'>
                    <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10"

                            data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">

                            <img src={second} className='h-96' />

                        </div>
                        <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">

                                <SubHeaderStyleOne
                                    subHeroTitle='Unlocking Insights for Enhanced Service Experience and Business Value'
                                />
                                <ParagraphOne
                                    paraText='SPECTA is a powerful analytics platform that empowers communication service providers by visualizing vital customer information and delivering granular insights into network performance, business trends, and customer behavior.'
                                />
                            </div>
                            <div className="flex justify-center lg:justify-start lg:flex-row  flex-col text-center lg:text-left md:text-left col gap-5">
                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Network Insights</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Gain valuable insights into network performance, business trends, and customer behavior.
                                    </p>

                                </div>

                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Customer Insights</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Understand customer behavior and preferences to enhance service experience and drive business growth.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
                <div className='bg-white px-5 lg:px-0'>
                    <div className="max-w-7xl mx-auto py-20 flex flex-col gap-10 text-center" >

                        <SubHeaderStyleOne
                            subHeroTitle='Capturing and Processing Network Traffic Data for Insights'
                        />
                        <ParagraphOne
                            paraText='SPECTA captures and processes network traffic data in real-time, using advanced analytics algorithms to provide actionable insights for communication service providers.'
                        />
                        <div className='w-full flex flex-col lg:flex-row gap-5'>
                            <div className="basis-1/3">
                                <CardStyleTwo
                                    imgURL={icon}
                                    cardTitle="Real-time Data Capture for Accurate Insights"
                                    cardDes="The smart probe captures real-time data from network traffic, ensuring accurate and up-to-date information for analysis." />
                            </div>
                            <div className="basis-1/3">
                                <CardStyleTwo
                                    imgURL={icon}
                                    cardTitle="Real-time Analysis for Actionable Insights"
                                    cardDes="The streaming analytics engine processes the captured data, enabling real-time analysis and insights generation." />
                            </div>
                            <div className="basis-1/3">
                                <CardStyleTwo
                                    imgURL={icon}
                                    cardTitle="Advanced Analytics for Valuable Insights"
                                    cardDes="The big data analytics engine utilizes advanced analytics algorithms to analyze and uncover valuable insights from large volumes of data." />
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            {/*  */}
            <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10" id='teleSecond'>
                    <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                        <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">

                                <SubHeaderStyleOne
                                    subHeroTitle='Components of SPECTA:'
                                />
                                <ParagraphOne
                                paraText='SPECTA consists of four main components: the Smart Probe, Streaming Analytics Engine, Big Data Analytics Engine, and Data Access and Virtualization Layer.
                                    Each component plays a crucial role in providing actionable insights for enhanced service experience and business value.'
                                />
                                <SubHeaderStyleOne
                                    subHeroTitle='Smart Probe:'
                                />
                                <ParagraphOne
                                    paraText='The Smart Probe captures real-time data from network traffic, ensuring accurate and up-to-date information for analysis. It serves as the foundation for generating valuable insights.'
                                />
                                <SubHeaderStyleOne
                                    subHeroTitle='Streaming Analytics Engine:'
                                />
                                <ParagraphOne
                                paraText='The Streaming Analytics Engine processes the captured data, enabling real-time analysis and insights generation.
                                    It leverages advanced algorithms to provide timely and relevant information.'
                                />
                            </div>
                    </div>
                    <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10"

                            data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">

                            {/* <img src={second} className='h-96' /> */}

                        </div>

                    </div>
                </div>


            <ContactUsCom />
            <MainFooter />
        </>
    )
}

export default Telecommunication