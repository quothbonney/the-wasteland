import DoubleHR from './DoubleHR.js'
import Link from 'next/link'

export default function Navbar({ }) {
  return (
    <main>
      <h1 className="title">The Wasteland</h1>
      <h2 className='author'>T.S. Eliot</h2>
      <DoubleHR />
      <div className='section-row'>
        <Link href="/burialofthedead">
          <div className='section-block'>The Burial of the Dead</div>
        </Link>

        <div className='section-block'>A Game of Chess</div>
        <div className='section-block'>The Fire Sermon</div>
        <div className='section-block'>Death by Water</div>
        <div className='section-block'>What the Thunder Said</div>
      </div>
    </main>
  )
}