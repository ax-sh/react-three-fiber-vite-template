import clsx from 'clsx'

import { Canvas } from '@react-three/fiber'
import React from 'react'

import { Box } from '../third-dimension/box-object.tsx'

const ThirdDimention = () => {
	return (
		<Canvas gl={{ antialias: true }}>
			<ambientLight />
			<pointLight position={[10, 10, 10]} />
			<Box position={[-1.2, 0, 0]} />
			<Box position={[1.2, 0, 0]} />
		</Canvas>
	)
}
export default function IndexPage() {
	return (
		<main className={clsx('bg-black h-dvh')}>
			<ThirdDimention />
		</main>
	)
}
