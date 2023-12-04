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
    image: new FormData(),
  });

  const onEdit = async () => {
    if (
      edit.name &&
      edit.image.getAll.length > 0 &&
      !edit.image.getAll("file").includes("undefined")
    ) {
      const filename = await BrandStore.image(edit.image);
      console.log(filename);
      await BrandStore.edit({
        ...brand,
        ...edit,
        image: filename,
      });
    }
  };

  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <TemplateForm
        submit={onEdit}
        setObj={setEdit}
        obj={edit}
        currImage={brand.image}
      />
    </Modal>
  );
};

export default Edit;
