import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import Input from "@/UI/input/Input";
import IService from "@/types/IServise";
import { ITemplateFormProps } from "@/types/Props";
import { StringIsNumber } from "@/utils/StringIsNumber";
import React, { FC } from "react";
interface Props extends ITemplateFormProps<IService> {}
const TemplateForm: FC<Props> = ({ obj, setObj, submit }) => {
  return (
    <ContainerTemplateForm onSubmit={submit}>
      <Input
        title="name"
        value={obj.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
      />
      <Input
        title="description"
        value={obj.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, description: e.target.value })
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
                StringIsNumber(obj.price.coin?.toString() ?? "", e.target.value)
              ),
            },
          })
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
        title="image"
        value={obj.image}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, image: e.target.value })
        }
      />
    </ContainerTemplateForm>
  );
};

export default TemplateForm;
