/* eslint-disable no-restricted-globals */
import React, { useEffect } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom'
import MainFooter from '../../components/footer/MainFooter'
import { Helmet } from 'react-helmet'
import Headroom from 'react-headroom'
import NavBar from '../../components/navBar/NavBar'
import {  motion, useScroll, useSpring } from "framer-motion";
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne'
import hero from '../../assets/retail/heroBanner.gif'
import shopCart from '../../assets/retail/shopCart.webp'
import retailOne from '../../assets/retail/retailOne.webp'
import retailTwo from '../../assets/retail/retailTwo.webp'
import retailThree from '../../assets/retail/retailThree.webp'
import Simplify from '../../assets/retail/Simplify-Retail-Management.webp'
import TagLine from '../../components/common/TagLine'
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne'
import ParagraphOne from '../../components/common/ParagraphOne'
import CardStyleTwo from '../../components/layouts/CardStyleTwo'
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree'
import gsap from 'gsap';
function Retail() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    gsap.to("#shopcart", {
      xPercent: 0,
      x: () => -innerWidth,
      ease: "none",
      scrollTrigger: {

        trigger: "#shopcart",

        start: "center right",
        end: "top top",
        scrub: true,
        invalidateOnRefresh: true
      }
    });

  }, [])

  return (
    <>
      <Helmet>
        <title>Retail</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />

      <div className="max-w-7xl mx-auto  h-screen bg-videobg bg-fixed px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
          <div className="flex flex-col items-center justify-center lg:justify-start  sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
            <HeroSectionStyleOne
              buttonTextSolid='Explore more'
              to='#retailSecond'
              heroTitle='Empowering Retail Businesses Through Innovative Solutions'
              paraText='Welcome to EWIS, where we revolutionize the retail industry through cutting-edge financial services.'

            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
            data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
          >
            <img src={hero} alt="" className='lg:scale-125' />
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div className='w-screen bg-background flex flex-col px-5 lg:px-0'>
        <div className="max-w-7xl mx-auto py-28 flex flex-col gap-10 lg:h-screen " >
          <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">

            <div className="flex justify-center lg:basis-1/2 lg:h-2/3"
              data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100"
            >
              <img src={Simplify} alt="lap" className='h-full' />
            </div>
            <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col gap-10"

              data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <div className="flex flex-col gap-5">
                <TagLine tagLine="Simplify" />
                <SubHeaderStyleOne
                  subHeroTitle='Simplify Retail Management with Our Comprehensive eRMS Solution'
                />
                <ParagraphOne
                  paraText='Our eRMS solution combines essential systems into one comprehensive software, providing enhanced functionality for retail businesses.'
                />
              </div>
              <div className="flex justify-center lg:justify-start lg:flex-row flex-col text-center lg:text-left md:text-left col gap-5">
                <div className='flex flex-col gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Increase Efficiency</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    Streamline your operations with our all-in-one software that simplifies inventory management, payment processing, and reporting.
                  </p>

                </div>

                <div className='flex flex-col gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Boost Sales</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                  Engage with key customers and improve customer relationships using our integrated CRM system.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>


      {/* Section 3 */}
      <div className="max-w-7xl mx-auto py-20 lg:h-full justify-center items-center text-center px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col"
            data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
          >
            <HeroSectionStyleThree
              tagLine=''
              subHeroTitle='All-in-One Solution for Retail Management'
              paraText='Discover the power of eRMS - the integrated software solution that combines Point of Sale (POS),
                        Customer Relationship Management (CRM), and Inventory Management System (IMS) into a single platform. 
                        Streamline your retail operations and unlock new possibilities for your business.'
            />
          </div>
        </div>
      </div>
      <div className='w-screen flex flex-row justify-end '>
        <img src={shopCart} alt="" className='h-28 w-28 lg:h-60 lg:w-60 lg:scale-110' id='shopcart' />
      </div>

      {/* Section 4 */}
      <div className="py-32 lg:h-full bg-retail bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto py-10 ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col lg:flex-row sm:px-8 text-center lg:text-left md:text-left lg:basis-1/1 gap-10">

              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={retailOne}
                  cardTitle='Efficient Payment Processing and Reporting'
                  cardDes='Process payments seamlessly and generate comprehensive reports with our advanced Point of Sale (POS) system.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={retailTwo}
                  cardTitle='Track and Engage with Key Customers'
                  cardDes='Build strong customer relationships and drive sales growth using our Customer Relationship Management (CRM) software.'
                />
              </div>
              <div className='basis-1/3'>
                <CardStyleTwo
                  imgURL={retailThree}
                  cardTitle='Efficient Inventory Monitoring and Management'
                  cardDes='Optimize inventory levels and streamline operations with our Inventory Management System (IMS).'
                />
              </div>



            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-20 lg:h-full flex flex-col gap-10 px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center h-full">
          <div className="flex justify-center lg:justify-start flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/1 col">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col"
              data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <HeroSectionStyleThree
                tagLine=''
                subHeroTitle='Streamlining Operations for Retail Managers'
                paraText='With our eRMS solution, retail managers can simplify their operations and streamline their management processes. By integrating essential systems into a single software solution, eRMS eliminates the need for multiple applications and provides enhanced functionality.'
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

export default Retail