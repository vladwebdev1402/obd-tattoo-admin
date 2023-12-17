import { IOrderParams } from "@/types/IOrder";
import { FC } from "react";
import st from "./st.module.scss";
interface Props {
  filters: IOrderParams;
  setFilters: (filters: IOrderParams) => void;
}

const Filter: FC<Props> = ({ filters, setFilters }) => {
  const changeStart = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, start: e.target.value });
  };

  const changeEnd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, end: e.target.value });
  };

  return (
    <form className={st.filter}>
      <div className={st.filter__date}>
        <div className={st.filter__title}>С*</div>
        <input type="date" value={filters.start} onChange={changeStart} />
      </div>
      <div className={st.filter__date}>
        <div className={st.filter__title}>По*</div>
        <input type="date" value={filters.end} onChange={changeEnd} />
      </div>
    </form>
  );
};

export default Filter;
