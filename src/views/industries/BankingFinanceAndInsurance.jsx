/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-restricted-globals */
import React from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import TagLine from '../../components/common/TagLine'
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne'
import ParagraphOne from '../../components/common/ParagraphOne'
import CardStyleTwo from '../../components/layouts/CardStyleTwo'
import {  motion, useScroll, useSpring } from "framer-motion";
import { Helmet } from 'react-helmet'
import { useEffect } from 'react';
import gsap from 'gsap';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import hero from '../../assets/banking/pos-clould.gif'
import pig from '../../assets/banking/pig.gif'
import sectionTwo from '../../assets/banking/bankinghand.webp'
import iconOne from '../../assets/banking/iconOne.webp'
import iconTwo from '../../assets/banking/iconTwo.webp'
import iconThre from '../../assets/banking/iconThree.webp'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
function BankingFinanceAndInsurance() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });


  useEffect(() => {

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
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
        <title>Banking Finance And Insurance</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />

   
      <div className='bg-videobg w-screen px-5 lg:px-0'>
        <div className="max-w-7xl mx-auto  h-screen bg-videobg bg-fixed">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
            <div className="flex flex-col items-center justify-center lg:justify-start  sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5" >
              <HeroSectionStyleOne
                tagLine='Transform'
                heroTitle='Empowering the Banking, Finance & Insurance Sectors'
                paraText='At EWIS, we are committed to delivering world-class IT solutions that prioritize customer satisfaction and drive innovation. With our expertise and cutting-edge technology, we empower businesses to thrive and succeed.'
                buttonTextSolid='Explore more'

                to='#godownHealth'
              />


            </div>
            <div className="flex justify-center items-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col mb-16 " data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
              <img src={hero}  />
             
            </div>
          </div>
        </div>
      </div>

      {/* ----------------------- */}
      <div className='bg-contactbg px-5 lg:px-0'>
        <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10" id='godownHealth'>
          <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
            <div className="flex flex-col justify-center items-center basis-1/2 h-full gap-10">

              {<img src={sectionTwo} className='h-96' /> || <Skeleton height={200} width={200}/> }

            </div>
            <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"
              data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <div className="flex flex-col gap-5">
                <TagLine
                  tagLine='Revolutionize'
                />
                <SubHeaderStyleOne
                  subHeroTitle='Empowering the Banking, Finance & Insurance Industry with Innovative Solutions'
                />
                <ParagraphOne
                  paraText='At EWIS, we understand the challenges faced by the banking, finance, and insurance sector. Our tailored solutions enable our partners to seize opportunities, increase operational efficiency, and enhance customer relationships.'
                />
              </div>
              <div className="flex justify-center lg:justify-start lg:flex-row  flex-col text-center lg:text-left md:text-left col gap-5">
                <div className='flex flex-col gap-5 lg:basis-1/2'>
                  <p className='font-Rubik text-lg text-black font-bold'>Experience</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    With over 30 years of experience, we have been instrumental in helping banks, insurance companies, savings institutions, and finance organizations achieve optimal returns on their technology investments.
                  </p>

                </div>

                <div className='flex flex-col gap-5 lg:basis-1/2'>
                  <p className='font-Rubik text-lg text-black font-bold'>Expertise</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    Our expertise in cutting-edge technologies allows us to deliver tailored solutions that drive growth and streamline operations.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ------------- */}
      <div className="py-32 lg:h-full bg-bankPara bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto py-10 ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col lg:flex-row sm:px-8 text-center lg:text-left md:text-left lg:basis-1/1 gap-10">

              <div className='basis-1/3'

              >
                <CardStyleTwo
                  imgURL= {iconOne}
                  cardTitle='Tailored Solutions for Banking, Finance & Insurance'
                  cardDes='We offer a range of solutions to meet the unique needs of the banking, finance, and insurance sectors.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL= {iconTwo}
                  cardTitle='Drive Growth and Streamline Operations'
                  cardDes='Our solutions are designed to help you achieve growth, efficiency, and improved customer experiences.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={iconThre}
                  cardTitle='Transform Your Business with Technology'
                  cardDes='Embrace digital transformation to stay ahead in the rapidly evolving banking, finance, and insurance industry.'
                />
              </div>



            </div>
          </div>
        </div>
      </div>
      {/* ------------------------ */}
      <div className="max-w-7xl mx-auto py-28 lg:h-screen flex flex-col gap-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <div className="flex flex-col gap-5" data-aos="fade-left" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="500">

              <SubHeaderStyleOne
                subHeroTitle='Unlocking Success Through Innovative Solutions and Strategic Partnerships'
              />
              <ParagraphOne
                paraText='Partnering with EWIS empowers your organization with increased operational efficiency and better customer experiences. Stay competitive in the dynamic market of banking, finance, and insurance.'
              />

              <div className="flex items-center justify-center lg:justify-start flex-col lg:flex-row text-center lg:text-left md:text-left lg:basis-1/1 col gap-10">
                <div className='flex flex-col lg:w-1/2 gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Operational Efficiency</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    Our solutions drive growth, streamline operations, and optimize technology investments for our partners.
                  </p>
                </div>

                <div className='flex flex-col lg:w-1/2 gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Better Experiences</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    We enhance customer relationships and improve experiences through tailored solutions and digital transformation.
                  </p>
                </div>

              </div>


            </div>

          </div>
          <div className="flex flex-col justify-center items-center lg:basis-1/2 h-2/3" >
            {<img src={pig} /> || <Skeleton />}
            
          </div>
        </div>

      </div>
      <ContactUsCom />
      <MainFooter />

    </>
  )
}

export default BankingFinanceAndInsurance