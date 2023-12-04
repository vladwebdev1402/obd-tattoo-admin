export const ChangeImage = <T>(obj: T, setObj: (obj: T) => void) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        const data = new FormData();
        if (e.target.files) {
          data.append("file", e.target.files[0]);
          setObj({ ...obj, image: data });
        } else setObj({ ...obj, image: data });
      };
}