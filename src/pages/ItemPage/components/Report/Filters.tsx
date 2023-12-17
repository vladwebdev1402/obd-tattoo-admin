import { IItemParams } from "@/types/IItem";
import st from "./st.module.scss";
import React, { FC, useState, useEffect } from "react";
import DropdownMenu from "@/UI/DropdownMenu/DropdownMenu";
import IDropdownValue from "@/types/IDropdownValue";
import { observer } from "mobx-react-lite";
import { ParseToDropdown } from "@/utils/ParseToDropdown";
import BrandStore from "@/store/BrandStore/BrandStore";
import IdNameStore from "@/store/IdNameStore";
import Checkbox from "@/UI/input/checkbox/Checkbox";
interface Props {
  filters: IItemParams;
  setFilters: (value: IItemParams) => void;
}
const Filters: FC<Props> = observer(({ filters, setFilters }) => {
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
    setFilters({ ...filters, brand: _id });
  };

  const changeCategory = (_id: string) => {
    setFilters({ ...filters, category: _id });
  };

  useEffect(() => {
    setBrands(ParseToDropdown(BrandStore.data));
    setCategorys(ParseToDropdown(IdNameStore.data));
  }, [IdNameStore.data, BrandStore.data]);

  return (
    <form>
      <div className={st.form__header}>Фильтры для запроса</div>
      <div className={st.form__drop}>
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
      </div>
      <div className={st.form__marcers}>
        <Checkbox
          title="Хиты"
          checked={filters.hot || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilters({
              ...filters,
              hot: !filters.hot,
            })
          }
        />
        <Checkbox
          title="Новинки"
          checked={filters.news || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilters({
              ...filters,
              news: !filters.news,
            })
          }
        />
        <Checkbox
          title="Акционные"
          checked={filters.promotion || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilters({
              ...filters,
              promotion: !filters.promotion,
            })
          }
        />
        <Checkbox
          title="Отсутствующие товары"
          checked={filters.no || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilters({
              ...filters,
              no: !filters.no,
            })
          }
        />
        <Checkbox
          title="Скидочные"
          checked={filters.discount || false}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setFilters({
              ...filters,
              discount: !filters.discount,
            })
          }
        />
      </div>
    </form>
  );
});

export default Filters;
