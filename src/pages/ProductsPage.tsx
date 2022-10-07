import React, { useContext } from 'react';
import { useProducts } from '../hooks/products';
import { ModalContex } from '../contex/ModalContex';
import { IProduct } from '../models';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { Product } from '../components/Product';
import Modal from '../components/Modal';
import CreateProduct from '../components/CreateProduct';
import '../App.css'

const ProductPage  = () => {
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
};

export default ProductPage ;
