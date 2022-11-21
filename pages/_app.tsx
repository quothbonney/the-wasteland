import '../styles/globals.css'
import  Navbar from '../comp/Navbar'
import type { AppProps } from 'next/app'
import { PageContext } from '../lib/context'
import { useEffect, useState } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PageContext.Provider value={0}>
    <Navbar />
    <Component {...pageProps} />
    </PageContext.Provider>
  )
}
