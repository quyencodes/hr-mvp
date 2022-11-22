import React, { useState, useEffect } from 'react'
// https://docs.pmnd.rs/react-three-fiber/api/canvas
// https://www.marxentlabs.com/glb-files/
import { Canvas } from '@react-three/fiber'
import { useGLTF, Stage, PresentationControls } from '@react-three/drei'
import './styles/main.css'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

function Model(props) {
  const { scene } = useGLTF('/coffee.glb')
  return <primitive object={scene} {...props} />
}

export default function Restaurant() {
  return (
    <main className="container">
      <section className="sub-header">
        <Navbar />
        <div className="text-box2">
          <h1>Layout</h1>
          <p>Come study, hang out with friends, and enjoy some great company</p>
        </div>
      </section>
      <section className="contact-us">
        <Canvas
          dpr={[1, 2]} // pixel ratio
          shadows
          camera={{ fov: 15 }}
          style={{
            display: 'block',
            'margin-left': 'auto',
            'margin-right': 'auto',
            position: 'relative',
            width: '95%',
            height: '800px',
          }}
        >
          <color attach="background" args={['#101010']} />
          <PresentationControls speed={1.5} global zoom={0.5} polar={[-0.1, Math.PI / 4]}>
            <Stage environment={'sunset'}>
              <Model scale={0.01} />
            </Stage>
          </PresentationControls>
        </Canvas>
      </section>
      <Footer />
    </main>
  )
}
