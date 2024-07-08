/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function ParagraphOne(props) {
  return (
    <p className='font-Rubik lg:text-lg text-sm text-black font-semibold'>
      {props.paraText}
    </p>
  )
}

export default ParagraphOne
