import React from "react";
import moment from "moment"; // format time
import {
  Card,
  Avatar,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
  CardMedia,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import useStyles from "./style";
import { useDispatch } from "react-redux";
import { updatePost } from "../../../redux/actions";

function Post({ post }) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const onlikeClick = React.useCallback(() => {
    dispatch(
      updatePost.updatePostRequest({ ...post, likeCount: post.likeCount + 1 })
    );
  }, [dispatch, post]);

  return (
    <Card>
      <CardHeader
        avatar={<Avatar>V</Avatar>}
        title={post.author}
        subheader={moment(post.updatedAt).format("HH:MM MMM DD, YYYY")}
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
      />
      <CardMedia
        component="img"
        image={post.attachment || ""}
        title="title"
        className={classes.media}
      />
      <CardContent>
        <Typography variant="h5" color="textPrimary">
          {post.title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {post.content}
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton onClick={onlikeClick}>
          <FavoriteIcon />
          <Typography component="span" color="textSecondary">
            {`${post.likeCount} likes`}
          </Typography>
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default Post;
