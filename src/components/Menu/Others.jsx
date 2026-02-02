import menuData from '../../data/menuData.json'
import Card from './Card'
 function Others() {
        const others= menuData.filter(
            (item)=>item.category === 'others'
        )
    return (
        <>
        <h2 className='text-3xl text-center mt-4 text-red-400'>Snacks</h2>
        <Card items={others} />
        </>
    )
}
export default Others