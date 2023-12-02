import Input from "@/UI/input/Input";
import { IPromocode } from "@/types/IPromocode";
import { ITemplateFormProps } from "@/types/Props";
import { StringIsNumber } from "@/utils/StringIsNumber";
import React, { FC } from "react";

interface Props extends ITemplateFormProps<IPromocode> {}

const TemplateForm: FC<Props> = ({ obj, setObj, submit }) => {
  return (
    <form onSubmit={submit}>
      <Input
        title="name"
        value={obj.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, name: e.target.value })
        }
      />
      <Input
        title="promocode"
        value={obj.promocode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({ ...obj, promocode: e.target.value })
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
        title="discount"
        value={obj.discount.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setObj({
            ...obj,
            discount: Number(
              StringIsNumber(obj.discount.toString(), e.target.value)
            ),
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
    </form>
  );
};

export default TemplateForm;
