import React, { createContext, useContext, useState } from "react";

interface EstimateModalContextType {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
}

const EstimateModalContext = createContext<EstimateModalContextType | undefined>(undefined);

export const EstimateModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <EstimateModalContext.Provider value={{ isOpen, openModal, closeModal }}>
      {children}
    </EstimateModalContext.Provider>
  );
};

export const useEstimateModal = () => {
  const context = useContext(EstimateModalContext);
  if (!context) {
    throw new Error("useEstimateModal must be used within an EstimateModalProvider");
  }
  return context;
};
