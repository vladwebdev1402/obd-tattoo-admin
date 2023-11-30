import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import IdNameStore from "@/store/IdNameStore";
import { observer } from "mobx-react-lite";
import React, { FC, useEffect, useState } from "react";

interface Props {
  link: string;
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = observer(({ link, setOpen, current }) => {
  const obj = IdNameStore.data.filter((data) => data._id === current)[0];

  const [filterName, setFilterName] = useState(obj.name);

  return (
    <Modal
      setOpen={setOpen}
      onEdit={() => {
        IdNameStore.edit(link, { name: filterName, _id: current });
      }}
    >
      <Input
        title="name"
        value={filterName}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setFilterName(e.target.value)
        }
      />
    </Modal>
  );
});

export default Edit;
