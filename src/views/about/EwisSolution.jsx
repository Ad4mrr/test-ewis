/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import ButonStyleOne from '../../components/common/ButonStyleOne';
import ParagraphOne from '../../components/common/ParagraphOne';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import TagLine from '../../components/common/TagLine';
import CardStyleEight from '../../components/layouts/CardStyleEight';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { Helmet } from 'react-helmet';
import { useScroll, useSpring, motion } from 'framer-motion';
import Marquee from "react-marquee-slider";
import hero from '../../assets/EWISSolutions/UnleashYourDigitalPotential.webp'
import oneI from '../../assets/EWISSolutions/Icon_DeviceSolutions.webp'
import twoI from '../../assets/EWISSolutions/Icon_Server&StorageConsolidation.webp'
import thrI from '../../assets/EWISSolutions/Icon_High-PerformanceNetwork.webp'
import forI from '../../assets/EWISSolutions/Icon_Security&Surveillance.webp'
import fivI from '../../assets/EWISSolutions/Icon_Cloud-BasedSolutions.webp'
import sixI from '../../assets/EWISSolutions/Icon_PointofSaleSolutions.webp'
import erp from '../../assets/EWISSolutions/ERPSolutions.webp'
function EwisSolution() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const words = [
    "Agriculture",
    "Homeware & Furniture",
    "Automotive",
    "Machinery & Equipment",
    "Building Material Suppliers",
    "Mining",
    "Chemicals, Paper & Rubber",
    " Office Supplies",
    "Construction",
    " Oil & Gas",
    "Facilities Management",
    "Pharmaceuticals",
    "Fashion",
    "Plumbing, HVAC & Fire",
    "Food & Beverage",
    "Transportation",

  ];
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>EWIS Solutions</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar/>
      </Headroom>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />
  
      <div className="max-w-7xl mx-auto  h-screen bg-videobg bg-fixed px-5 lg:px-0">
        <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
          <div className="flex flex-col items-center justify-center lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
            <HeroSectionStyleOne
              buttonTextSolid="Explore more"
              to="#aboutussec"
              heroTitle="Unleash Your Digital Potential with EWIS Solutions"
              paraText="Your gateway to cutting-edge technological solutions and devices that empower your digital journey."
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            <img src={hero} alt="" className='lg:scale-100' />
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-Cree bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Your Digital Transformation Partner"
                paraText="At EWIS Solutions, we're more than just a technology provider; we're your partner in digital transformation. With unwavering support from industry leaders Intel and Microsoft, we bring you cutting-edge devices and tailored solutions to elevate your digital journey."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-white px-5 lg:px-0 ">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-col items-center h-full gap-10">
          <HeroSectionStyleThree
            tagLine=""
            subHeroTitle="EWIS Solutions"
            paraText="Empowering Your Digital Experience"
          />

          <div className="w-full flex flex-col items-start justify-center  gap-5">
            <div className='w-full flex flex-row items-start justify-start h-full gap-5'>
              <div className="basis-1/3 h-full"><CardStyleEight name="Device Solutions" img={oneI} des="Discover EWIS's latest technological innovations and stylish, versatile devices, backed by Intel and Microsoft. Customized to your needs, our devices enhance productivity and entertainment." /></div>
              <div className="basis-1/3 h-full"><CardStyleEight name="Server & Storage Consolidation" img={twoI} des="Improve business efficiency with server consolidation. EWIS offers enterprise-level SAN and NAS configurations for cost-effective storage consolidation, enhancing your bottom line." /></div>
              <div className="basis-1/3 h-full"><CardStyleEight name="High-Performance Network" img={thrI} des="Power your operations with high-performance networks. EWIS provides dynamic circuit connection capabilities for efficient and scalable network solutions." /></div>
            </div>
            <div className='flex flex-row items-start justify-start h-full gap-5'>
              <div className="basis-1/3 h-full"><CardStyleEight name="Security & Surveillance" img={forI} des="EWIS delivers advanced security and surveillance solutions, integrating multiple systems for your safety needs." /></div>
              <div className="basis-1/3 h-full"><CardStyleEight name="Cloud-Based Solutions" img={fivI} des="Transform your business with EWIS's cloud systems integration and managed services. Our customized solutions leverage the latest cloud technology." /></div>
              <div className="basis-1/3 h-full"><CardStyleEight name="Point of Sale Solutions" img={sixI} des="Empower retail operations with EWIS's platform-independent POS software. Streamline your business with end-to-end automation." /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen lg:h-screen bg-background px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5 ">

          <div className="flex items-center justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col lg:p-10">
            <img

              src={erp}
              className=''

            />
          </div>
          <div className="flex flex-col items-start justify-center lg:basis-1/2 text-center lg:text-left gap-5">
            <TagLine tagLine="Integrated Business Management with" />
            <SubHeaderStyleOne subHeroTitle="ERP Solutions" />
            <ParagraphOne paraText="As an Authorized Re-Seller for PRONTO ERP Software in Sri Lanka, we offer a fully integrated ERP solution that covers the complete range of business activities. PRONTO ERP is designed around a core engine for financials and business reporting, with advanced features and functionality for diverse industries." />

            <ParagraphOne paraText="Our modular-based scalable product is suitable for businesses of any size, and we provide both on-premises and cloud-based implementations." />
            <div className='w-full'>
              <Marquee
                key={Math.random()}
                velocity={5}
                minScale={0.7}
                resetAfterTries={100}
              //scatterRandomly
              >
                {words.map((word, index) => (
                  <p key={index} className='px-5 text-primary font-Rubik font-semibold text-base'>
                    {word}
                  </p>
                ))}
              </Marquee>
            </div>
            <div>
              <ButonStyleOne
                buttonTextSolid="Visit PRONTO ERP Website"
                to="https://www.pronto.net/"
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

export default EwisSolution