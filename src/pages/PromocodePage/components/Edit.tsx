import Modal from "@/UI/modal/Modal";
import React, { FC, useState, useCallback } from "react";
import TemplateForm from "./TemplateForm";
import PromocodeStore from "@/store/PromocodeStore/PromocodeStore";
import { IPromocodeImage } from "@/types/IPromocode";
import { CheckImage } from "@/utils/CheckImage";
import { GetFilenameFromUrl } from "@/utils/GetFilenameFromUrl";
import { useMessage } from "@/hooks/useMessage";

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

  const check = useCallback(
    () =>
      Boolean(promocode.name) &&
      Boolean(promocode.promocode) &&
      Boolean(promocode.description) &&
      promocode.discount > 0,
    [promocode]
  );

  const onEdit = useCallback(async () => {
    const filename = CheckImage(promocode.image)
      ? await PromocodeStore.image(promocode.image)
      : GetFilenameFromUrl(obj.image);
    await PromocodeStore.edit({ ...promocode, image: filename });
    setOpen(false);
  }, [promocode, obj]);

  const { func, message } = useMessage(
    check,
    onEdit,
    "",
    "Заполните все обязательные поля. Изображение загружать необязательно"
  );

  return (
    <Modal onEdit={func} setOpen={setOpen}>
      <TemplateForm
        currImage={obj.image}
        setObj={setPromocode}
        obj={promocode}
        submit={func}
        message={message}
      />
    </Modal>
  );
};

export default Edit;
