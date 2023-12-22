import Modal from "@/UI/modal/Modal";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import { IEditrops } from "@/types/Props";
import React, { FC, useState, useCallback } from "react";
import TemplateForm from "./TemplateForm";
import { IServiceImage } from "@/types/IServise";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import { useMessage } from "@/hooks/useMessage";

interface Props extends IEditrops {}

const Edit: FC<Props> = ({ current, setOpen }) => {
  const curService = ServiceStore.data.filter((s) => s._id === current)[0];

  const [service, setService] = useState<IServiceImage>({
    ...curService,
    image: new FormData(),
  });

  const onEdit = async () => {
    const filename = CheckImage(service.image)
      ? await ServiceStore.image(service.image)
      : GetFilenameFromUrl(curService.image);
    ServiceStore.edit({ ...service, image: filename });
    setService({
      _id: "",
      name: "",
      price: { coin: 0, interest: 0 },
      description: "",
      image: new FormData(),
    });
    setOpen(false);
  };

  const check = useCallback(
    () =>
      Boolean(service.name) &&
      Boolean(service.description) &&
      Boolean(
        (service.price.coin && service.price.coin > 0) ||
          (service.price.interest && service.price.interest > 0)
      ),
    [service]
  );

  const { func, message } = useMessage(
    check,
    onEdit,
    "",
    "Заполните все обязательные поля. Изображение загружать необязательно. Только одно поле из coin и interest должны быть заполнены"
  );

  return (
    <Modal setOpen={setOpen} onEdit={func}>
      <TemplateForm
        currImage={curService.image}
        submit={func}
        obj={service}
        setObj={setService}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
