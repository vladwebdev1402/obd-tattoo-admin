import React, { FC, useEffect, useRef, useState } from "react";
import st from "./DropdownMenu.module.scss";
import IDropdownValue from "@/types/IDropdownValue";
import { useClose } from "@/hooks/useClose";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  values: IDropdownValue[];
  current: IDropdownValue | null;
  setCurrent: (value: IDropdownValue) => void;
  placeholder: string;
  inputPlaceholder: string;
  onOpen?: (value: boolean) => void;
  change?: (value: string) => void;
}

const DropdownMenu: FC<Props> = ({
  current,
  values,
  setCurrent,
  className = "",
  placeholder = "",
  inputPlaceholder = "",
  onOpen = () => {},
  change = () => {},
  title,
  ...props
}) => {
  const ref = useRef(null);
  const [name, setName] = useState(current?.name ?? "");
  const { open, setOpen } = useClose(ref);

  const getFilter = (obj: IDropdownValue) => {
    return (
      obj.name.toLowerCase().includes(name) ||
      obj.value.toLowerCase().includes(name) ||
      false
    );
  };

  useEffect(() => {
    onOpen(open);
  }, [open]);

  return (
    <div
      className={`${st.menu} ${className} ${open ? st.menu_open : ""}`}
      ref={ref}
      {...props}
    >
      {title ? <div className={st.menu__title}>{title}</div> : ""}
      <div
        className={st.menu__head}
        onClick={() => {
          setName("");
          setOpen(!open);
        }}
      >
        {open && (
          <input
            onClick={(e: React.MouseEvent<HTMLInputElement>) =>
              e.stopPropagation()
            }
            className={st.menu__input}
            placeholder={
              current && current.name ? current.name : inputPlaceholder
            }
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        )}
        {!open && (
          <>
            {current === null || current.name == ""
              ? placeholder
              : current.name}
          </>
        )}
      </div>

      {open && (
        <div className={st.menu__body}>
          {values.length === 0 && (
            <div className={st.menu__item}>Список пуст</div>
          )}
          {values
            .filter((v) => getFilter(v))
            .map((v) => (
              <div
                key={v.value}
                className={st.menu__item}
                onClick={() => {
                  setOpen(!open);
                  setCurrent(v);
                  change(v.value);
                }}
              >
                {v.name}
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;
