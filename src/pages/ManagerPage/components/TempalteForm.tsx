import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import Message from "@/UI/Message/Message";
import Input from "@/UI/input/Input";
import ImageInput from "@/UI/input/image/ImageInput";
import { ITemplateFormProps } from "@/types/Props";
import React, { FC } from "react";
import st from "./st.module.scss";
import { ChangeImage } from "@/UI/input/image/ChangeImage";
import { IManagerImage } from "@/types/IManager";
interface Props extends ITemplateFormProps<IManagerImage> {}

const TempalteForm: FC<Props> = ({
  currImage = "",
  obj,
  message = "",
  setObj,
  submit,
}) => {
  return (
    <ContainerTemplateForm onEvent={submit}>
      <div className={st.form__row}>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, name: e.target.value })
          }
          value={obj.name}
          title="name*"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, surname: e.target.value })
          }
          value={obj.surname}
          title="surname*"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, patroname: e.target.value })
          }
          value={obj.patroname}
          title="patroname*"
        />
      </div>
      <div className={st.form__row}>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, mail: e.target.value })
          }
          value={obj.mail}
          title="mail*"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, phone: e.target.value })
          }
          value={obj.phone}
          title="phone*"
        />
      </div>
      <div className={st.form__row}>
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, viber: e.target.value })
          }
          value={obj.viber}
          title="viber*"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, telegram: e.target.value })
          }
          value={obj.telegram}
          title="telegram*"
        />
        <Input
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, whatsapp: e.target.value })
          }
          value={obj.whatsapp}
          title="whatsapp*"
        />
      </div>

      <div className={st.images}>
        {currImage && (
          <ImageContainer img={currImage} className_img={st.image} />
        )}

        <ImageInput
          data={obj.image}
          onChange={ChangeImage(obj, setObj)}
          className={st.image}
        />
      </div>
      <Message>{message}</Message>
    </ContainerTemplateForm>
  );
};

export default TempalteForm;
