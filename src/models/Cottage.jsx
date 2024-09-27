import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useGLTF } from '@react-three/drei'

import { cottageScene } from '../assets'

import { CapsuleCollider, RigidBody } from '@react-three/rapier'

import * as THREE from 'three'
import { useFrame, useThree } from '@react-three/fiber'
import appStore from '../store'


const Cottage = ({coordinates, stage, isRotating, setIsRotating, angle, setAngle, ...props }) => {

  const { gl, camera } = useThree()
  const cottageRef = useRef()
  const cameraTarget = useRef()
  const cameraPosition = useRef()
  const cameraWorldPosition = useRef(new THREE.Vector3())
  const cameraLookAtWorldPosition = useRef(new THREE.Vector3())
  const cameraLookAt = useRef(new THREE.Vector3(0, 0, 0))
  const sensorRef = useRef([])

  const handlePointerDown = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(true)
  }

  const handlePointerUp = (event) => {
    event.stopPropagation()
    event.preventDefault()
    setIsRotating(false)
  }

  const handleTouchStart = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(true)
  }
  
  const handleTouchEnd = (e) => {
    e.stopPropagation()
    e.preventDefault()
    setIsRotating(false)
  }
  
  useEffect(() => {
    const canvas = gl.domElement
    canvas.addEventListener("pointerdown", handlePointerDown)
    canvas.addEventListener("pointerup", handlePointerUp)
    canvas.addEventListener("touchstart", handleTouchStart)
    canvas.addEventListener("touchend", handleTouchEnd)
    return () => {
      canvas.removeEventListener("pointerdown", handlePointerDown)
      canvas.removeEventListener("pointerup", handlePointerUp)
      canvas.removeEventListener("touchstart", handleTouchStart)
      canvas.removeEventListener("touchend", handleTouchEnd)
    }
  }, [gl, handlePointerDown, handlePointerUp])

  const { scene } = useMemo(() => useGLTF(cottageScene))


  useFrame(() => {

    cameraPosition.current.getWorldPosition(cameraWorldPosition.current)
    const radius = 45
    cameraPosition.current.position.copy(angle.clone().multiplyScalar(radius))
    cameraPosition.current.getWorldPosition(cameraWorldPosition.current)
    
    camera.position.lerp(cameraWorldPosition.current, 0.1)
  
    if (cameraTarget.current) {
      cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current)
      cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1)
  
      camera.lookAt(cameraLookAt.current)
    }

  })

  return (
    <group
      key={`group${coordinates.toString()}`}
    >
      <group ref={cameraTarget} position={[0, 9.5, 0]} />
      <group ref={cameraPosition} position-x={-30} position-y={15} position-z={30} />
      <RigidBody type='fixed' colliders='trimesh' >
        <primitive object={scene} {...props} ref={cottageRef} />
      </RigidBody>
      {coordinates.map((point, i) => (
        <CapsuleCollider
          ref = {el => (sensorRef.current[i] = el)}
          key={`${i}sensor`}
          position={[point[0], 0.5, point[2]]}
          args={[0.6, 0.6]}
          name={`${i}`}
          sensor
          onIntersectionEnter={
            (other) => (
              setIsRotating(false), 
              appStore.stage = (Number(other.target.colliderObject.name)),
              appStore.angle = angle.toArray()
            )}
        />
      )
      )
      }
    </group>
  )
}

export default Cottage