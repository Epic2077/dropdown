import React, { useState } from "react";
import inputStyles from "./Input.module.scss";
import optionStyles from "../options/option.module.scss";
// Importing styles for the dropdown input and options
const styles = { ...inputStyles, ...optionStyles };
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Option from "../options/option";

const DropdownInput: React.FC = () => {
  // function to handle the dropdown input state
  const [isOpen, setIsOpen] = useState(false);

  // If I wanted to use the context provider, I would use this line instead of the above line
  // const { isOpen, setIsOpen } = useDropdown();

  React.useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      // Check if the click is outside the dropdown input field
      if (
        !(event.target as HTMLElement).closest(`.${styles.input_text}`) &&
        !(event.target as HTMLElement).closest(`.${styles.option}`)
      ) {
        setIsOpen(false);
      }
    };

    // Add event listener to the document to handle clicks outside the dropdown input field
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [setIsOpen]);

  const handleClick = () => {
    setIsOpen(true);
  };

  // This component is the dropdown input field.
  return (
    <div className="col">
      <div
        className={cn(styles.input, { [styles.active]: isOpen })}
        onClick={handleClick}
      >
        <input
          type="text"
          name="input-text"
          id="input-text"
          className={styles.input_text}
          placeholder="Select an option"
        />
        {isOpen === false ? <ChevronDown /> : <ChevronUp />}
      </div>
      <Option isOpen={isOpen} />
    </div>
  );
};

export default DropdownInput;
