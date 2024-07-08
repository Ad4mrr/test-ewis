import { ContactShadows, Text } from '@react-three/drei'
import React from 'react'

function ExperinceAboutUs({ type }) {
    return (
        <>
            <ambientLight castShadow intensity={0.1} />
            <directionalLight castShadow position={[0, 30, 20]} intensity={2} />


            <ContactShadows scale={100} opacity={0.1} />

            {type === 1 && <Text scale={2} position={[0, 0, 0]} >Banking Finance And Insurance</Text>}
            {type === 2 && <Text scale={2} position={[0, 0, 0]} >Education</Text>}
            {type === 3 && <Text scale={2} position={[0, 0, 0]} >Manufacturing</Text>}
            {type === 4 && <Text scale={2} position={[0, 0, 0]} >Healthcare</Text>}
            {type === 5 && <Text scale={2} position={[0, 0, 0]} >Retail</Text>}
            {type === 6 && <Text scale={2} position={[0, 0, 0]} >Public</Text>}
            {type === 7 && <Text scale={2} position={[0, 0, 0]} >Telecommunication</Text>}
        </>
    )
}

export default ExperinceAboutUs