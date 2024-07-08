/* eslint-disable react/prop-types */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */

import React from 'react'

import ParagraphOne from '../common/ParagraphOne'
import SubHeaderStyleOne from '../common/SubHeaderStyleOne';
import TagLine from '../common/TagLine';

function HeroSectionStyleThree(props) {
    return ( 
        
        <div className="flex flex-col gap-5 text-center">
            <TagLine 
            tagLine={props.tagLine}
            />
            <SubHeaderStyleOne
                subHeroTitle={props.subHeroTitle}
            />
            <ParagraphOne
                paraText={props.paraText}
            />
        </div>
     );
}

export default HeroSectionStyleThree;
