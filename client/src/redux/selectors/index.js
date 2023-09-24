export const postsState$ = (state) => state.posts.data;
export const modalState$ = (state) => state.modal;

// trả về các method tương ứng
//vd: muốn lấy dl posts thì tạo ra 1 postsState ( kí hiệu $ để biết nó là selector )
// state ở đây chính là store trong redux
