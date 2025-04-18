import React from "react";
import styles from "./OptionItems.module.scss";
import { cn } from "../../lib/utils";
import { Check } from "lucide-react";

interface ItemsProp {
  active: boolean;
  item: string;
  onClick?: () => void;
}

const Items: React.FC<ItemsProp> = ({ active, item, onClick }) => {
  return (
    <div
      className={cn(styles.items, { [styles.itemsActive]: active })}
      onClick={onClick}
    >
      {active === false ? (
        <p>{item}</p>
      ) : (
        <div className={styles.activeItem}>
          <p>{item}</p>
          <Check className={styles.check} />
        </div>
      )}
    </div>
  );
};

export default Items;
