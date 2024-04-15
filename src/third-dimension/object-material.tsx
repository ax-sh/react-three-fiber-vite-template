import { useControls } from 'leva'

import { useObjectTextures } from './use-object-textures.ts'

export function ObjectMaterial() {
	const state = useControls({
		roughness: { value: 5, min: 0, max: 10, step: 0.1 },
		displacement: { value: 0, min: 0, max: 2, step: 0.1 }
	})
	// @see https://3dtextures.me/2022/09/15/wood-herringbone-tiles-004/
	const color = 'textures/wood/Substance_Graph_BaseColor.jpg'
	const normal = 'textures/wood/Substance_Graph_Normal.jpg'
	const roughness = 'textures/wood/Substance_Graph_Roughness.jpg'
	const displacement = 'textures/wood/Substance_Graph_Height.jpg'
	const ambientOcclusion = 'textures/wood/Substance_Graph_AmbientOcclusion.jpg'
	// const displacement = 'textures/wood/Substance_Graph_Displacement.jpg'
	// 'Material_2087.jpg',

	const texture = useObjectTextures({
		color,
		normal,
		displacement,
		roughness,
		ambientOcclusion
	})

	return (
		<meshPhysicalMaterial
			attach='material'
			map={texture.color}
			displacementMap={texture.displacement}
			roughnessMap={texture.roughness}
			aoMap={texture.ambientOcclusion}
			// intensity
			roughness={state.roughness}
			displacementScale={state.displacement}
		/>
	)
}
