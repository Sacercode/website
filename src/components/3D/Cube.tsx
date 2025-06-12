"use client";
import { Canvas } from "@react-three/fiber";

import { RGBCube } from "./RGBCube";
import { Lights } from "./Lights";
import { useState } from "react";

export default function Cube() {
    const [hovered, setHovered] = useState<boolean>(false);

    return (        
        <Canvas
            shadows
            camera={{ position: [0, 0, 3], fov: 20 }}
            gl={{ antialias: true, alpha: true }}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            <Lights />
            <RGBCube hovered={hovered}/>
        </Canvas>
    )
}