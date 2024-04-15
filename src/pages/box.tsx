import clsx from 'clsx'
import * as THREE from 'three'

import { Canvas, MeshProps, useFrame } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

function Box(props: MeshProps) {
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

const ThirdDimention = () => {
	return (
		<>
			<Canvas gl={{ antialias: true }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<Box position={[-1.2, 0, 0]} />
				<Box position={[1.2, 0, 0]} />
			</Canvas>
		</>
	)
}
export default function IndexPage() {
	return (
		<main className={clsx('bg-black h-dvh')}>
			<ThirdDimention />
		</main>
	)
}
