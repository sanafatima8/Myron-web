// ProductGrid.jsx
import React from 'react';
import './Product.css';

function ProductGrid({ products, itemsPerPage, currentPage }) {
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  return (
    <div className="product-grid">
      {Array.isArray(currentProducts) && currentProducts.length > 0 ? (
        currentProducts.map((product) => (
          <div key={product.id} className="product-box">
            <img src={product.src} alt={product.name} className="product-image" />
            <div className="product-details">
              <p className="product-title">{product.name}</p>
              <p className="product-description">{product.description}</p>
            </div>
          </div>
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ProductGrid;
