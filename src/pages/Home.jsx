import { Canvas } from "@react-three/fiber"
import { Suspense, useRef, useState } from "react"
import { AvatarController, HomeInfo, SuspenseVisual } from "../components"
import Cottage from "../models/Cottage"
import { Environment, OrthographicCamera, Preload } from "@react-three/drei"
import SkyAndClouds from "../models/SkyAndClouds"
import PlaneModel from "../models/PlaneModel"
import { Physics } from "@react-three/rapier"
import { Vector3 } from 'three'

function Home() {

  const shadowCameraRef = useRef()
  const [ stage, setStage ] = useState(0)
  const [ angle, setAngle ] = useState(new Vector3(-15, 6, 20).normalize())

  const coordinates = [
    [-15.6, -1.7, 20], 
    [-15.5, -1.7, -21], 
    [-10.4, -1.7, -20], 
    [16, -1.7, -20], 
    [14, -1.7, -8.2], 
    [14, -1.7, 16.2], 
    [-11, -1.7, 16.5]
  ]
  const [isRotating, setIsRotating] = useState(false)

  return (
    <section className='w-full h-screen realtive'>
      <div className = 'absolute top-28 sm:top-24 left-0 right-0 z-10 flex items-center justify-center'>
        {<HomeInfo stage={stage} />}
      </div>
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
            position={[-15, 30, 20]}
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
          <Physics debug={false} key={'cottageMap'}>
            <Cottage 
              stage = {stage}
              setStage = {setStage}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              angle = {angle}
              setAngle = {setAngle}
              scale = {1.8}
              position = {[0,0,0]}
            />
            <AvatarController
              coordinates={coordinates}
              stage = {stage}
              setStage = {setStage}
              isRotating = {isRotating}
              setIsRotating = {setIsRotating}
              angle = {angle}
              setAngle = {setAngle}
              scale = {1.8}
            />
          </Physics>
          <PlaneModel
            isRotating={isRotating}
            scale={7.8}
            position={[-15, 16, 20]}
            rotation={[0, 0, 0]}
          />
          
        </Suspense>
        <Preload all />
      </Canvas>
    </section>
  )
}

export default Home