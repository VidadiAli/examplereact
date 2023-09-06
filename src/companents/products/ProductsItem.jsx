import React from 'react'

 const ProductsItem = ({title, category, price, description, photoUrl}) => {
  return (
    <div>
      <h2>Basliq: {title}</h2>
      <h3>Kategoriya: {category}</h3>
      <span>Qiymet: {price}</span>
      <p>Tesvir: {description}</p>
      <img src={photoUrl} alt={photoUrl} />
    </div>
  )
}

export default ProductsItem;