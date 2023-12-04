import ContainerTemplateForm from "@/UI/ContainerTemplateForm/ContainerTemplateForm";
import { IItemImage } from "@/types/IItem";
import React, { FC, useState, useEffect } from "react";
import st from "./st.module.scss";
import Input from "@/UI/input/Input";
import { ITemplateFormProps } from "@/types/Props";
import { StringIsNumber } from "@/utils/StringIsNumber";
import Textarea from "@/UI/textarea/Textarea";
import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import BrandStore from "@/store/BrandStore/BrandStore";
import IdNameStore from "@/store/IdNameStore";
import IIdName from "@/types/IIdName";
import { IBrand } from "@/types/IBrand";
import IDropdownValue from "@/types/IDropdownValue";
import { observer } from "mobx-react-lite";
import { CheckImage } from "@/utils/CheckImage";
import Checkbox from "@/UI/input/checkbox/Checkbox";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import ImageInput from "@/UI/input/image/ImageInput";
import { ChangeImage } from "@/UI/input/image/ChangeImage";

const TemplateForm: FC<ITemplateFormProps<IItemImage>> = observer(
  ({ obj, setObj, current = "", submit, currImage = "" }) => {
    const [brands, setBrands] = useState<IBrand[]>([]);
    const [categorys, setCategorys] = useState<IIdName[]>([]);
    const [curBrand, setCurBrand] = useState<IDropdownValue>({
      name: "",
      value: "",
    });
    const [curCategory, setCurCategory] = useState<IDropdownValue>({
      name: "",
      value: "",
    });

    const changeBrand = (_id: string) => {
      setObj({ ...obj, brand: _id });
    };

    const changeCategory = (_id: string) => {
      setObj({ ...obj, category: _id });
    };

    useEffect(() => {
      BrandStore.getAll().then((res) => {
        console.log(res);
        setBrands(res);
      });
      IdNameStore.getAll("category").then((res) => setCategorys(res));
    }, []);

    return (
      <ContainerTemplateForm>
        <div className={st.create__inputs1}>
          <Input
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({ ...obj, name: e.target.value })
            }
            value={obj.name}
            title="name*"
          />
          <Input
            className={st.create__input1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                price: Number(
                  StringIsNumber(obj.price.toString(), e.target.value)
                ),
              })
            }
            value={obj.price.toString()}
            title="price*"
          />
          <Input
            className={st.create__input1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                oldPrice: Number(
                  StringIsNumber(obj.oldPrice.toString(), e.target.value)
                ),
              })
            }
            value={obj.oldPrice.toString()}
            title="oldPrice"
          />
          <Input
            className={st.create__input1}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                count: Number(
                  StringIsNumber(obj.count.toString(), e.target.value)
                ),
              })
            }
            value={obj.count.toString()}
            title="count"
          />
        </div>
        <div className={st.create__menus_and_checkbox}>
          <DropdownMenu
            values={ParseToDropdown(brands)}
            current={curBrand}
            setCurrent={setCurBrand}
            placeholder={"Выберите бренд*"}
            inputPlaceholder="Поиск бренда"
            change={changeBrand}
          />
          <DropdownMenu
            values={ParseToDropdown(categorys)}
            current={curCategory}
            setCurrent={setCurCategory}
            placeholder={"Выберите категорию*"}
            inputPlaceholder="Поиск категории"
            change={changeCategory}
          />
          <Checkbox
            title="hot"
            checked={obj.marcers.hot}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                marcers: { ...obj.marcers, hot: !obj.marcers.hot },
              })
            }
          />
          <Checkbox
            title="new"
            checked={obj.marcers.new}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                marcers: { ...obj.marcers, new: !obj.marcers.new },
              })
            }
          />
          <Checkbox
            title="promotion"
            checked={obj.marcers.promotion}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setObj({
                ...obj,
                marcers: { ...obj.marcers, promotion: !obj.marcers.promotion },
              })
            }
          />
        </div>
        <Textarea
          value={obj.description}
          onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
            setObj({ ...obj, description: e.target.value });
          }}
          title="description*"
        />
        <div className={st.images}>
          {currImage && <ImageContainer className={st.image} img={currImage} />}
          <ImageInput
            className={st.image}
            onChange={ChangeImage(obj, setObj)}
            data={obj.image}
          />
        </div>
      </ContainerTemplateForm>
    );
  }
);

export default TemplateForm;
