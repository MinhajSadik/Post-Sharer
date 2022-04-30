import { AppBar, Container, Typography } from "@material-ui/core";
import React from "react";

function App() {
  return (
    <Container maxWidth="lg">
      <AppBar position="static" color="inherit">
        <Typography variant="h2" align="center">
          Post Sharer
        </Typography>
      </AppBar>
    </Container>
  );
}

export default App;
