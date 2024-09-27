import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useRef, useState } from "react"
import { AvatarController, HomeInfo, SuspenseVisual } from "../components"
import Cottage from "../models/Cottage"
import { Environment, OrthographicCamera, Preload } from "@react-three/drei"
import SkyAndClouds from "../models/SkyAndClouds"
import PlaneModel from "../models/PlaneModel"
import { Physics } from "@react-three/rapier"
import { Vector3 } from 'three'
import { useSnapshot } from "valtio"
import appStore from '../store'
import { funkMusik, soundoff, soundon } from "../assets"

function Home() {

  const bgAudio = useRef(new Audio(funkMusik))
  bgAudio.current.volume = 0.4
  bgAudio.current.loop = true
  const shadowCameraRef = useRef()
  const appState = useSnapshot(appStore)
  const stage = appState.stage
  const [ angle, setAngle ] = useState(new Vector3(...appState.angle).normalize())
  const [ isPlaying, setIsPlaying ] = useState(false)

  useEffect(() => {
    isPlaying && bgAudio.current.play()
    
    return () => {
      bgAudio.current.pause()
    }
  }, [isPlaying])

  const coordinates = [
    [-16.6, -1.7, 20], 
    [-15.6, -1.7, -21.5], 
    [-10.4, -1.7, -20], 
    [16.5, -1.7, -20], 
    [15.3, -1.7, -8.2], 
    [14.2, -1.7, 16.2], 
    [-11.2, -1.7, 16.5]
  ]
  const [isRotating, setIsRotating] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsRotating(true)
    }, 19000); // 3000 миллисекунд = 3 секунды

    return () => clearTimeout(timer);
  }, [stage])

  return (
    <section className='w-full h-screen realtive'>
      <div className = 'absolute top-28 sm:top-24 left-0 right-0 z-20 flex items-center justify-center'>
        {<HomeInfo stage={stage} />}
      </div>
      <Canvas
        className={`${isRotating ? 'cursor-grabbing' : 'cursor-grab'}`}
        shadows
        camera={{ position: [-15, 0, 20], near: 0.1, far: 1000 }}
        style={{
          touchAction: "none",
        }}
      >
        <Suspense fallback={<SuspenseVisual />}>
          <directionalLight 
            position={[-15, 10, 15]}
            intensity={0.65}
            castShadow
            shadow-mapSize-width={1048}
            shadow-mapSize-height={1048}
            shadow-bias={-0.00005}
          >
            <OrthographicCamera
              left={-45}
              right={60}
              top={100}
              bottom={0}
              ref={shadowCameraRef}
              attach={"shadow-camera"}
            />
          </directionalLight>
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
          <Environment preset="sunset" />
          <SkyAndClouds isRotating={isRotating} />
          <Physics debug={false} key={'cottageMap'}>
            <Cottage 
              stage = {stage}
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
      <div className={`absolute bottom-24 left-6 ${isPlaying && 'animate-bounce'}`}>
        <img
          src={!isPlaying ? soundoff : soundon}
          alt='jukebox'
          onClick={() => setIsPlaying(!isPlaying)}
          className='w-10 h-10 cursor-pointer object-contain'
        />
      </div>
    </section>
  )
}

export default Home