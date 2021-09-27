import { Box } from "@mui/material";
import { makeStyles } from "@mui/styles";

//components import
import Header from "./components/Header";
import InfoHeader from "./components/InfoHeader";

const useStyles = makeStyles({
  infoHeader: {
    marginTop: "110px"
  }
});

function App() {
  const classes = useStyles();
  return (
    <Box>
      <Header />
      <Box className={classes.infoHeader}>
        <InfoHeader />
      </Box>
    </Box>
  );
}

export default App;
