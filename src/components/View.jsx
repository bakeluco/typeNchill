import Navbar from "./Navbar";
import { useState, useEffect, useRef } from "react";

const link =
  "https://www.gutenberg.org/files/1342/1342-h/1342-h.htm#link2HCH0001";

import text from "../assets/PridePrejudice/1.js";

// const text = "Lorem ipsum dolor sit amet.";
const textSplit = text.split("");

const View = () => {
  const containerClasses =
    "fixed top-0 left-80 right-0 bg-gray-700 h-full  overflow-y-scroll";
  const textClasses =
    "mt-16 text-gray-300 py-4 px-8 m-0 transition duration-300 ease-in-out text-lg";
  const barClasses =
    "flex flex-row items-center justify-between fixed left-80 right-6 ml-6 bottom-2 rounded-lg shadow-lg bg-gray-600 px-2 h-12";
  const inputClasses =
    "font-semibold w-full bg-transparent outline-none ml-0 mr-auto text-gray-700 placeholder-gray-100 persitant-placeholder";

  const [currentInputKey, setCurrentInputKey] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [error, setError] = useState(false);

  const textRef = useRef(null);

  useEffect(() => {
    return () => {
      textRef.current && textRef.current.focus();
    };
  }, []);

  function handleKeyDown(event) {
    if (event.key == textSplit[currentCharIndex]) {
      setCurrentCharIndex(currentCharIndex + 1);
      setError(false);
    } else {
      setError(true);
    }
    setCurrentInputKey("");
  }

  function getColor(index, char) {
    // if (!currentInputKey) return;
    if (index < currentCharIndex) return "text-gray-600";
    // if (index === currentCharIndex)
    // console.log(index, char, "y", currentCharIndex, currentInputKey);
    // if (index == currentCharIndex && char != currentInputKey)
    // return "border-l-2 border-gray-400 text-red-400";
    if (index === currentCharIndex && error)
      return "text-red-500 border-l-2 border-yellow-500";
    if (index === currentCharIndex) return "border-l-2 border-yellow-500";
  }

  return (
    <div className={containerClasses}>
      <Navbar />
      <div className={textClasses}>
        {textSplit.map((char, index) => {
          return (
            <span key={index} className={getColor(index, char)}>
              {char}
            </span>
          );
        })}
      </div>
      <div className={barClasses}>
        <span className="material-icons text-yellow-500 mx-2">add</span>
        <input
          type="text"
          placeholder="Start typing here..."
          className={inputClasses}
          onKeyDown={handleKeyDown}
          value={currentInputKey}
          autoFocus
          onChange={(event) => setCurrentInputKey(event.target.value)}
        />
      </div>
    </div>
  );
};

// const InputBar = (props) => {

//   return (
//   );
// };

export default View;
