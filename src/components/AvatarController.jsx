import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, CylinderCollider, RigidBody } from "@react-three/rapier"
import { useRef, useState } from "react"
import NataliAvatar from "../models/NataliAvatar"
import * as THREE from 'three'

const normalizeAngle = (angle) => {
  while (angle > Math.PI) angle -= 2 * Math.PI
  while (angle < -Math.PI) angle += 2 * Math.PI
  return angle
}

const lerpAngle = (start, end, t) => {
  start = normalizeAngle(start)
  end = normalizeAngle(end)

  if (Math.abs(end - start) > Math.PI) {
    if (end > start) {
      start += 2 * Math.PI
    } else {
      end += 2 * Math.PI
    }
  }

  return normalizeAngle(start + (end - start) * t)
}

function AvatarController({coordinates, stage, setStage, isRotating, setIsRotating, angle, setAngle, ...props}) {

  const WALK_SPEED = 2
  const RUN_SPEED = 5

  const rb = useRef()
  const container = useRef()
  const character = useRef()

  const [animation, setAnimation] = useState("idle")
  const characterRotationTarget = useRef(0)
  const rotationTarget = useRef(0)
  const [ rotationSpeed, setRotationSpeed ] = useState(0)

  useFrame(({ camera }) => {
    const movement = new THREE.Vector3().set(0, 0, 0)
    const nextStage = (stage + 1) > (coordinates.length - 1) ? 0 : (stage + 1)
    const start = new THREE.Vector3().set(...coordinates[stage])
    const end = new THREE.Vector3().set(...coordinates[nextStage])
    
    characterRotationTarget.current = Math.atan2(camera.position.x, camera.position.z)

    let speed = 0
    if (rb.current) {
      const vel = rb.current.linvel()

      if (isRotating) {
        movement.copy(new THREE.Vector3().subVectors(end, start).normalize())
        if (rotationSpeed > 0) {
          rotationTarget.current += 0.04
        } else {
          rotationTarget.current = 0
        }
        const worldPosition = new THREE.Vector3()
        container.current.getWorldPosition(worldPosition)
        worldPosition.y = -1.7
        const doneDistance = start.distanceTo(worldPosition)
        const totalDistance = start.distanceTo(end)
        const percentRate = (doneDistance*100)/totalDistance
        worldPosition.y= 7
        const vectorA = new THREE.Vector3().copy(worldPosition).normalize()
        const newAngle = vectorA
        setAngle(newAngle)
        switch (true) {
          case (percentRate >=0 && percentRate <= 20 || percentRate >=90 && percentRate <= 100):
            speed = WALK_SPEED
            setAnimation("walk")
            break;
          case (percentRate >20 && percentRate < 90):
            speed = RUN_SPEED
            setAnimation("run")
            break;
          default:
            break;
        } 
      }
  
      if (movement.x !== 0 || movement.z !== 0) {
        characterRotationTarget.current = Math.atan2(movement.x, movement.z)
        vel.x =
        Math.sin(rotationTarget.current + characterRotationTarget.current) *
        speed
        vel.z =
        Math.cos(rotationTarget.current + characterRotationTarget.current) *
        speed
      } else {
        setAnimation("idle")
      }
      
      character.current.rotation.y = lerpAngle(
          character.current.rotation.y,
          characterRotationTarget.current,
          0.5
      )
  
      rb.current.setLinvel(vel, true)
    }
  })

  return (
    <RigidBody linearDamping={0.3} position={[-16.5, 6.5, 20]} colliders={false} lockRotations ref={rb}>
        <group ref={container} >
            <group ref={character}>
                <NataliAvatar
                    animation={animation}
                    position={[0, -1.7, 0]}
                    {...props}
                />
            </group>
        </group>
        <CapsuleCollider 
          mass={69} 
          args={[1.08, 0.6]}
        />
        <CylinderCollider 
          args={[0.2, 0.9]}
          position={[0,1.2,0]}
          sensor
          onIntersectionEnter={() => {
            setRotationSpeed(1)
          }}
          onIntersectionExit={() => {
            setRotationSpeed(0)
          }}
        />
    </RigidBody>
  )
}

export default AvatarController