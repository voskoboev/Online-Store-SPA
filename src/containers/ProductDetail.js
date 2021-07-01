import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { selectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
  const product = useSelector(state => state.product)
  const dispatch = useDispatch()
  const { productId } = useParams()
  console.log(productId)


  const fetchProductDetail = async () => {
    const response = await axios.get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log('err');
      })

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail()
  }, [productId])

  return (
    <div className="ui grid container">
      <div className="ui placeholder segment">
        
      </div>
    </div>
  )
}

export default ProductDetail