import { useTexture } from '@react-three/drei'

export function useObjectTextures(textures: { color: string; normal: string; displacement: string }) {
	return useTexture(textures)
}
