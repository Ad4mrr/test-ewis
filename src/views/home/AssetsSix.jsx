/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 public/assets/models/HSix.glb -o src/views/About/AssetsSix.jsx -k -K -r -s public 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function AssetsSix(props) {
  const { nodes, materials } = useGLTF('./HSix.glb')
  return (
    <group {...props} dispose={null}>
      <group>
        <group name="pCube117">
          <mesh name="pCube117_1" castShadow receiveShadow geometry={nodes.pCube117_1.geometry} material={materials.lambert2SG} />
          <mesh name="pCube117_1_1" castShadow receiveShadow geometry={nodes.pCube117_1_1.geometry} material={materials.lambert5SG} />
          <mesh name="pCube117_1_2" castShadow receiveShadow geometry={nodes.pCube117_1_2.geometry} material={materials.lambert6SG} />
          <mesh name="pCube117_1_3" castShadow receiveShadow geometry={nodes.pCube117_1_3.geometry} material={materials.lambert3SG} />
          <mesh name="pCube117_1_4" castShadow receiveShadow geometry={nodes.pCube117_1_4.geometry} material={materials.lambert4SG} />
          <mesh name="pCube117_1_5" castShadow receiveShadow geometry={nodes.pCube117_1_5.geometry} material={materials.lambert7SG} />
          <mesh name="pCube117_1_6" castShadow receiveShadow geometry={nodes.pCube117_1_6.geometry} material={materials.lambert8SG} />
          <mesh name="pCube117_1_7" castShadow receiveShadow geometry={nodes.pCube117_1_7.geometry} material={materials.phongE2SG} />
          <mesh name="pCube117_1_8" castShadow receiveShadow geometry={nodes.pCube117_1_8.geometry} material={materials.phong2SG} />
          <mesh name="pCube117_1_9" castShadow receiveShadow geometry={nodes.pCube117_1_9.geometry} material={materials.phongE1SG} />
          <mesh name="pCube117_1_10" castShadow receiveShadow geometry={nodes.pCube117_1_10.geometry} material={materials.phong1SG} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('./HSix.glb')
