import React, { useEffect } from 'react'
import ProductsItem from './ProductsItem';
import { useState } from 'react';

const ProductsList = () => {

    const [product, setProduct] = useState([]);

    useEffect(() => {
        const getProduct = () => {
            fetch("https://fakestoreapi.com/products").then(response1 => response1.json()).
                then(data => setProduct(data));
        }

        getProduct();
    }, [])
    return (
        <div>
            {
                product.map((productChild, id) => {
                    return <ProductsItem key={productChild.id} title={productChild.title} category={productChild.category} price={productChild.price} description={productChild.description} photoUrl={productChild.image} />
                })
            }

        </div>
    )
}

export default ProductsList;