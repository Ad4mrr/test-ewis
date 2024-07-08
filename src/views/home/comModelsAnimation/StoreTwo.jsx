/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 src/assets/models/animatedModels/ground1.glb -o src/views/home/comModelsAnimation/GraoundOne.jsx -k -K -r -s public 
*/

import React, { useEffect, useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'
import groundO from '../../../assets/models/animatedModels/store2.glb'
import * as THREE from 'three';
const animationNames = [
  'shopboy4', 
];
export function StoreTwo(props) {

  const { scene, animations } = useGLTF(groundO)
  const { actions } = useAnimations(animations, scene)
  useEffect(() => {
    animationNames.forEach((name) => {
      if (actions[name]) {
        actions[name].reset().fadeIn(0.5).play().loop = THREE.LoopRepeat;
      }
    });

    return () => {
      animationNames.forEach((name) => {
        if (actions[name]) {
          actions[name].fadeOut(0.5);
        }
      });
    };
  }, [actions]);
  return (
    <>
      <primitive object={scene} scale={0.025} position={[0, -12.50, 0]}/>
    </>
  )
}

useGLTF.preload(groundO)
