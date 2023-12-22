import CreateContainer from "@/components/CreateContainer/CreateContainer";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocodeImage } from "@/types/IPromocode";
import React, { useState, useCallback } from "react";
import TemplateForm from "./TemplateForm";
import { CheckImage } from "@/utils/CheckImage";
import { useMessage } from "@/hooks/useMessage";

const Create = () => {
  const [promocode, setPromocode] = useState<IPromocodeImage>({
    _id: "",
    name: "",
    promocode: "",
    description: "",
    discount: 0,
    image: new FormData(),
  });

  const check = useCallback(
    () =>
      Boolean(promocode.name) &&
      Boolean(promocode.promocode) &&
      Boolean(promocode.description) &&
      CheckImage(promocode.image) &&
      promocode.discount > 0,
    [promocode]
  );

  const onCreate = useCallback(async () => {
    const filename = await PromocodeStore.image(promocode.image);
    PromocodeStore.create({ ...promocode, image: filename });
    setPromocode({
      _id: "",
      name: "",
      promocode: "",
      description: "",
      discount: 0,
      image: new FormData(),
    });
  }, [promocode]);

  const { func, message } = useMessage(
    check,
    onCreate,
    "Новая коллекция успешно создана",
    "Заполните все обязательные поля, включая изображение"
  );

  return (
    <CreateContainer onCreate={func}>
      <TemplateForm
        submit={func}
        setObj={setPromocode}
        obj={promocode}
        message={message}
      />
    </CreateContainer>
  );
};

export default Create;
