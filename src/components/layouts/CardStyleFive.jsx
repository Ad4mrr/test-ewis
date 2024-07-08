/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react'
import { Link } from 'react-router-dom'

function CardStyleFive(props) {
    return (
        <>
            <div className='flex flex-col items-center gap-5 text-center'>
                <h4 className='text-primary font-bold font-Poppins text-3xl'>
                    {props.cardTitle}
                </h4>
                <p className='font-light font-Rubik text-sm text-black' >
                    {props.cardDes}
                </p>
                <Link to={props.to} className='bg-white text-black py-3 px-6 font-Rubik text-base border-solid border-2 border-black'>
                    Learn More
                </Link>
            </div>
        </>
    )
}

export default CardStyleFive