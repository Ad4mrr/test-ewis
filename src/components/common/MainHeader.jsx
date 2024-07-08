/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function MainHeader(props) {
  return (
    <h1 className='text-primary font-bold font-Poppins text-3xl leading-tight lg:text-5xl '>
      {props.heroTitle}
    </h1>
  )
}

export default MainHeader
