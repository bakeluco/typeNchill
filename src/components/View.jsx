import Navbar from "./Navbar";
// import { BsPlusCircleFill } from 'react-icons/bs';
import { useState, useEffect } from "react";

const text =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet accusantium impedit similique sapiente, quod laborum quo ad vel incidunt dolore? Autem error facere omnis magni, deserunt ullam amet nulla numquam minus dolorum cum, fuga dignissimos corporis quae quam sequi nesciunt optio quisquam neque mollitia doloribus, culpa libero. Adipisci voluptatibus atque labore inventore quo voluptatem, temporibus nisi perspiciatis ex ipsum nobis eos, distinctio nostrum. Consequatur, suscipit dolorem. Officiis, repudiandae eligendi voluptatem accusamus sit sequi tempore, vero pariatur qui saepe amet earum a voluptatibus hic ea ipsa aut cum sunt sed. Facere maiores in neque nesciunt corrupti, dolorum pariatur architecto expedita, nulla commodi vitae vel! Natus dolor recusandae consequatur eius? Totam, perspiciatis ad sint nisi, ex alias consectetur quos officiis ducimus voluptates optio distinctio autem vero dignissimos, quo deleniti. Eius, repudiandae? Architecto harum et repellat odit! Natus illum quae eveniet doloribus error repudiandae corrupti esse blanditiis nemo! Numquam laborum sunt incidunt ullam provident et sit nemo, corporis doloremque. Dolore at, eveniet labore sed aperiam hic impedit saepe! Ab exercitationem totam fugiat, vitae beatae natus, voluptatem recusandae minima perspiciatis obcaecati distinctio iusto illo? Sunt fugit numquam ut est voluptatem unde soluta, reprehenderit ea ipsa autem dolorum distinctio, fugiat molestiae! Cumque possimus impedit esse?";
const textSplit = text.split("");

const View = () => {
  const [userInput, setUserInput] = useState("");

  const containerClasses =
    "fixed top-0 left-80 right-0 bg-gray-700 h-full  overflow-y-scroll";
  const textClasses = "mt-16 text-gray-300 py-4 px-8 m-0 cursor-pointer";

  return (
    <div className={containerClasses}>
      <Navbar />
      <div className={textClasses}>
        {textSplit.map((char, index) => {
          return <span key={index}>{char}</span>;
        })}
      </div>
      <InputBar />
    </div>
  );
};

const InputBar = () => {
  const barClasses =
    "flex flex-row items-center justify-between fixed left-80 right-6 ml-6 bottom-2 rounded-lg shadow-lg bg-gray-600 px-2 h-12";
  const inputClasses =
    "font-semibold w-full bg-transparent outline-none ml-0 mr-auto text-gray-100 placeholder-gray-100 cursor-text";

  const [currentInput, setCurrentInput] = useState("");
  const [currentChar, setCurrentChar] = useState(0);

  function handleKeyDown(event) {
    if (event.key == textSplit[currentChar]) {
      console.log(event.key);
      setCurrentChar(currentChar + 1);
      setCurrentInput("");
    }
  }

  return (
    <div className={barClasses}>
      <span className="material-icons text-green-500 mx-2">add</span>
      <input
        type="text"
        placeholder="Start typing here..."
        className={inputClasses}
        onKeyDown={handleKeyDown}
        value={currentInput}
        onChange={(event) => setCurrentInput(event.target.value)}
      />
    </div>
  );
};

export default View;
