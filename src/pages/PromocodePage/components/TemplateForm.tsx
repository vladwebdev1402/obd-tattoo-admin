import Input from "@/UI/input/Input";
import { IPromocode } from "@/types/IPromocode";
import React, { FC } from "react";

interface Props {
  promocode: IPromocode;
  setPromocode: (value: IPromocode) => void;
  submit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const TemplateForm: FC<Props> = ({ promocode, setPromocode, submit }) => {
  return (
    <form onSubmit={submit}>
      <Input
        title="name"
        value={promocode.name}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPromocode({ ...promocode, name: e.target.value })
        }
      />
      <Input
        title="promocode"
        value={promocode.promocode}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPromocode({ ...promocode, promocode: e.target.value })
        }
      />
      <Input
        title="description"
        value={promocode.description}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPromocode({ ...promocode, description: e.target.value })
        }
      />
      <Input
        title="discount"
        value={promocode.discount.toString()}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPromocode({ ...promocode, discount: Number(e.target.value) })
        }
      />
      <Input
        title="image"
        value={promocode.image}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setPromocode({ ...promocode, image: e.target.value })
        }
      />
    </form>
  );
};

export default TemplateForm;
