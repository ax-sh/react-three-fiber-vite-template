import clsx from 'clsx'

import { Viewer } from './viewer.tsx'

export default function IndexPage() {
	// console.log(import.meta, 2222)
	return (
		<main className={clsx('bg-black h-dvh')}>
			<Viewer />
		</main>
	)
}
