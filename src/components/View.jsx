import Navbar from "./Navbar";
import InputBar from "./InputBar";
import { useState, useEffect, useRef } from "react";

const link =
  "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm#link2HCH0001";

import text from "../assets/PridePrejudice/1.js";

// const text = "Lorem ipsum dolor sit amet.";
const textSplit = text.split("");

const View = () => {
  const containerClasses =
    "fixed top-0 left-80 right-0 bg-gray-700 h-full overflow-y-scroll";
  const textClasses =
    // "mt-16 text-gray-300 py-4 px-8 m-0 transition duration-300 ease-in-out text-lg";
    "mt-16 text-gray-300 py-4 px-8 m-0 text-lg";

  const [currentInputKey, setCurrentInputKey] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [error, setError] = useState(false);

  useEffect(() => {
    localStorage.getItem("currentCharIndex") &&
      setCurrentCharIndex(parseInt(localStorage.getItem("currentCharIndex")));
  }, []);

  const textRef = useRef(null);

  const setFocus = () => {
    textRef.current && textRef.current.focus();
  };

  function handleKeyDown(event) {
    if (event.key == "Backspace" && currentCharIndex > 0) {
      setCurrentCharIndex(currentCharIndex - 1);
      localStorage.setItem("currentCharIndex", currentCharIndex - 1);
      setError(false);
    }
    if (event.key == textSplit[currentCharIndex]) {
      setCurrentCharIndex(currentCharIndex + 1);
      localStorage.setItem("currentCharIndex", currentCharIndex + 1);
      setError(false);
    } else {
      setError(true);
    }
    setCurrentInputKey("");
  }

  const handleCharOnClick = (index) => {
    console.log(index);
    setCurrentCharIndex(index);
    localStorage.setItem("currentCharIndex", index);
    setFocus();
  };

  const getColor = (index, char) => {
    // if (!currentInputKey) return;
    if (index < currentCharIndex) return "text-gray-600";
    // if (index === currentCharIndex)
    // console.log(index, char, "y", currentCharIndex, currentInputKey);
    // if (index == currentCharIndex && char != currentInputKey)
    // return "border-l-2 border-gray-400 text-red-400";
    if (index === currentCharIndex && error)
      return "text-red-500 border-l-2 border-yellow-500";
    if (index === currentCharIndex) return "border-l-2 border-yellow-500";
  };

  return (
    <div onClick={setFocus()} className={containerClasses}>
      <Navbar />
      <div className={textClasses}>
        {textSplit.map((char, index) => {
          return (
            <span
              key={index}
              onClick={() => handleCharOnClick(index)}
              className={getColor(index, char)}
            >
              {char}
            </span>
          );
        })}
      </div>
      <InputBar
        handleKeyDown={handleKeyDown}
        currentInputKey={currentInputKey}
        setCurrentInputKey={setCurrentInputKey}
        textRef={textRef}
        setCurrentCharIndex={setCurrentCharIndex}
      />
    </div>
  );
};

export default View;
