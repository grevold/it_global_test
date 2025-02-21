import { useState } from "react";
import { Modal } from "../components/Modal/Modal";

export const MainPage = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <Modal isOpenedModal={open} setIsOpenedModal={setOpen} />
      <h1>Главная</h1>
      <button onClick={handleOpen}>Открыть окно</button>
    </div>
  );
};
