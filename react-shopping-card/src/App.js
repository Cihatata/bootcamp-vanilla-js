import React, { useState, useEffect } from 'react';

import Header from './components/Header';
import MainLayout from './components/MainLayout';
import ProductCardWrapper from './components/ProductCardWrapper';
import ProductCard from './components/ProductCard';

import fetchApi from './utils/request';

import './App.css';

function App() {
  const [searchValue, setSearchvalue] = useState('');
  const [products, setProducts] = useState([]);

  const getProducts = async () => {
    const products = await fetchApi('/products');
    setProducts(products);
  }
  useEffect(() => {
    getProducts();
  }, [])

  return (
    <>
      <Header search={searchValue} />
      <MainLayout>
        <ProductCardWrapper>
          {products.map((product) => <ProductCard product={product} />)}
        </ProductCardWrapper>
      </MainLayout>
    </>
  );
}

export default App;
