import { useState } from "react";

const PRIDE_AND_PREJUDICE = ["Chapter 1", "Chapter 2", "Chapter 3"];

const CUSTOM_TEXTS = ["Text 1", "Text 2"];

const Collections = () => {
  const collectionsClasses =
    // "fixed top-0 left-0 right-80 w-80 m-0 ml-16 bg-gray-800 shadow-lg h-screen";
    "fixed top-0 left-0 m-0 w-80 ml-16 bg-gray-800 shadow-lg h-screen";
  const collectionsContainer =
    "flex flex-col items-center justify-start p-1 m-0";

  return (
    <div className={collectionsClasses}>
      <Title title="Collections" />
      <div className={collectionsContainer}>
        <Dropdown
          bookTitle="Pride & Prejudice"
          chapters={PRIDE_AND_PREJUDICE}
        />
      </div>
    </div>
  );
};

export default Collections;

const Title = ({ title }) => {
  const titleBoxClasses = "flex items-center justify-center h-16 m-0 p-0";
  const titleTextClasses =
    "text-lg tracking-wider font-bold text-gray-400 mr-auto ml-4 my-auto align-middle";

  return (
    <div className={titleBoxClasses}>
      <h5 className={titleTextClasses}>{title}</h5>
    </div>
  );
};

const Dropdown = ({ bookTitle, chapters }) => {
  const [expanded, setExpanded] = useState(true);
  const dropdownContainerClasses =
    "m-0 w-full px-2 pb-2 transition duration-300 ease-in-out";
  //   const dropdownHeader = "flex flex-col mx-0 text-gray-500 cursor-pointer ";
  const dropdownHeader = "flex flex-row mx-0 text-gray-500 cursor-pointer ";

  return (
    <div className={dropdownContainerClasses}>
      <div onClick={() => setExpanded(!expanded)} className={dropdownHeader}>
        <Chevron expanded={expanded} />
        <DropdownTitle bookTitle={bookTitle} expanded={expanded} />
      </div>
      {expanded &&
        chapters.map((chapter, index) => (
          <ChapterName key={index} chapter={chapter} />
        ))}
    </div>
  );
};

const Chevron = ({ expanded }) => {
  const chevronClasses =
    "material-icons text-accent text-opacity-80 my-auto mr-1";

  return expanded ? (
    <span className={chevronClasses}>expand_more</span>
  ) : (
    <span className={chevronClasses}>chevron_right</span>
  );
};

const DropdownTitle = ({ bookTitle, expanded }) => {
  const selectedClasses = "text-yellow-500 text-opacity-90 text-lg font-bold";
  const unselectedClasses =
    "text-gray-500  text-opacity-90 text-lg font-semibold cursor-default";

  return expanded ? (
    <h5 className={selectedClasses}>{bookTitle}</h5>
  ) : (
    <h5 className={unselectedClasses}>{bookTitle}</h5>
  );
};

const ChapterName = ({ chapter }) => {
  const nameContainer =
    "flex flex-row items-center justify-evenly mt-1 mr-auto ml-2 transition duration-300 ease-in-out cursor-pointer";
  const nameTextClasses =
    "text-gray-500 font-semibold tracking-wide mr-auto transition duration-300 ease-in-out hover:text-yellow-500 cursor-pointer";

  return (
    <div className={nameContainer}>
      <span className="material-icons text-gray-400">notes</span>
      <h5 className={nameTextClasses}>{chapter}</h5>
    </div>
  );
};
