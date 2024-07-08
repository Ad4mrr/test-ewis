/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from 'react'
import MainFooter from '../../components/footer/MainFooter';
import ContactUsCom from '../../components/common/ContactUsCom';
import HeroSectionStyleThree from '../../components/layouts/HeroSectionStyleThree';
import IconWIthText from '../../components/layouts/IconWIthText';
import SectionStyleTwo from '../../components/layouts/SectionStyleTwo';
import HeroSectionStyleOne from '../../components/layouts/HeroSectionStyleOne';
import Headroom from 'react-headroom';
import NavBar from '../../components/navBar/NavBar';
import { Helmet } from 'react-helmet';
import { useScroll, useSpring, motion } from 'framer-motion';
import one from '../../assets/EWISGlobalServices/1.webp'
import two from '../../assets/EWISGlobalServices/2.webp'
import thre from '../../assets/EWISGlobalServices/3.webp'
import four from '../../assets/EWISGlobalServices/4.webp'
import five from '../../assets/EWISGlobalServices/5.webp'
import six from '../../assets/EWISGlobalServices/6.webp'
import seven from '../../assets/EWISGlobalServices/7.webp'
import eight from '../../assets/EWISGlobalServices/8.webp'
import night from '../../assets/EWISGlobalServices/9.webp'
import ten from '../../assets/EWISGlobalServices/10.webp'
import hero from '../../assets/EWISGlobalServices/WelcometoEWISGlobalServices.webp'
import second from '../..//assets/EWISGlobalServices/BuiltUponaLegacyofExcellence.webp'
const items = [
  {
    id: 1,
    img: one,
    name: "Infrastructure",
    Sname: "Management",
    category: "IT Services",
    des: "Dedicated remote IT teams specialized in technologies based on customer requirements.",
  },
  {
    id: 2,
    img: two,
    name: "Test Automation",
    Sname: "Services",
    category: "IT Services",
    des: "High-quality agile applications enhancing business value.",
  },
  {
    id: 3,
    img: thre,
    name: "ERP Implementation",
    Sname: "Services",
    category: "IT Services",
    des: "Quick release of new product features for enterprises.",
  },
  {
    id: 4,
    img: four,
    name: "Infrastructure",
    Sname: "Management",
    category: "IT Services",
    des: "Managing IT infrastructure efficiently and minimizing downtime enhancing business efficiency.",
  },
  {
    id: 5,
    img: five,
    name: "Test Automation",
    Sname: "Services",
    category: "IT Services",
    des: "Meticulous bug elimination and compliance with industry standards.",
  },
  {
    id: 6,
    img: six,
    name: "ERP Implementation",
    Sname: "Services",
    category: "IT Services",
    des: "Expert support in selecting and successful installation of ERP software.",
  },
  {
    id: 7,
    img: seven,
    name: "Credit and Debit",
    Sname: "Card Onboarding",
    category: "Financial Services",
    des: "Provide credit and debit card onboarding services for corporates through a range of financial institutions.",
  },
  {
    id: 8,
    img: eight,
    name: "Loan and Mortgage",
    Sname: "Activities",
    category: "Financial Services",
    des: "Effective management of loan and mortgage operations.",
  },
  {
    id: 9,
    img: night,
    name: "Account",
    Sname: "Servicing",
    category: "Financial Services",
    des: "Seamless customer experiences for financial institutions.",
  },
  {
    id: 10,
    img: ten,
    name: "Account",
    Sname: "Opening",
    category: "Financial Services",
    des: "EWIS offers a wide range of account opening options to suit your needs.",
  },
  // ... more items
];

