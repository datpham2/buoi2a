import React, { useState } from 'react'
import Product from './Product';
import { Row } from 'reactstrap';

export default function Products() {
    const [list, setList] = useState([
        {id: 1, name: "Laptop Asus", price: 30_000},
        {id: 2, name: "Laptop HP", price: 30_000},
        {id: 3, name: "Laptop Dell", price: 50_000},
        {id: 4, name: "Laptop Acer", price: 20_000}
    ]);
    
  return (
    <div>
        
        <Row>
            {list.map((product, index) => (
                <Product key={index} product={product} />
            ))}
        </Row>
    </div>
  )
}
