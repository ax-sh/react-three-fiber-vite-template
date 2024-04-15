import clsx from 'clsx'
import * as THREE from 'three'
import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { Html, OrbitControls } from '@react-three/drei'
import { Canvas, MeshProps, useFrame, useThree } from '@react-three/fiber'
import React, { useRef, useState } from 'react'

function Controls() {
	const controls = useRef<OrbitControlsImpl>(null!)
	const { camera, gl } = useThree()
	useFrame(() => controls.current.update())
	return (
		<OrbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
	)
}

const M = () => {
	return (
		<group>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				<Html
					prepend // Project content behind the canvas (default: false)
					center // Adds a -50%/-50% css transform (default: false) [ignored in transform mode]
					// fullscreen // Aligns to the upper-left corner, fills the screen (default:false) [ignored in transform mode]
					distanceFactor={10} // If set (default: undefined), children will be scaled by this factor, and also by distance to a PerspectiveCamera / zoom by a OrthographicCamera.
					zIndexRange={[100, 0]} // Z-order range (default=[16777271, 0])
					// portal={domnodeRef} // Reference to target container (default=undefined)
					// transform // If true, applies matrix3d transformations (default=false)
					sprite // Renders as sprite, but only in transform mode (default=false)
					// calculatePosition={(el, camera: Camera, size: { width: number; height: number }) => number[]} // Override default positioning function. May be removed in the future (default=undefined) [ignored in transform mode]
					// {...groupProps} // All THREE.Group props are valid
					// {...divProps} // All HTMLDivElement props are valid
				>
					<h1>hello</h1>
					<p>world</p>
				</Html>
			</mesh>
		</group>
	)
}

const ThirdDimention = () => {
	return (
		<>
			<Canvas gl={{ antialias: true }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<M />
				<Controls />
			</Canvas>
		</>
	)
}

export default function OverlapCubePage() {
	return (
		<main className={clsx('bg-black h-dvh')}>
			<ThirdDimention />
		</main>
	)
}
