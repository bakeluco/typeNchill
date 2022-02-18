import { useState, createContext } from "react";
import COLLECTIONS from "../helpers/ImportTextHelper.js";

export const TextContext = createContext(null);

export const TextContextProvider = ({ children }) => {
  const defaultText = COLLECTIONS[2][1].text.split("");
  const [text, setText] = useState(defaultText);

  // <TextContext.Provider value={{ text, setText }}>
  return (
    <TextContext.Provider value={useState(defaultText)}>
      {children}
    </TextContext.Provider>
  );
};
