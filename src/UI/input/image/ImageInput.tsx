import React, { FC, useMemo } from "react";
import st from "./ImageInput.module.scss";
interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  data: FormData;
}
const ImageInput: FC<Props> = ({ className = "", data, ...props }) => {
  const files = useMemo(() => {
    return data.getAll("file");
  }, [data]);

  const checkFiles = useMemo(() => {
    return !files.includes("undefined") && files.length > 0;
  }, [data, files]);

  const imageUrl = useMemo(() => {
    if (checkFiles) {
      const url = URL.createObjectURL(files[0] as Blob);
      return url;
    }
    return "";
  }, [data]);

  const fileName = useMemo(() => {
    const file = data.get("file") as File;
    if (file) {
      return file.name;
    }
    return "";
  }, [data]);

  return (
    <div
      className={` ${st.container} ${checkFiles ? st.container_withImage : ""}`}
    >
      <div className={`${className} ${st.container__body}`}>
        <input type="file" {...props} />
        {imageUrl && <img src={imageUrl} alt="" />}
      </div>

      <div className={st.container__text}>
        {checkFiles ? fileName : "Загрузить изображение"}
      </div>
    </div>
  );
};

export default ImageInput;
