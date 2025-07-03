"use client";

import { createContext, useState, useContext } from "react";

// Create the context
const GlobalStateContext = createContext();

// Create a Provider component
export function GlobalStateProvider({ children }) {
  const [cartCount, setCartCount] = useState(0);
  const [category, setCategory] = useState("");

  return (
    <GlobalStateContext.Provider value={{ cartCount, setCartCount,
                                          category, setCategory }}>
      {children}
    </GlobalStateContext.Provider>
  );
}

// Custom hook for easy access
export function useGlobalState() {
  return useContext(GlobalStateContext);
}

