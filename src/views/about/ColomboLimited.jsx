/* eslint-disable jsx-a11y/alt-text */
import React, { Suspense, useEffect, useRef } from 'react'
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import { ContactShadows, PresentationControls } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import { useSpring, motion, useScroll } from 'framer-motion';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { Helmet } from 'react-helmet';
import ExperinceColomboLtd from './ExperinceColomboLtd';
import second from '../../assets/EWISColomboLimited/AboutEWISColomboLTD.webp'
import third from '../../assets/EWISColomboLimited/EnsuringSafety.webp'
import enchanced from '../../assets/EWISColomboLimited/EnhancedProduction.webp'
import InnovationHub from '../../assets/EWISColomboLimited/InnovationHub.webp'
import IslandwideSupport from '../../assets/EWISColomboLimited/IslandwideSupport.webp'
import CertificateCarosal from '../../components/layouts/CertificateCarosal';
import LoadingModels from '../../components/common/LoadingModels';
import LoadingImages from '../../components/common/LoadingImages';
function ColomboLimited() {
    const { scrollYProgress } = useScroll();
    const ref = useRef();
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
                <title>EWIS Colombo Limited</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <Headroom>
                <NavBar />
            </Headroom>
            <motion.div
                className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top"
                style={{ scaleX }}
            />

            <div
                className="w-screen  bg-videobg px-5 lg:px-0 h-screen"

            >
                <div className="max-w-7xl mx-auto  h-screen bg-videobg bg-fixed px-5 lg:px-0">
                    <div className="flex flex-col lg:flex-row items-center justify-center h-full gap-5">
                        <div className="flex flex-col items-center justify-center lg:justify-start   text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
                            <HeroSectionStyleOne
                                buttonTextSolid="Explore more"
                                to="#colomboLimiSec"
                                heroTitle="EWIS Colombo Limited"
                                paraText="Pioneering Technology in Sri Lanka"
                            />
                        </div>
                        <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 h-full overflow-hidden rounded-l-3xl">
                            <Suspense fallback={<LoadingModels />} >

                                <Canvas camera={{ position: [0, 2, 60], fov: 55 }}>


                                    <PresentationControls
                                        polar={[- 0, 0]}
                                        azimuth={[0, 0]}
                                        config={{ mass: 2, tension: 400 }}
                                        snap={{ mass: 4, tension: 400 }}
                                    >

                                        <ExperinceColomboLtd />
                                        <ambientLight castShadow intensity={0.1} />
                                        <directionalLight castShadow position={[0, 30, 20]} intensity={2} />
                                        <directionalLight castShadow position={[0, 30, -20]} intensity={2} />
                                        <ContactShadows scale={100} opacity={0.1} />

                                    </PresentationControls>
                                </Canvas>
                            </Suspense>
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-screen py-20 bg-background px-5 lg:px-0 h-screen"
                id="colomboLimiSec"
            >
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                    <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
                        <Suspense fallback={<LoadingImages />} >  <img src={second} alt="" className='' /></Suspense>
                    </div>
                    <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
                        <SectionStyleTwo
                            subHeroTitle="About EWIS Colombo Limited"
                            paraText="EWIS Colombo Limited (ECL) is the flagship company of the EWIS Group and a leading IT company in Sri Lanka with over three decades of experience. We specialize in delivering cutting-edge IT solutions, manufacturing high-end technology products, and serving diverse sectors across the island."
                        />
                    </div>
                </div>
            </div>
            <div className="py-32 lg:h-full bg-manuBack bg-fixed bg-cover px-5 lg:px-0">
                <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  " data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
                    <div className="flex flex-col lg:flex-row items-center h-full">
                        <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col">
                            <HeroSectionStyleThree
                                tagLine=""
                                subHeroTitle="Our State-of-the-Art Facility"
                                paraText="Explore our world-class manufacturing facility, equipped with cutting-edge technologies from renowned partners such as Intel, Microsoft, Asus, and Pegatron. At ECL, we take pride in producing high-end desktop PCs, laptops, tablets, mobile phones, and smartboards of exceptional quality."
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div
                className="w-screen py-20 bg-background px-5 lg:px-0 h-screen"
                id="colomboLimiSec"
            >
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                    <div className="flex items-start justify-start lg:basis-1/2 text-left lg:text-left ">

                        <SectionStyleTwo
                            subHeroTitle="Certifications & Standards"
                            paraText="We hold certifications such as CE, FCC, ROHS, ISO 9001:2015, and ISO 14001:2015, reflecting our commitment to quality, environmental standards, and compliance with international norms."
                        />
                    </div>
                    <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
                        <div className="w-full z-10">
                            <CertificateCarosal />
                        </div>
                    </div>
                </div>
            </div>

            <div className="w-screen py-20 bg-white px-5 lg:px-0 ">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5" data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                    <div className="flex items-start justify-start lg:basis-1/2 text-left lg:text-left">
                        <SectionStyleTwo
                            subHeroTitle="Ensuring Safety"
                            paraText="Our commitment to safety includes ESD Protective Equipment to prevent static electricity buildup, air showers for particle control, and clean rooms for display manufacturing, ensuring product safety and quality."
                        />
                    </div>
                    <div className="flex justify-center lg:justify-center items-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
                        <div className="w-1/2" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                            <img

                                src={third}
                                className=""
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-screen py-20 bg-white px-5 lg:px-0 ">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                    <div className="flex justify-center lg:justify-center items-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
                        <div className="w-1/2" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                            <img

                                src={enchanced}
                                className=""
                            />
                        </div>

                    </div>
                    <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
                        <SectionStyleTwo
                            subHeroTitle="Enhanced Production"
                            paraText="Our automated assembly line streamlines product construction, accommodating different variations efficiently. The ISO Class 7 clean room maintains a dust-free environment for display manufacturing, while our aging line tests products under extreme conditions for optimal performance."
                        />
                    </div>
                </div>
            </div>
            <div className="w-screen py-20 bg-white px-5 lg:px-0 ">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
                    <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
                        <SectionStyleTwo
                            subHeroTitle="Islandwide Support"
                            paraText="Our efficient islandwide after-sales support ensures a 2-hour response time, providing timely assistance and service to our valued customers."
                        />
                    </div>
                    <div className="flex justify-center lg:justify-center items-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
                        <div className="w-1/2" data-aos="zoom-in" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                            <img

                                src={IslandwideSupport}
                                className=""
                            />
                        </div>

                    </div>
                </div>
            </div>
            <div className="w-screen py-20 bg-background px-5 lg:px-0">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5"

                    data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="100">
                    <div className="flex justify-center lg:justify-center items-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
                        <div className="w-1/2">
                            <img

                                src={InnovationHub}
                                className=""
                            />
                        </div>

                    </div>
                    <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
                        <SectionStyleTwo
                            subHeroTitle="Innovation Hub"
                            paraText="Explore our collaboration with the University of Moratuwa to establish a Computer and Process Development Research Centre. Here, we harness the talent of graduates in engineering and technology to drive innovation and development of EWIS products."
                        />
                    </div>
                </div>
            </div>
            <ContactUsCom />
            <MainFooter />
        </>
    );
}

export default ColomboLimited