import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
  Button,
  Stack
} from '@mui/material';
import { useState, useEffect } from 'react';
import { useProductContext } from '../context/ProductContext';
import Footer from './Footer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products } = useProductContext();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedSize, setSelectedSize] = useState(null);

  // Find the product by ID from the context
  useEffect(() => {
    if (products && id) {
      const product = products.find(
        (p) => p.title.replace(/\s+/g, '-').toLowerCase() === id
      );
      setSelectedProduct(product);
    }
  }, [products, id]);

  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) setSelectedSize(newSize);
  };

  if (!selectedProduct) {
    return (
      <Box sx={{ textAlign: 'center', mt: 10 }}>
        <Typography variant="h4">Product not found</Typography>
        <Button variant="contained" onClick={() => navigate('/')}>
          Go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          alignItems: 'center',
          justifyContent: 'center',
          padding: 4,
          gap: 4
        }}
      >
        {/* Product Image */}
        <Box
          sx={{
            width: { xs: '100%', md: '40%' },
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <img
            src={selectedProduct.image}
            alt={selectedProduct.title}
            style={{ width: '100%', maxWidth: 400, borderRadius: 12 }}
          />
        </Box>

        {/* Product Info */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {selectedProduct.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {selectedProduct.description}
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            {selectedProduct.price}
          </Typography>

          {/* Size Selection */}
          <Typography variant="subtitle2" sx={{ mt: 3, mb: 1 }}>
            Select Size:
          </Typography>
          <ToggleButtonGroup
            value={selectedSize}
            exclusive
            onChange={handleSizeChange}
            aria-label="Size"
          >
            <ToggleButton value="S" aria-label="Small">
              S
            </ToggleButton>
            <ToggleButton value="M" aria-label="Medium">
              M
            </ToggleButton>
            <ToggleButton value="L" aria-label="Large">
              L
            </ToggleButton>
          </ToggleButtonGroup>

          {/* Buttons */}
          <Stack direction="row" spacing={2} sx={{ mt: 4 }}>
            <Button
              variant="contained"
              disabled={!selectedSize}
              sx={{
                backgroundColor: 'black',
                color: 'white',
                px: 4,
                py: 1.5,
                textTransform: 'capitalize',
                '&:hover': { backgroundColor: '#333' }
              }}
            >
              Add to Cart
            </Button>
            {!selectedSize && (
              <Typography variant="body2" color="error" alignSelf="center">
                Please select a size
              </Typography>
            )}
          </Stack>
        </Box>
      </Box>
      <Footer />
    </>
  );
};

export default ProductDetail;


// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { Typography, Button, Box } from "@mui/material";
// import { fetchWomenProducts } from "../productAPIs/womenProductsAPI";
// import { fetchMenProducts } from "../productAPIs/menProductsAPI";

// const ProductDetail = () => {
//   const { category, id } = useParams();
//   const navigate = useNavigate();
//   const [product, setProduct] = useState(null);

//   useEffect(() => {
//     const loadProduct = async () => {
//       let products = [];

//       if (category === "men") {
//         products = await fetchMenProducts();
//       } else if (category === "women") {
//         products = await fetchWomenProducts();
//       } else {
//         setProduct(null);
//         return;
//       }

//       // slugify: title to lowercase, replace spaces with hyphens
//       const found = products.find(
//         (p) => p.title.toLowerCase().replace(/\s+/g, "-") === id
//       );

//       setProduct(found || null);
//     };

//     loadProduct();
//   }, [category, id]);

//   if (!product) {
//     return (
//       <Box sx={{ textAlign: "center", mt: 10 }}>
//         <Typography variant="h4">Product not found</Typography>
//         <Button variant="contained" onClick={() => navigate(-1)}>
//           Go Back
//         </Button>
//       </Box>
//     );
//   }

//   return (
//     <Box sx={{ padding: 4, maxWidth: 800, margin: "0 auto" }}>
//       <img
//         src={product.image}
//         alt={product.title}
//         style={{ width: "100%", borderRadius: 12, marginBottom: 20 }}
//       />
//       <Typography variant="h4" fontWeight="bold" gutterBottom>
//         {product.title}
//       </Typography>
//       <Typography variant="body1" gutterBottom>
//         {product.description}
//       </Typography>
//       <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
//         {product.price}
//       </Typography>
//       <Button variant="contained" color="primary">
//         Add to Cart
//       </Button>
//     </Box>
//   );
// };

// export default ProductDetail;

