import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    let ItemId = useParams();
    const items = [{ id: 1, name: 'Item 1', description: 'Description for Item 1' },
    { id: 2, name: 'Item 2', description: 'Description for Item 2' },
    { id: 3, name: 'Item 3', description: 'Description for Item 3' }]
    let item=items.find(e=>e.id=== Number(ItemId.itemId));
    
    
    
    return (
        <div>
            <h2>{item.name}</h2>
            <p>{item.description}</p>
        </div>
    )
}

export default ItemDetail