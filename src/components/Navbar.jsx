// import React, { useState, useEffect } from "react";
// import {
//   AppBar, Toolbar, Typography, InputBase, IconButton, Badge,
//   Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery
// } from "@mui/material";
// import { styled, alpha, useTheme } from "@mui/material/styles";
// import { Link, useNavigate } from "react-router-dom";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
// import NavTop from "./NavTop";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": { backgroundColor: alpha(theme.palette.common.white, 0.25) },
//   marginLeft: theme.spacing(2),
//   width: "100%",
//   [theme.breakpoints.up("sm")]: { width: "auto" },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//   width: "100%",
// }));

// const Navbar = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [drawerOpen, setDrawerOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);

//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
//   const navigate = useNavigate();

//   // Handle scroll state
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
//     }
//   };

//   const toggleDrawer = () => setDrawerOpen(!drawerOpen);

//   const drawerContent = (
//     <Box sx={{ width: 250 }} onClick={toggleDrawer}>
//       <List>
//         <ListItem button component={Link} to="/login">
//           <ListItemText primary="Login" />
//         </ListItem>
//         <ListItem button component={Link} to="/cart">
//           <ListItemText primary="Cart" />
//         </ListItem>
//       </List>
//     </Box>
//   );

//   return (
//     <>
//       {/* AppBar with scroll effect */}
//       <AppBar
//         position="fixed"
//         sx={{
//           background: scrolled ?   'black':'linear-gradient(135deg, #434343, #000000)',
//         //   background: scrolled ? '#90A4AE' : '#B0BCC2',
//           boxShadow: scrolled ? 3 : 0,
//           transition: "all 0.3s ease",
//         }}
//       >
//         <Toolbar sx={{ display: 'flex', justifyContent: 'space-around' }}>
//           {isMobile && (
//             <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
//               <MenuIcon />
//             </IconButton>
//           )}

//           <Typography
//             variant="h6"
//             component={Link}
//             to="/"
//             sx={{
//               textDecoration: "none",
//               color: "inherit",
//               flexGrow: isMobile ? 1 : 0,
//               ml: isMobile ? 1 : 0,
//             }}
//           >
//             MyShop
//           </Typography>

//           {!isMobile && (
//             <>
//               <Search sx={{ display: 'flex' }}>
//                 <SearchIconWrapper>
//                   <SearchIcon />
//                 </SearchIconWrapper>
//                 <StyledInputBase
//                   placeholder="Search…"
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyDown={(e) => e.key === "Enter" && handleSearch()}
//                 />
//                 <Button
//                   onClick={handleSearch}
//                   sx={{
//                     ml: 1,
//                     background: 'white',
//                     color: 'black',
//                     fontSize: '15px',
//                     borderRadius: '0 2px 2px 0',
//                     textTransform: 'capitalize'
//                   }}
//                   color="inherit"
//                 >
//                   Search
//                 </Button>
//               </Search>

//               <Box sx={{ display: "flex", alignItems: "center", ml: 2 }}>
//                 <Button color="inherit" component={Link} to="/login">
//                   Login
//                 </Button>
//                 <IconButton color="inherit" component={Link} to="/cart">
//                   <Badge badgeContent={0} color="error">
//                     <ShoppingCartIcon />
//                   </Badge>
//                 </IconButton>
//               </Box>
//             </>
//           )}
//         </Toolbar>
//       </AppBar>

//       {/* Offset for fixed AppBar */}
//       <Box sx={{ height: '64px' }} />

//       <NavTop />

//       <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
//         {drawerContent}
//       </Drawer>
//     </>
//   );
// };

// export default Navbar;

import React, { useState, useEffect } from "react";
import {
  AppBar, Toolbar, Typography, InputBase, IconButton, Badge,
  Button, Box, Drawer, List, ListItem, ListItemText, useMediaQuery
} from "@mui/material";
import { styled, useTheme, alpha } from "@mui/material/styles";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import NavTop from "./NavTop";

// Styled search container
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.grey[200], 0.9),
  "&:hover": {
    backgroundColor: alpha(theme.palette.grey[300], 1),
  },
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  flexGrow: 1,
  display: "flex",
  alignItems: "center",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: theme.palette.grey[700],
  display: "flex",
  alignItems: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: "inherit",
  padding: theme.spacing(1),
  paddingLeft: `calc(1em + ${theme.spacing(2)})`,
}));

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
    <Box sx={{ width: 250 }} onClick={toggleDrawer}>
      <List>
        <ListItem button component={Link} to="/login">
          <ListItemText primary="Login" />
        </ListItem>
        <ListItem button component={Link} to="/cart">
          <ListItemText primary="Cart" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "white",
          color: "black",
          boxShadow: scrolled ? 3 : 1,
          transition: "all 0.3s ease",
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            {isMobile && (
              <IconButton color="inherit" edge="start" onClick={toggleDrawer}>
                <MenuIcon />
              </IconButton>
            )}
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{
                textDecoration: "none",
                color: "inherit",
                ml: isMobile ? 1 : 2,
              }}
            >
              MyShop
            </Typography>
          </Box>

          <Search sx={{ mt: isMobile ? 1 : 0, mb: isMobile ? 1 : 0 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <Button
              onClick={handleSearch}
              sx={{
                borderRadius: "0 4px 4px 0",
                textTransform: "capitalize",
                backgroundColor: "black",
                color: "white",
                "&:hover": {
                  backgroundColor: "#333",
                },
              }}
            >
              Search
            </Button>
          </Search>

          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Button color="inherit" component={Link} to="/login">
                Login
              </Button>
              <IconButton color="inherit" component={Link} to="/cart">
                <Badge badgeContent={0} color="error">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>

      <Box sx={{ height: "64px" }} /> {/* Offset for fixed navbar */}
      <NavTop />
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        {drawerContent}
      </Drawer>
    </>
  );
};

export default Navbar;
