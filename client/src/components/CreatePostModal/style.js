import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  paper: {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 4),
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    margin: "0 0 10px 0",
  },
  title: {
    marginBottom: "15px",
  },
  textarea: {
    padding: "10px",
    marginBottom: "15px",
  },
  footer: {
    marginTop: "15px",
  },
}));
