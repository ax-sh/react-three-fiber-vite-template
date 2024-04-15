import { Vector3 } from 'three'

import { Html } from '@react-three/drei'
import { Canvas, extend, useFrame, useThree } from '@react-three/fiber'
import React, { ComponentProps, useRef, useState } from 'react'

import { Controls } from '../third-dimension/controls.tsx'

const M = () => {
	return (
		<group>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
				{/* <Html
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
          position={[0.5, 0.5, 0.5]}
          style={{ color: "#f00" }}
        >
          <h1>hello</h1>
          <p>world</p>
        </Html> */}
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
					position={[0.5, 0.5, 0.5]}
					style={{ color: '#f00', background: 'blue', padding: '7px' }}
				></Html>
			</mesh>
			<mesh>
				{' '}
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
					position={[-0.5, -0.5, -0.5]}
					style={{ color: '#f00', background: 'blue', padding: '7px' }}
				></Html>
			</mesh>
		</group>
	)
}

const Hotspot = ({ children }: ComponentProps<'div'>) => {
	return <div className={'rounded-full p-3 bg-red-500'}>{children}</div>
}

const CubeWithHotSpot = () => {
	const arr: Vector3[] = [
		[0.5, 0.5, 0.5],
		[-0.5, -0.5, -0.5],
		[-0.5, 0.5, 0.5],
		[0.5, 0.5, -0.5],
		[0.5, -0.5, 0.5],
		[-0.5, 0.5, -0.5],
		[0.5, -0.5, -0.5],
		[-0.5, -0.5, 0.5]
	].map(([x, y, z]) => new Vector3(x, y, z))
	return (
		<group>
			<mesh>
				<boxGeometry args={[1, 1, 1]} />
			</mesh>
			<mesh>
				{arr.map((i, n) => (
					<Html
						center // Adds a -50%/-50% css transform
						position={i}
					>
						<Hotspot />
					</Html>
				))}
			</mesh>
		</group>
	)
}

export default function IndexPage() {
	return (
		<main className={'bg-black h-dvh'}>
			<Canvas gl={{ antialias: true }}>
				<ambientLight />
				<pointLight position={[10, 10, 10]} />
				<M />
				<CubeWithHotSpot />
				<Controls />
			</Canvas>
		</main>
	)
}
