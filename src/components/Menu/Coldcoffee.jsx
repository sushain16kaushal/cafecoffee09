import React from 'react'
import menuData from '../../data/menuData.json'
import Card from './Card'
 function Coldcoffee() {
        const colditems= menuData.filter(
            (item)=>item.category === 'coldcoffee'
        )
    return (
        <>
        <h2 className='text-3xl text-center mt-4 text-red-400'>ColdCoffees</h2>
        <Card items={colditems} />
        </>
    )
}
export default Coldcoffee