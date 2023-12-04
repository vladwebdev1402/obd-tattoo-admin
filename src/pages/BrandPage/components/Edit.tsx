import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { FC, useMemo, useState } from "react";
import TemplateForm from "./TemplateForm";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
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
    if (edit.name) {
      const filename = CheckImage(edit.image)
        ? await BrandStore.image(edit.image)
        : GetFilenameFromUrl(brand.image);

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
