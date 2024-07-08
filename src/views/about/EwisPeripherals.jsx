import { useScroll, useSpring , motion} from 'framer-motion';
import React, { useEffect } from 'react'
import Headroom from 'react-headroom';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navBar/NavBar';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import IconWIthText from '../../components/layouts/IconWIthText';
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import hero from '../../assets/peripherals/Peripherals-Hero.webp'
import cardOne from '../../assets/peripherals/card1.webp'
import cardTwo from '../../assets/peripherals/card2.webp'
import cardThr from '../../assets/peripherals/card3.webp'
import second from '../../assets/peripherals/Peripherals-About.webp'
function EwisPeripherals() {
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
        <title>EWIS Peripherals</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
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
              heroTitle="EWIS Peripherals"
              paraText="Your Trusted Partner in Office Automation Solutions."
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            <img src={hero} alt="" className='lg:scale-75' />
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="aboutussec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <img src={second} alt="" className='lg:scale-50' />
          </div>
          <div className="flex flex-col items-center justify-center lg:basis-1/2 text-center lg:text-left gap-10">
            <SectionStyleTwo
              subHeroTitle="Explore the rich history and unwavering commitment of EWIS Peripherals"
              paraText="With decades of experience and global partnerships with renowned companies like Lexmark International, Konica Minolta, Riello, and Pantum, we have consistently delivered excellence in office automation. Our journey is marked by innovation, reliability, and a dedication to meeting the evolving needs of modern enterprises."
            />


          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-manuBack bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Services"
                paraText="Discover a comprehensive range of office automation solutions at EWIS Peripherals, designed to optimize your workspace and enhance productivity. Our services go beyond conventional offerings, encompassing Managed Print Services (MPS), Printer Management Solutions, Octa Matrix Impact Printers, and Octa Power UPS Systems. Whether it's streamlining your printing environment or ensuring uninterrupted operations, our services are tailored to meet the unique requirements of your organization. Partner with us to experience efficiency, cost-effectiveness, and reliability in your office automation journey."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-white bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Commitment"
                paraText="Quality, Reliability, and Exceptional Customer Service.
                                At EWIS Peripherals, we are unwavering in our dedication to sustainability, customer satisfaction, and service excellence."
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" lg:h-screen bg-background bg-fixed bg-cover px-5 lg:px-0 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col  items-center h-full">
            <div className="flex justify-center lg:justify-center flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col h-full gap-10">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Who We Serve"
                paraText="At EWIS Peripherals, we pride ourselves on tailoring office automation solutions to diverse sectors, including the public, private, and financial domains. Our process is characterized by three key pillars."
              />
              <div className="w-full flex flex-row items-center justify-start gap-5">
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={cardOne}
                    cardTitle="Government and Public Institutions"
                    cardDes="We provide efficient and reliable office automation solutions to government offices and public institutions, ensuring seamless operations and improved service delivery."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={cardTwo}
                    cardTitle="Private Enterprises"
                    cardDes="Private businesses benefit from our comprehensive offerings, enabling them to streamline operations, boost productivity, and reduce costs. Our solutions are designed to enhance efficiency and deliver measurable results."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={cardThr}
                    cardTitle="General Public Market"
                    cardDes="We recognize the potential in the general public market and introduce products like Pantum Printers, ideal for private and domestic use. Our commitment to responsible consumption and eco-friendly practices aligns with global environmental standards, ensuring sustainability in every solution we offer."
                  />
                </div>
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

export default EwisPeripherals