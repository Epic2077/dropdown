import React, { useEffect, useState } from "react";
import styles from "./option.module.scss";
import { Check, Plus, X } from "lucide-react";
import Items from "../optionItems/OptionItems";

interface OptionProps {
  isOpen: boolean;
  searchTerm: string;
}

const Option: React.FC<OptionProps> = ({ isOpen, searchTerm }) => {
  //Could use the context instead of prop
  //const { isOpen } = useDropdown();

  const [add, setAdd] = useState(false);
  const [inputValue, setInputValue] = useState("");
  // holds the currently activated item
  const [activeItems, setActiveItems] = useState<string[]>([]);
  const [items, setItems] = useState<string[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem("options");
    if (stored) setItems(JSON.parse(stored));
  }, []);

  // on check click, read existing array, push new entry, save back
  const handleSave = () => {
    const newArr = [...items, inputValue];
    localStorage.setItem("options", JSON.stringify(newArr));
    setInputValue("");
    setAdd(false);
    setItems(newArr);
  };

  const visible = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                    }}
                  />
                  <X onClick={() => setAdd(false)} />
                </div>
              </div>
            )}
          </div>
          <div className={styles.line}></div>

          {/* render each saved option */}
          {visible.map((item) => (
            <Items
              key={item}
              item={item}
              active={activeItems.includes(item)}
              onClick={() => {
                setActiveItems((prev) =>
                  prev.includes(item)
                    ? prev.filter((i) => i !== item)
                    : [...prev, item]
                );
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};

export default Option;