// FilteredList component
const FilteredList = ({ items, activeCategory }) => {
  const filteredItems = activeCategory
    ? items.filter((item) => item.category === activeCategory)
    : items;

  return (
    <div className="p-2 grid grid-cols-4 gap-5 w-full">
      {filteredItems.map((item) => (
        <div
          key={item.id}
          className="bg-contactbg rounded-xl p-5 flex flex-col gap-4 items-center group"
          data-aos="fade-up" data-aos-easing="linear" data-aos-duration="500"
        >
          <div className="w-full flex flex-col items-start"><div className="bg-white rounded-full px-3 py-1 font-Rubik text-xs">{item.category}</div></div>
          <div className="w-full rounded-xl overflow-hidden bg-primary"><img src={item.img} alt="" className="w-full transition-all duration-150 group-hover:rotate-6 group-hover:scale-105" /> </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h2 className="text-primary font-bold font-Poppins text-lg leading-tight text-center w-full">
              {item.name}
            </h2>
            <h2 className="text-primary font-bold font-Poppins text-lg leading-tight text-center w-full">
              {item.Sname}
            </h2>
          </div>

          <p className="font-Rubik  text-gray-500  text-sm text-center">
            {item.des}
          </p>

        </div>
      ))}
    </div>
  );
};
const GlobalServices = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const categories = ["Category A", "Category B"];
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
        <title>EWIS Global Services</title>
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
              to="#globalSec"
              heroTitle="Welcome to EWIS Global Services"
              paraText="Unleash your business potential, together with your partner in growth."
            />
          </div>
          <div className="flex justify-center lg:justify-center flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 ">
            <img src={hero} alt="" className='scale-75' />
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-background px-5 lg:px-0 h-screen" id="globalSec">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center h-full gap-5">
          <div className="flex justify-center lg:justify-start flex-col  text-center lg:text-left md:text-left lg:basis-1/2 col ">
            <div className="flex flex-col items-center"> 
            <img
              src={second}
              className="h-96"
            /> </div>

          </div>
          <div className="flex items-center justify-center lg:basis-1/2 text-center lg:text-left">
            <SectionStyleTwo
              subHeroTitle="Built Upon a Legacy of Excellence"
              paraText="We are proud to be one of the pioneers in introducing world-class PCs to Sri Lanka. Since 1986, when we became the sole agent for IBM computers in Sri Lanka, we've dominated the market for nearly two decades. Our commitment to excellence has earned us prestigious awards, including the title of IBM Top Business Partner for multiple years."
            />
          </div>
        </div>
      </div>
      <div className=" lg:h-screen bg-manuBack bg-fixed bg-cover px-5 lg:px-0 flex flex-col items-center justify-center">
        <div className="max-w-7xl mx-auto  lg:h-full justify-center items-center text-center  ">
          <div className="flex flex-col  items-center h-full">
            <div className="flex justify-center lg:justify-center flex-col sm:px-8 lg:text-left md:text-center lg:basis-1/1 col h-full gap-10">
              <HeroSectionStyleThree
                tagLine=""
                subHeroTitle="Empowering Businesses for over 30 Years"
                paraText="At EWIS Outsource, we've harnessed decades of experience serving diverse customer segments across various industries, including retail, finance, government, and hospitality."
              />
              <div className="w-full flex flex-row items-center justify-start gap-5">
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/project-task-management-5374060-4496029.png"
                    cardTitle="100+ Projects"
                    cardDes="Since our inception, we have been involved in over 100 key projects globally, delivering innovative solutions to our clients."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/customer-satisfaction-8094133-6478780.png?f=webp"
                    cardTitle="350+ Customers"
                    cardDes="We are proud to have served a diverse portfolio of customers, ranging from small businesses to large enterprises. Our clients trust us to deliver exceptional services."
                  />
                </div>
                <div className="basis-1/3 h-full">
                  <IconWIthText
                    imgURL="https://cdn3d.iconscout.com/3d/premium/thumb/calendar-5842007-4884301.png?f=webp"
                    cardTitle="30+ Years"
                    cardDes="With a legacy of 30 years in the industry, we have continuously evolved and adapted to meet the changing needs of our clients. Our experience sets us apart as a reliable partner."
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen py-20 bg-white px-5 lg:px-0">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-col items-center h-full gap-5">
          <HeroSectionStyleThree
            tagLine=""
            subHeroTitle="Our Comprehensive Range of Global Services"
            paraText="Explore our wide array of services designed to meet the diverse needs of businesses. From IT solutions that drive innovation to financial back-office services that streamline operations, EWIS Outsource is your partner in growth and efficiency."
          />
          <div className="flex space-x-4 p-4">
            <button
              className={`${activeCategory === null
                ? "bg-primary text-white"
                : "bg-primarygray text-blackFooter"
                } px-6 py-4 rounded-xl font-Rubik text-sm font-bold`}
              onClick={() => setActiveCategory(null)}
            >
              Select All
            </button>
            <button
              className={`${activeCategory === "IT Services"
                ? "bg-primary text-white"
                : "bg-primarygray text-blackFooter"
                } px-6 py-4 rounded-xl font-Rubik text-sm font-bold`}
              onClick={() => setActiveCategory("IT Services")}
            >
              IT Services
            </button>
            <button
              className={`${activeCategory === "Financial Services"
                ? "bg-primary text-white"
                : "bg-primarygray text-blackFooter"
                } px-6 py-4 rounded-xl font-Rubik text-sm font-bold`}
              onClick={() => setActiveCategory("Financial Services")}
            >
              Financial Services
            </button>
          </div>
          <div className="">
            <FilteredList items={items} activeCategory={activeCategory} />
          </div>
        </div>
      </div>

      <ContactUsCom />
      <MainFooter />
    </>
  );
};
export default GlobalServices;