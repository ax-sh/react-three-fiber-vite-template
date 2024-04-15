import clsx from 'clsx'

import { Viewer } from '../third-dimension/viewer.tsx'

export default function IndexPage() {
	return (
		<main className={clsx('bg-black h-dvh')}>
			<Viewer />
		</main>
	)
}
