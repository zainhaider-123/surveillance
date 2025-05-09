import React from 'react'
import { Link } from 'react-router'

const Footer = () => {
  return (
    <div className=' bg-zinc-900 text-zinc-100'>

    <div className='container mx-auto flex justify-between py-5'>

      <div>
        <Link to="/" className='text-xl font-bold font-display uppercase'>
          surveillance <br /> <span className='font-extralight 70'>system</span>
        </Link>
      </div>

    </div>
    </div>
  )
}

export default Footer