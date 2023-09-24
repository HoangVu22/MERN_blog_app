import { takeLatest, call, put } from "redux-saga/effects";
import * as actions from "../actions";
import * as api from "../../api";

function* fetchPostSaga(action) {
  try {
    // đây là cú pháp khi xử lý generator func, nó sẽ hđ giống async await (thay vì để async ở ngoài func thì dùng dấu func*, await thì thay bằng yield)
    const posts = yield call(api.fetchPosts); // khi muốn thực thi function thì sd effects call
    console.log("[posts]", posts);
    yield put(actions.getPosts.getPostsSuccess(posts.data)); //put này nó sẽ trigger 1 action trong saga
  } catch (error) {
    console.log(error);
    yield put(actions.getPosts.getPostsFailure(error)); //put này nó sẽ trigger 1 action trong saga
  }
}

function* createPostSaga(action) {
  try {
    const post = yield call(api.createPost, action.payload); // khi muốn thực thi function thì sd effects call,
    //action.payload chính là dl mà trong createPostModal đã truyền vô tham số của action createPostRequest
    console.log("[createPostSaga - post]", post);
    yield put(actions.createPost.createPostSuccess(post.data)); //put này nó sẽ trigger 1 action trong saga
  } catch (error) {
    console.log(error);
    yield put(actions.createPost.createPostFailure(error));
  }
}

function* updatePostSaga(action) {
  try {
    const updatedPost = yield call(api.updatePost, action.payload); // khi muốn thực thi function thì sd effects call,
    //action.payload chính là dl mà trong createPostModal đã truyền vô tham số của action createPostRequest
    console.log("[updatePostSaga - post]", updatedPost);
    yield put(actions.updatePost.updatePostSuccess(updatedPost.data)); //put này nó sẽ trigger 1 action trong saga
  } catch (error) {
    console.log(error);
    yield put(actions.updatePost.updatePostFailure(error));
  }
}

function* mySaga() {
  //takeLatest nhận 2 tham số (action, function xử lý khi có 1 action xảy ra)
  yield takeLatest(actions.getPosts.getPostsRequest, fetchPostSaga);
  yield takeLatest(actions.createPost.createPostRequest, createPostSaga);
  yield takeLatest(actions.updatePost.updatePostRequest, updatePostSaga);
}

export default mySaga;
