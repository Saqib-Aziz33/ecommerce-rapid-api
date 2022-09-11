import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab} from "@mui/material/";
// icons
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import ShoppingCart from "@mui/icons-material/ShoppingCart";

export default function Nav() {
  const navMapping = {
    "/": 0,
    "/favorite": 1,
    "/cart": 2,
  };
  const { pathname: path } = useLocation();
  const [value, setValue] = useState(navMapping[path]);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Tabs
      value={value}
      onChange={handleChange}
      aria-label="Navigation-tabs"
        sx={{
            backgroundColor: '#fff',
            position: 'fixed',
            bottom: 0,
            left: '50%',
            zIndex: 2,
            transform: 'translateX(-50%)'
        }}
    >
      <Tab icon={<HomeIcon />} onClick={() => navigate("/")} label="Home" />
      <Tab icon={<FavoriteIcon />} sx={{margin: '0 12vw'}} onClick={() => navigate("/favorite")} label="Favorite" />
      <Tab icon={<ShoppingCart />} onClick={() => navigate("/cart")} label="Cart" />
    </Tabs>
  );
}
