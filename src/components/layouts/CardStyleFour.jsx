/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function CardStyleFour(props) {
    return (
        <div className="text-center bg-background h-full p-10 rounded-lg flex flex-col items-center justify-center gap-5 shadow-md">
            <div className='rounded-full bg-white p-10 w-56 h-56'>
                <img src={props.image} alt="" className='' />
            </div>


            <h5 className='font-Rubik font-bold text-xl text-black'>
                {props.cardTitle}
            </h5>


        </div>
    )
}

export default CardStyleFour;
