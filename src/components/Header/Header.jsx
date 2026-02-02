import React from 'react'
import { NavLink } from 'react-router-dom'
function Header() {
    return (
          <div className='Header'>
        <div className='text-4xl text-amber-900 text-center mt-2'>
            <h1>CoffeeHut</h1>
        </div>
        <div className='flex justify-evenly items-center mt-6 text-amber-900'>
          <NavLink to="/" className={({isActive})=>
         `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
          >Home</NavLink>
           <NavLink to="/menu" className={({isActive})=>
         `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
          >Menu</NavLink>
           <NavLink to="/about" className={({isActive})=>
         `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
          >About</NavLink>
           <NavLink to="/contact" className={({isActive})=>
         `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
          }
          >Contact</NavLink>
          </div>
        </div>
    )
}

export default Header
