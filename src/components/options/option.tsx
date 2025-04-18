import React from "react";
import styles from "./option.module.scss";

interface OptionProps {
  isOpen: boolean;
}

const Option: React.FC<OptionProps> = ({ isOpen }) => {
  //Could use the context instead of the prop
  //const { isOpen } = useDropdown();

  return <>{isOpen && <div className={styles.option}></div>}</>;
};

export default Option;
