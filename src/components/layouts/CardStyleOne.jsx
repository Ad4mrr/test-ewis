/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { Link } from 'react-router-dom'

function CardStyleOne(props) {
    return (
        <>
            <div className="flex flex-col gap-2 items-center text-center w-full  z-0 p-2 ">
                {/* <imgsrc={props.image} alt="" className='w-full' /> */}
                <h5 className='text-black font-bold font-Rubik text-xl leading-tight'>
                    {props.cardTitle}
                </h5>
                <p className='font-Rubik text-base text-black font-normal '>
                    {props.cardDes}
                </p>
               
            </div>
        </>
    )
}

export default CardStyleOne