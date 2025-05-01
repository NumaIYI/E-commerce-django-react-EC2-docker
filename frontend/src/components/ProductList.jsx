import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductCreate from './ProductCreate';
import './ProductList.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/products/');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Ürünleri çekerken hata:', error);
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <ProductCreate setProducts={setProducts} />
      <h2>Ürünler</h2>
      {loading ? (
        <p>Ürünler yükleniyor...</p>
      ) : (
        <div className="product-list">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <h3 className="product-name">{product.name}</h3>
              <p  className="product-description">{product.description}</p>
              <p className="product-price">{product.price} TL</p>
              <p className="product-stock">Stok: {product.stock}</p>
              <button className="add-to-cart-btn">Sepete Ekle</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
