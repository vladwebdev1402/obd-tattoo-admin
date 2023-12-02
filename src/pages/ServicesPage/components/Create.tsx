import CreateContainer from "@/components/CreateContainer/CreateContainer";
import React, { useState } from "react";
import TemplateForm from "./TemplateForm";
import IService from "@/types/IService";
import ServiceStore from "@/store/ServiceStore/ServiceStore";
const Create = () => {
  const [service, setService] = useState<IService>({
    _id: "",
    description: "",
    image: "",
    name: "",
    price: {
      coin: 0,
      interest: 0,
    },
  });

  const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onCreate();
  };

  const onCreate = () => {
    if (
      service.name &&
      service.description &&
      service.image &&
      ((service.price.coin && service.price.coin > 0) ||
        (service.price.interest && service.price.interest > 0))
    ) {
      ServiceStore.create(service);
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
    <CreateContainer onCreate={onCreate}>
      <TemplateForm submit={submitEvent} obj={service} setObj={setService} />
    </CreateContainer>
  );
};

export default Create;
