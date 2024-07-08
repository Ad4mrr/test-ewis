/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { ArrowTrendingUpIcon } from '@heroicons/react/24/outline'
import React from 'react'
import { Link } from 'react-router-dom'

function ButtonStyleTwo(props) {
    return (

        <Link to={props.to} className='group transition-transform bg-primary text-white py-1 px-6 font-Rubik text-base border-solid border-2 border-primary rounded-lg font-black flex flex-row items-center justify-center gap-5 hover:translate-x-2 hover:bg-black hover:border-black'>
            {props.buttonTextOutline}
            <div className="flex h-11 w-11 flex-none items-center justify-center rounded-lg ">
                <ArrowTrendingUpIcon className="h-6 w-6 text-gray-600 transition-transform group-hover:translate-x-2" aria-hidden="true" />
            </div>
        </Link>
    )
}

export default ButtonStyleTwo