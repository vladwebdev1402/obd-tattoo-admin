import Modal from "@/UI/modal/Modal";
import { useMessage } from "@/hooks/useMessage";
import ManagerStore from "@/store/ManagerStore/ManagerStore";
import { IEditrops } from "@/types/Props";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import React, { FC, useState } from "react";
import TempalteForm from "./TempalteForm";
interface Props extends IEditrops {}
const Edit: FC<Props> = ({ setOpen, current }) => {
  const { func, message } = useMessage(
    () => {
      return (
        Boolean(edit.name) &&
        Boolean(edit.surname) &&
        Boolean(edit.patroname) &&
        Boolean(edit.phone) &&
        Boolean(edit.mail) &&
        Boolean(edit.telegram) &&
        Boolean(edit.viber) &&
        Boolean(edit.whatsapp)
      );
    },
    async () => {
      const filename = CheckImage(edit.image)
        ? await ManagerStore.image(edit.image)
        : GetFilenameFromUrl(manager.image);

      await ManagerStore.edit({
        ...manager,
        ...edit,
        image: filename,
      });
      setOpen(false);
    },
    "",
    "Заполните все обязательные поля. Изображение загружать необязательно"
  );
  const manager = ManagerStore.data.filter((b) => b._id === current)[0];
  const [edit, setEdit] = useState({
    ...manager,
    image: new FormData(),
  });

  return (
    <Modal onEdit={func} setOpen={setOpen}>
      <TempalteForm
        currImage={manager.image}
        submit={func}
        obj={edit}
        setObj={setEdit}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
