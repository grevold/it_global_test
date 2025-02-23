import { useState } from "react";
import { Modal } from "../Modal/Modal";
import { FormHeader } from "./components/FormHeader/FormHeader";

import s from "./Form.module.css";
import { FormContainer } from "./components/FormContainer/FormContainer";

export const Form = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div className={s.root}>
      <Modal isOpenedModal={open} setIsOpenedModal={setOpen} />
      <FormHeader />
      <FormContainer />
    </div>
  );
};
