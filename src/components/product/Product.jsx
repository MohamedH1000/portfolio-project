import React from 'react'
import './Product.css'
import all_products from '../assets/all_products'
import { useParams } from 'react-router-dom'
import BreadCrum from '../Breadcrum/breadcrum'
import ProductDisplay from '../productDisplay/ProductDisplay'

// the product main design in the specific page of the product
const Product = () => {
    const {productid} = useParams();
    const product = all_products.find((e)=> e.id === Number(productid))
  return (
    <div>
        <BreadCrum product={product}/>
        <ProductDisplay product={product}/>
    </div>
  )
}

export default Product