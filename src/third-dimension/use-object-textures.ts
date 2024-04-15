import { useTexture } from '@react-three/drei'

export type ObjectTextures = {
	color: string
	normal: string
	roughness: string
	displacement: string
	ambientOcclusion: string
}
export function useObjectTextures(textures: ObjectTextures) {
	return useTexture(textures)
}
