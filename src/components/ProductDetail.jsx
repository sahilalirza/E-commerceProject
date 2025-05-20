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
import { fetchMenProducts } from '../productAPIs/menProductsAPI';
import { fetchWomenProducts } from '../productAPIs/womenProductsAPI';
import { fetchKidsProducts } from '../productAPIs/kidsProductsAPI';

const ProductDetail = () => {
  const { id } = useParams(); // product-title-id
  const navigate = useNavigate();
  const { selectedProduct } = useProductContext();
  const [product, setProduct] = useState(selectedProduct);
  const [selectedSize, setSelectedSize] = useState(null);

  // Try to reconstruct the product from both men and women products
  useEffect(() => {
    const loadFallbackProduct = async () => {
      if (!product && id) {
        const allProducts = [...await fetchMenProducts(), ...await fetchWomenProducts(), ...await fetchKidsProducts()];
        const found = allProducts.find(
          (p) => p.title.replace(/\s+/g, '-').toLowerCase() === id
        );
        setProduct(found);
      }
    };
    loadFallbackProduct();
  }, [id, product]);

  const handleSizeChange = (event, newSize) => {
    if (newSize !== null) setSelectedSize(newSize);
  };

  if (!product) {
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
            src={product.image}
            alt={product.title}
            style={{ width: '100%', maxWidth: 400, borderRadius: 12 }}
          />
        </Box>

        {/* Product Info */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            {product.title}
          </Typography>
          <Typography variant="subtitle1" color="text.secondary" gutterBottom>
            {product.description}
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="primary" gutterBottom>
            {product.price}
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
            <ToggleButton value="S" aria-label="Small">S</ToggleButton>
            <ToggleButton value="M" aria-label="Medium">M</ToggleButton>
            <ToggleButton value="L" aria-label="Large">L</ToggleButton>
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


