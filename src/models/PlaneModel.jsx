import React, { useEffect, useRef } from 'react'
import { planeModel } from '../assets'
import { useAnimations, useGLTF } from '@react-three/drei'

const PlaneModel = ({isRotating, ...props}) => {

  const planeRef = useRef()

  const {scene, animations} = useGLTF(planeModel)
  
  const { actions } = useAnimations(animations, planeRef)

  useEffect(() => {
    if (isRotating) {
      actions['Take 001'].play()
    } else {
      actions['Take 001'].stop()
    }
  
    
  }, [actions, isRotating])
  

  return (
    <mesh {...props} ref={planeRef}>
        <primitive object={scene} />
    </mesh>
  )
}

export default PlaneModel