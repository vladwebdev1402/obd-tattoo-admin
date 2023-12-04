import Modal from "@/UI/modal/Modal";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import { IEditrops } from "@/types/Props";
import React, { FC, useState } from "react";
import TemplateForm from "./TemplateForm";
import { IServiceImage } from "@/types/IServise";
import { CheckImage } from "@/utils/CheckImage";

interface Props extends IEditrops {}

const Edit: FC<Props> = ({ current, setOpen }) => {
  const curService = ServiceStore.data.filter((s) => s._id === current)[0];

  const [service, setService] = useState<IServiceImage>({
    ...curService,
    image: new FormData(),
  });

  const onEdit = async () => {
    if (
      service.name &&
      service.description &&
      CheckImage(service.image) &&
      ((service.price.coin && service.price.coin > 0) ||
        (service.price.interest && service.price.interest > 0))
    ) {
      const imageUrl = await ServiceStore.image(service.image);
      ServiceStore.edit({ ...service, image: imageUrl });
      setService({
        _id: "",
        name: "",
        price: { coin: 0, interest: 0 },
        description: "",
        image: new FormData(),
      });
    }
  };

  return (
    <Modal setOpen={setOpen} onEdit={onEdit}>
      <TemplateForm
        currImage={curService.image}
        submit={onEdit}
        obj={service}
        setObj={setService}
      />
    </Modal>
  );
};

export default Edit;
