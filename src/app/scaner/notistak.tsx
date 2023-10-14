import { SnackbarProvider, enqueueSnackbar } from "notistack";

const Alert = () => {
  return (
    <div>
      <SnackbarProvider />
      <button onClick={() => enqueueSnackbar("That was easy!")}>
        Show snackbar
      </button>
    </div>
  );
};

export default Alert;
