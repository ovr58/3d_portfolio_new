import React from 'react'
import { skyScene } from '../assets'
import { useGLTF } from '@react-three/drei'

function SkyAndClouds() {

  const skyAndClouds = useGLTF(skyScene)

  return (
    <mesh>
        <primitive object={skyAndClouds.scene} />
    </mesh>
  )
}

export default SkyAndClouds