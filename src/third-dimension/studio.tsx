import { Canvas } from '@react-three/fiber'
import React, { PropsWithChildren } from 'react'

export function Studio({ children, background }: PropsWithChildren<{ background?: string }>) {
	return (
		<Canvas className={'h-full w-full' + ''}>
			{background && <color attach='background' args={[background]} />}
			<React.Suspense fallback={null}>{children}</React.Suspense>
		</Canvas>
	)
}
