'use client'

export function Lights() {
  return (
    <>
      {/* Lumière ambiante douce */}
      <ambientLight intensity={0.3} />
      
      {/* Lumière directionnelle principale */}
      <directionalLight
        position={[10, 10, 5]}
        intensity={1}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      
      {/* Lumières colorées pour les réflexions */}
      <pointLight position={[-10, -10, -10]} color="#ff0040" intensity={0.5} />
      <pointLight position={[10, -10, 10]} color="#0040ff" intensity={0.5} />
      <pointLight position={[-10, 10, 10]} color="#40ff00" intensity={0.5} />
      
      {/* Spot light pour un effet dramatique */}
      <spotLight
        position={[0, 10, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.8}
        color="#ffffff"
        castShadow
      />
    </>
  )
}
