import { Button, Card, CardMedia, Typography } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
// import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import moment from "moment";
import React from "react";
import useStyles from "./styles";

export default function Post({ post, setCurrentId }) {
  // const dispatch = useDispatch();
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={
          post.selectedFile ||
          "https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png"
        }
        title={post.title}
      />
      <div className={classes.overlay}>
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <Typography variant="body1">
          {moment(post.createdAt).fromNow("YYYY-MM-DD")}
        </Typography>
      </div>

      <div className={classes.overlay2}>
        <Button
          style={{ color: "white" }}
          size="small"
          onClick={() => setCurrentId(post._id)}
        >
          Edit
          {/* <MoreHorizIcon fontSize="default" /> */}
        </Button>
        <Button
          size="small"
          color="primary"
          // onClick={() => dispatch(deletePost(post._id))}
        >
          <DeleteIcon fontSize="small" />
        </Button>
      </div>

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <Typography
        variant="body2"
        color="textSecondary"
        component="p"
        className={classes.title}
      >
        {post.content}
      </Typography>
      <Typography
        className={classes.title}
        gutterBottom
        variant="caption"
        component="caption"
      >
        {post.date || post.createdAt}
      </Typography>
    </Card>
  );
}
