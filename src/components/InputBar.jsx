const InputBar = ({
  handleKeyDown,
  currentInputKey,
  setCurrentInputKey,
  textRef,
  setCurrentCharIndex,
}) => {
  const barClasses =
    "flex flex-row items-center justify-between fixed left-80 right-6 ml-6 bottom-2 rounded-lg shadow-lg bg-gray-600 px-2 h-12";
  const inputClasses =
    "font-semibold w-full bg-transparent outline-none ml-0 mr-auto text-red-700 placeholder-gray-100 persitant-placeholder";

  function handleClickRestart() {
    // console.warn("Restarting...");
    setCurrentCharIndex(0);
    localStorage.getItem("currentCharIndex") &&
      localStorage.setItem("currentCharIndex", 0);
  }

  return (
    <div className={barClasses}>
      <span className="material-icons text-yellow-500 mx-2 ">add</span>
      <input
        type="text"
        placeholder="Start typing here..."
        className={inputClasses}
        onKeyDown={handleKeyDown}
        value={currentInputKey}
        ref={textRef}
        autoFocus
        onChange={(event) => setCurrentInputKey(event.target.value)}
      />
      <div className="group">
        <Tooltip text={"🔝 Restart text."} />
        <span
          onClick={handleClickRestart}
          className="material-icons text-yellow-500 mx-2 hover:text-white transition ease-in-out delay-150 hover:scale-125"
        >
          restart_alt
        </span>
      </div>
    </div>
  );
};

const Tooltip = ({ text }) => {
  const classes =
    "absolute w-auto p-2 m-4 min-w-max right-0 bottom-10 rounded-md shadow-md text-white bg-gray-900 text-xs font-bold transition-all duration-100 scale-0 origin-left group-hover:scale-100";

  return <span className={classes}>{text} </span>;
};

export default InputBar;
