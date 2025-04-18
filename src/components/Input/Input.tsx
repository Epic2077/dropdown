import React, { useState } from "react";
import styles from "./Input.module.scss";
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

const DropdownInput: React.FC = () => {
  // function to handle the dropdown input state
  const [isOpen, setIsOpen] = useState(false);

  // This function handles the click event outside the dropdown input field.
  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the dropdown input field
      if (!(event.target as HTMLElement).closest(`.${styles.input}`)) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document to handle clicks outside the dropdown input field
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  // This component is a placeholder for a dropdown input field.
  return (
    <div
      className={cn(styles.input, { [styles.active]: isOpen })}
      onClick={handleClick}
    >
      <input
        type="text"
        name="input-text"
        id="input-text"
        className={styles.input_text}
      />
      {isOpen === false ? <ChevronDown /> : <ChevronUp />}
    </div>
  );
};

export default DropdownInput;
