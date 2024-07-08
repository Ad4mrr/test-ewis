import React, { useEffect } from 'react'
import MainFooter from '../../components/footer/MainFooter'
import ContactUsCom from '../../components/common/ContactUsCom'
import ParagraphOne from '../../components/common/ParagraphOne'
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne'
import CardStyleTwo from '../../components/layouts/CardStyleTwo'
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo'
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne'
import NavBar from '../../components/navBar/NavBar'
import Headroom from 'react-headroom'
import { Helmet } from 'react-helmet'
import {  motion, useScroll, useSpring } from "framer-motion";
import drive from '../../assets/publicImg/Driving.gif'
import over from '../../assets/publicImg/Over.gif'
import hero from '../../assets/publicImg/Public.gif'
import one from '../../assets/publicImg/software-solu.webp'
import two from '../../assets/publicImg/enhance-efficiency.webp'
import theree from '../../assets/publicImg/relation.webp'
import TagLine from '../../components/common/TagLine'
function Public() {
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
        <title>Public Sector</title>
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
              to='#publicSecond'
              heroTitle='Empowering the Public Sector with Innovative ICT Solutions'
              paraText="Discover how EWIS can help public sector organizations transform their services and drive operational excellence."
            />

          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
            data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
          >
            <img src={hero} alt="" />

          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0" >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex items-center justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col lg:h-2/3 h-1/2"
            data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100"
          >
            <img src={over} alt="" className='w-2/3' />
          </div>
          <div className="flex justify-center lg:basis-1/2 lg:text-left text-center" >
            <SectionStyleTwo
              subHeroTitle="Over 31 Years of Supporting Digital Journeys: Engaging with 400+ Public Sector Organizations"
              paraText='With our 31 years of industry experience, we have successfully partnered with over 400 public sector organizations, delivering comprehensive engagement and innovative solutions.'
              color='primary'
            />
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-fixed bg-cover px-5 lg:px-0" >
        <div className="max-w-7xl mx-auto py-10 ">
          <div className="flex flex-col lg:flex-col items-center text-center h-full gap-10">
            <SubHeaderStyleOne
              subHeroTitle='Transform Your Infrastructure with Cutting-Edge Solutions'
            />
            <div className="flex justify-center lg:justify-start lg:flex-row flex-col  text-center lg:text-left md:text-left lg:basis-1/1 gap-10">

              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={one}
                  cardTitle='Streamline Your Software Solutions for Optimal Performance'
                  cardDes='At EWIS, we offer a comprehensive range of networking solutions to ensure seamless connectivity and communication.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={two}
                  cardTitle='Enhance Efficiency with Enterprise Resource Management Solutions'
                  cardDes='Our bespoke development services cater to your unique business requirements, providing tailored solutions.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={theree}
                  cardTitle='Optimize Your Customer Relationship Management with Advanced Solutions'
                  cardDes='Experience seamless integration and improved service delivery with our turnkey solutions.'
                />
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
                <TagLine
                  tagLine='Empower'
                />
                <SubHeaderStyleOne
                  subHeroTitle='Driving Efficiency, Enhancing Service Delivery,
                                    Fostering Growth'
                />
                <ParagraphOne
                  paraText='EWIS solutions empower public sector organizations by driving efficiency, enhancing service delivery, and fostering sustainable growth. With our innovative ICT solutions, public sector companies can transform the delivery of services to make them more convenient for citizens and business users, while also improving the quality of services provided.'
                />
              </div>

            </div>
            <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">

              <img src={drive} alt="" className='w-2/3' />

            </div>
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-publicBack bg-fixed bg-cover px-5 lg:px-0" >
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col   text-center w-full gap-10"
              data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <div className='flex flex-col items-center justify-center gap-1'>
                <SubHeaderStyleOne
                  subHeroTitle='Transform Your Sector '
                />
                <SubHeaderStyleOne
                  subHeroTitle='Innovative ICT Solutions'
                />
              </div>

              <ParagraphOne
                paraText='Contact us today to explore how EWIS can empower your public sector organization.'
              />

            </div>
          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default Public