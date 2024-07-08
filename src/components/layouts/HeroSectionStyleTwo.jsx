/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import ParagraphOne from '../common/ParagraphOne'
import MainHeaderTwo from '../common/MainHeaderTwo'

function HeroSectionStyleTwo(props) {
    return (

        <div className="flex flex-col gap-5">
            
            <MainHeaderTwo
                heroTitle={props.heroTitle}
            />
            <ParagraphOne
                paraText={props.paraText}
            />
            

        </div>
    )
}

export default HeroSectionStyleTwo