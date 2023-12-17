import React, { FC } from "react";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  data: any[];
  error: string;
  isLoadingComplete: boolean;
}
const ReportMessage: FC<Props> = ({
  data,
  error,
  isLoadingComplete,
  className = "",
}) => {
  return (
    <div className={className}>
      {data.length === 0 &&
        !error &&
        isLoadingComplete &&
        "Массив данных пуст. Запросите данные или смените фильтры для формирования отчёта"}
      {data.length > 0 &&
        !error &&
        isLoadingComplete &&
        "Данные успешно получены. Отчёт сформирован. Можете скачать"}

      {!isLoadingComplete && "Загрузка данных"}

      {isLoadingComplete && error}
    </div>
  );
};

export default ReportMessage;
