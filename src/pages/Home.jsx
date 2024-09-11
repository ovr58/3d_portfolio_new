import { Canvas } from "@react-three/fiber"
import { Suspense, useEffect, useState } from "react"
import { SuspenseVisual } from "../components"
import Cottage from "../models/Cottage"
import { Environment } from "@react-three/drei"
import SkyAndClouds from "../models/SkyAndClouds"
import NataliAvatar from "../models/AvatarNatali"

function Home() {

  const adjustToScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.3, 1.3, 1.3];
      screenPosition = [0, -6.5, -43.4];
    } else {
      screenScale = [1.8, 1.8, 1.8];
      screenPosition = [0, -6.5, -43.4];
    }

    return {screenScale, screenPosition};
  }

  const [scaleAndPosition, setScaleAndPosition] = useState(adjustToScreenSize())

  useEffect(() => {
    const handleResize = () => {
      setScaleAndPosition(adjustToScreenSize());
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <section className='w-full h-screen realtive'>
      <Canvas
        shadows
        camera={{ near: 0.1, far: 1000 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<SuspenseVisual />}>
          <directionalLight 
            position={[1,1,1]}
            intensity={2}
          />
          <ambientLight intensity={0.5} />
          <hemisphereLight skyColor='#b1e1ff' groundColor='#000000' intensity={1}/>
          <Environment preset="park" />
          <SkyAndClouds />
          <Cottage 
            scale = {scaleAndPosition.screenScale}
            position = {scaleAndPosition.screenPosition}
          />
          <NataliAvatar
            scale = {scaleAndPosition.screenScale}
            position = {[0, -6.5,-12]}
          />
        </Suspense>
        
      </Canvas>
    </section>
  )
}

export default Home