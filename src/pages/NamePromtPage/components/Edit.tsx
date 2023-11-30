import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import NamePromtStore from "@/store/NamePromtStore";
import React, { FC, useState } from "react";
interface Props {
  link: string;
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = ({ link, setOpen, current }) => {
  const obj = NamePromtStore.data.filter((d) => d._id === current)[0];

  const [editObj, setEditObj] = useState({
    name: obj.name,
    promt: obj.promt,
  });

  const onEdit = async () => {
    if (editObj.name && editObj.promt) {
      await NamePromtStore.edit(link, {
        _id: obj._id,
        name: editObj.name,
        promt: editObj.promt,
      });
    }
  };
  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <Input
        title="name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEditObj({ ...editObj, name: e.target.value })
        }
        value={editObj.name}
      />
      <Input
        title="promt"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEditObj({ ...editObj, promt: e.target.value })
        }
        value={editObj.promt}
      />
    </Modal>
  );
};

export default Edit;
