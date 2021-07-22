import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { selectedProduct, removeSelectedProduct } from '../redux/actions/productActions'

const ProductDetail = () => {
  const product = useSelector((state) => state.product)
  const { image, title, price, category, description } = product
  const dispatch = useDispatch()
  const { productId } = useParams()

  const fetchProductDetail = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch(err => {
        console.log('Error')
      })

    dispatch(selectedProduct(response.data))
  }

  useEffect(() => {
    if (productId && productId !== '') fetchProductDetail()

    return () => {
      dispatch(removeSelectedProduct())
    }
  }, [productId])

  return (
    <div className=" container">
      <div className="row">
        <div class="col s12">
          {
            Object.keys(product).length === 0 ? (
              <div>Loading...</div>
            ) : (
              <div >
                <img className="center" src={image} alt="product" />
                <h1>
                  {title}
                </h1>
                <a href="#">
                  {price}
                </a>
                <h3>
                  {category}
                </h3>
                <p>
                  {description}
                </p>
                <button>
                  Add to cart
                </button>
              </div>


            )
          }
        </div>
      </div>
    </div>
  )
}

export default ProductDetail
