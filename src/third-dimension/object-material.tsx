import { useObjectTextures } from './use-object-textures.ts'

export function ObjectMaterial() {
	const color = 'textures/wood/Substance_Graph_BaseColor.jpg'
	const normal = 'textures/wood/Substance_Graph_Normal.jpg'
	const roughness = 'textures/wood/Substance_Graph_Roughness.jpg'
	const displacement = 'textures/wood/Substance_Graph_Height.jpg'
	// const displacement = 'textures/wood/Substance_Graph_Displacement.jpg'
	// 'Material_2087.jpg',
	//   'Substance_Graph_AmbientOcclusion.jpg',

	const texture = useObjectTextures({
		color,
		normal,
		displacement,
		roughness
	})

	return (
		<meshPhysicalMaterial
			attach='material'
			map={texture.color}
			displacementMap={texture.displacement}
			roughnessMap={texture.roughness}
		/>
	)
}
