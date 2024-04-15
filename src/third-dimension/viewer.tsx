import { Bounds, OrbitControls, Sphere, SpotLight, useDepthBuffer } from '@react-three/drei'

import { ObjectMaterial } from './object-material.tsx'
import { Studio } from './studio.tsx'

function Lights() {
	const depthBuffer = useDepthBuffer()
	return (
		<>
			{/*<ambientLight intensity={Math.PI / 2} />*/}
			<spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} decay={0} intensity={Math.PI} />
			<pointLight position={[-10, -10, -10]} decay={0} intensity={Math.PI} />
			<SpotLight position={[10, 10, 10]} depthBuffer={depthBuffer}>
				{/*<SpotLightShadow*/}
				{/*	distance={0.4} // Distance between the shadow caster and light*/}
				{/*	alphaTest={0.5} // Sets the alpha value to be used when running an alpha test. See Material.alphaTest*/}
				{/*	scale={1} //  Scale of the shadow caster plane*/}
				{/*	map={undefined} // Texture - Pattern of the shadow*/}
				{/*	shader={undefined} // Optional shader to run. Lets you add effects to the shadow map. See bellow*/}
				{/*	width={512} // Width of the shadow map. The higher the more expnsive*/}
				{/*	height={512} // Height of the shadow map. The higher the more expnsive*/}
				{/*/>*/}
			</SpotLight>
		</>
	)
}

function Scene() {
	const segments = 600
	return (
		<group>
			<Lights />
			<Bounds fit>
				<Sphere args={[1, segments, segments]}>
					<ObjectMaterial />
				</Sphere>
			</Bounds>
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
			<OrbitControls autoRotate={true} />
		</Studio>
	)
}
