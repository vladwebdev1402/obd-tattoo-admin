import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import StreetStore from "@/store/StreetStore";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
interface Props {
  setOpen: (value: boolean) => void;
  setCurrent: (value: string) => void;
}
const Data: FC<Props> = observer(({ setOpen, setCurrent }) => {
  return (
    <DataContainer
      isLoadingComplete={StreetStore.isLoadingComplete}
      error={StreetStore.error}
    >
      <TableRow fr={3} isTitle>
        <div>_id</div>
        <div>city</div>
        <div>name</div>
      </TableRow>
      {StreetStore.data.map((s) => (
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
