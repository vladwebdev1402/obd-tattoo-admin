import CreateContainer from "@/components/CreateContainer/CreateContainer";
import React, { useState, useCallback } from "react";
import TemplateForm from "./TemplateForm";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import { IServiceImage } from "@/types/IServise";
import { CheckImage } from "@/utils/CheckImage";
import { useMessage } from "@/hooks/useMessage";
const Create = () => {
  const [service, setService] = useState<IServiceImage>({
    _id: "",
    description: "",
    image: new FormData(),
    name: "",
    price: {
      coin: 0,
      interest: 0,
    },
  });

  const check = useCallback(
    () =>
      Boolean(service.name) &&
      Boolean(service.description) &&
      CheckImage(service.image) &&
      Boolean(
        (service.price.coin && service.price.coin > 0) ||
          (service.price.interest && service.price.interest > 0)
      ),
    [service]
  );

  const onCreate = useCallback(async () => {
    const imageUrl = await ServiceStore.image(service.image);
    ServiceStore.create({ ...service, image: imageUrl });
    setService({
      _id: "",
      name: "",
      price: { coin: 0, interest: 0 },
      description: "",
      image: new FormData(),
    });
  }, [service]);

  const { func, message } = useMessage(
    check,
    onCreate,
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля, включая изображение. Только одно поле из coin и interest должны быть заполнены"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm
        submit={func}
        obj={service}
        setObj={setService}
        message={message}
      />
    </CreateContainer>
  );
};

export default Create;
