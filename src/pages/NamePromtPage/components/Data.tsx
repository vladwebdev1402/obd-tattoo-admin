import DataContainer from "@/UI/DataContainer/DataContainer";
import HeadDataContainer from "@/components/HeadDataContainer/HeadDataContainer";
import TableRow from "@/components/TableRow/TableRow";
import NamePromtStore from "@/store/NamePromtStore";
import SearchStore from "@/store/SearchStore/SearchStore";
import INamePrompt from "@/types/INamePrompt";
import { observer } from "mobx-react-lite";
import React, { FC } from "react";
interface Props {
  link: string;
  setCurrent: (current: string) => void;
  className: string;
  setOpen: (open: boolean) => void;
}

const getFilter = (obj: INamePrompt): boolean => {
  return (
    obj.name.toLowerCase().includes(SearchStore.getValue()) ||
    obj.promt.toLowerCase().includes(SearchStore.getValue()) ||
    obj._id.toLowerCase().includes(SearchStore.getValue()) ||
    false
  );
};

const Data: FC<Props> = observer(({ link, setOpen, setCurrent, className }) => {
  return (
    <div>
      <HeadDataContainer />
      <DataContainer
        isLoadingComplete={NamePromtStore.isLoadingComplete}
        error={NamePromtStore.error}
      >
        <TableRow isTitle fr={3}>
          <div>_id</div>
          <div>promt</div>
          <div>name</div>
        </TableRow>
        {NamePromtStore.data
          .filter((data) => getFilter(data))
          .map((data) => (
            <TableRow
              fr={3}
              key={data._id}
              onOpen={() => {
                setCurrent(data._id);
                setOpen(true);
              }}
              onDelete={() => NamePromtStore.delete(link, data._id)}
            >
              <div>{data._id}</div>
              <div>{data.promt}</div>
              <div>{data.name}</div>
            </TableRow>
          ))}
      </DataContainer>
    </div>
  );
});

export default Data;
