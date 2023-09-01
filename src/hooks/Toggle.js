import { useState } from "react";

export const useToggle = (defaultValue) => {
  const [show, setShow] = useState(defaultValue);
  const toggleShow = () => setShow((prevState) => !prevState);

  return [show, toggleShow];
};
