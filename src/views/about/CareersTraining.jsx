import React, { useEffect } from 'react'
import Headroom from 'react-headroom';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navBar/NavBar';
import { useScroll, useSpring, motion } from 'framer-motion';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import CardStyleEight from '../../components/layouts/CardStyleEight';
import IconWIthText from '../../components/layouts/IconWIthText';
import AccordionOne from '../../components/common/AccordionOne';
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import Ione from '../../assets/careerTrain/1.webp'
import Itwo from '../../assets/careerTrain/2.webp'
import Ithre from '../../assets/careerTrain/3.webp'
import aca from '../../assets/careerTrain/acadamic.webp'
import dev from '../../assets/careerTrain/development.webp'
import solu from '../../assets/careerTrain/solutions.webp'
import aproch from '../../assets/careerTrain/app.webp'
function CareersTraining() {
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
        <title>EWIS Career Training Solutions</title>
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
              to="#colomboLimiSec"
              heroTitle="EWIS Career Training"
              paraText="Unlock your potential with quality education and professional development at ECTC."
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            {/* <LazyLoadImage effect="blur" src="/assets/retail/heroBanner.gif" alt="" className='lg:scale-125' /> */}
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="colomboLimiSec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            {/* <LazyLoadImage effect="blur"
                          style={{ display: vidIndex === 0 ? "none" : "block" }}
                          src={videoend}
                         className='mt-0.02'
                          ref={ref}
                      /> */}
          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
            <SectionStyleTwo
              subHeroTitle="Empower Your Potential, Unleash Your Future"
              paraText="At EWIS Career Training, we're your gateway to quality education and professional development in Sri Lanka. With over a decade of experience, we've established ourselves as a renowned educational institute and IT solutions service provider. Our commitment to excellence has led countless individuals to achieve remarkable success in fields such as IT, Business Management, Languages, and Professional Development."
            />
          </div>
        </div>
      </div>

      <div className="w-screen py-20 bg-white px-5 lg:px-0 h-screen">
        <div className="max-w-7xl mx-auto flex flex-col justify-center lg:flex-col items-center h-full gap-10">
          <HeroSectionStyleThree
            tagLine=""
            subHeroTitle="Explore Our Services"
            paraText=""
          />


          <div className='w-full flex flex-row items-start justify-start  gap-5'>
            <div className="basis-1/3 h-full">
              <CardStyleEight name="Academic Programs" img={aca} des="Unlock a world of possibilities with our diverse range of academic programs, including diplomas and degree programs, at basic, undergraduate, and graduate levels. Choose from IT, Business Management, Languages, and Professional Development." /></div>
            <div className="basis-1/3 h-full">
              <CardStyleEight name="Professional Development" img={dev} des="Stay ahead of the curve and advance your career with our industry-relevant training. Our professional development courses and executive education programs are designed to enhance your skills." /></div>
            <div className="basis-1/3 h-full">
              <CardStyleEight name="IT Solutions" img={solu} des="We offer cutting-edge technology solutions to businesses and organizations, helping them optimize operations and achieve their goals." /></div>
          </div>


        </div>
      </div>
      <div className="py-32 lg:h-full bg-primarysh bg-fixed bg-cover px-5 lg:px-0">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col lg:flex-row items-center h-full">
            <div className="flex justify-center lg:justify-start flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col ">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Our Promise"
                paraText="Our mission is clear – we believe in the transformative power of education. At EWIS Career Training, we're dedicated to empowering individuals with the knowledge, skills, and confidence they need to excel in their chosen fields. Through our commitment to academic excellence, practical learning experiences, and industry partnerships, we prepare our students to thrive in the ever-evolving global job market."
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
                paraText="At EWIS Career Training, we cater to a diverse range of individuals. Whether you're an aspiring undergraduate student, a career-focused professional, or a lifelong learner, our programs and resources are tailored to support your unique learning journey."
              />
              <div className="w-full flex flex-row items-center justify-start gap-5">
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={Ione}

                    cardTitle="Undergraduate Students"
                    cardDes="If you've completed your secondary education and are seeking a bachelor's degree, our undergraduate programs provide a solid foundation for your academic journey."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={Itwo}

                    cardTitle="Professionals"
                    cardDes="Lifelong learning is key for professionals. Our courses and programs help you acquire new skills, update your knowledge, and advance your career."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL={Ithre}
                    cardTitle="Lifelong Learners"
                    cardDes="Learning knows no age limit. Whether you're a retiree, hobbyist, or someone seeking intellectual stimulation, our programs and resources support your learning journey."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0" id="colomboLimiSec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex flex-col items-start justify-start  text-center lg:text-left md:text-left lg:basis-1/2 col ">
<img src={aproch} alt="" />
          </div>
          <div className="flex flex-col items-start justify-start lg:basis-1/2 text-center lg:text-left">
            <HeroSectionStyleThree
              tagLine=""
              subHeroTitle="Our Approach"
              paraText=""
            />
            <AccordionOne
              con={true}
              title="Academic Excellence"
              des="We're committed to providing a high standard of education through experienced faculty, comprehensive curricula, and a strong academic reputation."
            />
            <AccordionOne
              con={false}
              title="Practical Learning"
              des="Emphasizing hands-on experiences ensures our students are well-prepared for real-world challenges."
            />
            <AccordionOne
              con={false}
              title="Research and Innovation"
              des="Opportunities for cutting-edge research and collaboration foster innovation in various fields"
            />
            <AccordionOne
              con={false}
              title="State-of-the-Art Facilities"
              des="Modern campuses, well-equipped laboratories, libraries, and advanced technology resources enhance the learning experience."
            />
            <AccordionOne
              con={false}
              title="Global Exposure"
              des="Study abroad programs and partnerships with universities abroad broaden horizons and offer a global perspective."
            />
            <AccordionOne
              con={false}
              title="Comprehensive Support Services"
              des="From academic advising to career guidance and extracurricular activities, we provide comprehensive student support services."
            />

          </div>
        </div>
      </div>
      <ContactUsCom />
      <MainFooter />
    </>
  )
}

export default CareersTraining