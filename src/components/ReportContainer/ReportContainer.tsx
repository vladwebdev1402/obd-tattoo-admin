import CategoryOperation from "@/UI/CategoryOperation/CategoryOperation";
import st from "./ReportContainer.module.scss";
import React, { FC } from "react";
import ClipButton from "@/UI/button/ClipButton/ClipButton";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  onReport: () => void;
  onGet: () => void;
}
const ReportContainer: FC<Props> = ({ onReport, onGet, children }) => {
  return (
    <CategoryOperation title="Отчёт" className={st.report}>
      {children}
      <div className={st.report__buttons}>
        <ClipButton onClick={() => onGet()} theme="dark" className={st.btn}>
          Запросить данные
        </ClipButton>
        <ClipButton onClick={() => onReport()} theme="dark" className={st.btn}>
          Скачать отчёт
        </ClipButton>
      </div>
    </CategoryOperation>
  );
};

export default ReportContainer;
