/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef, useState } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import ScrollCarousel from "scroll-carousel-react";
import { useScroll, useSpring, motion } from 'framer-motion';
import { Helmet } from 'react-helmet';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import SubHeaderStyleOne from '../../components/common/SubHeaderStyleOne';
import ParagraphOne from '../../components/common/ParagraphOne';
import IconWIthText from '../../components/layouts/IconWIthText';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PresentationControls } from '@react-three/drei';
import ExperinceAboutUs from './ExperinceAboutUs';
import hero from '../../assets/aboutus/HeroSection.webp'
import whoWeAre from '../../assets/aboutus/WhoWeAre.webp'
import vison from '../../assets/aboutus/vision.webp'
import mison from '../../assets/aboutus/mission.webp'
import chairMan from '../../assets/aboutus/Chairman.webp'
import Exper from '../../assets/aboutus/OurExpertise.webp'
import sOne from '../../assets/slider/1.webp'
import sTwo from '../../assets/slider/2.webp'
import sThre from '../../assets/slider/3.webp'
import sFour from '../../assets/slider/4.webp'
import sFive from '../../assets/slider/5.webp'
import LoadingImages from '../../components/common/LoadingImages';
import LoadingImagesCom from '../../components/common/LoadingImagesCom';
function AboutUs() {
  const { scrollYProgress } = useScroll();
  const [type, settype] = useState(1);
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });

  }, []);

  const ref = useRef();
  return (
    <>
      <Helmet>
        <title>About Us</title>
        <meta name="description" content="App Description" />
      </Helmet>
      <Headroom>
        <NavBar />
      </Headroom>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
        style={{ scaleX }}
      />

      <div className="w-screen  bg-primary bg-fixed px-5 lg:px-0 lg:-mt-1 h-screen" >
        <div className="max-w-7xl mx-auto  h-full  bg-fixed px-5 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
            <div className="flex flex-col items-center justify-center lg:items-start lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
              <h1 className='text-white font-bold font-Poppins text-3xl leading-tight lg:text-5xl '>
                Welcome to EWIS
              </h1>
              <h1 className='text-white font-normal font-Poppins text-3xl lg:text-5xl -mt-5'>
                Empowering Innovation & Solutions
              </h1>
              <p className='font-Rubik lg:text-lg text-sm text-white font-semibold'>
                Your Partner in Technology Excellence
              </p>
              <a href="#aboutussec" className='group transition-transform bg-white text-black py-1 px-6 font-Rubik text-base border-solid border-2 border-white rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-x-2 hover:bg-black hover:border-black hover:text-white'>
                Explore more
                <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                  <ArrowTrendingUpIcon className="h-6 w-6 text-gray-600 transition-transform group-hover:translate-x-2 group-hover:text-white" aria-hidden="true" />
                </div>
              </a>

            </div>
            <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
              <Suspense fallback={<LoadingImagesCom />}>
                <img src={hero} alt="" className='lg:scale-125' />
              </Suspense>


            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="aboutussec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <Suspense fallback={<LoadingImages />} >
              <img

                src={whoWeAre}
                className='scale-50'

              />
            </Suspense>
          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
            <SectionStyleTwo
              subHeroTitle="Who We Are"
              paraText="EWIS Group stands as a pioneering force in Sri Lanka’s IT sector, boasting over three decades of innovation and expertise. As a conglomerate, it encompasses EWIS Colombo Limited, the island's premier Original Device Manufacturer, and several specialized divisions focused on peripherals, career training, and tailored IT solutions. With its state-of-the-art manufacturing facility in Sooriyawewa, Hambantota, EWIS Group is at the forefront of producing high-end IT products while maintaining a commitment to quality and sustainability, evidenced by numerous ISO certifications. The Group’s enduring partnerships with global technology leaders such as Intel, Microsoft, and IBM enhance its product offerings and affirm its status as a technology leader in education, healthcare, and beyond. True to its core values, EWIS Group is dedicated to community engagement and sustainability, actively contributing to education and environmental stewardship."
            />
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full bg-aboutUs bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Journey"
                paraText="EWIS Colombo Limited's journey spans over three decades, marked by significant achievements and growth. Explore our timeline to discover how we evolved into a pioneer in IT solutions and manufacturing."
              />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white  flex flex-col justify-center items-center w-screen py-20 lg:h-screen">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-center items-start w-full gap-10 px-5">
          <div className="basis-1/2 w-full bg-contactbg rounded-xl p-10 flex flex-col gap-5 items-center shadow-md h-full text-center">
            <h2 className="text-primary font-bold font-Poppins text-3xl leading-tight ">
              Our Vision
            </h2>
            <p className="mb-8  font-Rubik lg:text-lg text-sm text-black font-semibold text-center">
              To be a leading innovator in the tech industry, empowering
              businesses and individuals with the latest solutions.
            </p>
            <div className="w-full flex flex-col justify-center items-center ">
              <Suspense fallback={<LoadingImages />} >
                <img src={vison} alt="" className="w-2/4 bg-white p-2 rounded-full" />
              </Suspense>
            </div>
          </div>
          <div className="basis-1/2 w-full bg-contactbg rounded-xl p-10 flex flex-col gap-5 items-center shadow-md text-center">
            <h2 className="text-primary font-bold font-Poppins text-3xl leading-tight ">
              Our Mission
            </h2>
            <p className="mb-8  font-Rubik lg:text-lg text-sm text-black font-semibold text-center">
              We are committed to delivering stylish, durable, and affordable
              devices with customizable software, enhancing productivity and
              making technology accessible.
            </p>
            <div className="w-full flex flex-col justify-center items-center">
              <Suspense fallback={<LoadingImages />} >

                <img src={mison} alt="" className="w-2/4 bg-white p-2 rounded-full" />
              </Suspense  >
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen lg:h-screen bg-background px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex flex-col items-start justify-center lg:basis-1/2 text-center lg:text-left gap-5">
            <SubHeaderStyleOne subHeroTitle="Message from the Chairman" />
            <ParagraphOne paraText="As we celebrate 38 remarkable years in Sri Lanka's ever-evolving ICT sector, I take immense pride in EWIS' enduring success as a gateway to the global ICT stage. Our 'customer for life' philosophy fuels our dedication to personalized service, shaped by invaluable feedback from our loyal clientele." />
            <ParagraphOne paraText="A pivotal milestone was establishing Sri Lanka's premier ODM (Original Device Manufacturing) facility in the southern region. Despite initial hurdles, we recognized local youth's potential, transforming them into a skilled workforce. We invite you to witness their passion at our factory." />
            <ParagraphOne paraText="Strategically located near Hambantota port and airport, we're poised for operational efficiency. Upholding our legacy of expertise and strong customer relationships, we're committed to bringing global knowledge to Sri Lanka. I extend heartfelt gratitude for your patronage and eagerly anticipate the opportunities that lie ahead." />
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <Suspense fallback={<LoadingImages />} >
              <img

                src={chairMan}
                className='ml-16'

              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full  px-5 lg:px-0 flex flex-col items-center justify-center gap-10">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Core Values"
                paraText="Discover the principles that drive us at EWIS. Our core values of Innovation, Empowerment, Equality, and Sustainability define our culture and guide our commitment to excellence and responsibility."
              />
            </div>
          </div>
        </div>
        <div className="max-w-7xl mx-auto  lg:h-full flex flex-row items-center justify-start gap-5 ">
          <div className="basis-1/4 flex flex-col items-center justify-start gap-5 h-full">
            <IconWIthText
              imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/innovation-idea-8724827-7067632.png"
              cardTitle="Innovation"
              cardDes="We drive innovation, pushing technology's limits to provide groundbreaking solutions."
            />
            <IconWIthText
              imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/fist-4973955-4150045.png"
              cardTitle="Empowerment"
              cardDes="We empower individuals to thrive through collaboration and knowledge-sharing."
            />
          </div>
          <div className="basis-2/4 flex flex-col items-center justify-start h-full  rounded-xl">
            <Suspense fallback={<LoadingImages />} >
              <img src="https://cdn3d.iconscout.com/3d/premium/thumb/environmentalism-9859813-8196526.png?f=webp" alt="" />
            </Suspense>
          </div>
          <div className="basis-1/4 flex flex-col items-center justify-start gap-5 h-full">
            <IconWIthText
              imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/time-equality-9556445-7796565.png?f=webp"
              cardTitle="Equality"
              cardDes="We champion equality, ensuring equal opportunities and embracing diversity."
            />
            <IconWIthText
              imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/sustainable-7172009-5819105.png?f=webp"
              cardTitle="Sustainability"
              cardDes="We are committed to sustainability, minimizing environmental impact and contributing to a better world."
            />
          </div>
        </div>
      </div>
      <div className="w-screen lg:h-screen bg-background px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5 ">
          <div className="flex flex-col items-start justify-center lg:basis-1/2 text-center lg:text-left gap-5 h-full">
            <SubHeaderStyleOne subHeroTitle="Serving Diverse Industries" />
            <ParagraphOne paraText="We cater to a diverse range of sectors and industries, including public, private, and government organizations." />
            <div className="w-full rounded-xl p-5 bg-primarysh flex flex-row flex-wrap gap-4 ">
              <div
                className={`${type === 1 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"}  w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(1)}
              >
                Banking Finance And Insurance
              </div>
              <div
                className={`${type === 2 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(2)}
              >
                Education
              </div>
              <div
                className={`${type === 3 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(3)}
              >
                Manufacturing
              </div>
              <div
                className={`${type === 4 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(4)}
              >
                Healthcare
              </div>
              <div
                className={`${type === 5 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(5)}
              >
                Retail
              </div>
              <div
                className={`${type === 6 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(6)}
              >
                Public
              </div>
              <div
                className={`${type === 7 ? "font-bold  bg-primary text-white" : "font-medium bg-white text-primary"} w-auto text-lg rounded-xl px-5 py-3 font-Poppins cursor-pointer`}
                onClick={() => settype(7)}
              >
                Telecommunication
              </div>



            </div>
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col h-full rounded-l-3xl overflow-hidden">
            <Canvas shadows camera={{ position: [0, 0, 70], fov: 60 }}>


              <PresentationControls


                polar={[- 0, 0]}
                azimuth={[0, 0]}
                config={{ mass: 2, tension: 400 }}
                snap={{ mass: 4, tension: 400 }}
              >

                <ExperinceAboutUs type={type} />
                <OrbitControls
                  ref={ref}
                  autoRotate
                  autoRotateSpeed={0.3}
                  enableDamping={false}
                  dampingFactor={0.25}
                  enablePan={true}
                  enableZoom={false}
                  zoomSpeed={1.2}
                  maxPolarAngle={Math.PI / 2.2}
                  // minPolarAngle={Math.PI / 2}
                  keyPanSpeed={0.1}
                  maxDistance={50}
                  minDistance={1}
                  cameraPositionSet={[2, 5, 2]}

                />
              </PresentationControls>


            </Canvas>
          </div>
        </div>
      </div>


      <div className="w-screen h-screen bg-white px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left ">
            <SectionStyleTwo
              subHeroTitle="Our Expertise"
              paraText="Explore our state-of-the-art manufacturing facility equipped with world-class technologies from partners like Intel, Microsoft, Asus, and Pegatron. We specialize in manufacturing high-end desktop PCs, laptops, tablets, mobile phones, and smartboards.EWIS Colombo Limited (ECL) is a renowned IT company in Sri Lanka, with a 34-year track record of delivering cutting-edge IT solutions to public, financial, and corporate enterprises. As the first and only local Original Device Manufacturing (ODM) plant in Sri Lanka, we specialize in producing high-end technology products, including desktop PCs, laptops, tablets, mobile phones, and smartboards. We pride ourselves on delivering innovative and high-quality technology products that enhance your digital experience. Our range of devices, from sleek desktop PCs to portable laptops, versatile tablets, and powerful mobile phones, is designed to meet your diverse needs."
            />
          </div>
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <Suspense fallback={<LoadingImages />} >
              <img

                src={Exper}
                className='scale-50'

              />
            </Suspense>
          </div>
        </div>
      </div>
      <div className="py-32 lg:h-full  px-5 lg:px-0 flex flex-col items-center justify-center gap-10 bg-background bg-fixed">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center flex flex-col ">
          <div className="flex flex-col lg:flex-row items-center h-full px-56">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Partnerships"
                paraText="We collaborate with industry leaders to deliver exceptional products and solutions to our customers."
              />
            </div>
          </div>
          <div className="w-full py-10">
            <Suspense fallback={<LoadingImages />} >
              <ScrollCarousel
                autoplay
                autoplaySpeed={8}
                speed={7}
                onReady={() => console.log("I am ready")}
                direction="ltr"
              >
                <img
                  src={sOne}
                  alt="..."
                  className="w-26 h-14 lg:w-52 lg:h-28"
                />
                <img
                  src={sTwo}
                  alt="..."
                  className="w-26 h-14 lg:w-52 lg:h-28"
                />
                <img
                  src={sThre}
                  alt="..."
                  className="w-26 h-14 lg:w-52 lg:h-28"
                />
                <img
                  src={sFour}
                  alt="..."
                  className="w-26 h-14 lg:w-52 lg:h-28"
                />
                <img
                  src={sFive}
                  alt="..."
                  className="w-26 h-14 lg:w-52 lg:h-28"
                />
              </ScrollCarousel>
            </Suspense>
          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  );
}

export default AboutUs