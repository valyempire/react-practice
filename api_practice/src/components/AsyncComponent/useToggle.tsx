import { useState } from "react";

export const useToggle = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleInput = () => {
    setIsOpen((preState) => !preState);
  };

  return { isOpen, handleToggleInput };
};
