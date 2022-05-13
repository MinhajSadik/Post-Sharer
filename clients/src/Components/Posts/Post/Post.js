import { Card, CardMedia, Typography } from "@material-ui/core";
import moment from "moment";
import React from "react";
import useStyles from "./styles";

export default function Post({ post }) {
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

      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.title}
      </Typography>
      <Typography variant="body2" color="textSecondary" component="p">
        {post.content}
      </Typography>
      <Typography
        className={classes.title}
        gutterBottom
        variant="h5"
        component="h2"
      >
        {post.date || post.createdAt}
      </Typography>
    </Card>
  );
}
