import React, { useEffect } from 'react'
import MainFooter from '../../components/footer/MainFooter';
import ContactUsCom from '../../components/common/ContactUsCom';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';
import ParagraphOne from '../../components/common/ParagraphOne';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { Helmet } from 'react-helmet';
import {  motion, useScroll, useSpring } from "framer-motion";
import hero from '../../assets/manufacture/home.gif'
import second from '../../assets/manufacture/st.webp'
import three from '../../assets/manufacture/the.webp'
function Manufacturing() {
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
        <title>Manufacturing</title>
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
              to='#manufaSecond'
              heroTitle='Empowering Manufacturing Excellence through Advanced Information Systems'
              paraText="Discover how our robust Manufacturing Information System can optimize operational efficiency and drive profitability."
            />

          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
            data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
            <img src={hero} alt="" />

          </div>
        </div>
      </div>


      <div className="w-screen  bg-background px-5 lg:px-0 py-20" id='manufaSecond'>
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex items-center justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col lg:h-2/3 h-1/2">
            <img src={second} alt="" className='w-2/3' />
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col "

          >
            <SectionStyleTwo
              subHeroTitle="Streamlining Manufacturing Operations for Optimal Efficiency and Profitability"
              paraText='At EWIS, we understand the importance of efficient manufacturing operations.'
              color='primary'
            />
            <SectionStyleTwo
              subHeroTitle=""
              paraText='From material receipt to production and shipping, we provide comprehensive solutions that optimize your processes and drive profitability.'
              color='primary'
            />
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto py-20 group px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full gap-10">
          <div className="flex justify-center lg:justify-center flex-col sm:px-8  lg:text-left md:text-left basis-1/2 col h-full">
            <div className="flex flex-col gap-5 text-center lg:text-left" data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">

              <SubHeaderStyleOne
                subHeroTitle='The Crucial Intersection: Material, Money, and Information Flow in Manufacturing'
              />
              <ParagraphOne
                paraText='In a manufacturing enterprise system, the material, money, and information flows are interconnected and vital for operational success.'
              />
              <div className='flex flex-row gap-5'>
                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>

                <p className='font-Rubik text-base text-black font-bold'>
                  Optimizing material flow for efficient production and delivery
                </p>
              </div>
              <div className='flex flex-row gap-5'>
                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>
                <p className='font-Rubik text-base text-black font-bold'>
                  Ensuring smooth financial transactions through effective money flow management
                </p>
              </div>
              <div className='flex flex-row gap-5'>
                <div className='h-6 w-6'> <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 " aria-hidden="true" /></div>
                <p className='font-Rubik text-base text-black font-bold'>
                  Seamless information flow for accurate decision-making and operational excellence
                </p>
              </div>
              {/* <div className='flex flex-row gap-5'>
                                <ButonStyleOne
                                    buttonTextSolid={props.buttonTextSolid}
                                />
                                <ButtonStyleTwo
                                    buttonTextOutline={props.buttonTextOutline}
                                />
                            </div> */}

            </div>

          </div>
          <div className="  flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left basis-1/2 col  h-full mx-20 " >

            <img src={three} alt="" className='' />
          </div>
        </div>
      </div>

      <div className="w-screen  bg-background px-5 lg:px-0 py-20" id='manufaSecond'>
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex items-center justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col lg:h-2/3 h-1/2">
            {/* <img src={second} alt="" className='w-2/3' /> */}
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col "

          >
            <SectionStyleTwo
              subHeroTitle="Unlocking Manufacturing Excellence through Information Systems"
              paraText='A well-designed manufacturing information system is the key to achieving higher levels of financial performance and operational efficiency. It enables seamless flow of information, optimizing processes and driving profitability.'
              color='primary'
            />
            <SectionStyleTwo
              subHeroTitle=""
              paraText='From material receipt to production and shipping, we provide comprehensive solutions that optimize your processes and drive profitability.'
              color='primary'
            />
          </div>
        </div>
      </div>

      
      {/*  */}


      <div className="py-32 lg:h-full bg-manuBack bg-fixed bg-cover px-5 lg:px-0" >
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
              <HeroSectionStyleThree
                tagLine=''
                subHeroTitle='Enhance Your Manufacturing Operations'
                paraText='A well-designed manufacturing information system is the key to achieving higher levels of financial performance and operational efficiency. It enables seamless flow of information, optimizing processes and driving profitability.'
              />
            </div>
          </div>
        </div>
      </div>

      {/*  */}

      

      {/* <div className="py-32 lg:h-full bg-eduPara bg-fixed bg-cover " >
                <div className="flex flex-col items-center gap-5" >
                    <SubHeaderStyleOne
                        subHeroTitle='Unlocking Manufacturing Excellence through Information Systems'
                    />
                    <ParagraphOne
                        paraText='A well-designed manufacturing information system is the key to achieving higher levels of financial performance and operational efficiency. It enables seamless flow of information, optimizing processes and driving profitability.'
                    />


                </div>
            </div> */}
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default Manufacturing