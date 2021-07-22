import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import axios from 'axios'
import ProductItem from './ProductItem'
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await axios.get('https://fakestoreapi.com/products')
        .catch(err => {
          console.log('err');
        })

      dispatch(setProducts(response.data))
    }

    fetchProducts()
  }, [dispatch])

  return (
    <div className="container ">
      <div className="row">
        <ProductItem />
      </div>
    </div>
  )
}

export default ProductList
