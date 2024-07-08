/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainHeader from '../common/MainHeader'
import ParagraphOne from '../common/ParagraphOne'
import ButonStyleOne from '../common/ButonStyleOne'
import ButtonStyleTwo from '../common/ButtonStyleTwo'
import TagLine from '../common/TagLine'
import { useEffect } from 'react'


function HeroSectionStyleOne(props) {
    
    return (

        <div className="flex flex-col gap-4 " data-aos="fade-right"  data-aos-easing="linear" data-aos-offset="300" data-aos-duration="1500">
           
            <MainHeader
                heroTitle={props.heroTitle}
                
            />
            <ParagraphOne
                paraText={props.paraText}
            />
            <div className='flex flex-row mt-8 items-center justify-center lg:justify-start'>
                <ButonStyleOne
                    buttonTextSolid={props.buttonTextSolid}
                    to={props.to}
                />
                {/* <ButtonStyleTwo
                    buttonTextOutline={props.buttonTextOutline}
                /> */}
            </div>

        </div>
    )
}

export default HeroSectionStyleOne