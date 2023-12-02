import Modal from "@/UI/modal/Modal";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import IService from "@/types/IServise";
import { IEditrops } from "@/types/Props";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";

interface Props extends IEditrops {}

const Edit: FC<Props> = ({ current, setOpen }) => {
  const curService = ServiceStore.data.filter((s) => s._id === current)[0];

  const [service, setService] = useState<IService>({ ...curService });

  const onEdit = () => {
    if (
      service.name &&
      service.description &&
      service.image &&
      ((service.price.coin && service.price.coin > 0) ||
        (service.price.interest && service.price.interest > 0))
    ) {
      ServiceStore.edit(service);
      setService({
        _id: "",
        name: "",
        price: { coin: 0, interest: 0 },
        description: "",
        image: "IMAGE",
      });
    }
  };

  return (
    <Modal setOpen={setOpen} onEdit={onEdit}>
      <TemplateForm submit={onEdit} obj={service} setObj={setService} />
    </Modal>
  );
};

export default Edit;
