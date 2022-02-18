import Navbar from "./Navbar";
import InputBar from "./InputBar";
import { useState, useEffect, useRef, useContext } from "react";
import { TextContext } from "../context/TextContext";

const View = () => {
  const containerClasses =
    "fixed top-0 left-80 right-0 bg-gray-700 h-full overflow-y-scroll";
  const textClasses = "mt-16 text-gray-300 py-4 px-8 m-0 text-lg";

  const [text] = useContext(TextContext);
  const [currentInputKey, setCurrentInputKey] = useState("");
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [error, setError] = useState(false);
  // const [charClass, setCharClass] = useState(
  //   text.map((c, index) => ({ index, class: "" }))
  // );
  const [charClass, setCharClass] = useState(new Array(text.length));
  // console.log(charClass, text);

  // useEffect(
  //   () =>
  //     setCharClass((c) => [
  //       ...c.slice(0, 10),
  //       "text-red-500",
  //       ...c.slice(11, c.length),
  //     ]),
  //   []
  // );

  // console.log(charClass);

  useEffect(() => {
    localStorage.getItem("currentCharIndex") &&
      setCurrentCharIndex(parseInt(localStorage.getItem("currentCharIndex")));
    getColor(currentCharIndex);
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
    if (event.key == text[currentCharIndex]) {
      setCurrentCharIndex(currentCharIndex + 1);
      localStorage.setItem("currentCharIndex", currentCharIndex + 1);
      setError(false);
    } else {
      setError(true);
    }
    getColor(currentCharIndex);
    setCurrentInputKey("");
  }

  const handleCharOnClick = (index) => {
    setCurrentCharIndex(index);
    localStorage.setItem("currentCharIndex", index);
    getColor(index);
    setFocus();
  };

  // const getColor = (index) => {
  //   console.log("loop");
  //   if (index < currentCharIndex) return "text-gray-600";
  //   if (index === currentCharIndex && error)
  //     return "text-red-500 border-l-2 border-yellow-500";
  //   if (index === currentCharIndex) return "border-l-2 border-yellow-500";
  // };

  // function getColor(index) {
  //   console.log("get color");
  //   if (index < currentCharIndex) return setCharClass("text-gray-600");
  //   if (index === currentCharIndex && error)
  //     return setCharClass("text-red-500 border-l-2 border-yellow-500");
  //   if (index === currentCharIndex)
  //     return setCharClass("border-l-2 border-yellow-500");
  // }

  // const getColor = (index) => {
  //   if (index < currentCharIndex)
  //     return setCharClass((c) => [
  //       ...c.slice(0, index),
  //       "text-gray-600",
  //       ...c.slice(index + 1, c.length),
  //     ]);

  //   // return setCharClass("text-gray-600");
  //   if (index === currentCharIndex && error)
  //     return setCharClass((c) => [
  //       ...c.slice(0, index),
  //       "text-red-500 border-l-2 border-yellow-500",
  //       ...c.slice(index + 1, c.length),
  //     ]);
  //   // return setCharClass("text-red-500 border-l-2 border-yellow-500");
  //   if (index === currentCharIndex)
  //     return setCharClass((c) => [
  //       ...c.slice(0, index),
  //       "border-l-2 border-yellow-500",
  //       ...c.slice(index + 1, c.length),
  //     ]);
  //   // return setCharClass("border-l-2 border-yellow-500");
  // };

  const getColor = (index) => {
    if (index == 0 || index == text.length) return;
    let newClassesArr;
    let beforeIndex = new Array(index).fill("text-gray-600");
    setCharClass([...beforeIndex]);
    return console.log(beforeIndex);

    if (index < currentCharIndex)
      return setCharClass((c) => [
        ...c.slice(0, index),
        "text-gray-600",
        ...c.slice(index + 1, c.length),
      ]);
    if (index === currentCharIndex && error)
      return setCharClass((c) => [
        ...c.slice(0, index),
        "text-red-500 border-l-2 border-yellow-500",
        ...c.slice(index + 1, c.length),
      ]);
    if (index === currentCharIndex)
      return setCharClass((c) => [
        ...c.slice(0, index),
        "border-l-2 border-yellow-500",
        ...c.slice(index + 1, c.length),
      ]);
  };

  return (
    <div onClick={() => setFocus()} className={containerClasses}>
      <Navbar />
      <div className={textClasses}>
        {text.map((char, index) => {
          return (
            <span
              key={index}
              onClick={() => handleCharOnClick(index)}
              className={charClass[index]}
              // className={getColor(index)}
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
