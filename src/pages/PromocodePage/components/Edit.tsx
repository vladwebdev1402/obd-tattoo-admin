import Modal from "@/UI/modal/Modal";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocode, IPromocodeImage } from "@/types/IPromocode";

interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = ({ setOpen, current }) => {
  const obj = PromocodeStore.data.filter((p) => p._id === current)[0];

  const [promocode, setPromocode] = useState<IPromocodeImage>({
    _id: obj._id,
    name: obj.name,
    promocode: obj.promocode,
    description: obj.description,
    discount: obj.discount,
    image: new FormData(),
  });

  const onEdit = async () => {
    if (
      promocode.name &&
      promocode.promocode &&
      promocode.description &&
      promocode.image.getAll("file").length > 0 &&
      !promocode.image.getAll("file").includes("indefined") &&
      promocode.discount > 0
    ) {
      const filename = await PromocodeStore.image(promocode.image);
      await PromocodeStore.edit({ ...promocode, image: filename });
      setOpen(false);
    }
  };
  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <TemplateForm
        currImage={obj.image}
        setObj={setPromocode}
        obj={promocode}
        submit={onEdit}
      />
    </Modal>
  );
};

export default Edit;
