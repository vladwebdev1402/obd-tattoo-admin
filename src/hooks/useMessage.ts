import { useState } from "react";

export const useMessage = (
  condition: () => boolean,
  successfulCallback: () => void,
  successfulMsg: string,
  failedMsg: string
) => {
  const [message, setMessage] = useState("");

  return {
    func: () => {
      if (condition()) {
        successfulCallback();
        setMessage(successfulMsg);
      } else {
        setMessage(failedMsg);
      }
      setTimeout(() => {
        setMessage("")
      }, 3000)
    },
    message,
  };
};
