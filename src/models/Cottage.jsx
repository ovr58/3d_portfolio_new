/* eslint-disable react/no-unknown-property */
/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import { cottageScene } from '../assets'

import { RigidBody } from '@react-three/rapier'

const Cottage = ({...props }) => {
  
  const cottageRef = useRef()

  const { scene, animations } = useGLTF(cottageScene)

  const { actions } = useAnimations(animations, cottageRef)

  useEffect(() => {
    if (actions && animations.length > 0) {
      actions[animations[0].name].play();
    }
  }, [actions])

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [cottageRef.current])

  return (
    <group>
      <RigidBody type='fixed' colliders='trimesh' >
        <primitive object={scene} {...props} ref={cottageRef} />
      </RigidBody>
    </group>
  )
}

useGLTF.preload('/cottage.glb')

export default Cottage