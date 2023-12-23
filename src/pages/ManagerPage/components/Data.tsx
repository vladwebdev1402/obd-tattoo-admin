import DataContainer from "@/UI/DataContainer/DataContainer";
import TableRow from "@/components/TableRow/TableRow";
import ManagerStore from "@/store/ManagerStore/ManagerStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import { IManager } from "@/types/IManager";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
interface Props {
  setCurrent: (value: string) => void;
  setOpen(value: boolean): void;
}
const Data: FC<Props> = observer(({ setCurrent, setOpen }) => {
  const getFilter = (obj: IManager): boolean => {
    return (
      obj.name.toLowerCase().includes(SearchStore.getValue()) ||
      obj.surname.toLowerCase().includes(SearchStore.getValue()) ||
      obj.patroname.toLowerCase().includes(SearchStore.getValue()) ||
      obj.mail.toLowerCase().includes(SearchStore.getValue()) ||
      obj.phone.toLowerCase().includes(SearchStore.getValue()) ||
      obj.viber.toLowerCase().includes(SearchStore.getValue()) ||
      obj.telegram.toLowerCase().includes(SearchStore.getValue()) ||
      obj.whatsapp.toLowerCase().includes(SearchStore.getValue()) ||
      obj._id.toLowerCase().includes(SearchStore.getValue()) ||
      false
    );
  };

  return (
    <div>
      <DataContainer
        isLoadingComplete={ManagerStore.isLoadingComplete}
        error={ManagerStore.error}
      >
        <TableRow isTitle fr={9}>
          <div>name</div>
          <div>surname</div>
          <div>patroname</div>
          <div>mail</div>
          <div>phone</div>
          <div>viber</div>
          <div>telegram</div>
          <div>whatsapp</div>
          <div>image</div>
        </TableRow>
        {ManagerStore.data
          .filter((data) => getFilter(data))
          .map((data) => (
            <TableRow
              fr={9}
              key={data._id}
              onOpen={() => {
                setCurrent(data._id);
                setOpen(true);
              }}
            >
              <div>{data.name}</div>
              <div>{data.surname}</div>
              <div>{data.patroname}</div>
              <div>{data.mail}</div>
              <div>{data.phone}</div>
              <div>{data.viber}</div>
              <div>{data.telegram}</div>
              <div>{data.whatsapp}</div>
              <div>
                <img src={data.image} />
              </div>
            </TableRow>
          ))}
      </DataContainer>
    </div>
  );
});

export default Data;
