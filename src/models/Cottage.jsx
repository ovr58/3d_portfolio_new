

import React, { useEffect, useRef } from 'react'
import { useAnimations, useGLTF } from '@react-three/drei'

import { cottageScene } from '../assets'

import { RigidBody } from '@react-three/rapier'

import * as THREE from 'three'

const Cottage = ({setIdlePoints, ...props }) => {
  
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
      if (child.name.includes('IdlePoint')) {
        const bbCenter = new THREE.Vector3()
        child.geometry.computeBoundingBox() // вычисляем актуальный бокс для геометрии объекта с которым работаем
        child.geometry.boundingBox.getCenter(bbCenter)
        child.localToWorld(bbCenter)
        console.log('IDLE POINT - ', bbCenter)
      }
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