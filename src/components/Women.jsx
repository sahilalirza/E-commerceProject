import { Typography } from '@mui/material';
import React from 'react'

const cards = [
  {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
   {
    title: 'Classic Denim',
    description: 'Comfort and style in one pair.',
    image: 'https://images.unsplash.com/photo-1602293589930-45aad59ba3ab?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0',
    price: '$49.99',
  },
];

const Women = () => {
  return (
<>
    <Typography variant='h2' mt={15} sx={{display:'flex',justifyContent:'center',alignItems:'center',fontWeight:"bold"}}>Women's Fashion</Typography>
    <Typography variant='h6' sx={{display:'flex',justifyContent:'center',alignItems:'center'}}>Women's Fashion</Typography>
    <div className="cards-wrapper">
      {cards.map((item, index) => (
        <div key={index} className="card-container">
          <div className="card-image">
            <img src={item.image} alt={item.title} />
          </div>
          <div className="card-content">
            <h2>{item.title}</h2>
            <p className="desc">{item.description}</p>
            <div className="price">{item.price}</div>
          </div>
        </div>
      ))}
    </div>

    </>
  );
};

export default Women;
