/* eslint-disable no-restricted-globals */
import React from 'react'
import Headroom from 'react-headroom'
import { Helmet } from 'react-helmet'
import NavBar from '../../components/navBar/NavBar'
import {  motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import ParagraphOne from '../../components/common/ParagraphOne';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import CardStyleTwo from '../../components/layouts/CardStyleTwo';
import hero from '../../assets/healthcare/Comp.gif'
import healthImagecolOne from '../../assets/healthcare/healthImagecolOne.webp'
import HealthOne from '../../assets/healthcare/HealthOne.webp'
import HealthTwo from '../../assets/healthcare/HealthTwo.webp'
import HealthThree from '../../assets/healthcare/HealthThree.webp'
import medicalEquipment from '../../assets/healthcare/medical-equipment.webp'
import capsule from '../../assets/healthcare/capsule.webp'
function Healthcare() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  const ref = useRef();
  const hart = useRef();


  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    const el = ref.current;
    gsap.fromTo(el, 5, { y: -10 }, { y: 10, yoyo: true, repeat: -1 });

    const har = hart.current;
    gsap.fromTo(har, 1.5, { scale: 0.9 }, { scale: 1, yoyo: true, repeat: -1 });



    gsap.to("#speedUp", {
      yPercent: -0.1,
      y: () => -innerWidth,
      ease: "none",
      scrollTrigger: {

        trigger: "#speedUp",
        start: "center center",
        end: () => innerWidth,
        scrub: true,
        invalidateOnRefresh: true
      }
    });
    gsap.to("#speedDown", {
      yPercent: -5,
      y: () => -innerWidth,
      ease: "none",
      scrollTrigger: {

        trigger: "#speedDown",
        start: "center center",
        end: () => innerWidth,
        scrub: true,
        invalidateOnRefresh: true
      }
    });


  }, [])
  return (
    <>
      <Helmet>
        <title>Healthcare</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />
      <div className="max-w-7xl mx-auto h-screen px-5 lg:px-0 w-screen">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col relative bottom-10" >

            <HeroSectionStyleOne
              buttonTextSolid='Explore more'
              to='#healthSecond'
              heroTitle='Empowering Healthcare Through Reliable Medical Supplies'
              paraText="Welcome to EWIS's Medical Supplies Division, where we ensure timely availability of pharmaceutical, surgical, laboratory, and printed materials to government healthcare institutions nationwide."
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
            data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
          >
            <img src={hero} alt="" />
          </div>
        </div>
      </div>
      <div className="py-20 lg:h-full bg-background bg-fixed bg-cover px-5 lg:px-0" id='healthSecond' >
        <div className="max-w-7xl mx-auto  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col lg:flex-row  text-center lg:text-left md:text-left gap-10">

              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={HealthOne}
                  cardTitle='Supply and Distribution of Medical Supplies'
                  cardDes='We specialize in the efficient supply and distribution of medical resources.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={HealthTwo}
                  cardTitle='Streamlined Healthcare Delivery Nationwide'
                  cardDes='Our integrated technology and streamlined processes strengthen healthcare delivery.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={HealthThree}
                  cardTitle='Efficient Medical Resource Management'
                  cardDes='We are dedicated to efficiently managing medical resources to support the healthcare sector.'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto h-screen py-20 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="flex justify-center lg:basis-1/2 lg:h-2/3 h-1/2">
            <img src={healthImagecolOne} alt="lap" className='h-full' />
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <SectionStyleTwo
              subHeroTitle="Empowering Healthcare Delivery through Efficient Supply Management"
              paraText='EWIS, a leading player in the Medical Supplies Division (MSD) industry, is dedicated to ensuring timely availability of pharmaceutical, surgical, laboratory, radioactive, and printed materials to government healthcare institutions nationwide. Through the implementation of the Medical Supplies Management Information System (MSMIS), we streamline processes and leverage technology to strengthen healthcare delivery.'
            />
          </div>

        </div>
      </div>
      <div className='w-screen bg-background bg-fixed px-5 lg:px-0'>
        <div className="max-w-7xl mx-auto py-20 ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex flex-col text-center items-center justify-center gap-5 "
              data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <div className='flex flex-row gap-5 items-center bg-white rounded-full p-5' >
                <img src={medicalEquipment} alt="" className='w-40 h-40 ' />
              </div>
              <div className='lg:px-20 flex flex-col gap-5'>
                <div className='lg:px-52'>
                  <SubHeaderStyleOne
                    subHeroTitle='Efficient Distribution Network Ensuring Timely Availability of Medical Supplies'
                  />
                </div>
                <ParagraphOne
                  paraText="MSD's distribution network spans across 28 Central Medical Stores and Regional Medical Supplies Divisions (RMSDs), serving approximately 1,200 district-level hospitals. Through our efficient supply management, we ensure timely availability of pharmaceutical, surgical, laboratory, radioactive, and printed materials to government healthcare institutions."
                />
              </div>
              <div className='flex flex-row gap-5 items-center' >             
                <img src={capsule} alt="" className='w-60 h-60 hart' ref={hart} />          
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default Healthcare