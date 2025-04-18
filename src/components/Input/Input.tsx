import React, { useEffect, useRef, useState } from "react";
import inputStyles from "./Input.module.scss";
import optionStyles from "../options/option.module.scss";
// Importing styles for the dropdown input and options
const styles = { ...inputStyles, ...optionStyles };
import { cn } from "../../lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";
import Option from "../options/Option";

const DropdownInput: React.FC = () => {
  // function to handle the dropdown input state
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // If I wanted to use the context provider, I would use this line instead of the above line
  // const { isOpen, setIsOpen } = useDropdown();

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // 2) if click is *anywhere* inside the wrapper, bail out
      if (wrapperRef.current?.contains(e.target as Node)) return;
      // otherwise close
      setIsOpen(false);
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // This component is the dropdown input field.
  return (
    <div className="col" ref={wrapperRef}>
      <div
        className={cn(styles.input, { [styles.active]: isOpen })}
        onClick={() => setIsOpen(true)}
      >
        <input
          type="text"
          name="input-text"
          id="input-text"
          className={styles.input_text}
          value={searchTerm}
          placeholder="Select an option"
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        {isOpen === false ? <ChevronDown /> : <ChevronUp />}
      </div>
      <Option isOpen={isOpen} searchTerm={searchTerm} />
    </div>
  );
};

export default DropdownInput;
