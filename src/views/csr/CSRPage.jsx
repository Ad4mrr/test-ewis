/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-undef */
import React, { useEffect } from 'react'
import Headroom from 'react-headroom'
import { Helmet } from 'react-helmet'
import NavBar from '../../components/navBar/NavBar'
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion'
import ContactUsCom from '../../components/common/ContactUsCom'
import MainFooter from '../../components/footer/MainFooter'
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne'
import hero from '../../assets/csrpage/Building_Communities.webp'
import helathSer from '../../assets/csrpage/Supporting_Healthcare.webp'
import drive from '../../assets/csrpage/Empowering_Education.webp'
import TagLine from '../../components/common/TagLine'
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne'
import ParagraphOne from '../../components/common/ParagraphOne'
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline'
function CSRPage() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });
    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, [])
    return (
        <>
            <Helmet>
                <title>Careers page</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <Headroom>
                <NavBar />
            </Headroom>
            <div className="max-w-7xl mx-auto  h-screen bg-videobg bg-fixed px-5 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
                    <div className="flex flex-col items-center justify-center lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
                        <HeroSectionStyleOne
                            buttonTextSolid="Explore more"
                            to="#aboutussec"
                            heroTitle="Empowering Sri Lanka through Compassionate and Innovative Solutions"
                            paraText="Discover how EWIS is making a positive and lasting impact on society."
                        />
                    </div>
                    <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
                        <img src={hero} alt="" className='' />
                    </div>
                </div>
            </div>
            <div className='bg-contactbg  px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 h-screen flex flex-col gap-10" >
                    <div className="flex flex-col lg:flex-row items-center h-full gap-5">

                        <div className="flex flex-col justify-center lg:justify-start  text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">

                                <SubHeaderStyleOne
                                    subHeroTitle='Empowering Education During the Pandemic: Our Distance Learning Programme'
                                />
                                <ParagraphOne
                                    paraText='Amidst the challenges posed by the pandemic, our Distance Learning Programme has been instrumental in ensuring uninterrupted education. By leveraging technology, we have provided students with a seamless learning experience, allowing them to continue their education from the safety of their homes.'
                                />
                            </div>

                        </div>
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">

                            <img src={drive} alt="" className='w-2/3' />

                        </div>
                    </div>
                </div>
            </div>
            <div className=' px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10" id='godownHealth'>
                    <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10">

                            <img src={helathSer} className='h-96' />

                        </div>
                        <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">
                                <TagLine
                                    tagLine='Innovative'
                                />
                                <SubHeaderStyleOne
                                    subHeroTitle='Equipping the Health Ministry with Cutting-Edge Technology'
                                />
                                <ParagraphOne
                                    paraText='At EWIS, we are proud to collaborate with the Health Ministry to provide them with the latest and most advanced technology. By equipping them with cutting-edge solutions, we aim to enhance their capabilities and improve healthcare services for the benefit of the community.'
                                />
                            </div>
                            <div className="flex justify-center lg:justify-start lg:flex-row  flex-col text-center lg:text-left md:text-left col gap-5">
                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Collaboration Success</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Our partnership with the Health Ministry has resulted in significant advancements in healthcare technology.
                                    </p>

                                </div>

                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Positive Impact</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Through our collaboration, we have made a positive impact on healthcare services nationwide.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className='bg-contactbg  px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 h-screen flex flex-col gap-10" >
                    <div className="flex flex-col lg:flex-row items-center h-full gap-5">

                        <div className="flex flex-col justify-center lg:justify-start  text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">

                                <SubHeaderStyleOne
                                    subHeroTitle='Supporting Sathosa: Ensuring Smooth Operations for Public Needs'
                                />
                                <ParagraphOne
                                    paraText="At EWIS, we understand the importance of uninterrupted access to essential goods. That's why we have partnered with Sathosa, a leading retail chain, to ensure smooth operations and meet the needs of the public."
                                />
                            </div>

                        </div>
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">

                            <img src={drive} alt="" className='w-2/3' />

                        </div>
                    </div>
                </div>
            </div>
            <div className=' px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10" id='godownHealth'>
                    <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10">

                            <img src={drive} className='h-96' />

                        </div>
                        <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
                        >
                            <div className="flex flex-col gap-5">
                                <TagLine
                                    tagLine='Empowerment'
                                />
                                <SubHeaderStyleOne
                                    subHeroTitle='Facilitating High-Level Meetings with Smart Board Implementation'
                                />
                                <ParagraphOne
                                    paraText='Our Smart Board implementation revolutionizes high-level meetings in the Public & Government sectors, enabling efficient decision-making and collaboration.'
                                />
                            </div>
                            <div className="flex justify-center lg:justify-start lg:flex-row  flex-col text-center lg:text-left md:text-left col gap-5">
                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Efficiency</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Streamline decision-making processes and enhance collaboration with our cutting-edge Smart Board technology.
                                    </p>

                                </div>

                                <div className='flex flex-col gap-5 lg:basis-1/2'>
                                    <p className='font-Rubik text-lg text-black font-bold'>Collaboration</p>
                                    <p className='font-Rubik text-base text-black font-normal'>
                                        Foster collaboration among stakeholders and drive effective decision-making with our Smart Board implementation.
                                    </p>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto py-20 group px-5 lg:px-0">
                <div className="flex flex-col lg:flex-row items-center h-full gap-10">
                    <div className="flex justify-center lg:justify-center flex-col sm:px-8  lg:text-left md:text-left basis-1/2 col h-full">
                        <div className="flex flex-col gap-5 text-center lg:text-left" data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">

                            <SubHeaderStyleOne
                                subHeroTitle='Advancing Healthcare Technology for a Better Future'
                            />
                            <ParagraphOne
                                paraText='At EWIS, we are committed to driving innovation in healthcare by donating to advance healthcare technology. Through our initiatives, we aim to improve patient care and contribute to a better future.'
                            />
                            <div className='flex flex-row gap-5'>
                                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>

                                <p className='font-Rubik text-base text-black font-bold'>
                                    Donating to advance healthcare technology and improve patient care.
                                </p>
                            </div>
                            <div className='flex flex-row gap-5'>
                                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>
                                <p className='font-Rubik text-base text-black font-bold'>
                                    Supporting cutting-edge healthcare technology for better patient outcomes.
                                </p>
                            </div>
                            <div className='flex flex-row gap-5'>
                                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>
                                <p className='font-Rubik text-base text-black font-bold'>
                                    Driving innovation in healthcare through technology advancements and donations.
                                </p>
                            </div>
                        </div>

                    </div>
                    <div className="  flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left basis-1/2 col  h-full mx-20 " >

                        <img src={drive} alt="" className='' />
                    </div>
                </div>
            </div>
            <div className='  px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto py-28 h-screen flex flex-col gap-10" >
                    <div className="flex flex-col lg:flex-row items-center h-full gap-5">
                        <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                            <img src={drive} alt="" className='w-2/3' />
                        </div>
                        <div className="flex flex-col justify-center lg:justify-start  text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
                            data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
                            <div className="flex flex-col gap-5">

                                <SubHeaderStyleOne
                                    subHeroTitle='Making a Positive Impact on Society'
                                />
                                <ParagraphOne
                                    paraText="EWIS's CSR activities have a wide-ranging impact across various sectors. From ensuring uninterrupted education through our Distance Learning Programme to equipping the Health Ministry with cutting-edge technology, we strive to make a positive difference in the lives of people. Our initiatives in Retail, Public & Government, and Technical Services Innovation further contribute to the betterment of society. With our commitment to compassionate and innovative solutions, we empower Sri Lanka and leave a lasting impact."
                                />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />
            <ContactUsCom />
            <MainFooter />
        </>
    )
}

export default CSRPage