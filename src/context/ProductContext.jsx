import React, { createContext, useContext, useState, useEffect } from 'react';
import { fetchMenProducts } from '../productAPIs/menProductsAPI';
import { fetchWomenProducts } from '../productAPIs/womenProductsAPI';
import { fetchKidsProducts } from '../productAPIs/kidsProductsAPI';

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [menProducts, setMenProducts] = useState([]);
  const [womenProducts, setWomenProducts] = useState([]);
  const [kidsProducts, setKidsProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const loadProducts = async () => {
      const men = await fetchMenProducts();
      const women = await fetchWomenProducts();
      const kids = await fetchKidsProducts();
      setMenProducts(men);
      setWomenProducts(women);
      setKidsProducts(kids);
    };
    loadProducts();
  }, []);

  return (
    <ProductContext.Provider
      value={{
        menProducts,
        womenProducts,
        kidsProducts,
        selectedProduct,
        setSelectedProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

// Custom hook for easier context consumption
export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};

