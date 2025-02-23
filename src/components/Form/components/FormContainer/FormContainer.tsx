import { CrossDeleteIcon } from "../../../../icons/CrossDeleteIcon";
import { DateInput } from "../../../Inputs/DateInput/DateInput";
import { FormInput } from "../../../Inputs/FormInput/FormInput";
import { FormInputMultiple } from "../../../Inputs/FormInputMultiple/FormInputMultiple";
import s from "./FormContainer.module.css";

export function FormContainer() {
  return (
    <div className={s.root}>
      <h2 className={s.header}>
        STSK0004783 На инциденте, запросе, проблеме, в статусе закрыто некоторые
        поля остаются редактируемыми для агента если он Caller
      </h2>
      <div className={s.container}>
        <div className={s.column}>
          <div className={s.item}>
            <span>
              <span style={{ color: "#B21F00", marginRight: "4px" }}>*</span>
              Тема
            </span>
            <FormInput placeHolder="Тема" value="" />
          </div>
          <div className={s.item}>
            <span>Описание</span>
            <FormInput placeHolder="Тема" value="" />
          </div>
          <div className={s.item}>
            <span>
              <span style={{ color: "#B21F00", marginRight: "4px" }}>*</span>
              Рабочие заметки
            </span>
            <FormInput placeHolder="Тема" value="" />
          </div>
          <div className={s.item}>
            <span>Ответственный</span>
            <FormInputMultiple
              values={[
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
              ]}
              icon={() => <CrossDeleteIcon />}
            />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <span>Статус</span>
            <FormInput placeHolder="Статус" value="Новая" />
          </div>
          <div className={s.item}>
            <span>Продукт</span>
            <FormInput placeHolder="Продукт" value="Platform" />
          </div>
          <div className={s.item}>
            <span>Приоритет</span>
            <FormInput placeHolder="Приоритет" value="Средний" />
          </div>
          <div className={s.item}>
            <span>Группа</span>
            <FormInputMultiple
              values={["Support Group"]}
              icon={() => <CrossDeleteIcon />}
            />
          </div>
        </div>
      </div>
      <div className={s.item}>
        <span>Комментарий</span>
        <FormInput placeHolder="Тема" value="" />
      </div>
      <div className={s.item}>
        <span>Согласующие</span>
        <FormInputMultiple
          values={[
            "Андрей Казанцев",
            "Андрей Казанцев",
            "Андрей Казанцев",
            "Андрей Казанцев",
            "Андрей Казанцев",
            "Андрей Казанцев",
          ]}
          icon={() => <CrossDeleteIcon />}
        />
      </div>

      <div className={s.container}>
        <div className={s.column}>
          <div className={s.item}>
            <span>Когда открыто</span>
            <DateInput date="20.07.2025" />
          </div>
          <div className={s.item}>
            <span>Кем открыто</span>
            <FormInputMultiple
              values={[
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
              ]}
              icon={() => <CrossDeleteIcon />}
            />
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <span>Когда создано</span>
            <DateInput date="20.07.2025" />
          </div>
          <div className={s.item}>
            <span>Кем создано</span>
            <FormInputMultiple
              values={[
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
                "Андрей Казанцев",
              ]}
              icon={() => <CrossDeleteIcon />}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
