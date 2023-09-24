import React from "react";
import { Container, Fab } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch } from "react-redux";
import { showModal } from "../redux/actions";
import useStyles from "./style";

import Header from "../components/Header";
import PostList from "../components/PostList";
import CreatePostModal from "../components/CreatePostModal";

function HomePage() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const openCreatePostModal = React.useCallback(() => {
    dispatch(showModal());
  }, [dispatch]);

  return (
    <Container maxWidth="lg">
      <Header />
      <PostList />
      <CreatePostModal />

      <Fab
        color="primary"
        className={classes.fab}
        onClick={openCreatePostModal}
      >
        <AddIcon />
      </Fab>
    </Container>
  );
}

export default HomePage;
