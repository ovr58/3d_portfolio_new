import React, { useRef } from 'react'
import { skyScene } from '../assets'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'

function SkyAndClouds({ isRotating }) {

  const skyRef=useRef()

  const skyAndClouds = useGLTF(skyScene)

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef}>
        <primitive object={skyAndClouds.scene} />
    </mesh>
  )
}

export default SkyAndClouds