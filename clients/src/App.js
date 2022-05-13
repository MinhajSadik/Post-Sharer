import { AppBar, Container, Grid, Grow, Typography } from "@material-ui/core";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts";
import "./App.css";
import Form from "./Components/Form/Form";
import Posts from "./Components/Posts/Posts";
import postShare from "./images/logo.png";
import useStyles from "./styles";

const App = () => {
  const [currentId, setCurrentId] = React.useState(null);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Post Sharer
        </Typography>
        <img className={classes.image} src={postShare} alt="Logo" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid
            container
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;
