import React, { useState } from 'react';
import axios from 'axios';
import './ProductCreate.css';

const ProductCreate = ({ setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    name: '',
    description: '',
    price: '',
    stock: '',
  });

  const [formError, setFormError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!newProduct.name || !newProduct.description || !newProduct.price || !newProduct.stock) {
      setFormError('Tüm alanları doldurduğunuzdan emin olun.');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/products/create/', newProduct);
      setProducts((prevProducts) => [...prevProducts, response.data]);
      setNewProduct({ name: '', description: '', price: '', stock: '' });
      setFormError('');
    } catch (error) {
      console.error('Ürün eklerken hata:', error);
      setFormError('Ürün eklenirken bir hata oluştu.');
    }
  };

  return (
    <div className="product-create-container">
      <h2>Yeni Ürün Ekle</h2>
      {formError && <p className="form-error">{formError}</p>}
      <form onSubmit={handleSubmit} className="product-create-form">
        <div className="form-group">
          <label>Ürün Adı</label>
          <input
            type="text"
            name="name"
            value={newProduct.name}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Açıklama</label>
          <input
            type="text"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Fiyat</label>
          <input
            type="number"
            name="price"
            value={newProduct.price}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <div className="form-group">
          <label>Stok</label>
          <input
            type="number"
            name="stock"
            value={newProduct.stock}
            onChange={handleChange}
            className="form-input"
          />
        </div>
        <button type="submit" className="submit-btn">Ürün Ekle</button>
      </form>
    </div>
  );
};

export default ProductCreate;

