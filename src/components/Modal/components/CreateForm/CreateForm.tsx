import s from "./CreateForm.module.css";

interface Props {
  closeModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export function CreateForm({ closeModal }: Props) {
  return (
    <div className={s.root}>
      <div className={s.container}>
        <div className={s.button_close_container}>
          <button
            onClick={() => closeModal((prev) => !prev)}
            className={s.button_close}
          >
            X
          </button>
        </div>
        <div className={s.modal_container}>
          <span className={s.title}>Модальное окно</span>
          <div className={s.options_container}></div>
          <div className={s.inputs_container}></div>
          <div className={s.buttons_container}>
            <button
              className={s.button_save}
              onClick={() => {
                console.log("save");
              }}
            >
              Сохранить
            </button>
            <button
              className={s.button_cancell}
              onClick={() => {
                closeModal((prev) => !prev);
              }}
            >
              Отмена
            </button>
          </div>
        </div>
      </div>
      <div className={s.bg} />
    </div>
  );
}
