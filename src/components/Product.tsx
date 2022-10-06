import React, { useState } from 'react';
import { IProduct } from '../models';
import './Product.css';

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);
  const bthBGClassName = details ? 'bthBgActive' : 'bthBg';
  const buttonClasses = ['button', bthBGClassName];
  return (
    <div className="product">
      <img src={product.image} alt={product.title} className="image" />
      <p>{product.title}</p>
      <span>{product.price} $ {product.banknote}</span>
      <button
        className={buttonClasses.join(' ')}
        onClick={() => setDetails(prev => !prev)}
      > {details ? 'Hide details' : 'Show details'}
      </button>
      {details && <div>
        <p> {product.description}</p>
        <p>Rate: <span className="rate">{product.rating.rate}</span></p>
      </div>}
    </div>
  );
}
