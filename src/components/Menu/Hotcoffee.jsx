import React from 'react'
import menuData from '../../data/menuData.json'
import Card from './Card'
 function Hotcoffee(){
        const hotitems= menuData.filter(
            (item)=>item.category === 'hotcoffee'
        )
    return (
        <>
        <h2 className='text-3xl text-center mt-4 text-red-400'>HotCoffees</h2>
        <Card items={hotitems} />
        </>
    )
}
export default Hotcoffee


