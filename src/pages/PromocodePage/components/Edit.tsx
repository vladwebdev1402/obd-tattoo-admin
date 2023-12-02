import Modal from "@/UI/modal/Modal";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocode } from "@/types/IPromocode";

interface Props {
  setOpen: (value: boolean) => void;
  current: string;
}

const Edit: FC<Props> = ({ setOpen, current }) => {
  const obj = PromocodeStore.data.filter((p) => p._id === current)[0];

  const [promocode, setPromocode] = useState<IPromocode>({
    _id: obj._id,
    name: obj.name,
    promocode: obj.promocode,
    description: obj.description,
    discount: obj.discount,
    image: obj.description,
  });

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onEdit();
  };

  const onEdit = async () => {
    if (
      promocode.name &&
      promocode.promocode &&
      promocode.description &&
      promocode.image &&
      promocode.discount > 0
    ) {
      await PromocodeStore.edit(promocode);
      setOpen(false);
    }
  };

  return (
    <Modal onEdit={onEdit} setOpen={setOpen}>
      <TemplateForm
        setObj={setPromocode}
        obj={promocode}
        submit={submitEvent}
      />
    </Modal>
  );
};

export default Edit;
