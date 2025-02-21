import { CreateForm } from "./components/CreateForm/CreateForm";
import s from "./Modal.module.css";

interface Props {
  isOpenedModal: boolean;
  setIsOpenedModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function Modal({ isOpenedModal, setIsOpenedModal }: Props) {
  return (
    <div className={isOpenedModal ? s.root_visible : s.root_unvisible}>
      <div className={s.container}>
        <CreateForm closeModal={setIsOpenedModal} />
      </div>
      <div className={s.bg} onClick={() => setIsOpenedModal((prev) => !prev)} />
    </div>
  );
}
