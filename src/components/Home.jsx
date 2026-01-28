import React from 'react'
import { useRef } from 'react'
import useAutoscroll from '../hooks/useAutoScroll'

function Home() {
    const scrollRef=useRef(null);
    const {onMouseEnter,onMouseLeave}=useAutoscroll(scrollRef,3);
    return (
        <>
        <body className='bg-red-200'>
        <div className='Header'>
        <div className='text-4xl text-amber-900 text-center mt-2'>
            <h1>CoffeeHut</h1>
        </div>
        <div className='flex justify-evenly items-center mt-4 text-amber-900'>
          <h2>Home</h2>
          <h2>Menu</h2>
          <h2>About</h2>
          <h2>Contact</h2>
          </div>
        </div>
        <div className='outlet'>
            <div className='Picgallery ml-65 mt-8 w-3xl overflow-x-hidden'>
                 <h2 className='text-center text-2xl text-red-400'>Experience the pleasure of our place </h2>
                <div ref={scrollRef} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} className='flex overflow-x-scroll scroll-smooth mt-8'>
                <img src="https://images.pexels.com/photos/31657982/pexels-photo-31657982.jpeg" className='min-w-full h-fit  shrink-0 object-contain' />
                 <img src="https://images.pexels.com/photos/2159070/pexels-photo-2159070.jpeg" className='min-w-full h-fit shrink-0 object-contain' />
                 <img src="https://images.pexels.com/photos/5812847/pexels-photo-5812847.jpeg" className='min-w-full  h-fit shrink-0 object-contain' />
                 <img src="https://images.pexels.com/photos/35133035/pexels-photo-35133035.jpeg" className='min-w-full  h-fit shrink-0 object-contain' />
            </div>
            </div>
        </div>
        </body>
        </>
    )
}

export default Home
