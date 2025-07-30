import { useState } from "react";

export function usePasswordToggle() {
  const [visible, setVisible] = useState(false);

  const inputType = visible ? "text" : "password";

  const toggleVisibility = () => {
    setVisible((prevVisible) => !prevVisible);
  };

  return [inputType, toggleVisibility] as const;
}
