import {
  Box,
  Toolbar,
  Typography,
  IconButton,
  AppBar,
  Avatar,
  Badge,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import logo from "../assets/s.a.png";

const Header = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="inherit" elevation="large">
        <Toolbar>
          <Avatar alt='' src={logo} />
          <Typography
            variant="h6"
            component="a"
            sx={{ flexGrow: 1, cursor: "pointer" }}
            onClick={() => navigate("/")}
          >
            S.A Cart
          </Typography>

          <IconButton aria-label="cart">
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon />
              <Typography component='span'>Cart</Typography>
            </Badge>
          </IconButton>

        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Header;
