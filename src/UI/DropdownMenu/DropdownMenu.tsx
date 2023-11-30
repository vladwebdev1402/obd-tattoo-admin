import React, { FC, useEffect, useRef, useState } from "react";
import st from "./DropdownMenu.module.scss";
import IDropdownValue from "@/types/IDropdownValue";
import { useClose } from "@/hooks/useClose";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  values: IDropdownValue[];
  current: IDropdownValue | null;
  setCurrent: (value: IDropdownValue) => void;
  placeholder?: string;
  onOpen?: (value: boolean) => void;
}

const DropdownMenu: FC<Props> = ({
  current,
  values,
  setCurrent,
  className = "",
  placeholder = "",
  onOpen = () => {},
  title,
  ...props
}) => {
  const ref = useRef(null);
  const [name, setName] = useState(current?.name ?? "");
  const { open, setOpen } = useClose(ref);

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
            placeholder={current?.name ?? "Поиск города"}
            value={name}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setName(e.target.value)
            }
          />
        )}
        {!open && <>{current === null ? placeholder : current.name}</>}
      </div>

      {open && (
        <div className={st.menu__body}>
          {values
            .filter((v) => v.name.toLowerCase().includes(name.toLowerCase()))
            .map((v) => (
              <div
                key={v.value}
                className={st.menu__item}
                onClick={() => {
                  setOpen(!open);
                  setCurrent(v);
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
