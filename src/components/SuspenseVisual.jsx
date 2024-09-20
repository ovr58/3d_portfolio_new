import { Html, useProgress } from '@react-three/drei';

const SuspenseVisual = () => {
  const { progress } = useProgress();
  return (
    <Html>
      <div className='flex flex-col justify-center place-content-center'>
        <div className="canvas-loader">
        </div>
        <div className='flex z-10 mt-12 text-2xl text-black font-extrabold '>
          {progress.toFixed(0)}%
        </div>
      </div>
    </Html>
  );
};

export default SuspenseVisual;
