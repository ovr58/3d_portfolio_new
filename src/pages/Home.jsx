import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import { AvatarController, SuspenseVisual } from "../components"
import Cottage from "../models/Cottage"
import { Environment, OrthographicCamera, Preload } from "@react-three/drei"
import SkyAndClouds from "../models/SkyAndClouds"
import PlaneModel from "../models/PlaneModel"
import { Physics } from "@react-three/rapier"
import { KeyboardControls } from "@react-three/drei"

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "run", keys: ["Shift"] },
]

function Home() {

  const shadowCameraRef = useRef()
  const [isRotating, setIsRotating] = useState(false)
  const [idlePoint, setIdlePoint] = useState([0, -6.5, -12])

  const adjustBiplaneForScreenSize = () => {
    let screenScale, screenPosition

    if (window.innerWidth < 640) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, 1, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, 2, -4];
    }

    return {screenScale, screenPosition}
  }

  const [biPLaneScaleAndPosition, setBiPlaneScaleAndPosition] = useState(adjustBiplaneForScreenSize())

  useEffect(() => {
    const handleResize = () => {
      setBiPlaneScaleAndPosition(adjustBiplaneForScreenSize())
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <section className='w-full h-screen realtive'>
      <KeyboardControls map={keyboardMap}>
        <Canvas
          className={`${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
          shadows
          camera={{ position: [3, 3, 3], near: 0.1, far: 1000 }}
          style={{
            touchAction: "none",
          }}
          gl={{ preserveDrawingBuffer: true }}
        >
          <Suspense fallback={<SuspenseVisual />}>
            <directionalLight 
              position={[-15, 10, 15]}
              intensity={2}
              castShadow
              shadow-mapSize-width={2048}
              shadow-mapSize-height={2048}
              shadow-bias={-0.00005}
            >
              <OrthographicCamera
                left={-22}
                right={15}
                top={10}
                bottom={-20}
                ref={shadowCameraRef}
                attach={"shadow-camera"}
              />
            </directionalLight>
            <ambientLight intensity={0.5} />
            <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
            <Environment preset="park" />
            <SkyAndClouds isRotating={isRotating} />
            <Physics debug key={'cottageMap'}>
              <Cottage 
                scale = {1.8}
                position = {[15, -7, -19]}
              />
              <AvatarController
                scale = {1.8}
              />
            </Physics>
            <PlaneModel
              isRotating={isRotating}
              scale={biPLaneScaleAndPosition.screenScale}
              position={biPLaneScaleAndPosition.screenPosition}
              rotation={[0,20,0.5]}
            />
          </Suspense>
          <Preload all />
        </Canvas>
      </KeyboardControls>
    </section>
  )
}

export default Home