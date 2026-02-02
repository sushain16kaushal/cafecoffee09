import React, { useState } from 'react'
import useActiveCard from '../../hooks/useActivecard'
function Card({items}) {
    const{activeId, toggleCard} =useActiveCard();
    return (
        <div className='menu-grid overflow-x-auto flex gap-7 p-4 ml-11 '>
            {items.map((item)=>{
                return(
                <div key={item.id} onClick={()=>toggleCard(item.id)} className='relative menu-card shrink-0 p-2 w-82 h-112 border-2 border-amber-500 hover:cursor-pointer hover:border-red-400 hover:translate-y-3'>
                    <img src={item.image} alt={item.name} className='min-w-full h-full flex shrink-0 object-fill '/>
                  {activeId ===item.id &&( <div className='absolute inset-0 bg-black/70 text-white flex flex-col justify-center items-center px-4'> 
                    <h3 className='text-center'>{item.name}</h3>
                    <p className='text-center'>${item.price}</p>
                    <p className='text-center'>{item.description}</p>
                    </div> )}
                     </div>
                )
            }
        )}
        </div>
    )
}

export default Card
