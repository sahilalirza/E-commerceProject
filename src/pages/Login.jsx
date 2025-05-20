import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  Paper,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Simple mock validation
    if (email && password) {
      console.log("Login Success:", { email, password });
      navigate("/"); // Redirect to home after login
    } else {
      alert("Please enter email and password");
    }
  };

  return (
    <div style={{background:'linear-gradient(135deg, #434343, #000000)',height:'100vh'}}>
    <Container maxWidth="sm" sx={{display:"flex", justifyContent:"center",alignItems:'center'}}>
      <Paper elevation={4} sx={{ p: 4, mt: 8 ,background:'grey'}}>
        <Typography variant="h5" align="center" gutterBottom>
          Login to Your Account
        </Typography>
        <Box component="form" onSubmit={handleLogin} sx={{ mt: 2 }}>
          <TextField
            fullWidth
            label="Email"
            type="email"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <TextField
            fullWidth
            label="Password"
            type="password"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            
          />
          <Button
            fullWidth
            variant="contained"
            type="submit"
            sx={{ mt: 3, backgroundColor: "black" }}
          >
            Login
          </Button>
        </Box>
        <Typography align="center" sx={{ mt: 2 }}>
          Don't have an account? <a href="/register">Register</a>
        </Typography>
      </Paper>
    </Container>
    </div>
  );
};

export default Login;
