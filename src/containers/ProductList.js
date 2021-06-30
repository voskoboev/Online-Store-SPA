import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import ProductItem from './ProductItem'

const ProductList = () => {

  const products = useSelector(state => state)
  console.log(products);

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(err => { throw new Error('Getting response error!') })

    console.log(response.data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="ui grid container">
      <ProductItem />
    </div>
  )
}

export default ProductList
