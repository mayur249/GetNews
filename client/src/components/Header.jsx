import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import MenuIcon from '@mui/icons-material/Menu';

const useStyles = makeStyles({
  header: {
    backgroundColor: "#073B32",
    height: "70px",
  },
  logo: {
    margin: "auto",
  },
});

const Header = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.header}>
      <Toolbar>
          <MenuIcon/>
        <Typography variant="h4" className={classes.logo}>
          GetNews
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
