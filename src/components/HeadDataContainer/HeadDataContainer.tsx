import React, { FC } from "react";
import st from "./HeadDataContainer.module.scss";
import SearchStore from "@/store/SearchStore/SearchStore";
import { observer } from "mobx-react-lite";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}
const HeadDataContainer: FC<Props> = observer(({ ...props }) => {
  return (
    <div className={st.container}>
      <h1>Данные</h1>
      <input
        value={SearchStore.value}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          SearchStore.setValue(e.target.value)
        }
        type="text"
        placeholder="Поиск"
        className={`${st.myInput}`}
      />
    </div>
  );
});

export default HeadDataContainer;
