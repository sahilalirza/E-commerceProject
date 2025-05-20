import React from 'react';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const QuickView = ({ open, onClose, item }) => {
  const navigate = useNavigate();

  if (!item) return null;

  const handleNavigate = () => {
    navigate(`/product/${item.title.replace(/\s+/g, '-').toLowerCase()}`);
    onClose(); // optional: close modal after navigating
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle sx={{ fontWeight: 'bold' }}>{item.title}</DialogTitle>
      <DialogContent>
        <img
          src={item.image}
          alt={item.title}
          style={{ width: '100%', height: 'auto', borderRadius: 0 }}
        />
        <Typography mt={2}>{item.description}</Typography>
        <Typography mt={1} fontWeight="bold">
          {item.price}
        </Typography>
      </DialogContent>
      <DialogActions>
        <Button
          sx={{ backgroundColor: 'black' }}
          onClick={handleNavigate}
          variant="contained"
        >
          Go to Details
        </Button>
        <Button sx={{ color: 'black' }} onClick={onClose}>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default QuickView;

