import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"
import { MathUtils, Vector3 } from "three"
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

function AvatarController({...props}) {

    const { WALK_SPEED, RUN_SPEED, ROTATION_SPEED } = useControls(
        "Character Control",
        {
          WALK_SPEED: { value: 2, min: 0.1, max: 20, step: 0.1 },
          RUN_SPEED: { value: 6, min: 0.2, max: 120, step: 0.1 },
          ROTATION_SPEED: {
            value: degToRad(0.5),
            min: degToRad(0.1),
            max: degToRad(5),
            step: degToRad(0.1),
          },
        }
      )
      const {CAMERA_X, CAMERA_Y, CAMERA_Z, CAMERA_TARGET} = useControls(
        "Camera Control",
        {
          CAMERA_X: { value: -8, min: -80, max: 80, step: 1 },
          CAMERA_Y: { value: 10, min: 0, max: 80, step: 1 },
          CAMERA_Z: { value: 14, min: -80, max: 80, step: 1 },
          CAMERA_TARGET: { value: 7.5, min: -80, max: 80, step: 0.1 }
        }
      )
      const rb = useRef()
      const container = useRef()
      const character = useRef()
    
      const [animation, setAnimation] = useState("idle")
    
      const characterRotationTarget = useRef(0)
      const rotationTarget = useRef(0)
      const cameraTarget = useRef()
      const cameraPosition = useRef()
      const cameraWorldPosition = useRef(new Vector3())
      const cameraLookAtWorldPosition = useRef(new Vector3())
      const cameraLookAt = useRef(new Vector3())
      const [, get] = useKeyboardControls()
      const isClicking = useRef(false)
    
      useEffect(() => {
        const onMouseDown = (e) => {
            e.preventDefault()
            e.stopPropagation()
            isClicking.current = true
        }
        const onMouseUp = (e) => {
            e.preventDefault()
            e.stopPropagation() 
            isClicking.current = false
        }
        document.addEventListener("mousedown", onMouseDown)
        document.addEventListener("mouseup", onMouseUp)
        // touch
        document.addEventListener("touchstart", onMouseDown)
        document.addEventListener("touchend", onMouseUp)
        return () => {
          document.removeEventListener("mousedown", onMouseDown)
          document.removeEventListener("mouseup", onMouseUp)
          document.removeEventListener("touchstart", onMouseDown)
          document.removeEventListener("touchend", onMouseUp)
        }
      }, [])
    
      useFrame(({ camera, pointer }) => {
        const movement = new THREE.Vector3().set(0, 0, 0)
        characterRotationTarget.current = Math.atan2(movement.x, movement.z)
        let speed = 0
        if (rb.current) {
            const vel = rb.current.linvel()

        
            if (isClicking.current) {
                console.log("clicking", pointer.x, pointer.y)
                const start = new THREE.Vector3().set(-1.4, 0, 0)
                const end = new THREE.Vector3().set(-1.4, 0, -41)
                movement.copy(new THREE.Vector3().subVectors(end, start).normalize())
                const diatance = start.distanceTo(end)
                console.log('MOVEMENT - ', movement)
                speed = WALK_SPEED
            }

            if (movement.x !== 0) {
                rotationTarget.current += ROTATION_SPEED * movement.x
            }
        
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
        
            // CAMERA
            container.current.rotation.y = MathUtils.lerp(
            container.current.rotation.y,
            rotationTarget.current,
            0.1
            )
        

            
            cameraPosition.current.getWorldPosition(cameraWorldPosition.current)
            camera.position.lerp(cameraWorldPosition.current, 0.1)
        
            if (cameraTarget.current) {
                cameraTarget.current.getWorldPosition(cameraLookAtWorldPosition.current)
                cameraLookAt.current.lerp(cameraLookAtWorldPosition.current, 0.1)
            
                camera.lookAt(cameraLookAt.current)
            }
      })
    
  return (
    <RigidBody colliders={false} lockRotations ref={rb} position={[-1.4, 0, 0]}>
        <group ref={container} >
            <group ref={cameraTarget} position-y={CAMERA_TARGET} />
            <group ref={cameraPosition} position-x={CAMERA_X} position-y={CAMERA_Y} position-z={CAMERA_Z} />
            <group ref={character}>
                <NataliAvatar
                    {...props} position={[0,-1.6,0]}
                    animation={animation}
                />
            </group>
        </group>
        <CapsuleCollider args={[1.08, 0.8]} />
    </RigidBody>
  )
}

export default AvatarController