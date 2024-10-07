import React from 'react'
import { useParams } from 'react-router-dom'

const ItemDetail = () => {
    let ItemId = useParams();

    return (
        <div>
            <h2>Item {ItemId.itemId}</h2>
            <p>Description for Item {ItemId.itemId}</p>
        </div>
    )
}

export default ItemDetail