/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef, useState } from 'react'
import MainFooter from '../../components/footer/MainFooter';
import ContactUsCom from '../../components/common/ContactUsCom';
import { Canvas } from '@react-three/fiber';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { Helmet } from 'react-helmet';
import { motion, useScroll, useSpring } from "framer-motion";
import videoIntro from '../../assets/education/laptobook.mp4'
import videoend from '../../assets/education/lap.webp'
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import ParagraphOne from '../../components/common/ParagraphOne';
import TagLine from '../../components/common/TagLine';
import { ArrowRightCircleIcon } from '@heroicons/react/24/outline';

import csr from '../../assets/education/csr.webp'
import edu from '../../assets/education/edu.webp'
import teacher from '../../assets/education/teacher.webp'
import pointer from '../../assets/education/pointer.webp'
import tabHero from '../../assets/education/tab.gif'
import gsap from 'gsap';
import EducationExperince from './EducationExperince';
import LoadingModels from '../../components/common/LoadingModels';
import LoadingImages from '../../components/common/LoadingImages';
import CardStyleOne from '../../components/layouts/CardStyleOne';
import { Carousel } from 'nuka-carousel';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";

import "./styles.css";
// import { Carousel } from 'flowbite-react';
function EwisEducation() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });



  const [vidIndex, setVidIndex] = useState(0);
  const [count, setCount] = useState(null);

  const ref = useRef(null);
  useEffect(() => {
    const timer = setTimeout(() => {
      setCount(1);
      if (vidIndex === 0 && ref.current) {
        ref.current.play();
      }
    }, 500);

    return () => clearTimeout(timer)


  }, [ref, vidIndex]);


  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    let xSetter = gsap.quickSetter(".flair", "x", "px") //apply it to the #id element's x property and append a "px" unit
    let ySetter = gsap.quickSetter(".flair", "y", "px") //apply it to the #id element's x property and append a "px" unit

    window.addEventListener("mousemove", e => {
      xSetter(e.x)
      ySetter(e.y)
    });
  }, [])


  return (
    <>
      <Helmet>
        <title>Education</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />

      <div className="max-w-7xl mx-auto h-screen px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 relative bottom-10 " >
            <HeroSectionStyleOne

              heroTitle='Empowering Education Through Technology'
              paraText='EWIS pioneers technology integration in education, creating immersive learning experiences for students.'
              buttonTextSolid='Explore more'
              to='#eduSecond'
            />
          </div>
          <div className="flex justify-center items-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 mb-16 " data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">

            <Suspense fallback={null} >
              <img src={tabHero} />
            </Suspense>
          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      <div className="w-screen py-20 bg-background px-5 lg:px-0" >
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col ">
            {count && <video
              style={{ display: vidIndex === 1 ? "none" : "block" }}
              src={videoIntro}
              autoPlay
              muted
              onEnded={() => setVidIndex((idx) => idx + 1)}
            />}
            <img
              style={{ display: vidIndex === 0 ? "none" : "block" }}
              src={videoend}
              className='mt-0.02'
              ref={ref}
            />
            {/* <video muted
                          autoPlay
                          loop className=''>
                          <source
                              type='video/mp4'
                              src='/assets/education/laptobook.mov'
                          />
                      </video> */}

          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left" >
            <SectionStyleTwo
              subHeroTitle="EWIS's History in Education Since 1997"
              paraText='Since 1997, EW Information Systems Limited (EWIS) has been a pioneer in integrating technology into learning environments. With a wealth of experience in education projects, EWIS has impacted thousands of children by introducing them to the power of technology.'
              color='primary'
            />
          </div>
        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="py-32 lg:h-full bg-eduPara bg-fixed bg-cover px-5 lg:px-0" >
        <div className="flex flex-col items-center gap-5 text-center" data-aos="fade-up" data-aos-easing="linear" data-aos-duration="1000">
          <SubHeaderStyleOne
            subHeroTitle='Impactful Statistics'
          />
          <ParagraphOne
            paraText='Since 1997, EWIS has supplied over 52,000 computers to 800 schools across Sri Lanka, revolutionizing the learning experience.'
          />


        </div>
      </div>
      {/* ------------------------------------ */}
      <div className="max-w-7xl mx-auto py-28 h-screen group cursor-none px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full gap-10">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left basis-1/2 col h-full">
            <div className="flex flex-col gap-5" data-aos="fade-left" data-aos-easing="linear" data-aos-duration="1000">
              <TagLine
                tagLine='Transforming'
              />
              <SubHeaderStyleOne
                subHeroTitle='Empowering Education Through the Thousand School Project'
              />
              <ParagraphOne
                paraText='The Thousand School Project, initiated by EWIS, has had a profound impact on education in Sri Lanka. By providing schools with cutting-edge technology and resources, we have revolutionized the learning experience for thousands of students.'
              />
              <div className='flex flex-row gap-5'>
                <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                <p className='font-Rubik text-base text-black font-bold'>
                  Empowering Schools with State-of-the-Art Technology
                </p>
              </div>
              <div className='flex flex-row gap-5'>
                <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                <p className='font-Rubik text-base text-black font-bold'>
                  Enhancing Learning through Interactive Tools
                </p>
              </div>
              <div className='flex flex-row gap-5'>
                <ArrowRightCircleIcon className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                <p className='font-Rubik text-base text-black font-bold'>
                  Creating Engaging and Immersive Classroom Experiences
                </p>
              </div>


            </div>

          </div>
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2  basis-1/1 col bg-tablet bg-contain bg-no-repeat bg-center h-full lg:mx-20 cursor-none " >
            <img src={pointer} alt="" className='h-72 w-72 fixed top-0 left-0 pointer-events-none flair z-20 invisible group-hover:visible' />
            <div className="relative h-full lg:left-20 left-16 lg:p-20 lg:bottom-5 bottom-16 w-64 lg:w-full">
              <Swiper className="mySwiper w-80 z-10">
                <SwiperSlide><img src={csr} alt="" className='z-10 cursor-none w-80' /></SwiperSlide>
                <SwiperSlide><img src={edu} alt="" className='z-10 cursor-none w-80' /></SwiperSlide>
                <SwiperSlide><img src={teacher} alt="" className='z-10 cursor-none w-80' /></SwiperSlide>
              </Swiper>

            </div>

          </div>
        </div>
      </div>
      {/* ----------------------------------- */}
      {/* <div className="max-w-7xl mx-auto py-28 lg:h-full">
              <div className="h-full text-center px-64">

              </div>
          </div> */}

      <div className=" h-screen w-screen flex flex-col gap-20 text-center items-center group z-10 ">
        <div className='lg:w-1/2 px-5 lg:px-0' >
          <SubHeaderStyleOne
            subHeroTitle='Enhance Interactive Learning and Teaching with the Smart Interactive Board'
          />
          <img src={pointer} alt="" className='h-72 w-72 fixed top-0 left-0 pointer-events-none flair z-20 invisible group-hover:visible' />
        </div>

        <Suspense fallback={<LoadingModels />} >
          <Canvas
            className="r3f z-10"
            camera={{
              fov: 45,
              near: 2,
              far: 2000,
              position: [0, 0.1, 2]
            }}

          >
            <EducationExperince />
          </Canvas>


        </Suspense>
      </div>
      <div className='relative -top-[500px] z-20'>
        <Swiper className="mySwiper w-[400px] bg-primarygray ">
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle='Transform Your Classroom with the Smart Interactive Board'
              cardDes='The Smart Interactive Board revolutionizes the way students learn and teachers teach.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle='Engage Students with Interactive Learning Using the Smart Interactive Board'
              cardDes='Experience a new level of classroom engagement and collaboration.'
            />
          </SwiperSlide>
          <SwiperSlide>
            <CardStyleOne
              //image='/assets/example.png'
              cardTitle='Empower Teachers and Students with the Smart Interactive Board'
              cardDes='Unlock the potential of interactive teaching and learning.'
            />
          </SwiperSlide>
        </Swiper>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default EwisEducation