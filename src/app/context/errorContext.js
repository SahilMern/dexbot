"use client"
import React, { createContext, useState } from 'react';

export const ErrorContext = createContext();

export const ErrorProvider = ({ children }) => {
  const [errorCount, setErrorCount] = useState(0);

  return (
    <ErrorContext.Provider value={{ errorCount, setErrorCount }}>
      {children}
    </ErrorContext.Provider>
  );
};
