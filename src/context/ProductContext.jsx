import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMenProducts } from '../productAPIs/menProductsAPI';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const fetched = await fetchMenProducts();
      setProducts(fetched);
    };
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products, setProducts, selectedProduct, setSelectedProduct }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};



