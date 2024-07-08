import React, { useEffect } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { useScroll, useSpring, motion } from 'framer-motion';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import ServiceCard from '../../components/layouts/ServiceCard';
import hero from '../../assets/toppanforms/Toppan-Forms-Hero.webp'
import second from '../../assets/toppanforms/About-Toppan-Forms.webp'
import s1 from '../../assets/toppanforms/1.webp'
import s2 from '../../assets/toppanforms/2.webp'
import s3 from '../../assets/toppanforms/3.webp'
import s4 from '../../assets/toppanforms/4.webp'
import s5 from '../../assets/toppanforms/5.webp'
import s6 from '../../assets/toppanforms/6.webp'
import s7 from '../../assets/toppanforms/7.webp'
import s8 from '../../assets/toppanforms/8.webp'
import s9 from '../../assets/toppanforms/9.webp'
import s10 from '../../assets/toppanforms/1.webp'
import s11 from '../../assets/toppanforms/1.webp'
import products from '../../assets/toppanforms/OurProducts.webp'
import NavBarTop from '../../components/navBar/NavBarTop';
function ToppanForms() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <Helmet>
        <title>Toppan Forms</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBarTop />
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
              heroTitle="Toppan Forms"
              paraText="Leading the Way in Print Management Outsourcing"
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            <img src={hero} alt="" className='' />
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="aboutussec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <img src={second} alt="" className='' />
          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
            <SectionStyleTwo
              subHeroTitle="About Toppan Forms"
              paraText="Toppan Forms (Colombo) Ltd. has proudly led the industry for over two decades, specializing in manufacturing and supplying continuous computer forms, business forms, pin mailers, envelopes, cheques, and share certificates. With a relentless commitment to quality and efficiency, we've earned a reputation for excellence."
            />
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-topan bg-fixed bg-cover px-5 lg:px-0 ">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Why Choose Us"
                paraText="Serving a diverse range of industries, including banking, finance, retail, and telecommunications, we've built long-lasting relationships grounded in trust and excellence."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-20 bg-white bg-fixed bg-cover px-5 lg:px-0 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col  items-center h-full">
            <div className="flex justify-center lg:justify-center flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col h-full gap-10">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Services"
                paraText=""
              />
              <div className="w-full flex flex-row items-start justify-start gap-5">
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s1}
                    title="DPS (Data Print Services)"
                    des="Expert data editing and processing for maximum security and compliance with regulations. Tailored solutions for direct marketing needs."
                  />
                </div>
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s2}
                    title="Commercial Printing"
                    des="A wide variety of business forms and services to meet market requirements."
                  />
                </div>
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s3}
                    title="Business Forms"
                    des="Leading the industry in designing and printing various forms, ensuring the effective operation of your data processing systems."
                  />
                </div>
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s4}
                    title="Lottery Printing"
                    des="Specialized printing services for lottery tickets, catering to industry-specific needs."
                  />
                </div>
              </div>
              <div className="w-full flex flex-row items-start justify-start gap-5">
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s5}
                    title="Scratch-Card Printing"
                    des="Expertise in printing scratch cards to meet the demands of various sectors."
                  />
                </div>
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s6}
                    title="Variable Data Printing:"
                    des="Efficient and customizable printing solutions for variable data requirements."
                  />
                </div>
                <div className="basis-1/4 h-full">
                  <ServiceCard
                    tiImage={s7}
                    title="Security Printing"
                    des="Top-level security systems to protect confidential data, ensuring safety and confidentiality."
                  />
                </div>
                <div className="basis-1/4 h-full">

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 " id="aboutussec">
        <div className="max-w-7xl mx-auto  px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">

            <div className="flex flex-col items-center justify-center lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col  gap-5">
              <div className="w-full flex flex-row items-start justify-start gap-5">
                <div className="basis-1/2 h-full">
                  <ServiceCard
                    tiImage={s8}
                    title="Continuous Forms"
                    des="High-quality continuous forms designed to meet various business needs."
                  />
                </div>
                <div className="basis-1/2 h-full">
                  <ServiceCard
                    tiImage={s9}
                    title="Security Forms"
                    des="Secure and foolproof forms to safeguard your data processing systems."
                  />
                </div>

              </div>
              <div className="w-full flex flex-row items-start justify-start gap-5">
                <div className="basis-1/2 h-full">
                  <ServiceCard
                    tiImage={s10}
                    title="Pressure Seal Forms"
                    des="Pressure Seal Forms - Innovative forms designed for secure and efficient operations."
                  />
                </div>
                <div className="basis-1/2 h-full">
                  <ServiceCard
                    tiImage={s11}
                    title="Bar Code Forms"
                    des="Bar Code Forms - Forms optimized for easy and accurate data tracking."
                  />
                </div>

              </div>
            </div>
            <div className="flex flex-col items-center justify-center lg:basis-1/2 text-center lg:text-left gap-5">
              {/* <h2 className='text-primary font-bold font-Poppins lg:text-3xl text-2xl leading-tight'>
                              Our Products
                          </h2> */}
              <img src={products} alt="" className='w-1/2' />
            </div>
          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default ToppanForms