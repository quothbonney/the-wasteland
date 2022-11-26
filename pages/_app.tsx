import '../styles/globals.css'
import  Navbar from '../comp/Navbar'
import InfoBar from '../comp/InfoBar'
import type { AppProps } from 'next/app'
import { useEffect, useState, createContext, useContext } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  const [info, setInfo] = useState<string>('63801e23d6c7104d0632729b');
  return (
    <>
    <Navbar />
    <div className="App">
      <div className="text">
        <Component stateChange={setInfo} {...pageProps}/>
      </div>
      <div className="info">
        <InfoBar infoID={info} />
      </div>
    </div>
    </>
  )
}
