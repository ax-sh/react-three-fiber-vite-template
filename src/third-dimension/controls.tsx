import { OrbitControls as OrbitControlsImpl } from 'three-stdlib'

import { OrbitControls } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import React, { useRef } from 'react'

export function Controls() {
	const controls = useRef<OrbitControlsImpl>(null!)
	const { camera, gl } = useThree()
	useFrame(() => controls.current.update())
	return (
		<OrbitControls ref={controls} args={[camera, gl.domElement]} enableDamping dampingFactor={0.1} rotateSpeed={0.5} />
	)
}
