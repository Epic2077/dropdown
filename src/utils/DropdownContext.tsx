import React, { createContext, useState, useContext, ReactNode } from "react";

// This context is used to manage the state of the dropdown input field
interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

// This provider component wraps the application and provides the dropdown state to its children
export const DropdownProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </DropdownContext.Provider>
  );
};

// This hook allows components to access the dropdown state
export const useDropdown = () => {
  const ctx = useContext(DropdownContext);
  if (!ctx) {
    throw new Error("useDropdown must be used within a DropdownProvider");
  }
  return ctx;
};
