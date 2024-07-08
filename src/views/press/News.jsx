import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import NavBar from '../../components/navBar/NavBar';
import ContactUsCom from '../../components/common/ContactUsCom';
import MainFooter from '../../components/footer/MainFooter';
import { motion, useScroll, useSpring } from 'framer-motion';
import Headroom from 'react-headroom';
import parse from 'html-react-parser';

export default function News() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001,
    });

    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(true); // Loading state

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        fetchNewsData();
    }, []);

    const fetchNewsData = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/news');
            if (response.ok) {
                const data = await response.json();
                setNewsData(data);
            }
        } catch (error) {
            console.error('Error fetching news data:', error);
        } finally {
            setLoading(false); // Set loading to false after data is fetched
        }
    };

    return (
        <>
            <Helmet>
                <title>News page</title>
                <meta name="description" content="App Description" />
            </Helmet>
            <Headroom>
                <NavBar />
            </Headroom>
            <motion.div className="fixed top-0 left-0 right-0 h-1 bg-primary origin-top" style={{ scaleX }} />
            <div className='w-screen bg-primary flex flex-col px-5 lg:px-0'>
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center px-5 lg:px-0 py-10">
                    <div className="flex flex-col items-end justify-center lg:justify-start sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col lg:relative bottom-10 gap-5">
                        <h1 className='text-white font-bold font-Poppins text-3xl leading-tight lg:text-5xl '>
                            Our News
                        </h1>
                    </div>
                    <div className="flex justify-center lg:justify-center flex-col sm:px-8 text-center lg:text-left md:text-left lg:basis-1/2 col items-center mb-16 "
                        data-aos="fade-down" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
                        <img src="https://cdn3d.iconscout.com/3d/premium/thumb/newspaper-8510050-6741780.png?f=webp" alt="" />
                    </div>
                </div>
            </div>
            <div className="max-w-7xl mx-auto bg-fixed px-5 lg:px-0 py-20">
                {loading ? (
                    <div className="flex justify-center items-center">
                        <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
                           
                        </div>
                    </div>
                ) : (
                    <div className="columns-1 sm:columns-2 md:columns-3 gap-5">
                        {newsData.map((data, index) => (
                            <div key={index} className="mb-5 break-inside-avoid">
                                <div className="bg-white rounded-3xl overflow-hidden animate-in zoom-in duration-200 ring-1 hover:ring-2 ring-primary transition-all duration-300" data-aos="fade-up">
                                    <img src={`http://localhost:5000/${data.imageFile}`} alt={data.newsTitle} className="h-48 w-full object-cover md:h-64" />
                                    <div className="p-6">
                                        <h2 className="text-xl font-semibold text-gray-800 mb-2 font-Poppins">{data.newsTitle}</h2>
                                        <p className="text-gray-600 font-Rubik">{parse(data.description)}</p>
                                        <div className="flex justify-between mt-4">
                                            <span className="text-sm text-gray-500 font-Poppins">{data.source}</span>
                                            <span className="text-sm text-gray-500 font-Poppins">{new Date(data.createdAt).toLocaleDateString()}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            <ContactUsCom />
            <MainFooter />
        </>
    );
}
