import Input from "@/UI/input/Input";
import Modal from "@/UI/modal/Modal";
import BrandStore from "@/store/BrandStore/BrandStore";
import React, { FC, useMemo, useState } from "react";
import TemplateForm from "./TemplateForm";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import { useMessage } from "@/hooks/useMessage";
interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const { func, message } = useMessage(
    () => {
      return Boolean(edit.name);
    },
    async () => {
      const filename = CheckImage(edit.image)
        ? await BrandStore.image(edit.image)
        : GetFilenameFromUrl(brand.image);

      await BrandStore.edit({
        ...brand,
        ...edit,
        image: filename,
      });
      setOpen(false);
    },
    "",
    "Заполните все обязательные поля. Изображение загружать необязательно"
  );
  const brand = BrandStore.data.filter((b) => b._id === current)[0];
  const [edit, setEdit] = useState({
    ...brand,
    image: new FormData(),
  });

  return (
    <Modal onEdit={func} setOpen={setOpen}>
      <TemplateForm
        submit={func}
        setObj={setEdit}
        obj={edit}
        currImage={brand.image}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
