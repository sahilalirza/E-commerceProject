import React, { useState } from 'react';
import { Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../context/ProductContext';  // <-- Import here
import QuickView from './QuickView';
import './Men.css';

const Men = () => {
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { menProducts, setSelectedProduct } = useProductContext();
  const navigate = useNavigate();

  const handleOpen = (item) => {
    setSelectedCard(item);
    setOpen(true);
  };

  const handleNavigate = (item) => {
    setSelectedProduct(item);
    navigate(`/product/${item.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  if (!menProducts.length) {
    return <Typography>Loading products...</Typography>;
  }

  return (
    <div style={{ margin: '0 auto' }}>
      <Typography variant="h2" mt={15} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Men's Fashion
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Discover the best styles for men.
      </Typography>

      <div className="cards-wrapper">
        {menProducts.map((item, index) => (
          <div key={index} className="card-container">
            <div className="card-image">
              <img
                src={item.image}
                alt={item.title}
                onClick={() => handleNavigate(item)}
                style={{ cursor: 'pointer' }}
              />
              <button className="quick-button" onClick={() => handleOpen(item)}>
                Quick View
              </button>
            </div>
            <div className="card-content">
              <h2>{item.title}</h2>
              <p className="desc">{item.description}</p>
              <div className="button">
                <div className="price">{item.price}</div>
                <Button sx={{ backgroundColor: 'black', color: 'white' }}>Add to Cart</Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <QuickView open={open} onClose={() => setOpen(false)} item={selectedCard} />
    </div>
  );
};

export default Men;


