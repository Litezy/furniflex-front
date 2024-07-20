// src/context/SelectContext.js
import React, { createContext, useState, useContext } from 'react';

// Create the context outside of the component to avoid redefining it on every render
const SelectContext = createContext();

// Hook to use the context
export const useSelect = () => useContext(SelectContext);

export const SelectProvider = ({ children }) => {
  const [select, setSelect] = useState([]);
  const [login,setLogin] = useState(false)

  return (
    <SelectContext.Provider value={{ select, setSelect,login, setLogin }}>
      {children}
    </SelectContext.Provider>
  );
};

export default SelectProvider;
