import React from 'react'
import { Outlet } from 'react-router-dom'
import Menunavbar from './Menunavbar'
import Menu from './Menu'
function Menulayout() {
    return (
        <>
        <Menu />
        <Menunavbar />
        <Outlet />
        </>
    )
}

export default Menulayout
