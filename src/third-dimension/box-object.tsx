import * as THREE from 'three'

import { MeshProps, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

export function Box(props: MeshProps) {
	// This reference will give us direct access to the mesh
	const mesh = useRef<THREE.Mesh>(null!)
	// Set up state for the hovered and active state
	const [hovered, setHover] = useState(false)
	const [active, setActive] = useState(false)
	// Rotate mesh every frame, this is outside of React without overhead
	useFrame((state, delta) => (mesh.current.rotation.x += 0.01))
	// Return view, these are regular threejs elements expressed in JSX
	return (
		<mesh
			{...props}
			ref={mesh}
			scale={active ? 1.5 : 1}
			onClick={() => setActive(!active)}
			onPointerOver={() => setHover(true)}
			onPointerOut={() => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}
