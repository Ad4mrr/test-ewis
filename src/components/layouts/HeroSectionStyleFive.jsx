/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React from 'react'
import MainHeader from '../common/MainHeader'
import ParagraphOne from '../common/ParagraphOne'

function HeroSectionStyleFive(props) {
    return ( 
        
        <div className="flex flex-col gap-5">
            <MainHeader
                heroTitle={props.heroTitle}
            />
            <ParagraphOne
                paraText={props.paraText}
            />
        </div>
     );
}

export default HeroSectionStyleFive;