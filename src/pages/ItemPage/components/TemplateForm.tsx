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
import IDropdownValue from "@/types/IDropdownValue";
import { observer } from "mobx-react-lite";
import Checkbox from "@/UI/input/checkbox/Checkbox";
import ImageContainer from "@/UI/ImageContainer/ImageContainer";
import ImageInput from "@/UI/input/image/ImageInput";
import { ChangeImage } from "@/UI/input/image/ChangeImage";
import Message from "@/UI/Message/Message";

const TemplateForm: FC<ITemplateFormProps<IItemImage>> = observer(
  ({ obj, setObj, currImage = "", message }) => {
    const [brands, setBrands] = useState<IDropdownValue[]>([]);
    const [categorys, setCategorys] = useState<IDropdownValue[]>([]);
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
      setBrands(ParseToDropdown(BrandStore.data));
      setCategorys(ParseToDropdown(IdNameStore.data));
    }, [IdNameStore.data, BrandStore.data]);

    useEffect(() => {
      setCurBrand(
        brands.filter((b) => b.value === obj.brand)[0] ?? {
          name: "",
          value: "",
        }
      );
      setCurCategory(
        categorys.filter((c) => c.value === obj.category)[0] ?? {
          name: "",
          value: "",
        }
      );
    }, [categorys, brands, obj]);

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
            values={brands}
            current={curBrand}
            setCurrent={setCurBrand}
            placeholder={"Выберите бренд"}
            title={"brand*"}
            inputPlaceholder="Поиск бренда"
            change={changeBrand}
          />
          <DropdownMenu
            values={categorys}
            current={curCategory}
            setCurrent={setCurCategory}
            placeholder={"Выберите категорию"}
            title={"category*"}
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
        <Message>{message}</Message>
      </ContainerTemplateForm>
    );
  }
);

export default TemplateForm;
