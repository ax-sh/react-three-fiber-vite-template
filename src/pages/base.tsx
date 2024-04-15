import { useControls } from 'leva'

import { Bounds, OrbitControls, Sphere, useTexture } from '@react-three/drei'
import React from 'react'

import { Studio } from '../third-dimension/studio.tsx'

function Material() {
	const url = 'textures/texture/color.jpg'
	const texture = useTexture({ color: url, normal: url, displacement: url })
	return (
		<meshPhysicalMaterial
			attach='material'
			map={texture.color}
			normalMap={texture.normal}
			displacementMap={texture.displacement}
		/>
	)
}

function Lights() {
	return (
		<>
			<ambientLight intensity={5} />
		</>
	)
}

function Scene() {
	const segments = 600
	return (
		<group>
			<Lights />
			<Sphere args={[1, segments, segments]}>
				<Material />
			</Sphere>
		</group>
	)
}
const options = { brown: 'brown', black: 'black' }
function Viewer() {
	const { background, color, texture, polish } = useControls({
		color: '#fff',
		background: '#000',
		texture: { options },
		polish: {
			value: 5,
			min: 0,
			max: 10,
			step: 1
		}
	})
	console.log(color, texture, polish)
	return (
		<Studio background={background}>
			<Bounds fit>
				<Scene />
			</Bounds>
			<OrbitControls />
		</Studio>
	)
}

function Base() {
	return (
		<main className='h-dvh bg-black'>
			<Viewer />
		</main>
	)
}

export default Base
