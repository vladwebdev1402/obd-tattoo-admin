import Modal from "@/UI/modal/Modal";
import ItemStore from "@/store/ItemStore/ItemStore";
import { CheckEditItem, IItemImage } from "@/types/IItem";
import { IEditrops } from "@/types/Props";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import { useMessage } from "@/hooks/useMessage";
interface Props extends IEditrops {}
const Edit: FC<Props> = ({ current, setOpen }) => {
  const curItem = ItemStore.data.filter((i) => i._id === current)[0];
  const [obj, setObj] = useState<IItemImage>({
    ...curItem,
    image: new FormData(),
  });

  const { func, message } = useMessage(
    () => CheckEditItem(obj),
    async () => {
      if (CheckImage(obj.image)) {
        const filename = await ItemStore.image(obj.image);
        await ItemStore.edit({ ...obj, image: filename });
      } else
        await ItemStore.edit({
          ...obj,
          image: GetFilenameFromUrl(curItem.image),
        });
      setOpen(false);
    },
    "",
    "Заполните все обязательные поля, включая изображение"
  );

  return (
    <Modal setOpen={setOpen} onEdit={func}>
      <TemplateForm
        currImage={curItem.image}
        setObj={setObj}
        obj={obj}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
