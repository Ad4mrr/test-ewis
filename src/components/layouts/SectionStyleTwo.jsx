/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import ParagraphOne from '../common/ParagraphOne'
import MainHeader from '../common/MainHeader'
import SubHeader from '../common/SubHeaderStyleOne'
import { useEffect } from 'react'


function SectionStyleTwo(props) {

  return (
    <div className="flex flex-col gap-5 " data-aos="fade-right"  data-aos-easing="linear" data-aos-duration="1000">
      
      <SubHeader
        subHeroTitle={props.subHeroTitle}
      />
      <ParagraphOne
        paraText={props.paraText}
      />
    </div>
  )
}

export default SectionStyleTwo