import React from 'react';
import { Product } from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';

function App() {
  const { loading, error, products } = useProducts();
  return (
    <div className="container">
      {loading && <p className="loading">Loading...</p>}
      {error && <p className="error">{error}</p>}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
