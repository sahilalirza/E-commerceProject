import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  IconButton,
  Badge,
  Button,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavTop from "./NavTop"; // Will be hidden on mobile

// Styled search container
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha("#fff", 0.95),
  border: `1px solid ${alpha("#000", 0.2)}`,
  display: "flex",
  alignItems: "center",
  width: "100%",
  maxWidth: 500,
}));

const SearchIconWrapper = styled("div")(() => ({
  padding: "0 12px",
  color: "#000",
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  padding: theme.spacing(1),
  paddingLeft: `calc(1em + ${theme.spacing(1.5)})`,
  fontSize: "1rem",
  color: "#000",
  [theme.breakpoints.down("sm")]: {
    fontSize: "0.85rem",
    padding: theme.spacing(0.75),
  },
}));

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleDrawer = () => setDrawerOpen(!drawerOpen);

  const drawerContent = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/men">
          <ListItemText primary="Men" />
        </ListItem>
        <ListItem button component={Link} to="/women">
          <ListItemText primary="Women" />
        </ListItem>
        <ListItem button component={Link} to="/kids">
          <ListItemText primary="Kids" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        elevation={scrolled ? 4 : 0}
        sx={{
          backgroundColor: "#fff",
          color: "#000",
          padding:1,
          transition: "all 0.3s ease",
          borderBottom: scrolled ? `1px solid ${alpha("#000", 0.1)}` : "none",
        }}
      >
        <Toolbar
          sx={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
            minHeight: isMobile ? 56 : 64,
            px: { xs: 1, sm: 2, md: 4 },
            gap: 1,
          }}
        >
          {/* Left: Logo + Menu */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {isMobile && (
              <IconButton onClick={toggleDrawer} sx={{ color: "#000" }}>
                <MenuIcon fontSize="small" />
              </IconButton>
            )}
            <Typography
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                fontWeight: 700,
                fontSize: isMobile ? "1rem" : "1.5rem",
                color: "#000",
              }}
            >
              MyShop
            </Typography>
          </Box>

          {/* Center: Search (Desktop Only) */}
          {/* Center: Search (Desktop Only) */}
{!isMobile && (
  <Box
    sx={{
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      maxWidth: 360,
      width: "100%",
    }}
  >
    <Search>
      <SearchIconWrapper>
        <SearchIcon fontSize="small" />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search…"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && handleSearch()}
        inputProps={{ style: { fontSize: "0.9rem"} }}
      />
      <Button
        onClick={handleSearch}
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          fontSize: "0.8rem",
          
          p:2,
          borderRadius: "0 5px 5px 0",
          textTransform: "none",
          "&:hover": {
            backgroundColor: "#222",
          },
        }}
      >
        Search
      </Button>
    </Search>
  </Box>
)}

          {/* Right: Login & Cart */}
          <Box sx={{ display: "flex", alignItems: "center", gap: isMobile ? 1 : 2 }}>
            <Button
              component={Link}
              to="/login"
              variant="outlined"
              sx={{
                fontSize: isMobile ? "0.75rem" : "0.9rem",
                px: isMobile ? 1 : 2,
                py: isMobile ? 0.5 : 1,
                textTransform: "none",
                borderColor: "#000",
                color: "#000",
                fontWeight: 500,
                "&:hover": {
                  backgroundColor: alpha("#000", 0.05),
                  borderColor: "#000",
                },
              }}
            >
              Login
            </Button>
            <IconButton component={Link} to="/cart" sx={{ color: "#000" }}>
              <Badge badgeContent={0} color="error">
                <ShoppingCartIcon fontSize={isMobile ? "small" : "medium"} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Offset for AppBar */}
      <Box sx={{ height: isMobile ? 56 : 64 }} />

      {/* NavTop only on desktop */}
      {!isMobile && <NavTop />}

      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
