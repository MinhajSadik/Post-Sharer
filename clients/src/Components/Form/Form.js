import { Button, Paper, TextField, Typography } from "@material-ui/core";
import React from "react";
import { useDispatch } from "react-redux";
import { createPost } from "../../api";
import useStyles from "./styles";

export default function Form() {
  const dispatch = useDispatch();

  const initialState = {
    title: "",
    content: "",
    date: "",
  };

  const classes = useStyles();
  const [postData, setPostData] = React.useState(initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createPost(postData));
  };

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Share a Post</Typography>
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) =>
            setPostData({
              ...postData,
              title: e.target.value,
            })
          }
        />
        <TextField
          name="content"
          variant="outlined"
          label="Content"
          fullWidth
          value={postData.content}
          onChange={(e) =>
            setPostData({
              ...postData,
              content: e.target.value,
            })
          }
        />
        <TextField
          name="date"
          variant="outlined"
          label="Date"
          fullWidth
          value={postData.date}
          onChange={(e) =>
            setPostData({
              ...postData,
              date: e.target.value,
            })
          }
        />
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
      </form>
    </Paper>
  );
}
