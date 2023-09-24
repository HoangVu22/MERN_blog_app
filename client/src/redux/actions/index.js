import { createActions, createAction } from "redux-actions"; // là 1 thư viện giúp tạo đc các actions

export const getType = (reduxAction) => {
  return reduxAction().type;
};

export const getPosts = createActions({
  getPostsRequest: undefined, // khi gửi request thì gọi action này, mặc định thì k có 1 payload nào cho request nên là undefined
  getPostsSuccess: (payload) => payload, // khi lấy post thành công
  getPostsFailure: (err) => err, // khi lấy post nhưng có lỗi từ phía API
});

export const createPost = createActions({
  createPostRequest: (payload) => payload, // cần gửi 1 payload là dl mà chúng ta muốn gửi lên server
  createPostSuccess: (payload) => payload, // khi lấy post thành công
  createPostFailure: (err) => err, // khi lấy post nhưng có lỗi từ phía API
});

export const updatePost = createActions({
  updatePostRequest: (payload) => payload, // cần gửi 1 payload là dl mà chúng ta muốn gửi lên server
  updatePostSuccess: (payload) => payload, // khi lấy post thành công
  updatePostFailure: (err) => err, // khi lấy post nhưng có lỗi từ phía API
});

export const showModal = createAction("SHOW_CREATE_POST_MODAL");
export const hideModal = createAction("HIDE_CREATE_POST_MODAL");

/* 
khi tạo method createActions từ thư viện redux-actions
thì mỗi action sẽ là 1 func
mỗi func sẽ trả về 1 giá trị là 1 obj 

gettype(getPosts.getPostRequest)
{
    type: 'getPostRequest',
    payload: giá trị trả về của func này
}

*/
