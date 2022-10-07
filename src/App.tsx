import React, { useContext } from 'react';
import { Product } from './components/Product';
import './App.css';
import { useProducts } from './hooks/products';
import Loader from './components/Loader';
import Error from './components/Error';
import Modal from './components/Modal';
import CreateProduct from './components/CreateProduct';
import { IProduct } from './models';
import { ModalContex } from './contex/ModalContex';

function App() {
  const { loading, error, products, addProduct } = useProducts();
  const { modal, open, close } = useContext(ModalContex);

  const createHadler = (products: IProduct) => {
    close();
    addProduct(products);
  };

  return (
    <div className="container">
      {loading && <Loader />}
      {error && <Error error={error} />}
      {products.map(product => <Product product={product} key={product.id} />)}

      {modal && (
        <Modal
          title="Create new product"
          onClose={() => close()}
        >
          <CreateProduct onCreate={createHadler} />
        </Modal>
      )}
      <button
        className="bthModal"
        onClick={() => open()}
      > + NEW PRODUCT
      </button>
    </div>
  );
}

export default App;
