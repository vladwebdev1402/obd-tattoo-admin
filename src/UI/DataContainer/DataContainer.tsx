import React, { FC } from "react";
import st from "./DataContainer.module.scss";
interface Props extends React.HTMLAttributes<HTMLDivElement> {
  error: string;
  isLoadingComplete: boolean;
  condition?: number;
}
const DataContainer: FC<Props> = ({
  error,
  isLoadingComplete,
  children,
  className,
  condition,
  ...props
}) => {
  return (
    <div className={`${className} ${st.container}`} {...props}>
      {!isLoadingComplete ? <div className={st.container__loader}></div> : ""}
      {isLoadingComplete && error && (
        <div className={st.container__error}>
          На сервере произошла ошибка: {error}
        </div>
      )}
      {isLoadingComplete &&
        !error &&
        React.Children.toArray(children).length > (condition ?? 1) &&
        children}
      {isLoadingComplete &&
        !error &&
        React.Children.toArray(children).length == (condition ?? 1) && (
          <div className={st.data__empty}>
            В текущей таблице отсутствуют данные. Создайте коллекции
          </div>
        )}
    </div>
  );
};

export default DataContainer;
