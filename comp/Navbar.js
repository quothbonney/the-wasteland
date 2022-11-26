import DoubleHR from './DoubleHR.js'
import Link from 'next/link'
import {useContext, useState} from 'react'

export default function Navbar({ }) {
  const [page, setPage] = useState(0);

  return (
    <main>
      <Link href="/">
      <h1 className="title">The Wasteland</h1>
      </Link>
      <h2 className='author'>T.S. Eliot</h2>
      <DoubleHR />
      <div className='section-row'>
        <Link href="/burialofthedead" >
          <div className='section-block'>
              The Burial of the Dead
          </div>
        </Link>

        <Link href="/agameofchess" >
        <div className='section-block'>
              A Game of Chess
          </div>
        </Link>

        <Link href="/thefiresermon" >
          <div className='section-block'>
              The Fire Sermon
          </div>
        </Link>

        <Link href="/deathbywater" >
        <div className='section-block'>
              Death By Water
          </div>
        </Link>

        <Link href="/whatthethundersaid" >
          <div className='section-block'>
              What the Thunder Said
          </div>
        </Link>
      </div>

      <div className='rectangle-slider'></div>
    </main>
  )
}