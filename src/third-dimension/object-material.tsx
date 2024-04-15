import { useObjectTextures } from './use-object-textures.ts'

export function ObjectMaterial() {
	const url = 'textures/texture/color.jpg'
	const texture = useObjectTextures({ color: url, normal: url, displacement: url })
	return <meshPhysicalMaterial attach='material' map={texture.color} displacementMap={texture.displacement} />
}
