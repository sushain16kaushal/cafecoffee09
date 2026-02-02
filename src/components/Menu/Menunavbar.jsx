import React from 'react'
import { NavLink } from 'react-router-dom'

function Menunavbar() {
    return (
         <div className='navbar flex justify-evenly mt-12'>
                 <NavLink to="hotcoffee" className={({isActive})=>
                 `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  >Hot Coffee</NavLink>
                <NavLink to="coldcoffee" className={({isActive})=>
                 `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  >Cold Coffee</NavLink>
                  <NavLink to="others" className={({isActive})=>
                 `duration-200 ${isActive ? "text-orange-500 " : "text-gray-500"} lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                  > Snacks</NavLink>
               
               </div>
    )
}

export default Menunavbar
