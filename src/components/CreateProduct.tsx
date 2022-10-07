import React, { ChangeEvent, FormEvent, useState } from 'react';
import axios from 'axios';
import { IProduct } from '../models';
import Error from './Error';
import './CreateProduct.css';

const productData: IProduct = {
  title: '',
  banknote: '$',
  price: 13.5,
  description: 'lorem ipsum set',
  image: 'https://i.pravatar.cc',
  category: 'electronic',
  rating: {
    rate: 4,
    count: 920
  }
};

interface CreateProductProps {
  onCreate: (product: IProduct) => void;
}

export const CreateProduct = ({ onCreate }: CreateProductProps) => {

  const [value, setValue] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const submitHandler = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setError(null);

    if (value.trim().length === 0) {
      setError('Please enter valid title.');
      return;
    }

    productData.title = value;
    const response = await axios.post<IProduct>('https://fakestoreapi.com/products', productData);
    onCreate(response.data);
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        value={value}
        className="createProduct"
        placeholder="Enter product title..."
        onChange={changeHandler}
      />

      <Error error={error} />
      <button
        type="submit"
        className="bthCreate"
      >
        Create
      </button>
    </form>
  );
};

export default CreateProduct;
