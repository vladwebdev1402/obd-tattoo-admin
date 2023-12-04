import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import SearchStore from "@/store/SearchStore/SearchStore";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import { IService } from "@/types/IServise";
import { IDataProps } from "@/types/Props";
import { observer } from "mobx-react-lite";
import st from "./st.module.scss";
import React, { FC } from "react";

interface Props extends IDataProps {}

const Data: FC<Props> = observer(({ setCurrent, setOpen }) => {
  const getFilter = (obj: IService) => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      obj.description.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };

  return (
    <DataContainer
      error={ServiceStore.error}
      isLoadingComplete={ServiceStore.isLoadingComplete}
    >
      <TableRow fr={6} isTitle className={st.table__row}>
        <div>_id</div>
        <div>name</div>
        <div>description</div>
        <div>coin</div>
        <div>interest</div>
        <div>image</div>
      </TableRow>
      {ServiceStore.data
        .filter((s) => getFilter(s))
        .map((s) => (
          <TableRow
            className={st.table__row}
            onDelete={() => ServiceStore.delete(s._id)}
            onOpen={() => {
              setCurrent(s._id);
              setOpen(true);
            }}
            key={s._id}
            fr={5}
          >
            <div>{s._id}</div>
            <div>{s.name}</div>
            <div>{s.description}</div>
            <div>{s.price.coin ?? 0}</div>
            <div>{s.price.interest ?? 0}</div>
            <div>
              <img src={s.image} alt="" />
            </div>
          </TableRow>
        ))}
    </DataContainer>
  );
});

export default Data;
