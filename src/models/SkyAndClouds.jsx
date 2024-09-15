import React, { useRef } from 'react'
import { skyScene } from '../assets'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useControls } from 'leva'

function SkyAndClouds({ isRotating }) {

  const skyRef=useRef()

  const skyAndClouds = useGLTF(skyScene)

  const {SKY_X, SKY_Y, SKY_Z} = useControls(
    "SKY Control",
        {
          SKY_X: { value: -13.5, min: -360, max: 360, step: 0.1 },
          SKY_Y: { value: 0, min: -360, max: 360, step: 0.1 },
          SKY_Z: { value: 0, min: -360, max: 360, step: 0.1 },
        }
  )

  useFrame((_, delta) => {
    if (isRotating) {
      skyRef.current.rotation.y += 0.15 * delta
    }
  })

  return (
    <mesh ref={skyRef} rotation-x={SKY_X*(Math.PI/180)} rotation-y={SKY_Y*(Math.PI/180)} rotation-z={SKY_Z}>
        <primitive object={skyAndClouds.scene} />
    </mesh>
  )
}

export default SkyAndClouds