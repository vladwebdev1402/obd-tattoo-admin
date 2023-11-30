import DataContainer from "@/UI/DataContainer/DataContainer";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import TableRow from "@/components/TableRow/TableRow";
import SearchStore from "@/store/SearchStore/SearchStore";
import StreetStore from "@/store/StreetStore";
import IStreet from "@/types/IStreet";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
interface Props {
  setOpen: (value: boolean) => void;
  setCurrent: (value: string) => void;
}
const Data: FC<Props> = observer(({ setOpen, setCurrent }) => {
  const getFilter = (obj: IStreet): boolean => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj.city.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };
  return (
    <DataContainer
      isLoadingComplete={StreetStore.isLoadingComplete}
      error={StreetStore.error}
    >
      <HeadDataContainer />
      <TableRow fr={3} isTitle>
        <div>_id</div>
        <div>city</div>
        <div>name</div>
      </TableRow>
      {StreetStore.data
        .filter((s) => getFilter(s))
        .map((s) => (
          <TableRow
            key={s._id}
            fr={3}
            onOpen={() => {
              setOpen(true);
              setCurrent(s._id);
            }}
            onDelete={() => StreetStore.delete(s._id)}
          >
            <div>{s._id}</div>
            <div>{s.city}</div>
            <div>{s.name}</div>
          </TableRow>
        ))}
    </DataContainer>
  );
});

export default Data;
