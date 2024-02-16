import React from 'react'
import Sidebar from './Sidebar'
import Rightslot from './Rightslot'

const Home = () => {
  return (
    <div className='relative lg:grid lg:grid-cols-[320px_minmax(900px,1fr)] bg-mywhite font-switz'>
        <Sidebar/>
        <Rightslot/>
    </div>
  )
}

export default Home