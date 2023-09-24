import React from "react";
import { Grid } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import * as actions from "../../redux/actions";

import Post from "./Post";
import { postsState$ } from "../../redux/selectors";

function PostList() {
  const dispatch = useDispatch();

  const posts = useSelector(postsState$);
  console.log("[PostList - posts]", posts);

  React.useEffect(() => {
    //giúp chúng ta có thể trigger 1 action
    dispatch(actions.getPosts.getPostsRequest());
  }, [dispatch]);

  return (
    <Grid container spacing={3} alignItems="stretch">
      {posts.map((post) => (
        <Grid item xs={12} sm={4}>
          <Post key={post._id} post={post} />
        </Grid>
      ))}
    </Grid>
  );
}

export default PostList;
