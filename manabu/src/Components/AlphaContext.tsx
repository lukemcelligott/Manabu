import React, { createContext, useContext, useState, ReactNode } from 'react';

// Define the type for the context value
interface SelectedOptionContextType {
  selectedOption: string;
  setSelectedOption: (option: string) => void;
}

// Create the context with initial value null
const SelectedOptionContext = createContext<SelectedOptionContextType | null>(null);

// Custom hook to use the selected option context
export const useSelectedOption = (): SelectedOptionContextType => {
  const context = useContext(SelectedOptionContext);
  if (!context) {
    throw new Error('useSelectedOption must be used within a SelectedOptionProvider');
  }
  return context;
};

// Provider component to wrap around the application
export const SelectedOptionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [selectedOption, setSelectedOption] = useState('hiragana');

  // Provide the context value to the children components
  return (
    <SelectedOptionContext.Provider value={{ selectedOption, setSelectedOption }}>
      {children}
    </SelectedOptionContext.Provider>
  );
};

