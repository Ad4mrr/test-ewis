/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { Link } from 'react-router-dom'

import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

function CardStyleTwo(props) {

    return (
        <>
            <div className='flex flex-col items-center gap-5 rounded-lg bg-purple px-10 py-10 text-center h-full w-full shadow-md'
                data-aos="fade-up" data-aos-easing="linear" data-aos-offset="300" data-aos-duration="500"
            >
                <div className='bg-white p-5 h-48 w-48 rounded-full flex flex-col justify-center items-center overflow-hidden'>
                    {<img src={props.imgURL} alt="" className='p-2  h-40 w-40' /> || <Skeleton height={200} width={200}/>   }
                </div>
                {/* <div style={{ display: 'flex' }}>
                    <Skeleton width={10}/>
                </div> */}
                <h4 className='text-primary font-bold font-Poppins text-2xl'>
                    {props.cardTitle}
                </h4>
                <p className='font- font-Rubik text-sm text-black' >
                    {props.cardDes}
                </p>
                {/* <Link to={props.to} className='bg-primary text-white py-3 px-6 font-Rubik text-base border-0 border-black rounded-lg font-bold' >
                    Learn More
                </Link> */}
            </div>
        </>
    )
}

export default CardStyleTwo