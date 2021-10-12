import React from 'react'

const ProductCard = ({ product }) => {

  return (
    <div class="product-card">
      <img src={product?.imageUrl} alt="product-item" />
      <div class="product-card-alt">
        <div class="product-card-name">
          {product?.name}
        </div>
        <div class="product-card-price">
          {product?.price} $
        </div>
        <button>Sepete Ekle</button>

      </div>
    </div>
  )
}

export default ProductCard
