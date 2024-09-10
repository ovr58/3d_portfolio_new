import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { SuspenseVisual } from "../components"

function Home() {
  return (
    <section className='w-full h-screen realtive'>
      <Canvas
        frameloop="demand"
        shadows
        camera={{ near: 0.1, far: 1000 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <Suspense fallback={<SuspenseVisual />}>
          <directionalLight />
          <ambientLight />
          <pointLight />
          <spotLight />
          <hemisphereLight />
        </Suspense>
        
      </Canvas>
    </section>
  )
}

export default Home