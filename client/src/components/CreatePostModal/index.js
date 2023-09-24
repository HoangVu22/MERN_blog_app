import React from "react";
import { Button, Modal, TextField, TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { createPost, hideModal } from "../../redux/actions";
import useStyles from "./style";
import FileBase64 from "react-file-base64";

import { modalState$ } from "../../redux/selectors";

function CreatePostModal() {
  const [data, setData] = React.useState({
    title: "",
    content: "",
    attachment: "", // cho hình ảnh
  });

  const dispatch = useDispatch();

  const { isShow } = useSelector(modalState$);
  const classes = useStyles();

  const onClose = React.useCallback(() => {
    dispatch(hideModal());
    setData({
      title: "",
      content: "",
      attachment: "",
    });
  }, [dispatch]); //khi đóng modal lại, cần update lại giá trị store modal ở trong store từ isShow(true -> false)
  //cần trigger 1 action hideModal

  const onSubmit = React.useCallback(() => {
    console.log({ data });
    dispatch(createPost.createPostRequest(data));
    onClose();
  }, [data, dispatch, onClose]);

  const body = (
    <div className={classes.paper} id="simple-modal-title">
      <h2>Create New Post</h2>
      <form noValidate autoComplete="off" className={classes.form}>
        <TextField
          className={classes.title}
          required
          label="title"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })} //giữ lại các data cũ và thêm giá trị mới cho title
        />
        <TextareaAutosize
          className={classes.textarea}
          minRows={10}
          maxRows={15}
          placeholder="Content..."
          value={data.content}
          onChange={(e) => setData({ ...data, content: e.target.value })}
        />
        <FileBase64
          accept="image/*"
          multiple={false}
          type="file"
          value={data.attachment}
          onDone={({ base64 }) => setData({ ...data, attachment: base64 })}
        />
        <div className={classes.footer}>
          <Button
            variant="contained"
            color="primary"
            component="span"
            fullWidth
            onClick={onSubmit}
          >
            Create
          </Button>
        </div>
      </form>
    </div>
  );

  return (
    <div>
      <Modal open={isShow} onClose={onClose}>
        {body}
      </Modal>
    </div>
  );
}

export default CreatePostModal;
