import { useScroll, useSpring } from 'framer-motion';
import React, { Suspense, useEffect } from 'react'
import Headroom from 'react-headroom';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navBar/NavBar';
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import LoadingImagesCom from '../../components/common/LoadingImagesCom';
import TagLine from '../../components/common/TagLine';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import ParagraphOne from '../../components/common/ParagraphOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';

function Partnership() {
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
      <div className="w-screen  bg-primary bg-fixed px-5 lg:px-0 lg:-mt-1 h-screen" >
        <div className="max-w-7xl mx-auto  h-full  bg-fixed px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
            <div className="flex flex-col  items-center justify-center lg:items-center lg:justify-center   text-center lg:text-left md:text-left lg:basis-1/1 col lg:relative bottom-10 gap-5">
              <h1 className='text-white font-bold font-Poppins text-3xl leading-tight lg:text-5xl '>
                Delivering Top-Notch Technology Solutions for You
              </h1>

              <p className='font-Rubik lg:text-lg text-sm text-white font-semibold text-center'>
                At EWIS Colombo Limited (ECL), we are committed to providing our clients with the highest quality products and services. With our strong partnerships with renowned technology providers like Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks, we leverage cutting-edge technologies and innovative solutions to meet your business needs.
              </p>
              <a href="#aboutussec" className='group transition-transform bg-white text-black py-1 px-6 font-Rubik text-base border-solid border-2 border-white rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-x-2 hover:bg-black hover:border-black hover:text-white'>
                Explore more
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gray-600 transition-transform group-hover:translate-x-2 group-hover:text-white" aria-hidden="true" />
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="aboutussec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            {/* <img src={second} alt="" className='lg:scale-50' /> */}
          </div>
          <div className="flex flex-col items-center justify-center lg:basis-1/2 text-center lg:text-left gap-10">
            <SectionStyleTwo
              subHeroTitle="Unlocking Innovation Through Strategic Partnerships with Industry Giants"
              paraText="At EWIS Colombo Limited (ECL), we are proud to collaborate with renowned technology providers such as Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks. These partnerships allow us to harness cutting-edge technologies and innovative solutions, enabling us to deliver comprehensive software, hardware, networking, and enterprise resource planning solutions to our clients. With over two decades of collaboration with some partners, we maintain high standards in delivering top-notch products and services. Contact us today to explore how our strategic partnerships can drive your business forward."
            />


          </div>
        </div>
      </div>
      <div className='w-screen bg-background flex flex-col px-5 lg:px-0'>
        <div className="max-w-7xl mx-auto py-28 flex flex-col gap-10 lg:h-screen " >
          <div className="flex flex-col-reverse lg:flex-row items-center h-full gap-5">
            <div className="flex flex-col justify-center lg:justify-start sm:px-8 text-center lg:text-right md:text-left lg:basis-1/2 col gap-10"
              data-aos="fade-right" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500"
            >
              <div className="flex flex-col gap-5">
                {/* <TagLine tagLine="Simplify" /> */}
                <SubHeaderStyleOne
                  subHeroTitle='Delivering Comprehensive Technology Solutions for Your Business Needs'
                />
                <ParagraphOne
                  paraText='At ECL, we offer a wide range of comprehensive technology solutions including software, hardware, networking, and enterprise resource planning. Our partnerships with industry giants like Microsoft, Dell EMC, Pronto Software, Lexmark, and Juniper Networks enable us to leverage cutting-edge technologies and innovative solutions for our clients.'
                />
              </div>
              <div className="flex justify-center lg:justify-start lg:flex-row flex-col text-center lg:text-right md:text-left col gap-5">
                <div className='flex flex-col gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Software Solutions</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    We provide software solutions that streamline your business processes and enhance productivity.
                  </p>

                </div>

                <div className='flex flex-col gap-5'>
                  <p className='font-Rubik text-lg text-black font-bold'>Hardware Solutions</p>
                  <p className='font-Rubik text-base text-black font-normal'>
                    Our hardware solutions ensure reliable performance and scalability for your business infrastructure.
                  </p>
                </div>

              </div>
            </div>
            <div className="flex justify-center lg:basis-1/2 lg:h-2/3"
              data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100"
            >
              {/* <img src={Simplify} alt="lap" className='h-full' /> */}
            </div>


          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default Partnership