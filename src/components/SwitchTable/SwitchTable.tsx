import React from "react";
import st from "./SwitchTable.module.scss";
import FilterButton from "@/UI/button/FilterButton/FilterButton";
import { observer } from "mobx-react-lite";
import ITable from "@/types/ITable";
import { useNavigate, useMatch } from "react-router-dom";
import CategoryOperation from "@/UI/CategoryOperation/CategoryOperation";
import { tables } from "./data";
const SwitchTable = observer(() => {
  const navigate = useNavigate();
  const click = (table: ITable) => {
    navigate(table.link);
  };
  return (
    <CategoryOperation
      title="Выбор таблицы"
      className={`${st.switch} container`}
    >
      <div className={st.switch__body}>
        <div className={st.switch__category}>
          <div className={st.switch__title}>Классификаторы</div>
          <ul className={st.switch__list}>
            {tables
              .filter((table) => table.class === true)
              .map((table) => (
                <li key={table.link}>
                  <FilterButton
                    active={useMatch(table.link) !== null}
                    onClick={() => {
                      click(table);
                    }}
                  >
                    {table.name}
                  </FilterButton>
                </li>
              ))}
          </ul>
        </div>
        <div className={st.switch__category}>
          <div className={st.switch__title}>Таблицы с данными</div>
          <ul className={st.switch__list}>
            {tables
              .filter((table) => table.class === false)
              .map((table) => (
                <li key={table.link}>
                  <FilterButton
                    active={useMatch(table.link) !== null}
                    onClick={() => {
                      click(table);
                    }}
                  >
                    {table.name}
                  </FilterButton>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </CategoryOperation>
  );
});

export default SwitchTable;
