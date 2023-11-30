import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import IdNameStore from "@/store/IdNameStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import IIdName from "@/types/IIdName";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
interface Props {
  link: string;
  setCurrent: (value: string) => void;
  setOpen(value: boolean): void;
}
const Data: FC<Props> = observer(({ link, setCurrent, setOpen }) => {
  const onDelete = (_id: string) => {
    IdNameStore.delete(link, _id);
  };

  const getFilter = (obj: IIdName) => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };

  return (
    <DataContainer
      error={IdNameStore.error}
      isLoadingComplete={IdNameStore.isLoadingComplete}
    >
      <TableRow fr={2} isTitle>
        <div>_id</div>
        <div>name</div>
      </TableRow>

      {IdNameStore.data
        .filter((data) => getFilter(data))
        .map((data) => (
          <TableRow
            fr={2}
            key={data._id}
            onDelete={() => onDelete(data._id)}
            onOpen={() => {
              setCurrent(data._id);
              setOpen(true);
            }}
          >
            <div>{data._id}</div>
            <div>{data.name}</div>
          </TableRow>
        ))}
    </DataContainer>
  );
});

export default Data;
