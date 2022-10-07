import React from 'react';
import { Product } from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';

function App() {
  const { loading, error, products } = useProducts();
  return (
    <div className="container">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}
    </div>
  );
}

export default App;
