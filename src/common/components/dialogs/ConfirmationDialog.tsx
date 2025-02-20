import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
// import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { ModalComponent, ModalSystemProps } from "./../../hooks/modals";

interface Props {
  title: string;
  description: string | JSX.Element;
  // confirmButton?: { color?: LoadingButtonProps['color'], text: string };
  confirmButton?: any;
  onConfirm?: (close: ModalSystemProps["close"]) => void | Promise<any>;
}

export const ConfirmationDialog: ModalComponent<Props> = ({
  title,
  description,
  confirmButton,
  onConfirm,
  open,
  close,
}) => {
  const [loading, setLoading] = useState<boolean>(false);

  const handleClick = () => {
    if (!onConfirm) return close(0);
    setLoading(true);

    const promise = onConfirm(close);
    if (!promise) return setLoading(false);

    promise.then(() => setLoading(false)).catch(() => setLoading(false));
  };

  return (
    <Dialog open={open} onClose={() => close(0)} scroll="body">
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography sx={{ mb: 1.5 }}>{description}</Typography>
      </DialogContent>
      <DialogActions>
        <Button onClick={() => close(0)}>Отменить</Button>
        {confirmButton &&
          // <LoadingButton
          //     onClick={handleClick}
          //     variant="contained"
          //     color={confirmButton.color || 'primary'}
          //     loading={loading}
          // >
          //     {confirmButton.text}
          // </LoadingButton>
          null}
      </DialogActions>
    </Dialog>
  );
};
