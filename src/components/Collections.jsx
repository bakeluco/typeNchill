import { useContext } from "react";
import { TextContext } from "../context/TextContext";
import COLLECTIONS from "../helpers/ImportTextHelper";

const Collections = () => {
  const collectionsClasses =
    "fixed top-0 left-0 h-screen m-0 w-80 ml-16 py-5 bg-gray-800";
  const titleClasses = "text-gray-400 ml-4 text-xl mb-4";

  return (
    <section className={collectionsClasses}>
      <h5 className={titleClasses}>📚 Collection 📚</h5>
      <Books />
    </section>
  );
};

export default Collections;

const Books = () => {
  const detailsClasses =
    "open:text-yellow-500 text-gray-500 transition ease-in-out delay-150 open:text-xl text-lg";
  const summaryClasses =
    "hover:text-white ml-5 font-semibold transition ease-in-out delay-100 cursor-pointer";
  const liClasses =
    "text-gray-500 hover:text-yellow-500 hover:text-base ml-10 leading-6 text-sm transition ease-in-out delay-100 cursor-pointer";
  const selectedLiClasses =
    "text-gray-500 hover:text-yellow-500 hover:text-base ml-10 leading-6 text-sm transition ease-in-out delay-100 cursor-pointer";

  const [, setText] = useContext(TextContext);

  const handleChapterOnClick = (collection, chapter) => {
    return setText(COLLECTIONS[collection][chapter].text.split(""));
  };

  return COLLECTIONS.map((collection, index) => (
    <details key={index} className={detailsClasses} open={true}>
      <summary className={summaryClasses}>{collection[0].title} 📖</summary>
      <ul>
        {collection.map((chapter, i) => (
          <li
            key={i}
            className={liClasses}
            onClick={() => handleChapterOnClick(index, i)}
          >
            {i != 0 && `# Chapter ${chapter.id}`}
          </li>
        ))}
      </ul>
    </details>
  ));
};
