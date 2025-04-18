import React, { useState } from "react";
import styles from "./option.module.scss";
import { Check, Plus, X } from "lucide-react";

interface OptionProps {
  isOpen: boolean;
}

const Option: React.FC<OptionProps> = ({ isOpen }) => {
  //Could use the context instead of prop
  //const { isOpen } = useDropdown();

  const [add, setAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");

  // on check click, read existing array, push new entry, save back
  const handleSave = () => {
    const stored = localStorage.getItem("options");
    const arr = stored ? (JSON.parse(stored) as string[]) : [];
    arr.push(inputValue);
    localStorage.setItem("options", JSON.stringify(arr));
    setInputValue("");
    setAdd(false);
  };

  return (
    <>
      {isOpen && (
        <div className={styles.option}>
          <div className={styles.addOption}>
            {add === false ? (
              <Plus className={styles.plus} onClick={() => setAdd(true)} />
            ) : (
              <div className={styles.input_row}>
                <input
                  type="text"
                  className={styles.activeOption}
                  placeholder="Add an option"
                  value={inputValue}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setInputValue(e.target.value)
                  }
                />
                <div className={styles.icons}>
                  <Check
                    onClick={() => {
                      handleSave();
                      setAdd(false);
                    }}
                  />
                  <X onClick={() => setAdd(false)} />
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Option;
