import React, { useEffect } from 'react'
import axios from 'axios'
import { useSelector, useDispatch } from 'react-redux'
import ProductItem from './ProductItem'
import { setProducts } from '../redux/actions/productActions'

const ProductList = () => {

  const products = useSelector(state => state)
  const dispatch = useDispatch()


  const fetchProducts = async () => {
    const response = await axios.get('https://fakestoreapi.com/products')
      .catch(err => {
        // throw new Error('Getting response error!')
        console.log('err');
      })

    dispatch(setProducts(response.data))
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  console.log(products);

  return (
    <div className="ui grid container ">

        <ProductItem />
    </div>
  )
}

export default ProductList
