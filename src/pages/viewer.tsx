import { OrbitControls, Sphere } from '@react-three/drei'

import { ObjectMaterial } from '../third-dimension/object-material.tsx'
import { Studio } from '../third-dimension/studio.tsx'

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
				<ObjectMaterial />
			</Sphere>
		</group>
	)
}

export function Viewer() {
	// let brown, black
	// brown = 'brown'
	// black = 'black'
	// const { background, color, texture, polish } = useControls({
	// 	color: '#fff',
	// 	background: '#000',
	// 	texture: { options: { brown, black } },
	// 	polish: {
	// 		value: 5,
	// 		min: 0,
	// 		max: 10,
	// 		step: 1
	// 	}
	// })
	// console.log(color, texture, polish)
	return (
		<Studio>
			<Scene />
			<OrbitControls />
		</Studio>
	)
}
