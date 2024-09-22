import React, { useEffect, useRef } from 'react'
import { planeModel } from '../assets'
import { useAnimations, useGLTF } from '@react-three/drei'
import { Vector3 } from 'three'
import { useFrame } from '@react-three/fiber'

const PlaneModel = ({isRotating, ...props}) => {

  const planeRef = useRef()

  const planeAngle = useRef(0)

  const {scene, animations} = useGLTF(planeModel)
  
  const { actions } = useAnimations(animations, planeRef)

  useFrame(() => {
    const radius = 40
    const xNew = radius * Math.cos(planeAngle.current)
    const zNew = radius * Math.sin(planeAngle.current)
    const newPosition = new Vector3(xNew, planeRef.current.position.y, zNew)
    planeRef.current.lookAt(newPosition.clone())
    planeRef.current.position.lerp(newPosition, 0.01)
    planeAngle.current += 0.01
    if (planeAngle.current >= Math.PI * 2) {
      planeAngle.current = 0
    }
  })

  useEffect(() => {
    actions['Take 001'].play()
  }, [])
  

  return (
    <mesh {...props} ref={planeRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default PlaneModel