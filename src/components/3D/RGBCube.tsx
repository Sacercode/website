'use client'

import { useRef, useMemo } from 'react'
import { useFrame } from '@react-three/fiber'
import { Vector3, Color, Group, InstancedMesh, Matrix4 } from 'three'
import { Instance, Instances } from '@react-three/drei'

// Nombre de subdivisions par axe (trop de cubes ralentirait l'application)
// 255x255x255 serait trop lourd, on utilise une valeur plus raisonnable
const CUBE_RESOLUTION = 8 // Une grille de 8x8x8 = 512 cubes est déjà conséquente

// Taille des petits cubes
const CUBE_SIZE = 0.1

// Distance d'écartement au survol
const HOVER_EXPANSION = 3

// Petit cube individuel
function SmallCube({ position, color }: { position: [number, number, number], color: string }) {
  return (
    <Instance
      position={position}
      scale={[0.9, 0.9, 0.9]} // Légèrement plus petit pour voir les séparations
      color={color}
    />
  )
}

export function RGBCube(
    { hovered = false }
    : { hovered?: boolean }
) { 
    const groupRef = useRef<Group>(null)

    // Calculer les positions et couleurs des cubes une seule fois (optimisation)
    const cubesData = useMemo(() => {
        const data: { position: [number, number, number]; color: string; originalPosition: [number, number, number] }[] = []
        
        // Calculer l'offset pour centrer le cube
        const offset = (CUBE_RESOLUTION * CUBE_SIZE) / 1.5

        for (let r = 0; r < CUBE_RESOLUTION; r++) {
        for (let g = 0; g < CUBE_RESOLUTION; g++) {
            for (let b = 0; b < CUBE_RESOLUTION; b++) {
            // Calculer la position du sous-cube
            const x = r * CUBE_SIZE - offset + CUBE_SIZE / 2
            const y = g * CUBE_SIZE - offset + CUBE_SIZE / 2
            const z = b * CUBE_SIZE - offset + CUBE_SIZE / 2

            // Normaliser les valeurs RGB entre 0 et 1
            const normalizedR = r / (CUBE_RESOLUTION - 1)
            const normalizedG = g / (CUBE_RESOLUTION - 1)
            const normalizedB = b / (CUBE_RESOLUTION - 1)

            // Convertir RGB en couleur hex
            const color = new Color(normalizedR, normalizedG, normalizedB).getHexString()

            data.push({
                position: [x, y, z],
                originalPosition: [x, y, z],
                color: `#${color}`
            })
            }
        }
        }
        
        return data
    }, [])

    // Animation et effet d'écartement
    useFrame(
        (state, delta) => {
            if (groupRef.current) {
                // Rotation continue
                groupRef.current.rotation.x += delta * 0.1
                groupRef.current.rotation.y += delta * 0.15

                // Appliquer les positions actualisées aux instances
                if (groupRef.current.children[0]) {
                    const instancedMesh = groupRef.current.children[0] as InstancedMesh
                    
                    cubesData.forEach((cube, i) => {
                        const tempVector = new Vector3().fromArray(cube.originalPosition)
                        
                        // Si survolé, écarter les cubes
                        if (hovered) {
                            tempVector.multiplyScalar(HOVER_EXPANSION)
                        }
                        
                        // Mettre à jour la matrice de l'instance
                        const matrix = new Matrix4()
                        matrix.setPosition(tempVector.x, tempVector.y, tempVector.z)
                        matrix.scale(new Vector3(0.9, 0.9, 0.9))
                        instancedMesh.setMatrixAt(i, matrix)
                    })
                    
                    instancedMesh.instanceMatrix.needsUpdate = true
                }
            }
        }
    )

    return (
        <group
            ref={groupRef}
        >
            <Instances limit={cubesData.length}>
                <boxGeometry args={[CUBE_SIZE, CUBE_SIZE, CUBE_SIZE]} />
                <meshStandardMaterial />
                
                {cubesData.map((cube, i) => (
                    <SmallCube
                        key={i}
                        position={cube.position}
                        color={cube.color}
                    />
                ))}
            </Instances>
        </group>
    )
}
