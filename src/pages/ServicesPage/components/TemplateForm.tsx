import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import Input from "@/UI/input/Input";
import ImageInput from "@/UI/input/image/ImageInput";
import { IServiceImage } from "@/types/IServise";
import { ITemplateFormProps } from "@/types/Props";
import { StringIsNumber } from "@/utils/StringIsNumber";
import React, { FC } from "react";
import st from "./st.module.scss";
import { ChangeImage } from "@/UI/input/image/ChangeImage";
import Textarea from "@/UI/textarea/Textarea";
interface Props extends ITemplateFormProps<IServiceImage> {
  currImage?: string;
}
const TemplateForm: FC<Props> = ({ currImage = "", obj, setObj, submit }) => {
  return (
    <ContainerTemplateForm onSubmit={submit}>
      <div className={st.form_nameCoinInteres}>
        <Input
          title="name"
          value={obj.name}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({ ...obj, name: e.target.value })
          }
        />

        <Input
          title="interest"
          value={obj.price.interest?.toString() ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({
              ...obj,
              price: {
                interest: Number(
                  StringIsNumber(
                    obj.price.interest?.toString() ?? "",
                    e.target.value
                  )
                ),
              },
            })
          }
        />

        <Input
          title="coin"
          value={obj.price.coin?.toString() ?? ""}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setObj({
              ...obj,
              price: {
                coin: Number(
                  StringIsNumber(
                    obj.price.coin?.toString() ?? "",
                    e.target.value
                  )
                ),
              },
            })
          }
        />
      </div>

      <Textarea
        title="description"
        value={obj.description}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
          setObj({ ...obj, description: e.target.value })
        }
      />
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
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
