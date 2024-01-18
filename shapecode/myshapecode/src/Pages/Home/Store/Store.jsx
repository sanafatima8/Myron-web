import React, { useState } from 'react';
import './Store.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import ProductGrid from './ProductGrid';
import Product from "../../../data/Product.json";


function Store() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; // Number of items to display per page


  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); 

       // Filter products based on the selected category
       const newFilteredProducts =
       category === 'All' ? Product.Product : Product.Product.filter((product) => product.category === category);
 
     setFilteredProducts(newFilteredProducts);
   };
 
   const totalPageCount = Math.ceil(filteredProducts.length / itemsPerPage);
 

  // const allProducts = [
  //   { id: 1, name: 'Product 1', category: 'All', image: 'product1.jpg', price: 20.99 },
  //   { id: 2, name: 'Product 2', category: 'T-Shirts', image: 'product2.jpg', price: 25.99 },
  //   { id: 3, name: 'Product 3', category: 'T-Shirts', image: 'product3.jpg', price: 25.99 },
  //   { id: 4, name: 'Product 4', category: 'T-Shirts', image: 'product4.jpg', price: 25.99 },
  //   { id: 5, name: 'Product 5', category: 'SweatsPants', image: 'product5.jpg', price: 25.99 },
  //   { id: 6, name: 'Product 6', category: 'Sweaters', image: 'product6.jpg', price: 25.99 },
  //   { id: 7, name: 'Product 7', category: 'SweatsPants', image: 'product7.jpg', price: 25.99 },
  //   { id: 8, name: 'Product 8', category: 'SweatsPants', image: 'product8.jpg', price: 25.99 },
  //   { id: 9, name: 'Product 9', category: 'SweatsPants', image: 'product9.jpg', price: 25.99 },
  //   { id: 10, name: 'Product 1', category: 'All', image: 'product1.jpg', price: 20.99 },
  //   { id: 11, name: 'Product 2', category: 'T-Shirts', image: 'product2.jpg', price: 25.99 },
  //   { id: 12, name: 'Product 3', category: 'T-Shirts', image: 'product3.jpg', price: 25.99 },
  //   { id: 13, name: 'Product 4', category: 'T-Shirts', image: 'product4.jpg', price: 25.99 },
  //   { id: 14, name: 'Product 5', category: 'SweatsPants', image: 'product5.jpg', price: 25.99 },
  //   { id: 15, name: 'Product 6', category: 'Sweaters', image: 'product6.jpg', price: 25.99 },
  //   { id: 16, name: 'Product 7', category: 'SweatsPants', image: 'product7.jpg', price: 25.99 },
  //   { id: 17, name: 'Product 8', category: 'SweatsPants', image: 'product8.jpg', price: 25.99 },
  //   { id: 18, name: 'Product 9', category: 'SweatsPants', image: 'product9.jpg', price: 25.99 },

  // ];

  // const totalPageCount = Math.ceil(allProducts.length / itemsPerPage);


  return (
 <section className="store--section" id="Store">
      <div className="portfolio-container">
     
     <h2 className="store-title">My&nbsp;<span className='store-text'>Store</span></h2>
     <p className="store--section--para">Welcome to my store and thank you for checking this page out. Feel free to browse and 
     find something you like, some of the proceeds will go towards helping my freelance career 
     grow and the rest will go to Bridging Tech and Tech Kids Unlimited.
     </p>
   </div>



   
      {/* Add the navigation bar here */}
      <nav className="store-nav">
        <ul className='store-items'>
          <li>
            <a href="#All" className={`nav-content ${selectedCategory === 'All' && 'active'}`} onClick={() => handleCategoryClick('All')}>
              All
            </a>
          </li>
          <li>
            <a href="#T-Shirts" className={`nav-content ${selectedCategory === 'T-Shirts' && 'active'}`} onClick={() => handleCategoryClick('T-Shirts')}>
              T-Shirts
            </a>
          </li>
          <li>
            <a href="#SweatsPants" className={`nav-content ${selectedCategory === 'SweatsPants' && 'active'}`} onClick={() => handleCategoryClick('SweatsPants')}>
              Sweats Pants
            </a>
          </li>
          <li>
            <a href="#Sweaters" className={`nav-content ${selectedCategory === 'Sweaters' && 'active'}`} onClick={() => handleCategoryClick('Sweaters')}>
              Sweaters
            </a>
          </li>
          <li>
            <a href="#Accessories" className={`nav-content ${selectedCategory === 'Accessories' && 'active'}`} onClick={() => handleCategoryClick('Accessories')}>
              Accessories
            </a>
          </li>
          <li>
          <button
              className={`nav-content filter-button ${selectedCategory !== 'All' && 'active'}`}
              onClick={() => handleCategoryClick('All')}
            >              Filter
              <FontAwesomeIcon
             icon={faFilter}
              className="fa-filter" />
            </button>
          </li>
        </ul>
      </nav>

      {/* <div className='products'>
        {filteredProducts.map((product) => (
          <div key={product.id}>
            <p>{product.name}</p>
          </div>
        ))}
      </div>  */}
   
   <ProductGrid products={filteredProducts} itemsPerPage={itemsPerPage} currentPage={currentPage} />


<div className="pagination">
  {[...Array(totalPageCount)].map((_, index) => (
    <button
      key={index + 1}
      onClick={() => setCurrentPage(index + 1)}
      className={currentPage === index + 1 ? 'active' : ''}
    >
      {index + 1}
    </button>
  ))}
  <button onClick={() => setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPageCount))}>Next</button>
</div>
 </section>
  )
}

export default Store
