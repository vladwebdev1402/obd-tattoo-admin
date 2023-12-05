import Modal from "@/UI/modal/Modal";
import ItemStore from "@/store/ItemStore/ItemStore";
import { CheckEditItem, IItemImage } from "@/types/IItem";
import { IEditrops } from "@/types/Props";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
interface Props extends IEditrops {}
const Edit: FC<Props> = ({ current, setOpen }) => {
  const curItem = ItemStore.data.filter((i) => i._id === current)[0];
  const [obj, setObj] = useState<IItemImage>({
    ...curItem,
    image: new FormData(),
  });

  const onEdit = async () => {
    if (CheckEditItem(obj)) {
      if (CheckImage(obj.image)) {
        const filename = await ItemStore.image(obj.image);
        await ItemStore.edit({ ...obj, image: filename });
      } else
        await ItemStore.edit({
          ...obj,
          image: GetFilenameFromUrl(curItem.image),
        });
    }
  };

  return (
    <Modal setOpen={setOpen} onEdit={onEdit}>
      <TemplateForm currImage={curItem.image} setObj={setObj} obj={obj} />
    </Modal>
  );
};

export default Edit;
