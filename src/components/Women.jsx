
import { useEffect, useState } from 'react';
import { Typography, Button } from '@mui/material';
import './Men.css';
import QuickView from './QuickView';
import { useNavigate } from 'react-router-dom';
import { fetchWomenProducts } from '../productAPIs/womenProductsAPI';
import { useProductContext } from '../context/ProductContext';

const Women = () => {
  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const { setSelectedProduct } = useProductContext();
  const navigate = useNavigate();

  useEffect(() => {
    const load = async () => {
      const res = await fetchWomenProducts();
      setProducts(res);
    };
    load();
  }, []);

  const handleOpen = (item) => {
    setSelectedCard(item);
    setOpen(true);
  };

  const handleNavigate = (item) => {
    setSelectedProduct(item);
    navigate(`/product/${item.title.replace(/\s+/g, '-').toLowerCase()}`);
  };

  return (
    <div style={{ margin: '0 auto' }}>
      <Typography variant="h2" mt={15} sx={{ textAlign: 'center', fontWeight: 'bold' }}>
        Women's Fashion
      </Typography>
      <Typography variant="h6" sx={{ textAlign: 'center' }}>
        Discover the best styles for Women.
      </Typography>

      <div className="cards-wrapper">
        {products.length > 0 ? (
          products.map((item, index) => (
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
                  <Button sx={{ backgroundColor: 'black', color: 'white' }}>
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <Typography variant="h6" align="center" mt={4}>
            Loading products...
          </Typography>
        )}
      </div>

      <QuickView open={open} onClose={() => setOpen(false)} item={selectedCard} />
    </div>
  );
};

export default Women;

