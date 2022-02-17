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
import LiveHelpIcon from "@mui/icons-material/LiveHelp";

export function Navbar() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{
        width: "100%",
        position: "fixed",
        bottom: 0,
        zIndex: 1000,
      }}
    >
      <BottomNavigation
        sx={{
          bgcolor: "#c0c0c0",
          minWidth: 360,
          maxWidth: 420,
        }}
        value={value}
        onChange={handleChange}
      >
        <BottomNavigationAction
          LinkComponent={Link}
          to="/"
          label="Home"
          value="Home"
          icon={<HomeIcon />}
          sx={{ color: "#696969	" }}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          to="/products"
          label="Product"
          value="Product"
          icon={<InventoryIcon />}
          sx={{ color: "#696969" }}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          to="/addProduct"
          label="Add"
          value="Add"
          icon={<AddIcon />}
          sx={{ color: "#696969" }}
        />
        <BottomNavigationAction
          LinkComponent={Link}
          to="/contact"
          label="Help"
          value="Help"
          icon={<LiveHelpIcon />}
          sx={{ color: "#696969" }}
        />
      </BottomNavigation>
    </Box>
  );
}

export default Navbar;
