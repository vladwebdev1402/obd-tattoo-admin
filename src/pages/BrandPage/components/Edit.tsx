import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { FC, useMemo, useState } from "react";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const brand = BrandStore.data.filter((b) => b._id === current)[0];
  const [edit, setEdit] = useState({
    image: brand.image,
    name: brand.name,
  });

  const onEdit = () => {
    if (edit.name && edit.image) {
      BrandStore.edit({
        ...brand,
        ...edit,
      });
    }
  };

  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEdit({ ...edit, name: e.target.value })
        }
        value={edit.name}
        title="name"
      />
      <Input
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setEdit({ ...edit, image: e.target.value })
        }
        value={edit.image}
        title="image"
      />
    </Modal>
  );
};

export default Edit;
