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

  const { nodes, materials } = useMemo(() => useGLTF(cottageScene))


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
      <group {...props} dispose={null} ref={cottageRef}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balkon_beton_002.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_005.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_006.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_008.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bassein001.geometry}
          material={materials['Material #35']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Beton_003.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Bordur001.geometry}
          material={materials['Material #29']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box076.geometry}
          material={materials['Material #63']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box077.geometry}
          material={materials['Material #63']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box078.geometry}
          material={materials['Material #63']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box079.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box080.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box081.geometry}
          material={materials['Material #29']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box082.geometry}
          material={materials['Material #63']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box083.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box084.geometry}
          material={materials['Material #81']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box085.geometry}
          material={materials['Material #81']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box086.geometry}
          material={materials['Material #81']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box087.geometry}
          material={materials['Material #81']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box090.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box091.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box092.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box096.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box097.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box098.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box099.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box100.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box101.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box102.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box103.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box104.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box105.geometry}
          material={materials['Material #64']}
          position={[-8.071, 0.643, -10.047]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box106.geometry}
          material={materials['Material #114']}
          position={[-8.091, 1.391, -10.039]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box107.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box108.geometry}
          material={materials['Material #114']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box109.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box110.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box111.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box112.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box113.geometry}
          material={materials['Material #64']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box114.geometry}
          material={materials['Material #114']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005.geometry}
          material={materials['Material #83']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder006.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box088.geometry}
          material={materials['Material #85']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder004.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Doroga001.geometry}
          material={materials['Material #47']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Ruckha001.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Vhodnaya_dver001.geometry}
          material={materials['Material #62']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Garag001.geometry}
          material={materials['Material #83']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Gazon001.geometry}
          material={materials['Material #34']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Krysha001.geometry}
          material={materials['Material #29']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object009.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.kusty001.geometry}
          material={materials['Material #48']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lejak_003.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Lejak001.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object010.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object011.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object012.geometry}
          material={materials['Material #2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object013.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object014.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object015.geometry}
          material={materials['Material #63']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Okna_1_etaj001.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Okna_2_etaj001.geometry}
          material={materials['Material #3']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Okna_steklo_2_etaj001.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekritie_003.geometry}
          material={materials['Material #65']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perekritie_004.geometry}
          material={materials['Material #65']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perila_balkon001.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perila003.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perila004.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Perila005.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane013.geometry}
          material={materials['Material #69']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane014.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane015.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane016.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane017.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane018.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane019.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane020.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane021.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane022.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane023.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane024.geometry}
          material={materials['Material #88']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plitka_pol001.geometry}
          material={materials['Material #31']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Pol_2_etaj001.geometry}
          material={materials['Material #69']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Steklo_Balkon_003.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Steklo_balkon001.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Steklo_okna_1_etaj001.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Steny_1_etaj001.geometry}
          material={materials['Material #2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Steny_2_etaj001.geometry}
          material={materials['Material #2']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Stol006.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Torus002.geometry}
          material={materials['Material #115']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Box089.geometry}
          material={materials['Material #82']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Плоскость.geometry}
          material={materials.Материал}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object014001.geometry}
          material={materials['Material #61']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007001.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007002.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007003.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007004.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007005.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007006.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007007.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007008.geometry}
          material={materials['Material #38']}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Balky_007009.geometry}
          material={materials['Material #38']}
        />
      </group>
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