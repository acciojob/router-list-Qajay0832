import React from 'react'
import { Link } from 'react-router-dom'

const ItemList = () => {
    return (
        <div>
            <h1>Item List</h1>
            <nav>
                <ul>
                    <li><Link to='/item/1'>Item1</Link></li>
                    <li><Link to='/item/2'>Item2</Link></li>
                    <li><Link to='/item/2'>Item3</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ItemList