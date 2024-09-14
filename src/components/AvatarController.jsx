import { useKeyboardControls } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { CapsuleCollider, RigidBody } from "@react-three/rapier"
import { useControls } from "leva"
import { useEffect, useRef, useState } from "react"
import { MathUtils, Vector3 } from "three"
import { degToRad } from "three/src/math/MathUtils.js"
import NataliAvatar from "../models/NataliAvatar"

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
          WALK_SPEED: { value: 0.8, min: 0.1, max: 4, step: 0.1 },
          RUN_SPEED: { value: 1.6, min: 0.2, max: 12, step: 0.1 },
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
      const cameraTarget = useRef()
      const cameraPosition = useRef()
      const cameraWorldPosition = useRef(new Vector3())
      const cameraLookAtWorldPosition = useRef(new Vector3())
      const cameraLookAt = useRef(new Vector3())
      const [, get] = useKeyboardControls()
      const isClicking = useRef(false)
    
      useEffect(() => {
        const onMouseDown = (e) => {
          isClicking.current = true
        }
        const onMouseUp = (e) => {
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
        if (rb.current) {
          const vel = rb.current.linvel()
    
          const movement = {
            x: 0,
            z: 0,
          }
    
          if (get().forward) {
            movement.z = 1
          }
          if (get().backward) {
            movement.z = -1
          }
    
          let speed = get().run ? RUN_SPEED : WALK_SPEED
    
          if (isClicking.current) {
            console.log("clicking", pointer.x, pointer.y)
            if (Math.abs(pointer.x) > 0.1) {
              movement.x = -pointer.x
            }
            movement.z = pointer.y + 0.4
            if (Math.abs(movement.x) > 0.5 || Math.abs(movement.z) > 0.5) {
              speed = RUN_SPEED
            }
          }
    
          if (get().left) {
            movement.x = 1
          }
          if (get().right) {
            movement.x = -1
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
    <RigidBody colliders={false} ref={rb}>
        <group ref={container} position={[-15,0,7]}>
            <group ref={cameraTarget} position-z={1.5} />
            <group ref={cameraPosition} position-x={35} position-y={23} position-z={43} />
            <group ref={character}>
                <NataliAvatar
                    {...props} position={[0,-0.9,0]}
                    animation={animation}
                />
            </group>
        </group>
        <CapsuleCollider args={[1.08, 1.15]} />
    </RigidBody>
  )
}

export default AvatarController