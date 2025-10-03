import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './styles.css'
import {
  Billboard,
  Environment,
  Float,
  Lightformer,
  Text,
  useGLTF
} from '@react-three/drei'
import Particles from './Particles'
import {
  Bloom,
  DepthOfField,
  EffectComposer,
  HueSaturation,
  SMAA,
  Vignette
} from '@react-three/postprocessing'
import CameraRig from './CameraRig'
import CameraAnimation from './CameraAnimation'

function LogoModel(props) {
  const { scene } = useGLTF('/logo4.glb') // 👈 keep logo.glb inside /public
  return <primitive object={scene} {...props} />
}

function Scene() {
  return (
    <Canvas camera={{ position: [0, 1, 4] }} gl={{ antialias: false, alpha: false }} dpr={1}>
      <color args={['#cee7ff']} attach="background" />
      <Suspense fallback={null}>
        <CameraRig>
          {/* ✅ Only Logo floating */}
          <Float
            rotation={[-0.8, 0, -Math.PI / 2.5]}
            floatIntensity={4}
            rotationIntensity={4}
          >
            <LogoModel scale={1.2} position={[0, -1, 0]} />
          </Float>

          <Environment preset="city" environmentIntensity={3}>
            <Lightformer form="rect" intensity={1} position={[2, 3, 3]} scale={5} />
            <Lightformer form="rect" intensity={2} position={[-2, 2, -4]} scale={5} />
          </Environment>

          <Particles particlesCount={100} />

          <Billboard>
            <Text
              font="BigShouldersDisplay-Light.ttf"
              rotation={[0, 0, 0]}
              position={[0, -1, -2]}
              fontSize={10}
              color="#c387b7"
              fillOpacity={0.1}
              letterSpacing={-0.05}
            >
              DEOS
            </Text>
          </Billboard>
        </CameraRig>

        <EffectComposer multisampling={0}>
          <SMAA />
          <Bloom
            mipmapBlur
            intensity={0.8}
            levels={9}
            opacity={0.4}
            luminanceSmoothing={0.1}
            luminanceThreshold={0.7}
          />
          <DepthOfField focusDistance={0.0005} focalLength={0.15} bokehScale={16} />
          <HueSaturation saturation={0.3} hue={0.15} />
          <Vignette offset={0.65} opacity={0.7} />
        </EffectComposer>

        <CameraAnimation />
      </Suspense>
    </Canvas>
  )
}

export default Scene
