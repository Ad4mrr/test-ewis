/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import SubHeaderStyleTwo from '../common/SubHeaderStyleTwo'
import ParagraphOne from '../common/ParagraphOne'
import ButonStyleOne from '../common/ButonStyleOne'
import ButtonStyleTwo from '../common/ButtonStyleTwo'

function SectionStyleOne(props) {
    return (
        <>
            <div className="flex flex-col gap-5">

                <SubHeaderStyleTwo
                    subHeroTitle={props.subHeroTitle}
                    color={props.color}
                />
                <ParagraphOne
                    paraText={props.paraText}
                />
                <div className='flex flex-row gap-5'>
                    <ButonStyleOne
                        buttonTextSolid={props.buttonTextSolid}
                    />
                    <ButtonStyleTwo
                        buttonTextOutline={props.buttonTextOutline}
                    />
                </div>

            </div>
        </>
    )
}

export default SectionStyleOne