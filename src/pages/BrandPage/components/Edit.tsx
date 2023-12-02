import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { FC, useMemo, useState } from "react";
import TemplateForm from "./TemplateForm";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const brand = BrandStore.data.filter((b) => b._id === current)[0];
  const [edit, setEdit] = useState({
    ...brand,
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
      <TemplateForm submit={onEdit} setObj={setEdit} obj={edit} />
    </Modal>
  );
};

export default Edit;
