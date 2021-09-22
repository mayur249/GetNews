import React from "react";
import { AppBar, Toolbar } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
    header: {
        background: "#ffffff",
        height: "70px"
    },
    logo: {
        height: "55px"
    }
})

const Header = () => {
    const classes = useStyles();
    const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png';
  return (
    <AppBar className={classes.header}>
        <Toolbar>
            <img src={url} alt="logo" className={classes.logo}/>
        </Toolbar>
    </AppBar>
  );
};

export default Header;
