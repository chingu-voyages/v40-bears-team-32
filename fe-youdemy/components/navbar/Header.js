import * as React from "react";

import { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = () => {
  return (
    <>
      <AppBar>
        <Toolbar>
          <Typography>YouDemy</Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
