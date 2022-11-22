import DoubleHR from './DoubleHR.js'
import Link from 'next/link'
import {useContext, useState} from 'react'
import { PageContext } from '../lib/context.js';

export default function Navbar({ }) {
  const [page, setPage] = useState(0);

  return (
    <main>
      <Link href="/" prefetch>
      <h1 className="title">The Wasteland</h1>
      </Link>
      <h2 className='author'>T.S. Eliot</h2>
      <DoubleHR />
      <div className='section-row'>
        <Link href="/burialofthedead" prefetch>
          <div className='section-block'>
              The Burial of the Dead
          </div>
        </Link>

        <Link href="/agameofchess" prefetch>
        <div className='section-block'>
              A Game of Chess
          </div>
        </Link>

        <Link href="/thefiresermon" prefetch>
          <div className='section-block'>
              The Fire Sermon
          </div>
        </Link>

        <Link href="/deathbywater" prefetch>
        <div className='section-block'>
              Death By Water
          </div>
        </Link>

        <Link href="/whatthethundersaid" prefetch>
          <div className='section-block'>
              The Burial of the Dead
          </div>
        </Link>
      </div>

      <div className='rectangle-slider'></div>
    </main>
  )
}