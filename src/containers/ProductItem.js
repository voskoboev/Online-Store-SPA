import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const ProductItem = () => {
  const products = useSelector(state => state.allProducts.products)
  const renderList = products.map(product => {
    const { id, title, image, price, category } = product

    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`}>
          <div className="col s12 m4">
            <div
              className="card large"
              style={{
                height: '600px'
              }}
            >
              <div
                className="card-image"
                style={{
                  height: '60%',
                  display: 'flex',
                  alignItems: 'center'
                }}
              >
                <img
                  src={image}
                  alt={title}
                // style={{
                //   objectFit: 'contain'
                // }}
                />
              </div>
              <div class="card-content">
                <span
                  className="card-title black-text"
                  style={{
                    height: '100px',
                    overflow: 'hidden'
                  }}
                >
                  {title}
                </span>
                <div
                  className="price"
                  style={{
                    marginBottom: '15px'
                  }}
                >
                  $ {price}
                </div>
                <div className="category black-text">
                  {category}
                </div>
              </div>
            </div>
          </div>

        </Link>
      </div>
    )
  })

  return (
    <>
      {renderList}
    </>
  )
}

export default ProductItem
