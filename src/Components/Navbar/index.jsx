// Import funções React
import * as React from "react";

// Import funções Material UI
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

// Import função Link React Router
import { Link } from "react-router-dom";

// Import ícones da Navbar Material UI
import InventoryIcon from "@mui/icons-material/Inventory";
import AddIcon from "@mui/icons-material/Add";
import HomeIcon from "@mui/icons-material/Home";

export function Navbar() {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: 360 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <Link to="/">
          <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        </Link>
        <Link to="/product">
          <BottomNavigationAction label="Products" icon={<InventoryIcon />} />
        </Link>
        <Link to="/addProduct">
          <BottomNavigationAction label="Add Product" icon={<AddIcon />} />
        </Link>
      </BottomNavigation>
    </Box>
  );
}