/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import { AcademicCapIcon } from '@heroicons/react/24/solid'
function IconTextStyleOne(props) {
    return (
        <>
            <div className='flex flex-row gap-5'>
                <props.iconName className="h-6 w-6 text-gray-600 group-hover:text-indigo-600" aria-hidden="true" />
                <p className='font-Inter text-base text-black font-black'>
                    {props.iconText}
                </p>
            </div>
        </>
    )
}

export default IconTextStyleOne