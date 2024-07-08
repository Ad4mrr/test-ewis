/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SignalIcon } from '@heroicons/react/24/outline'
import React from 'react'

function CardStyleSeven(props) {
    return (
        <div className='flex flex-col text-left gap-3'>
            <div className="w-7 h-7"><SignalIcon /></div>
            <h4 className='text-primary font-bold font-Poppins text-2xl'>
                {props.cardTitle}
            </h4>
            <p className='font- font-Rubik text-sm text-black' >
                {props.cardDes}
            </p>
        </div>
    )
}

export default CardStyleSeven