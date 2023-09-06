import React from 'react'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
	title: 'X Clone',
	description: 'X Clone created by Jose Rojas'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang='en'>
			<body>{children}</body>
		</html>
	)
}
