import CreateContainer from "@/components/CreateContainer/CreateContainer";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
import { IServiceImage } from "@/types/IServise";
import { CheckImage } from "@/utils/CheckImage";
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

  const onCreate = async () => {
    if (
      service.name &&
      service.description &&
      CheckImage(service.image) &&
      ((service.price.coin && service.price.coin > 0) ||
        (service.price.interest && service.price.interest > 0))
    ) {
      const imageUrl = await ServiceStore.image(service.image);
      ServiceStore.create({ ...service, image: imageUrl });
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
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={onCreate} obj={service} setObj={setService} />
    </CreateContainer>
  );
};

export default Create;
