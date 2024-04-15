import { Html } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { PropsWithChildren } from 'react'

import Loader from '../ui/Loader.tsx'

export function Studio({ children, background }: PropsWithChildren<{ background?: string }>) {
	return (
		<Canvas gl={{ antialias: true }} className={'h-full w-full' + ''}>
			{background && <color attach='background' args={[background]} />}
			<React.Suspense
				fallback={
					<Html className={'text-white'}>
						<Loader />
					</Html>
				}
			>
				{children}
			</React.Suspense>
		</Canvas>
	)
}
