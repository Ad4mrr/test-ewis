/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';

function CardStyleSix(props) {
    return (
        <>
            <div className='flex flex-col align-middle justify-center text-center w-full px-5'>
                <img src={props.imageUrl} alt='' />
                <h3>{props.title}</h3>
            </div>
        </>
    )
}

export default CardStyleSix;