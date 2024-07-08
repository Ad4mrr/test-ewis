/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React from 'react'
import MainHeader from '../common/MainHeader'
import ParagraphOne from '../common/ParagraphOne'
import TagLine from '../common/TagLine'

function HeroSectionStyleFourth(props) {
    return (

        <div className="flex flex-col gap-5 text-center">
            <TagLine 
                tagLine={props.tagLine}
            />
            <MainHeader
                heroTitle={props.heroTitle}
            />
            <ParagraphOne
                paraText={props.paraText}
            />
        </div>
    )
}

export default HeroSectionStyleFourth