import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import ProductItem from './ProductItem'
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {
  const products = useSelector(state => state)
  const dispatch = useDispatch()

  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(err => {
        console.log('err');
      })

    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className="container ">
      <div className="row">
        <ProductItem />
      </div>
    </div>
  )
}

export default ProductList
