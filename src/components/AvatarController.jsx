import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { useControls } from "leva"
import { useRef, useState } from "react"
import { degToRad } from "three/src/math/MathUtils.js"
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

  const[ rotationSpeed, setRotationSpeed ] = useState(0.02)

  const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED } = useControls(
      "Character Control",
      {
        WALK_SPEED: { value: 2, min: 0.1, max: 20, step: 0.1 },
        RUN_SPEED: { value: 4, min: 0.2, max: 120, step: 0.1 },
        ROTATION_SPEED: {
          value: degToRad(0.5),
          min: degToRad(0.1),
          max: degToRad(5),
          step: degToRad(0.1),
        },
      }
    )

  const rb = useRef()
  const container = useRef()
  const character = useRef()

  const [animation, setAnimation] = useState("idle")
  const characterRotationTarget = useRef(0)
  const rotationTarget = useRef(0)

  useFrame(() => {
    const movement = new THREE.Vector3().set(0, 0, 0)
    const nextStage = (stage + 1) > (coordinates.length - 1) ? 0 : (stage + 1)
    const start = new THREE.Vector3().set(...coordinates[stage][1])
    const end = new THREE.Vector3().set(...coordinates[nextStage][1])
    characterRotationTarget.current = Math.atan2(movement.x, movement.z)
    let speed = 0
    if (rb.current) {
        const vel = rb.current.linvel()

    
        if (isRotating) {
          if (rotationSpeed === 0) setRotationSpeed(0.02)
          movement.copy(new THREE.Vector3().subVectors(end, start).normalize())
          const worldPosition = new THREE.Vector3()
          container.current.getWorldPosition(worldPosition)
          worldPosition.y= 7
          const vectorA = new THREE.Vector3().copy(worldPosition).normalize()
          // const vectorB = new THREE.Vector3().copy(start).normalize()
          
          const newAngle = vectorA
          setAngle(newAngle)
          speed = RUN_SPEED
        } else {
          setRotationSpeed(0)
        }

        // if (movement.x !== 0) {
        //     rotationTarget.current += ROTATION_SPEED * movement.x
        // }
    
        if (movement.x !== 0 || movement.z !== 0) {
            characterRotationTarget.current = Math.atan2(movement.x, movement.z)
            vel.x =
            Math.sin(rotationTarget.current + characterRotationTarget.current) *
            speed
            vel.z =
            Math.cos(rotationTarget.current + characterRotationTarget.current) *
            speed
            if (speed === RUN_SPEED) {
            setAnimation("run")
            } else {
            setAnimation("walk")
            }
        } else {
            setAnimation("idle")
        }
        
        character.current.rotation.y = lerpAngle(
            character.current.rotation.y,
            characterRotationTarget.current,
            0.1
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
        <CapsuleCollider mass={69} args={[1.08, 0.6]} />
    </RigidBody>
  )
}

export default AvatarController