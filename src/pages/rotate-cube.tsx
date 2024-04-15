import clsx from 'clsx'
import * as THREE from 'three'

import { Canvas, MeshProps, useFrame, useThree } from '@react-three/fiber'
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
			onClick={event => setActive(!active)}
			onPointerOver={event => setHover(true)}
			onPointerOut={event => setHover(false)}
		>
			<boxGeometry args={[1, 1, 1]} />
			<meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
		</mesh>
	)
}

const Cube = () => {
	const [vec] = useState(() => new THREE.Vector3(1, 1, 1))
	//   const [vec] = useState(() => new THREE.Vector3(250, 250, 250));
	const { camera, size } = useThree()
	const mesh = useRef<THREE.Mesh>(null!)
	useFrame(() => {
		vec.project(camera)
		vec.x = Math.round((0.5 + vec.x / 2) * (size.width / window.devicePixelRatio))
		vec.y = Math.round((0.5 - vec.y / 2) * (size.height / window.devicePixelRatio))
		mesh.current.rotation.y += 0.01

		console.log(vec.x, vec.y)
		// annotation.style.top = `${vec.y}px`;
		// annotation.style.left = `${vec.x}px`;
	})
	return (
		<mesh
			//   {...props}
			ref={mesh}
			//   scale={active ? 1.5 : 1}
			//   onClick={(event) => setActive(!active)}
			//   onPointerOver={(event) => setHover(true)}
			//   onPointerOut={(event) => setHover(false)}
		>
			<boxGeometry args={[2, 2, 2]} />
			<meshStandardMaterial color={'green'} />
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
				<Cube />
				<sprite>
					<spriteMaterial />
				</sprite>
			</Canvas>
		</>
	)
}
export default function RotateCubePage() {
	return (
		<main className={clsx('bg-black h-dvh')}>
			<ThirdDimention />
		</main>
	)
}
