import React, { useState, useEffect } from 'react';
import React from 'react';
import ProductList from './components/ProductList';
import ProductForm from './components/ProductForm';
import './App.css';
const App = () => {
  const [refreshKey, setRefreshKey] = useState(0);

  const handleProductAdded = () => {
    setRefreshKey(oldKey => oldKey + 1); // Listeyi yeniden yükle
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', color: '#fff' }}>E-Ticaret Ürün Paneli</h1>
      <ProductForm onProductAdded={handleProductAdded} />
      <ProductList key={refreshKey} />
    </div>
  );
};

export default App;
