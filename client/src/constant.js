export const INIT_STATE = {
  posts: {
    isLoading: false, //mặc định sẽ là false, khi k gọi api để lấy các posts nên set là false
    data: [],
  },
  modal: {
    isShow: false, //mặc định sẽ là false, không hiển thị modal lên
  },
};
